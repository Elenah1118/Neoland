import React from 'react';
import styles from './Image.module.css';

const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} className={styles.image} />;
};

export default Image;