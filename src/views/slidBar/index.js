import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import action from "store/home/action";
import ChatList from "./chatList";
import FriendList from "./friendList";
import Article from "./article";

import "./style.scss";

const propTypes = {
  wechatAccout: PropTypes.object.isRequired,
}

class SlidBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab: [
        "web_wechat_tab_chat",
        "web_wechat_tab_public",
        "web_wechat_tab_friends"
      ],
      selectIndex: 0
    }
  }
  
  renderList() {
    let { selectIndex } = this.state
    switch (selectIndex) {
      case 0:
        return (<ChatList />)
        break;
      case 1:
        return (<Article />)
        break;
      case 2:
        return (<FriendList />)
        break;
      default:
      return (<ChatList />)
        break;
    }
    
  }
  render() {
    let user = {}
    let { tab, selectIndex } = this.state
    let { wechatAccout } = this.props
    return (
      <section className="panel">
        <header>
          <div>
            <img className="avatar" src={(wechatAccout.HeadImgUrl ||require("./images/Bin.jpg"))}/>
            <span className="nickname">{wechatAccout.NickName || '发生法萨芬的方式'}</span>
          </div>
          <a href="javascript:;"><i className="web_wechat_add"></i></a>
        </header>
        <section className="search_bar">
          <i></i>
          <input type="text" placeholder="搜索"/>
        </section>
        <ul className="tabList">
          {tab.map((item, key) => {
            return <li key={key} onClick={() => {this.setState({
                     selectIndex: key,
                   });}}>
                <i className={`${item} ${key === selectIndex ? item + '_h' : ''}`} />
              </li>
          })}
        </ul>
        {
          this.renderList()
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  wechatAccout: state.home.wechatAccout,
});

const mapDispatchToProps = {
  // getMessage: action.getMessage,
};

SlidBar.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SlidBar);