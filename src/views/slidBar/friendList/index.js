import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Scroll from "components/Scroll";
import headerAction from "../../chatContent/header/action";
import action from "./action";
import "./index.scss";

const propTypes = {
  friendList: PropTypes.array.isRequired,
  getWeFreindList: PropTypes.func.isRequired,
  setWXCHAT: PropTypes.func.isRequired,
};

class FriendList extends Component {
  constructor(props) {
    super(props);
    const { friendList, getWeFreindList } = this.props;
    console.log(friendList);
    friendList.forEach((value, index) => {
      getWeFreindList(value, index, "FRIENDLIST_LOAD");
    });
    this.state = {
      changeIndex: null,
    };
  }

  selectFriendList(item, index) {
    this.setState({
      changeIndex: index,
    });
    const { setWXCHAT } = this.props;
    setWXCHAT(item);
  }

  render() {
    const { changeIndex } = this.state;
    const { friendList } = this.props;
    return (
      <div className="friendList">
        <Scroll allowScroll={false} scrollbar="custom">
          <ul>
            {friendList.map((item, index) => {
              return (
                <li key={index} className={index === changeIndex ? "friend_list_active" : ""}>
                  <div className="friend" onClick={() => {this.selectFriendList(item, index)}}>
                    <img className="imgTitle" src={item.HeadImgUrl}/>
                      <h4 className="nickname">{item.NickName}</h4>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </Scroll>
      </div>
    );
  }
}
//   : (
//    <div className="contact_title">A</div>
//  )
const mapStateToProps = state => ({
  friendList: state.friendList.friendList,
});

const mapDispatchToProps = {
  getWeFreindList: action.getWeFreindList,
  setWXCHAT: headerAction.setWXCHAT,
};

FriendList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);