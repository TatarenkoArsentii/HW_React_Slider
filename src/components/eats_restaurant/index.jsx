import React, { useState } from "react";
import LoginImage from "./img/IMG_0851.png";
import foodsImage from "./img/IMG_0850.png";
import styles from "./eats_restaurant.module.sass";

function AppWorks(props) {
  const { App_Works } = props;
  const [title, setTitle] = useState(App_Works[0]);
  const [appLoginImg, setAppLoginImg] = useState(new Image());
  const [appfoodsImg, setAppFoodsImg] = useState(new Image());
  const [firstImgTitle, setFirstImgTitle] = useState(App_Works[1].imgTitle);
  const [secondImgTitle, setSecondImgTitle] = useState(App_Works[2].imgTitle);
  const [firstImgSubTitle, setFirstImgSubTitle] = useState(
    App_Works[1].imgSubTitle
  );
  const [secondImgSubTitle, setSecondImgSubTitle] = useState(
    App_Works[2].imgSubTitle
  );
  const [firstImgDescr, setFirstImgDescr] = useState(App_Works[1].imgDescr);
  const [secondImgDescr, setSecondImgDescr] = useState(App_Works[2].imgDescr);
  // const [index, setIndex] = useState(0);

  appLoginImg.src = LoginImage;
  appfoodsImg.src = foodsImage;

  return (
    <div>
      {/* img state, other props */}
      <div className={styles.container}>
        <h1>{App_Works[0]}</h1>
        <div className={styles.first_wrapper}>
          <img src={appLoginImg.src} alt={App_Works[1].alt} />
          <div className={styles.first_wrapper_descr}>
            <p>
              <span>{App_Works[1].imgTitle}</span>
            </p>
            <h2>{App_Works[1].imgSubTitle}</h2>
            <p>{App_Works[1].imgDescr}</p>
          </div>
        </div>

        <div className={styles.second_wrapper}>
          <img src={appfoodsImg.src} alt={App_Works[2].alt} />
          <div className={styles.first_wrapper_descr}>
            <p>
              <span>{App_Works[2].imgTitle}</span>
            </p>
            <h2>{App_Works[2].imgSubTitle}</h2>
            <p>{App_Works[2].imgDescr}</p>
          </div>
        </div>
      </div>

      {/* all state */}
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.first_wrapper}>
          <img src={appLoginImg.src} alt={App_Works[1].alt} />
          <div className={styles.first_wrapper_descr}>
            <p>
              <span>{firstImgTitle}</span>
            </p>
            <h2>{firstImgSubTitle}</h2>
            <p>{firstImgDescr}</p>
          </div>
        </div>

        <div className={styles.second_wrapper}>
          <img src={appfoodsImg.src} alt={App_Works[2].alt} />
          <div className={styles.first_wrapper_descr}>
            <p>
              <span>{secondImgTitle}</span>
            </p>
            <h2>{secondImgSubTitle}</h2>
            <p>{secondImgDescr}</p>
          </div>
        </div>
      </div>

      {/* all props */}
      <div className={styles.container}>
        <h1>{App_Works[0]}</h1>
        <div className={styles.first_wrapper}>
          <img src={App_Works[1].src} alt={App_Works[1].alt} />
          <div className={styles.first_wrapper_descr}>
            <p>
              <span>{App_Works[1].imgTitle}</span>
            </p>
            <h2>{App_Works[1].imgSubTitle}</h2>
            <p>{App_Works[1].imgDescr}</p>
          </div>
        </div>

        <div className={styles.second_wrapper}>
          <img src={App_Works[2].src} alt={App_Works[2].alt} />
          <div className={styles.first_wrapper_descr}>
            <p>
              <span>{App_Works[2].imgTitle}</span>
            </p>
            <h2>{App_Works[2].imgSubTitle}</h2>
            <p>{App_Works[2].imgDescr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWorks;
