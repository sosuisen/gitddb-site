---
sidebar_position: 5
---

# Prefix search

```typescript
 /**
    Create documents under sub-directories

    git-documentdb
    └── db01
        ├── nara
        │   ├── nara_park.json
        │   └── tsukigase.json
        └── yoshino
            └── mt_yoshino.json

  */
  await gitDDB.put({ _id: 'nara/nara_park', flower: 'double cherry blossoms' });
  await gitDDB.put({ _id: 'nara/tsukigase', flower: 'Japanese apricot' });
  await gitDDB.put({ _id: 'yoshino/mt_yoshino', flower: 'awesome cherry blossoms' });

  // Read
  const flowerInYoshino = await gitDDB.get('yoshino/mt_yoshino');
  console.log(flowerInYoshino);
  // log:: { flower: 'awesome cherry blossoms', _id: 'yoshino/mt_yoshino' }

  /**
   * Prefix search
   * 
   * Read all the documents whose IDs start with the prefix.
   */ 
  const flowersInNara = await gitDDB.find({ prefix: 'nara/' });
  console.log(flowersInNara);
  /* log:
    [
      { flower: 'double cherry blossoms', _id: 'nara/nara_park' },
      { flower: 'Japanese apricot', _id: 'nara/tsukigase' }
    ]
  */
 
  // destroy() closes DB and removes
  // both the Git repository and the working directory.
  await gitDDB.destroy();
```