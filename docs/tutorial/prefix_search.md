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
  // Put documents by using filepath.
  await gitDDB.put({ _id: 'nara/nara_park', flower: 'double cherry blossoms' });
  await gitDDB.put({ _id: 'nara/tsukigase', flower: 'Japanese apricot' });
  await gitDDB.put({ _id: 'yoshino/mt_yoshino', flower: 'cherry blossoms' });

  // Read
  const flowerInYoshino = await gitDDB.get('yoshino/mt_yoshino');
  console.log(flowerInYoshino);
  // { flower: 'cherry blossoms', _id: 'yoshino/mt_yoshino' }

  // Prefix search
  
  // Read all the documents whose IDs start with the prefix.
  const flowersInNara = await gitDDB.allDocs({ prefix: 'nara/' });
  console.dir(flowersInNara, { depth: 3 });
  /* flowersInNara = 
  {
    total_rows: 2,
    commit_sha: 'xxxxx_commit_sha_of_your_head_commit_xxxxx',
    rows: [
      {
        id: 'nara/nara_park',
        file_sha: '7448ca2f7f79d6bb585421c6c29446acb97e4a8c',
        doc: { flower: 'double cherry blossoms', _id: 'nara/nara_park' }
      },
      {
        id: 'nara/tsukigase',
        file_sha: '1241d69c4e9cd7a27f592affce94ec60d3b2207c',
        doc: { flower: 'Japanese apricot', _id: 'nara/tsukigase' }
      }
    ]
  }
  */
 
  // destroy() closes DB and removes 
  // both the Git repository and the working directory if they exist.
  await gitDDB.destroy();
```