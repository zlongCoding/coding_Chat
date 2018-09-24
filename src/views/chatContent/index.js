import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import action from "store/home/action";
import SendMessage from "./sendMessage";
import Content from "./content";

import "./style.scss";

const propTypes = {
};

class ChatContent extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="chatArea">
        <Content />
        <SendMessage />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

ChatContent.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ChatContent);
