import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import PropTypes from "prop-types";
import Api from "utils/api";
import User from "../user";
import Chat from "../chat";

import action from "./action";
import chatAction from "../slidBar/chatList/action";
import friendAction from "../slidBar/friendList/action";

const propTypes = {
  wechatAccout: PropTypes.object.isRequired,
  getWeChatAccount: PropTypes.func.isRequired,
  dispatchChatlist: PropTypes.func.isRequired,
  dispatchFreindList: PropTypes.func.isRequired,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fristQrcode: true,
      qrcode: "",
      contactList: [],
    };
  }

  componentDidMount() {
    this.checklogin();
  }

  getQrcode() {
    Api.get({
      url: "/wechat/qrcode",
    }).then((res) => {
      this.setState({
        qrcode: res,
      });
    });
  }

  getImg(parmas) {
    Api.get({
      url: "/wechat/avator",
      params: {
        img: parmas.HeadImgUrl,
        title: parmas.UserName,
      },
    }).then((res) => {
      const { wechatAccout, getWeChatAccount } = this.props;
      const Obj = Object.assign({}, wechatAccout);
      Obj.HeadImgUrl = `data:image/jpeg;base64, ${res}`;
      getWeChatAccount(Object.assign({}, Obj));
    });
  }

  getFriend() {
    const { dispatchFreindList } = this.props;
    Api.get({
      url: "/wechat/contact",
    }).then((res) => {
      dispatchFreindList(res);
    });
  }

  // getImgs(parmas, index, array) {
  //   Api.get({
  //     url: "/wechat/avator",
  //     params: {
  //       img: parmas.HeadImgUrl,
  //       title: parmas.UserName,
  //     },
  //   }).then((res) => {
  //     const { chatList, dispatchChatlist } = this.props;
  //     array[index].HeadImgUrl = 'data:image/jpeg;base64,' + res
      
  //   })
  // }
  getInit() {
    const { getWeChatAccount, dispatchChatlist } = this.props;
    Api.get({
      url: "/wechat/init",
    }).then((res) => {
      this.setState({
        contactList: res.ContactList,
      });
      this.getFriend();
      dispatchChatlist(res.ContactList);
      getWeChatAccount(res.User);
      this.getImg(res.User);
    });
  }

  wechatList() {
    Api.get({
      url: "/wechat/login",
    }).then((res) => {
      if (res.code === 200) {
        this.getInit();
        // this.getFriend()
      }
    }, (err) => {
      console.log(err);
    });
  }

  checklogin() {
    Api.get({
      url: "/wechat/checklogin",
    }).then((res) => {
      if (res.code !== 200) {
        const { fristQrcode } = this.state;
        if (fristQrcode) {
          this.getQrcode();
          this.setState({
            fristQrcode: false,
          });
        }
        this.checklogin();
      } else {
        this.wechatList();
      }
    });
  }

  render() {
    const { wechatAccout } = this.props;
    const { qrcode, contactList } = this.state;
    return (
      <div id="weChat">
        { wechatAccout.Uin ? <Chat contactList={contactList} /> : <User qrcode={qrcode} /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wechatAccout: state.home.wechatAccout,
  // chatList: state.chatList.chatList,
});

const mapDispatchToProps = {
  getWeChatAccount: action.getWeChatAccount,
  dispatchChatlist: chatAction.dispatchChatlist,
  dispatchFreindList: friendAction.dispatchFreindList,
  // getWeChatList: chatAction.dispatchChatlist,
};

Home.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
