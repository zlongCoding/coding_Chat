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
};

class SlidBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        "web_wechat_tab_chat",
        "web_wechat_tab_public",
        "web_wechat_tab_friends",
      ],
      selectIndex: 0,
    };
  }
  
  renderList() {
    const { selectIndex } = this.state;
    switch (selectIndex) {
      case 0:
        return (<ChatList />);
      case 1:
        return (<Article />);
      case 2:
        return (<FriendList />);
      default:
        return (<ChatList />);
    }
  }

  render() {
    const { tab, selectIndex } = this.state;
    const { wechatAccout } = this.props;
    return (
      <section className="panel">
        <header>
          <div>
            <img className="avatar" src={wechatAccout.HeadImgUrl} alt="头像" />
            <span className="nickname">{wechatAccout.NickName}</span>
          </div>
          <a href="javascript:void(0);">
            <i className="web_wechat_add" />
          </a>
        </header>
        <section className="search_bar">
          <i />
          <input type="text" placeholder="搜索" />
        </section>
        <ul className="tabList">
          {tab.map((item, index) => {
            return (
              <li key={index} 
                onClick={() => {this.setState({
                       selectIndex: index,
                       });}}>
                <i className={`${item} ${index === selectIndex ? `${item}_h` : ''}`} />
              </li>);
          })}
        </ul>
        {
          this.renderList()
        }
      </section>
    );
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