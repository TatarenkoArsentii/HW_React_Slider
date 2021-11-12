import React, { Component } from "react";
const filter = { filter: "brightness(0.3)" };
const width1 = { width: "400px" };
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

    const { currentImage, nextImage, prevImage, width, height } = this.props;
    img.src = currentImage.src;
    console.log(img);
    return (
      <div>
        <figcaption>{currentImage.title}</figcaption>
        <img
          src={prevImage.src}
          alt="image"
          width={width}
          height={height}
          style={filter}
        ></img>
        <img
          src={currentImage.src}
          alt="image"
          width={width}
          height={height}
        ></img>
        <img
          src={nextImage.src}
          alt="image"
          width={width}
          height={height}
          style={filter}
        ></img>
      </div>
    );
  }
}

export default Slide;
