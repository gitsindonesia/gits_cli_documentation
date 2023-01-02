import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reduce Development Time',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        Streamline your workflow and cut development time with the power of this command line interface.
      </>
    ),
  },
  {
    title: 'Pure Dart Language',
    Svg: require('@site/static/img/dart.svg').default,
    description: (
      <>
        This command-line interface was written entirely in Dart Language. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
