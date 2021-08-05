---
sidebar_position: 2
---

# Plugin System

GitDocumentDB extends its functions with plugins. The plugin adds a new feature to GitDocumentDB Class or changes the way to sync and merge repositories.

## [git-documentdb-plugin-remote-nodegit](https://github.com/sosuisen/git-documentdb-plugin-remote-nodegit)

This plugin is a NodeGit remote engine. It supports an SSH connection that isomorphic-git does not have.

### Compare between isomorphic-git (default)) and NodeGit
GitDocumentDB connects to a remote repository by a remote engine that can fetch, push and clone a Git repository.

- The default remote engine is isomorphic-git. It is browser compatible, and integrating GitDocumentDB into your Electron app is easier because it is a pure TypeScript Git library. 
  Available Authentication methods are OAuth and a personal access token.
  
- GitDocumentDB can use NodeGit remote engine instead of isomorphic-git.
 SSH connection to a remote Git repository is available because it makes most of the native environment by using the native module (libgit2).
 
### Usage

Load plugin before creating an instance of GitDocumentDB Class.
Set connection.engine to 'nodegit'.
```
GitDocumentDB.plugin(require('git-documentdb-plugin-remote-nodegit'));

const gitDDB = new GitDocumentDB({
  dbName: 'foo',
});
await gitDDB.open();

const option: RemoteOptions = {
  remoteUrl: 'your remote repository',
  connection: { 
      type: 'ssh',
      engine: 'nodegit'
      privateKeyPath: '/foo/bar/baz.key',
      publicKeyPath:  '/foo/bar/baz.pub',
      passPhrase: '',
  },
};
const sync= await gitDDB.sync(option);