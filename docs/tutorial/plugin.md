---
sidebar_position: 7
---

# Plugin

GitDocumentDB extends its functions with [Plugin System](../guide/plugin).. A plugin adds a new feature to GitDocumentDB Class or changes the way to sync and merge repositories.

## git-documentdb-plugin-remote-nodegit

This tutorial describes 'git-documentdb-plugin-remote-nodegit' plugin.
It is a NodeGit remote engine. It supports SSH keys and [PATs](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) for authentication to GitHub.

### Install plugin

```typescript
npm i git-documentdb-plugin-remote-nodegit
```
Load NodeGit remote engine plugin before creating a GitDocumentDB instance.

```typescript
GitDocumentDB.plugin(require('git-documentdb-plugin-remote-nodegit'));

// The plugin is loaded in the constructor.
const gitDDB = new GitDocumentDB({
   dbName: 'db_with_plugin', // Input your db name
});
await gitDDB.open();
```
Now you can select 'nodegit' engine to connect to a remote repository.

```typescript
  const remoteOptions: RemoteOptions = {
    remoteUrl: github_repository, // Your GitHub repository.
    connection: { 
      live: true,
      type: 'github',
      personalAccessToken: your_github_personal_access_token, // Your PATs.
      engine: 'nodegit', // If omitted, the default is 'isomorphic-git'.
    },
  };
  await gitDDB.sync(remoteOptions);
```
NodeGit plugin also allows SSH authentication type.
```typescript
  const remoteOptionsSSH: RemoteOptions = {
    remoteUrl: github_repository, // Your GitHub repository.
    connection: { 
      live: true,
      type: 'ssh',
      privateKeyPath: '/foo/bar/baz.key', // Your private key.
      publicKeyPath:  '/foo/bar/baz.pub', // Your public key.
      passPhrase: '',
      engine: 'nodegit',      
    },
  };
  await gitDDB.sync(remoteOptionsSSH);
```

:::note

- You can find more examples in [examples/src/plugin.ts](https://github.com/sosuisen/git-documentdb/blob/main/examples/src/plugin.ts)

- You can find more about plugins in [Plugin System](../guide/plugins/pluginsystem).

:::