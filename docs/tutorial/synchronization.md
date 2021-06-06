---
sidebar_position: 4
---

# Synchronization

```typescript
  // Please enter your GitHub account name.
  const github_repository = 'https://github.com/enter_your_accunt_name/git-documentdb-example.git'; 
  // See https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  const your_github_personal_access_token = 'Enter your personal access token with checked [repo]'; 
  await gitDDB.sync({
    live: true,
    remote_url: github_repository,
    connection: { type: 'github', personal_access_token: your_github_personal_access_token },
  });
```
(You can find more examples in examples/src/sync.ts)

