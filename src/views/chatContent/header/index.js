import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

const propTypes = {
  chatToWxaccount: PropTypes.object.isRequired
};

class Header extends Component {
  componentDidMount() {
  }

  render() {
    let { chatToWxaccount } = this.props
    return (
      <header className="chat_header_name">
          <a className="chat_choose_name">{chatToWxaccount.NickName}</a>
         {
           chatToWxaccount.SnsFlag !== 1 ? (<i className = "web_wechat_down_icon" > </i>) : ""
         } 
      </header>
    );
  }
}

const mapStateToProps = state => ({
  chatToWxaccount: state.header.chatToWxaccount
});

const mapDispatchToProps = {
};

Header.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
