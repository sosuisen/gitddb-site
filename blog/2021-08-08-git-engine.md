---
slug: git-engines
title: Integrated NodeGit and isomorphic-git 
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git,NodeGit,isomorphic-git]
---

Great release!

GitDocumentDB v0.4.3 integrates [NodeGit](https://www.nodegit.org/) and [isomorphic-git](https://isomorphic-git.org/) by using plugin system.

<img src="/img/git-engines.jpg" alt="git-engines" width="480px" />

NodeGit and isomorphic-git are widely known Git implementations for JavaScript/TypeScript.
The development of GitDocumentDB started with NodeGit, which has met much need for GitDocumentDB.
However, it also causes memory leaks, imperfect documents, and esoteric integration with Electron. 
These problems are almost derived from libgit2 native code in NodeGit.

isomorphic-git is a pure JavaScript implementation of Git. It's well documented and easy to integrate with Electron.
So, I have rewritten all NodeGit code with isomorphic-git code.

Still, NodeGit has the advantage of being able to SSH keys authentication.
I have made it available as a remote connection plugin.

Git implementation in GitDocumentDB uses isomorphic-git. 
If you like, you can use NodeGit for remote connection instead of isomorphic-git.

The plugin system will be ready for another Git implementation in the future.

- [Plugin System](docs/guide/plugins/pluginsystem)
- [Plugin Tutorial](docs/tutorial/plugin)