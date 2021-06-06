---
sidebar_position: 3
---

# Revisions
```typescript
  // get(id, 2) returns two revisions before
  const oldDoc = await gitDDB.get('nara', 2); 
  console.log(oldDoc);
  // { _id: 'nara', flower: 'cherry blossoms', season: 'spring' }
```
