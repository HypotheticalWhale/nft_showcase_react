import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'
const Download = () => {
    const openLinkInNewTab = (url) => {
      const newTab = window.open(url, "_blank", "noopener,noreferrer");
      if (newTab) newTab.opener = null;
    };
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Souce Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full Source Code on Github
          </p>
        </div>
        <button
          className={styles.btnPrimary}
          onClick={() =>
            openLinkInNewTab(
              "https://github.com/HypotheticalWhale/nft_marketplace_app"
            )
          }
        >
          {" "}
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Download