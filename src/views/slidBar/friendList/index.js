import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import action from "store/chatBar/action";
import Scroll from "components/Scroll";
import "./index.scss";

const propTypes = {
  // message: PropTypes.number.isRequired,
};

class FriendList extends Component {
  constructor(props) {
    super(props);
    const { message } = this.props;
    console.log(message);
    this.state = {
      friendList: [1, 2, 3, 4,5,6,7,78,9,6,4,43,,23,9,121,121,423,21,121,2121,2],
      changeIndex: 0
    }
  }

  componentDidMount() {
    // const { message } = this.props;
    // console.log(message);
  }
  selectFriendList(item, index) {
    console.log(index)
    this.setState({
      changeIndex: index
    })
  }

  render() {
    let { friendList, changeIndex } = this.state
    return (
      <div className="friendList">
        <Scroll allowScroll={false} scrollbar="custom">
					    <ul>
					    	{
					    	friendList.map((item, index) => {
					    		return (
                    <li key={index} className={index === changeIndex ? "friend_list_active" : ""}>
                      {
                         item > 5 ? (
                           <div className="friend" onClick={() => {this.selectFriendList(item, index)}}>
                             <img className="imgTitle" src={item.user||"https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"}/>
                             <h4 className="nickname">法法发顺丰分散</h4>
                           </div>
                         ) : (
                           <div className="contact_title">A</div>
                         )
                      }
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

const mapStateToProps = state => ({
  // _id_list: state.chatBar.listIndex,
});

const mapDispatchToProps = {
  // getIndex: action.getIndex,
};

FriendList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);