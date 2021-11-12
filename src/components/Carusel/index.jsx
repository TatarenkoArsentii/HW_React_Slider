import React, { Component } from "react";
import Slide from "./Slide";
import Slider from "./Slider";

export class Carusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      width: 300,
      height: 300,
    };
  }

  setFullScreenMode = (isFullScreen) => {
    !isFullScreen
      ? this.setState({ width: "100%", height: "100%" })
      : this.setState({ width: 300, height: 300 });
  };

  start = () => {
    this.timerId = setInterval(this.setNext, 2000);
  };
  stop = () => {
    clearInterval(this.timerId);
  };
  startPlay = (isPlay) => {
    !isPlay ? this.start() : this.stop();
  };

  setNext = () => {
    const { index } = this.state;
    const { slides } = this.props;
    console.log(slides.length);
    this.setState({ index: (index + 1) % slides.length });
  };
  setPrev = () => {
    const { index } = this.state;
    const { slides } = this.props;
    console.log(slides.length);
    this.setState({ index: (index - 1 + slides.length) % slides.length });
  };

  render() {
    const { index, width, height } = this.state;
    const { slides } = this.props;
    return (
      <div>
        <Slide
          currentImage={slides[index]}
          nextImage={slides[(index + 1) % slides.length]}
          prevImage={slides[(index - 1 + slides.length) % slides.length]}
          width={width}
          height={height}
        />
        <Slider
          next={this.setNext}
          prev={this.setPrev}
          setFullScreenMode={this.setFullScreenMode}
          startPlay={this.startPlay}
        />
      </div>
    );
  }
}

export default Carusel;
