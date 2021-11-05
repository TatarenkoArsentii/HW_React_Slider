import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiSkipNext,
  mdiSkipPrevious,
  mdiFullscreen,
  mdiPause,
  mdiPlay,
  mdiFullscreenExit,
} from "@mdi/js";

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      isFullScreen: false,
    };
    this.timerId = null;
  }
  handlerPlay = () => {
    const { isPlay } = this.state;
    const { startPlay } = this.props;
    this.setState({ isPlay: !isPlay });
    startPlay(isPlay);
  };
  handlerFullScreen = () => {
    const { isFullScreen } = this.state;
    const { setFullScreenMode } = this.props;
    this.setState({ isFullScreen: !isFullScreen });
    setFullScreenMode(isFullScreen);
  };
  render() {
    const { isPlay, isFullScreen } = this.state;
    const { next, prev } = this.props;
    return (
      <div>
        <div>
          <Icon onClick={prev} path={mdiSkipPrevious} width="100px" />
          <Icon onClick={next} path={mdiSkipNext} width="100px" fill="#000" />
        </div>
        <div>
          <Icon
            onClick={this.handlerPlay}
            path={isPlay ? mdiPause : mdiPlay}
            width="100px"
          />
          <Icon
            onClick={this.handlerFullScreen}
            path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}
            width="100px"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
