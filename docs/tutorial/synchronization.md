---
sidebar_position: 4
---

# Synchronization

```typescript
  const github_repository = 'https://github.com/enter_your_accunt_name/git-documentdb-example.git'; // Please enter your GitHub account name.
  const your_github_personal_access_token = 'Enter your personal access token with checked [repo]'; // See https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  await gitDDB.sync({
    live: true,
    remote_url: github_repository,
    connection: { type: 'github', personal_access_token: your_github_personal_access_token },
  });
```
(You can find more examples in examples/src/sync.ts)

