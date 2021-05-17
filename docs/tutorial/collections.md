---
sidebar_position: 6
---

# Collections

```typescript
  // Try it again by another way.
  await gitDDB.create();
  // Use collections to make it easier
  const nara = gitDDB.collection('nara');
  const yoshino = gitDDB.collection('yoshino');
  await nara.put({ _id: 'nara_park', flower: 'double cherry blossoms' });
  await nara.put({ _id: 'tsukigase', flower: 'Japanese apricot' });
  await yoshino.put({ _id: 'mt_yoshino', flower: 'cherry blossoms' });

  // Read
  const flowerInYoshinoCollection = await yoshino.get('mt_yoshino');
  console.log(flowerInYoshinoCollection); // { flower: 'cherry blossoms', _id: 'mt_yoshino' }

  // Read all the documents in nara collection
  const flowersInNaraCollection = await nara.allDocs({ include_docs: true });
  console.dir(flowersInNaraCollection, { depth: 3 });
  /* flowersInNaraCollection = 
  {
    total_rows: 2,
    commit_sha: 'xxxxx_commit_sha_of_your_head_commit_xxxxx',
    rows: [
      {
        id: 'nara_park',
        file_sha: '7448ca2f7f79d6bb585421c6c29446acb97e4a8c',
        doc: { flower: 'double cherry blossoms', _id: 'nara_park' }
      },
      {
        id: 'tsukigase',
        file_sha: '1241d69c4e9cd7a27f592affce94ec60d3b2207c',
        doc: { flower: 'Japanese apricot', _id: 'tsukigase' }
      }
    ]
  }
  */
  await gitDDB.close();
```
(You can find more examples in examples/src/collection.ts)
