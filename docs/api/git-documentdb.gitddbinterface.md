---
sidebar_label: GitDDBInterface interface
title: GitDDBInterface interface
hide_title: true
---

[Home](./index.md) &gt; [git-documentdb](./git-documentdb.md) &gt; [GitDDBInterface](./git-documentdb.gitddbinterface.md)

## GitDDBInterface interface

Interface of GitDocumentDB body

<b>Signature:</b>

```typescript
export interface GitDDBInterface 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [author](./git-documentdb.gitddbinterface.author.md) | { name: string; email: string; } |  |
|  [committer](./git-documentdb.gitddbinterface.committer.md) | { name: string; email: string; } |  |
|  [dbId](./git-documentdb.gitddbinterface.dbid.md) | string |  |
|  [dbName](./git-documentdb.gitddbinterface.dbname.md) | string |  |
|  [defaultBranch](./git-documentdb.gitddbinterface.defaultbranch.md) | string |  |
|  [isClosing](./git-documentdb.gitddbinterface.isclosing.md) | boolean |  |
|  [isOpened](./git-documentdb.gitddbinterface.isopened.md) | boolean |  |
|  [localDir](./git-documentdb.gitddbinterface.localdir.md) | string |  |
|  [logger](./git-documentdb.gitddbinterface.logger.md) | ColoredLogger |  |
|  [logLevel](./git-documentdb.gitddbinterface.loglevel.md) | TLogLevelName | \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Public properties \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* |
|  [rootCollection](./git-documentdb.gitddbinterface.rootcollection.md) | [ICollection](./git-documentdb.icollection.md) |  |
|  [schema](./git-documentdb.gitddbinterface.schema.md) | [Schema](./git-documentdb.schema.md) |  |
|  [serializeFormat](./git-documentdb.gitddbinterface.serializeformat.md) | SerializeFormatJSON \| SerializeFormatFrontMatter | \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Public properties (readonly) \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* |
|  [taskQueue](./git-documentdb.gitddbinterface.taskqueue.md) | [TaskQueue](./git-documentdb.taskqueue.md) |  |
|  [tsLogger](./git-documentdb.gitddbinterface.tslogger.md) | Logger |  |
|  [validator](./git-documentdb.gitddbinterface.validator.md) | [Validator](./git-documentdb.validator.md) |  |
|  [workingDir](./git-documentdb.gitddbinterface.workingdir.md) | string |  |

## Methods

|  Method | Description |
|  --- | --- |
|  [close(options)](./git-documentdb.gitddbinterface.close.md) |  |
|  [destroy(options)](./git-documentdb.gitddbinterface.destroy.md) |  |
|  [getCommit(oid)](./git-documentdb.gitddbinterface.getcommit.md) |  |
|  [getRemoteURLs()](./git-documentdb.gitddbinterface.getremoteurls.md) |  |
|  [getSync(remoteURL)](./git-documentdb.gitddbinterface.getsync.md) |  |
|  [loadAuthor()](./git-documentdb.gitddbinterface.loadauthor.md) |  |
|  [loadDbInfo()](./git-documentdb.gitddbinterface.loaddbinfo.md) |  |
|  [open(options)](./git-documentdb.gitddbinterface.open.md) | \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Public methods \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* |
|  [removeSync(remoteURL)](./git-documentdb.gitddbinterface.removesync.md) |  |
|  [saveAuthor()](./git-documentdb.gitddbinterface.saveauthor.md) |  |
|  [sync(options, getSyncResult)](./git-documentdb.gitddbinterface.sync.md) |  |
|  [sync(options)](./git-documentdb.gitddbinterface.sync_1.md) |  |

