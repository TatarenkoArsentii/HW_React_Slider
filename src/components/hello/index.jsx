import React from "react";
import styles from "./hello.module.sass";
const Hello = (props) => {
  const { name } = props;
  return <div className={styles.wrapper}>Hello {name}</div>;
};



export default Hello;
