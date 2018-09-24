import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Api from "utils/api";
import "./style.scss";
// import action from "../home/action";
// import chatAction from "../slidBar/chatList/action"

const propTypes = {
  
};

class User extends Component {
  constructor(props){
    super(props)
    // this.state={
    //   qrcode: ""
    // }
  }
  componentDidMount() {
    //  this.checklogin()
  }
  render() {
    const { qrcode } = this.props
    return (
      <div className="user_qrcode">
        {
          qrcode ? (
            <section>
          <img src={qrcode}/>
          <div>使用手机微信扫码登录</div>
          <p>网页版微信需要配合手机使用</p>
        </section>
          ) : (
            <div>加载中。。。。</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  
};

User.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(User);
