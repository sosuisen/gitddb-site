---
sidebar_position: 4
---

# Build

## Prerequisite

- Windows 10
- Linux
- macOS

## Install node modules and build

```
git clone https://github.com/sosuisen/git-documentdb
npm i
npm run build
```

## Limitations

"git-documentdb-plugin-remote-nodegit" in devDependencies may invoke errors when you do not install a native compiler.

Follow the instructions below to set up the compiler, or omit the "git-documentdb-plugin-remote-nodegit" package from the devDependencies because this package is only needed in 'npm run test-plugin'

## Preparation to build "git-documentdb-plugin-remote-nodegit"

Building this package in a Windows 32bit environment is limited due to [a NodeGit issue](https://github.com/nodegit/nodegit/issues/1850).

This package contains a native module (libgit2) derived from NodeGit.
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
