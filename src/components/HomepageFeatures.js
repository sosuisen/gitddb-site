import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Manage Git repository by DocumentDB API. <br />
      You can store JSON or any documents in the Git repository.
      </>
    ),
  },
  {
    title: 'Fully Automated',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Automated synchronization and conflict resolution with a remote Git repository (GitHub).<br />
      No need to resolve conflicts manually.
      </>
    ),
  },
  {
    title: 'Powered by Git',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Interoperability with other Git tools.<br />
      CI/CD through GitHub.<br />
      Get past revisions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
