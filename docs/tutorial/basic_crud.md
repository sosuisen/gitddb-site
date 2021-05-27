---
sidebar_position: 2
---

# Basic CRUD
```typescript
  // Open
  const result = await gitDDB.open(); // Open a repository if exists. (/your/path/to/the/example/git-documentdb/db01/.git)
  if (!result.ok) await gitDDB.createDB(); // Git creates and opens a repository if not exits.

  // Create (Insert if not exists)
  await gitDDB.put({ _id: 'nara', flower: 'cherry blossoms', season: 'spring' }); // Git adds 'nara.json' under the working directory and commits it.

  // Update
  await gitDDB.put({ _id: 'nara', flower: 'double cherry blossoms', season: 'spring' }); // Git adds an updated file and commits it.
  
  // Read
  const doc = await gitDDB.get('nara');
  console.log(doc); // { flower: 'double cherry blossoms', season: 'spring', _id: 'nara' }
  
  // Delete
  await gitDDB.delete('nara'); // Git deletes a file and commits it. 
  // You can call remove() as alias for delete().
```
