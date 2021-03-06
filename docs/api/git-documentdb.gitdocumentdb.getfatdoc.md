---
sidebar_label: getFatDoc()
title: GitDocumentDB.getFatDoc() method
hide_title: true
---

[Home](./index.md) &gt; [git-documentdb](./git-documentdb.md) &gt; [GitDocumentDB](./git-documentdb.gitdocumentdb.md) &gt; [getFatDoc](./git-documentdb.gitdocumentdb.getfatdoc.md)

## GitDocumentDB.getFatDoc() method

Get a FatDoc data

<b>Signature:</b>

```typescript
getFatDoc(name: string, getOptions?: GetOptions): Promise<FatDoc | undefined>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string | name is a file path. |
|  getOptions | [GetOptions](./git-documentdb.getoptions.md) |  |

<b>Returns:</b>

Promise&lt;[FatDoc](./git-documentdb.fatdoc.md) \| undefined&gt;

- undefined if a specified data does not exist.

- FatJsonDoc if the file extension is SerializeFormat.extension. Be careful that JsonDoc may not have \_id property when an app other than GitDocumentDB creates it.

- FatBinaryDoc if described in .gitattribtues, otherwise FatTextDoc.

- getOptions.forceDocType always overwrite return type.

- This is an alias of GitDocumentDB\#rootCollection.getFatDoc()

## Exceptions

[Err.DatabaseClosingError](./git-documentdb.err.databaseclosingerror.md)

[Err.InvalidJsonObjectError](./git-documentdb.err.invalidjsonobjecterror.md)

