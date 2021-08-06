---
sidebar_position: 6
---

# Collections

```typescript
  // Try sub-directories again by another way.
  await gitDDB.open();
  // Use Collection Class to make them easier.
  const nara = gitDDB.collection('nara');
  const yoshino = gitDDB.collection('yoshino');
  await nara.put({ _id: 'nara_park', flower: 'double cherry blossoms' });
  await nara.put({ _id: 'tsukigase', flower: 'Japanese apricot' });
  await yoshino.put({ _id: 'mt_yoshino', flower: 'cherry blossoms' });

  // Read
  const flowerInYoshinoCollection = await yoshino.get('mt_yoshino');
  console.log(flowerInYoshinoCollection);
  // { flower: 'cherry blossoms', _id: 'mt_yoshino' }

  // Read all the documents in nara collection
  const flowersInNaraCollection = await nara.find();
  console.log(flowersInNaraCollection);
  /* log: 
    [
      { flower: 'double cherry blossoms', _id: 'nara_park' },
      { flower: 'Japanese apricot', _id: 'tsukigase' }
    ]
  */  
  await gitDDB.close();
```
:::note

You can find more examples in [examples/src/collection.ts](https://github.com/sosuisen/git-documentdb/blob/main/examples/src/collection.ts)

:::