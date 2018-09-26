import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Scroll from "components/Scroll";
import headerAction from "../../chatContent/header/action";
import action from "../friendList/action";

const propTypes = {
  publicList: PropTypes.array.isRequired,
  getWeFreindList: PropTypes.func.isRequired,
  setWXCHAT: PropTypes.func.isRequired,
};

class Article extends Component {
  constructor(props) {
    super(props);
    const { publicList, getWeFreindList } = this.props;
    console.log(publicList);
    publicList.forEach((value, index) => {
      getWeFreindList(value, index, "PUBLICLIST_LOAD");
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
    const { publicList } = this.props;
    return (
      <div className="friendList">
        <Scroll allowScroll={false} scrollbar="custom">
          <ul>
            {publicList.map((item, index) => {
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
  publicList: state.friendList.publicList,
});

const mapDispatchToProps = {
  getWeFreindList: action.getWeFreindList,
  setWXCHAT: headerAction.setWXCHAT,
};

Article.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Article);
