import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import User from "../user";
import Chat from "../chat";
import PropTypes from "prop-types";
import Api from "utils/api";
import action from "./action"
import chatAction from "../slidBar/chatList/action"
import friendAction from "../slidBar/friendList/action"


const propTypes = {
  wechatAccout: PropTypes.object.isRequired,
  getWeChatAccount: PropTypes.func.isRequired,
  dispatchChatlist: PropTypes.func.isRequired,
  getWeFreindList: PropTypes.func.isRequired
};

class Home extends Component {
  constructor(props){
    super(props)
    this._isMounted = true;
    this.state = {
      fristQrcode: true,
      qrcode: ""
    }
  }
  componentDidMount() {
    this.checklogin()
  }

  getQrcode() {
    Api.get({
      url: "/wechat/qrcode"
    }).then(res => {
      this.setState({
        qrcode: res
      })
    })
  }
  checklogin() {
    Api.get({
      url: "/wechat/checklogin"
    }).then(res => {
      if (res.code != 200) {
        let { fristQrcode } = this.state
        if (fristQrcode) {
           this.getQrcode()
           this.setState({
             fristQrcode: false
           })
        }
        this.checklogin()
      } else {
        this.wechatList()
      }
    })
  }

  wechatList() {
    Api.get({
      url: "/wechat/login"
    }).then(res => {
      if (res.code == 200) {
        this.getInit()
        // this.getFriend()
      }
    }, err => {
      console.log(err)
    })
  }

  getInit() {
    let {
      getWeChatAccount,
      dispatchChatlist
    } = this.props
    Api.get({
      url: "/wechat/init"
    }).then(res => {
      console.log(res)
        getWeChatAccount(res.User)
        dispatchChatlist(res.ContactList)
    })
  }

  getFriend() {
    let {
      getWeFreindList
    } = this.props
    Api.get({
      url: "/wechat/contact"
    }).then(res => {
      console.log(res)
      getWeFreindList(res)
    })
  }


  getImg(parmas) {
    Api.get({
      url: "/wechat/img",
      params: {
        img: parmas.HeadImgUrl,
        title: parmas.UserName
      }
    }).then(res => {
      console.log(res)
    })
  }


  render() {
    let { wechatAccout } = this.props
    let { qrcode } = this.state
    
    return (
       <div id="weChat">
       {
         wechatAccout.Uin ? <Chat /> : <User qrcode={qrcode}/>
       }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wechatAccout: state.home.wechatAccout,
});

const mapDispatchToProps = {
  getWeChatAccount: action.getWeChatAccount,
  dispatchChatlist: chatAction.dispatchChatlist,
  getWeFreindList: friendAction.getWeFreindList
};

Home.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
