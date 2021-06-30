---
sidebar_position: 4
---

# Synchronization

```typescript
  await gitDDB.sync({
    live: true,
    remote_url: 'https://github.com/enter_your_accunt_name/git-documentdb-example.git',
    connection: { type: 'github', personal_access_token: 'Enter your personal access token with checked [repo]' },
  });
```
(You can find more examples in [examples/src/sync.ts](https://github.com/sosuisen/git-documentdb/blob/main/examples/src/sync.ts))

