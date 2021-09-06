---
sidebar_position: 2
---

# Basic CRUD

:::note

Notice that you need 'async' to use 'await'. If you are first to learn asynchronous function, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function.

:::

```typescript
 /**
   * Open a database
   */
  await gitDDB.open(); 


  /**
   * Create a document
   */ 
  await gitDDB.put({ _id: 'nara', flower: 'cherry blossoms', season: 'spring' });

  console.log(`$ gitDDB.put({ flower: 'cherry blossoms' ... }) # Create`);
  console.log(await gitDDB.get('nara')); 
  // log: { _id: 'nara', flower: 'cherry blossoms', season: 'spring' }

  /**
   * Update a document if it exists.
   */
  await gitDDB.put({ _id: 'nara', flower: 'double cherry blossoms', season: 'spring' }); 

  /**
   * Read a document
   */
  const doc = await gitDDB.get('nara');

  console.log(`\n$ gitDDB.put({ flower: 'double cherry blossoms' ... }) # Update`);
  console.log(doc);
  // log: { flower: 'double cherry blossoms', season: 'spring', _id: 'nara' }

  /**
   * Delete a document
   */
  await gitDDB.delete('nara');

  console.log(`\n$ gitDDB.delete('nara') # Delete`);
  console.log(await gitDDB.get('nara'));
  // log: undefined
  
  /**
   * Use an auto-generated _id
   */
   const appleResult = await gitDDB.put({ name: 'apple' }); // _id does not exist.
   const apple = await gitDDB.get(appleResult._id);
   console.log(`\n_id of the JSON document is automatically generated`);
   console.log(apple);
   // log: { name: 'apple', _id: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' } 

   /**
   * Set namePrefix to add a prefix to an auto-generated _id
   */
   const gitDDBPrefix = new GitDocumentDB({
     dbName: 'db_prefix',
     namePrefix: 'fruit_',
   });
   await gitDDBPrefix.open();
   const fruitAppleResult = await gitDDBPrefix.put({ name: 'apple' });
   const fruitApple = await gitDDBPrefix.get(fruitAppleResult._id);
   console.log(fruitApple);
   // log: { name: 'apple', _id: 'fruit_XXXXXXXXXXXXXXXXXXXXXXXXXX' }
```
