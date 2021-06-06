---
sidebar_position: 4
---

# Sync Class

Synchronizer class

You can create and get an instance of Sync, which is bind to a database by [GitDocumentDB#sync()](GitDocumentDB#sync). 

You can also get the created instance by [GitDocumentDB#getSynchronizer()](GitDocumentDB#sync). 


🧰[spec](https://github.com/sosuisen/git-documentdb/blob/doc-v1.0/docs-api/git-documentdb.sync.md)

## Lifecycle

### Sync(_gitDDB, _options)

Constructor

### close()

Stop sync and clear remote connection

### cancel()

Stop automated synchronization

### pause()

Alias of cancel()

### resume(options)

Resume automated synchronization

### init(repos)

Create remote connection

Usually, you do not call it directly. Call [GitDocumentDB#sync](GitDocumentDB#sync()) instead.


## Sync by hand

### tryPush(options)

Try to push with retries

### trySync()

Try to sync with retries


## Events

### off(event, callback)

Remove SyncEvent handler

### on(event, callback)

Add SyncEvent handler

### Information

## options()

Get remote options (read-only)

## remoteRepository()

Get remote repository

## remoteURL()

Get remoteURL
