import React, { Component } from "react";

export class Slide extends Component {
  constructor(props) {
    super(props);
    const img = new Image();
    this.state = {
      img,
    };
  }

  render() {
    const { img } = this.state;
    const { currentImage, width, height } = this.props;
    console.log(currentImage);
    return (
      <div>
        <figcaption>{currentImage.title}</figcaption>
        <img
          src={currentImage.src}
          alt="image"
          width={width}
          height={height}
        ></img>
      </div>
    );
  }
}

export default Slide;
