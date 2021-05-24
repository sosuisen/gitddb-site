import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Offline Capable',
    imgPath: '/img/offline_capable_small.png',
    description: (
      <>
      Distributed multi-primary database that can work in offline and online. <br />
      <a href='https://gitddb.com/blog/offline-capable'>See more.</a>
      </>
    ),
  },
  {
    title: 'Easy to Use',
    imgPath: '/img/easy_to_use_small.png',
    description: (
      <>
      Manage Git repository by DocumentDB API. <br />
      You can store JSON or any documents in the Git repository. <a href="https://github.com/sosuisen/git-documentdb#roadmap">(Roadmap)</a>
      </>
    ),
  },
  {
    title: 'Fully Automated',
    imgPath: '/img/fully_automated_small.png',
    description: (
      <>
      Automated synchronization and diff &amp; patch with a remote repository.<br />
      No need to resolve conflicts manually.
      </>
    ),
  },
  {
    title: 'Powered by Git',
    imgPath: '/img/powered_by_git_small.png',
    description: (
      <>
      Interoperability with other Git tools. CI/CD through GitHub.<br />
      Get past revisions.
      </>
    ),
  },
];

function Feature({Svg, title, description, imgPath}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={imgPath} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
