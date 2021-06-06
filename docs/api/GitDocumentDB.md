---
sidebar_position: 2
---

# GitDocumentDB Class

GitDocumentDB class provides document database APIs to manage Git repository.

🧰[spec](https://github.com/sosuisen/git-documentdb/blob/doc-v1.0/docs-api/git-documentdb.gitdocumentdb.md)

## Create or open database

### GitDocumentDB(options) 

Constructor

### createDB(remoteOptions)
Create and open a repository

### open()
Open an existing repository

## Close or destroy database

### close(options)
Close a database

### destroy(options)
Destroy a database



## CRUD

### insert(jsonDoc, options), insert(id, document, options)

Insert a document

### update(jsonDoc, options), update(id, document, options)

Update a document

### get(docId, backNumber)

Get a document

### delete(id, options), delete(jsonDoc, options)

Remove a document

## CRUD extras

### put(jsonDoc, options), put(id, document, options)

Insert a document if not exists. Otherwise, update it.

### remove(id, options), remove(jsonDoc, options)

This is an alias of remove()



## Bulk

### allDocs(options)

Get all the documents

## Collection

### collection(collectionPath)
Get a collection



## Revisions

### getByRevision(fileSHA)

Get a specific revision of a document

### getDocHistory(docID)

Get revision history of a file from new to old

### getDocWithMetaData(docId, backNumber)

Get a document with metadata



## Sync

### sync(options), sync(options, get_sync_result)

Synchronize with a remote repository

### getRemoteURLs()

Get remote URLs

### getSynchronizer(remoteURL)

Get a synchronizer

### unregisterRemote(remoteURL)

Stop and unregister remote synchronization



## Repository

### dbId()

Get database id

### dbName()

Get database name

### isOpened()

Test if a database is opened

### repository()

Get a current repository

### setRepository(repos)

Set a current repository


### workingDir()

Get a full path of the current Git working directory



## Properties

### defaultBranch
### gitAuthor
Author name and email
### isClosing
DB is going to close
### logger
### schema
### taskQueue
### validator




