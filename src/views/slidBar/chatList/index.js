import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import action from "store/chatBar/action";
import Scroll from "components/Scroll";
import "./index.scss";

const propTypes = {
  // message: PropTypes.number.isRequired,
};

class ChatList extends Component {
  constructor(props) {
    super(props);
    const { message } = this.props;
    console.log(message);
    this.state = {
      chatList: [1, 2, 3, 4,5,6,7,78,9,6,4,43,,23,9,121,2],
      changeIndex: 0
    }
  }

  componentDidMount() {
    // const { message } = this.props;
    // console.log(message);
  }
  selectChatList(item, index) {
    console.log(index)
    this.setState({
      changeIndex: index
    })
  }

  render() {
    let { chatList, changeIndex } = this.state
    return (
      <div className="chatList">
        <Scroll allowScroll={false} scrollbar="custom">
					    <ul>
					    	{
					    	chatList.map((item, index) => {
					    		return (
					    			<li key={index} onClick={() => {this.selectChatList(item, index)}} className={index === changeIndex ? "chat_item_active" : ""}>
                      <section>
                        <img className="imgTitle" src={item.user||"https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"}/>
                        <div className="msgDiv">
                          <p className="msgName">fafafa</p>
                          <p className="msgP">我没法说麻烦吗</p>
                        </div>
                      </section>
                      <section>
                        <p>2:11</p>
                      </section>
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

ChatList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);