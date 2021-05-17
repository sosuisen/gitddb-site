---
sidebar_position: 2
---
# GitDocumentDB Class

GitDocumentDB class provides document database APIs to manage Git repository.

## Create or open database

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

Insert a document if not exists, otherwise update it.

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

### sync(remoteURL, options), sync(options)

Synchronize with a remote repository

### getRemoteURLs()

Get remote URLs

### getSynchronizer(remoteURL)

Get a synchronizer

## unregisterRemote(remoteURL)

Stop and unregister remote synchronization



## Repository

### dbName()

Get dbName

### isOpened()

Test if a database is opened

### repository()

Get a current repository

### workingDir()

Get a full path of the current Git working directory



## Properties

### defaultBranch
### fileExt 	
File extension of a repository document
### gitAuthor
Author name and email
### isClosing
DB is going to close
### logger
### schema
### taskQueue
### validator




