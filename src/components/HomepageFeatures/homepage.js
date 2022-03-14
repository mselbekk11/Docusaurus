import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logo from '../../../static/img/alkimi-logo.png';

export default function Homepage() {
    return (
      <section className="homepage">
        <div className="container center">
        <div className="title-container">
        <img class='hero-banner-logo' src={logo} alt="logo-image"></img>
        <h1 className="homepage-title">Alkimi Exchange Docs</h1>
        </div>
          <div className="row">
            <a href="/docs/intro"><div className="one">
                <h2>Welcome</h2>
            </div></a>
            <a href="/docs/Alkimi/manage-docs-versions"><div className="two">
                <h2>Whitepaper</h2>
            </div></a>
            <a href="/blog"><div className="three">
                <h2>Blog</h2>
            </div></a>
          </div>
        </div>
      </section>
    );
  }