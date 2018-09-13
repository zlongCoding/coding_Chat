import React, { Component } from "react";
import IScroll from "iscroll/build/iscroll-probe";
import Event from "utils/events";
import PropTypes from "prop-types";
import "./index.scss";

class Scroll extends Component {
  static propTypes = {
    scrollbar: PropTypes.string.isRequired,
    onScroll: PropTypes.func.isRequired,
    allowScroll: PropTypes.bool.isRequired,
    isToBottom: PropTypes.bool,
  };

  static defaultProps = {
    isToBottom: false,
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      myScroll: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (!this.myRef.current) {
        return false;
      }
      const { scrollbar, onScroll, allowScroll } = this.props;
      this.state.myScroll = new IScroll(this.myRef.current, {
        mouseWheel: true,
        probeType: 3,
        bounce: false,
        preventDefault: false,
        disablePointer: false,
        fadeScrollbars: true,
        scrollbars: scrollbar,
      });

      this.stopTouchmove = (e) => {
        e.preventDefault();
      };
      const { myScroll } = this.state;
      myScroll.on("scroll", () => {
        if (onScroll) {
          onScroll(myScroll.y);
        }
      });

      if (!allowScroll) {
        Event.on(this.myRef.current, "touchmove", this.stopTouchmove);
        Event.on(document, "touchmove", this.stopTouchmove);
      }
      this.toBottom();
      return true;
    }, 250);
  }

  componentWillReceiveProps(nextProps) {
    this.manualTouchMove(nextProps.allowScroll);
    if (nextProps && nextProps.refresh) {
      setTimeout(() => {
        const { myScroll } = this.state;
        if (myScroll) {
          myScroll.refresh();
        }
      }, 150);
    }
    const { ScrollToY } = nextProps;

    if (!ScrollToY || this.updateY === nextProps.updateY) {
      return;
    }

    this.updateY = nextProps.updateY;
    const { myScroll } = this.state;
    myScroll.scrollTo(0, -ScrollToY, 500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      const { myScroll } = this.state;
      myScroll.refresh();
      this.toBottom();
    }, 350);
  }

  componentWillUnmount() {
    Event.off(this.myRef.current, "touchmove", this.stopTouchmove); 
    Event.off(document, "touchmove", this.stopTouchmove);
  }

  toBottom() {
    const { isToBottom } = this.props;
    if (!isToBottom) return;
    const { myScroll } = this.state;
    myScroll.scrollTo(0, myScroll.maxScrollY, 5);
  }

  manualTouchMove(allowScroll) {
    if (allowScroll) {
      Event.off(document, "touchmove", this.stopTouchmove);                             
    } else {
      Event.on(document, "touchmove", this.stopTouchmove); 
    }
  }

  render() {
    const { ...props } = this.props;
    const { children } = props;
    return (
      <div className="scroll-wrapper" ref={this.myRef}>
        <div className="scroller">
          { children }
        </div>
      </div>
    );
  }
}

export default Scroll;
