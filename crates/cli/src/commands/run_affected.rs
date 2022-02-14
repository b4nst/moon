use clap::ArgEnum;
use moon_project::TouchedFilePaths;
use moon_workspace::{DepGraph, TaskRunner, TouchedFiles, Workspace};
use std::collections::HashSet;
// use std::fs;
use std::io;

#[derive(ArgEnum, Clone, Debug)]
pub enum RunStatus {
    Added,
    All,
    Deleted,
    Modified,
    Staged,
    Unstaged,
    Untracked,
}

impl Default for RunStatus {
    fn default() -> Self {
        RunStatus::All
    }
}

// TODO: Filter touched files based on their last modified time
fn get_touched_files(
    workspace: &Workspace,
    touched_files: TouchedFiles,
    status: RunStatus,
) -> io::Result<TouchedFilePaths> {
    let mut touched = HashSet::new();
    let files = match status {
        RunStatus::Added => touched_files.added,
        RunStatus::All => touched_files.all,
        RunStatus::Deleted => touched_files.deleted,
        RunStatus::Modified => touched_files.modified,
        RunStatus::Staged => touched_files.staged,
        RunStatus::Unstaged => touched_files.unstaged,
        RunStatus::Untracked => touched_files.untracked,
    };

    for file in &files {
        let path = workspace.root.join(file);
        // let meta = fs::metadata(&path)?;

        // if let Ok(time) = meta.modified() {
        //     // TODO needs cache impl
        // } else {
        //     // Unable to get last modified time, so assume affected
        //     affected.insert(path);
        // }

        touched.insert(path);
    }

    Ok(touched)
}

pub async fn run_affected(
    target: &str,
    status: &Option<RunStatus>,
) -> Result<(), Box<dyn std::error::Error>> {
    let workspace = Workspace::load().await?;
    let vcs = workspace.detect_vcs();

    // Gather files that have been touched in the working tree
    let touched_files = get_touched_files(
        &workspace,
        vcs.get_touched_files().await?,
        status.clone().unwrap_or_default(),
    )?;

    // Generate a dependency graph for all the targets that need to be ran
    let mut dep_graph = DepGraph::default();
    let is_affected =
        dep_graph.run_target_if_touched(target, &touched_files, &workspace.projects)?;

    if is_affected.is_none() {
        println!("TODO: target not affected");

        return Ok(());
    }

    // Process all tasks in the graph
    TaskRunner::new(workspace)
        .set_primary_target(target)
        .run(dep_graph)
        .await?;

    Ok(())
}