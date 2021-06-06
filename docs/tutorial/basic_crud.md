---
sidebar_position: 2
---

# Basic CRUD
```typescript
  // Open a repository at /your/path/to/the/example/git-documentdb/db01/.git
  const result = await gitDDB.open(); 
  // Create and open the repository if not exits.
  if (!result.ok) await gitDDB.createDB(); 

  // Create
  await gitDDB.put({ _id: 'nara', flower: 'cherry blossoms', season: 'spring' });
  // Git adds 'nara.json' under the working directory and commits it.

  // Update document if exists
  await gitDDB.put({ _id: 'nara', flower: 'double cherry blossoms', season: 'spring' }); 
  // Git adds an updated file and commits it.
  
  // Read JSON object
  const doc = await gitDDB.get('nara');
  console.log(doc);
  // { flower: 'double cherry blossoms', season: 'spring', _id: 'nara' }
  
  // Delete
  await gitDDB.delete('nara');
  // Git deletes a file and commits it. 

  console.log(await gitDDB.get('nara')); // undefined
  ```
