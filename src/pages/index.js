import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Homepage from '@site/src/components/homepage';
import Homepage from '../components/HomepageFeatures/homepage';
import logo from '../../static/img/alkimi-logo.png';
// import './styles-morgan.css';

function HomepageHeader() {

  // const headingTitle = `Alkimi Exchange`;
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img class='hero-banner-logo' src={logo} alt="logo-image"></img>
        {/* <h1 className="heading">Alkimi Exchange Docs</h1> */}
        {/* <p className="subtitle">Your all-in-one resource for Alkimi</p> */}
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 className="hero__title">Alkimi Exchange Docs</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <p className="hero__subtitle">The Worlds First Decentralized Advertising Exchange</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn About Alkimi
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <Homepage />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
