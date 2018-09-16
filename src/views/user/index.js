import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Api from "utils/api";
import "./style.scss";

const propTypes = {

};

class User extends Component {
  constructor(props){
    super(props)
    this.state={
      qrcode: ""
    }
  }
  componentDidMount() {
     Api.get({
       url: "/wechat/qrcode"
     }).then(res => {
       console.log(res.data)
       this.setState({
         qrcode: res.data
       })
     })
     
  }
  renderQrcode() {
    if (this.state.qrcode) {
       
    }
  }
  render() {
    const { qrcode } = this.state
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
