import React from "react";
import styles from "./userList.module.sass";
import classNames from "classnames";

const UserList = (props) => {
  const { name, surname, img } = props;
  console.log(props);
  console.log(name);
  return (
    <article>
      <div>
        <img src={img} />
      </div>
      <p>{name}</p>
      <p>{surname}</p>
    </article>
  );
};

export default UserList;
