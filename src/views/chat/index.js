import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SlidBar from "../slidBar";
import ChatContent from "../chatContent";

// import action from "store/home/action";
import "./style.scss";

const propTypes = {

}

class Wechat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="weChat">
        <div id="weChat_content">
           <div className="main_inner">
             <SlidBar />
             <ChatContent />
           </div>
           <p className="reminder">纯属</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // message: state.home.message,
});

const mapDispatchToProps = {
  // getMessage: action.getMessage,
};

Wechat.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Wechat);