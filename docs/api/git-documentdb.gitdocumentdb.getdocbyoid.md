---
sidebar_label: getDocByOid()
title: GitDocumentDB.getDocByOid() method
hide_title: true
---

[Home](./index.md) &gt; [git-documentdb](./git-documentdb.md) &gt; [GitDocumentDB](./git-documentdb.gitdocumentdb.md) &gt; [getDocByOid](./git-documentdb.gitdocumentdb.getdocbyoid.md)

## GitDocumentDB.getDocByOid() method

Get a Doc which has specified oid

<b>Signature:</b>

```typescript
getDocByOid(fileOid: string, docType?: DocType): Promise<Doc | undefined>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fileOid | string | Object ID (SHA-1 hash) that represents a Git object. (See https://git-scm.com/docs/git-hash-object ) |
|  docType | [DocType](./git-documentdb.doctype.md) |  |

<b>Returns:</b>

Promise&lt;[Doc](./git-documentdb.doc.md) \| undefined&gt;

## Remarks

- undefined if a specified oid does not exist.

- This is an alias of GitDocumentDB\#rootCollection.getDocByOid()

## Exceptions

[Err.DatabaseClosingError](./git-documentdb.err.databaseclosingerror.md)

[Err.InvalidJsonObjectError](./git-documentdb.err.invalidjsonobjecterror.md)

