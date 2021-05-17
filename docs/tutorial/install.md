---
sidebar_position: 1
---

# Install

## **Prerequisite**
Node.js 10 or later
## **Installation**
```
npm i git-documentdb
```
**NOTE:**
GitDocumentDB uses native addon (libgit2).  
If you receive errors about installation, you probably miss building tools and libraries.
**In Ubuntu 18:**
```
sudo apt update
sudo apt install build-essential libssl-dev libkrb5-dev libc++-dev 
```
**In Windows 10:**
The list below shows typical environments.
- Node.js 12, Python 2.7.x, and Visual Studio 2017 Community (with Desktop development with C++).
- npm config set msvs_version 2017

If you are still encountering install problems, documents about [NodeGit](https://github.com/nodegit/nodegit#getting-started) and [Building NodeGit from source](https://www.nodegit.org/guides/install/from-source/) may also help you.


## Import
```typescript
import { GitDocumentDB } from 'git-documentdb';

const gitDDB = new GitDocumentDB({
  db_name: 'db01', // Git working directory
});
```
