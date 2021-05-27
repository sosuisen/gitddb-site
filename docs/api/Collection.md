---
sidebar_position: 3
---

# Collection Class

Documents are gathered together in collections.

🧰[spec](https://github.com/sosuisen/git-documentdb/blob/doc-v1.0/docs-api/git-documentdb.gitdocumentdb.md)


## collection

### static getCollections(gitDDB, rootPath)
Get collections whose path start with a specified path

### collectionPath()

## CRUD

### insert(jsonDoc, options), insert(id, document, options)
Insert a document

### get(docId, backNumber) 
Get a document

### update(jsonDoc, options), update(id, document, options)
Update a document

### delete(id, options), delete(jsonDoc, options)
Remove a document


## CRUD extras 

### put(jsonDoc, options), put(_id, document, options)

Insert a document if not exists. Otherwise, update it.

### remove(id, options), remove(jsonDoc, options)

This is an alias of delete()


## Bulk

### allDocs(options)
Get all the documents


