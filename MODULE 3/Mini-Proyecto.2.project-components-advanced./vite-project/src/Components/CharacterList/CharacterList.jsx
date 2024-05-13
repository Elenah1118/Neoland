import React from 'react';
import styles from './CharacterList.module.css';

const CharacterList = ({ children }) => {
  return <ul className={styles.characterList}>{children}</ul>;
};

export default CharacterList;