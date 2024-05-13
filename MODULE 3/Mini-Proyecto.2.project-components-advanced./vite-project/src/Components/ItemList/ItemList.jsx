import React from 'react';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </>
  );
};

export default ItemList;