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
      Manage Git repository by CRUD and collection APIs for JavaScript/TypeScript on Node.js and browser.
      </>
    ),
  },
  {
    title: 'Fully Automated',
    imgPath: '/img/fully_automated_small.png',
    description: (
      <>
      Automate Git workflows by resolving revision conflicts, transactional and consistency conflicts.<br/ >
      Typical synchronization patterns and diff-and-patch strategies solve them.
      </>
    ),
  },
  {
    title: 'Powered by Git',
    imgPath: '/img/powered_by_git_small.png',
    description: (
      <>
      Interoperability with other Git tools.<br />
      Efficient CI/CD through GitHub.<br />
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
