---
slug: database-side-debounce
title: Database-side debounce
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git]
---

Database-side debounce has been experimentally implemented in GitDocumentDB v0.4.5. 

Debounce is a commonly used feature in UI development. Debounce executes an enqueued task only when a debounce time has passed without any other enqueued tasks. If a new task is enqueued before a debounce time passes, the previous tasks will be dropped and not executed, and a new debounce time is scheduled.

Such a feature can reduce the processing load when continuously retrieving data from the web or persisting data from a store such as redux.

> Debounce is also well known to be provided by Lodash and RxJS. 
>
> Debounce in Lodash
> https://lodash.com/docs/#debounce
>
> Debounce in RxJS
> https://rxjs.dev/api/operators/debounce

In the same way, debounce in GitDocumentDB drops consecutive 'put' and 'update' to the same id document.

Database-side debouncing is intended to make it easy to debounce persistence procedures of data stores with exclusive locks on the application side in data flows with DB synchronization processing.

Debouncing on the database side may seem strange, but this is an experimental implementation and may be changed in the future.


