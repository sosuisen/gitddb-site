---
sidebar_position: 3
---

# Revisions
```typescript
  /**
   * Revisions 
   * 
   * getOldRevision(id, 2) returns a document two revisions older than the latest.
   * 
   * #0 (latest): undefined (deleted)
   * #1: 'double cherry blossoms'
   * #2: 'cherry blossoms'
   */
  const oldDoc = await gitDDB.getOldRevision('nara', 2); 

  console.log(`\n$ gitDDB.get('nara', 2) # Get a document two revisions older than the latest.`);
  console.log(oldDoc);
  // log: { _id: 'nara', flower: 'cherry blossoms', season: 'spring' }
```
