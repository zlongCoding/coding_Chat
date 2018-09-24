import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import headerAction from "../../chatContent/header/action";
import Scroll from "components/Scroll";
import "./index.scss";

const propTypes = {
  chatList: PropTypes.array.isRequired,
};

class ChatList extends Component {
  constructor(props) {
    super(props);
    const { message } = this.props;
    console.log(message);
    this.state = {
      chatList: [1, 2, 3, 4,5,6,7,78,9,6,4,43,,23,9,121,2],
      changeIndex: null
    }
  }

  componentDidMount() {
    // const { message } = this.props;
    // console.log(message);
  }
  selectChatList(item, index) {
    this.setState({
      changeIndex: index
    })
    let { setWXCHAT } = this.props
    setWXCHAT(item)
  }

  render() {
    let { changeIndex } = this.state
    let { chatList } = this.props
    return (
      <div className="chatList">
        <Scroll allowScroll={false} scrollbar="custom">
					    <ul>
					    	{
					    	chatList.map((item, index) => {
					    		return (
					    			<li key={index} onClick={() => {this.selectChatList(item, index)}} className={index === changeIndex ? "chat_item_active" : ""}>
                      <section>
                        <img className="imgTitle" src={'https://wx2.qq.com' + item.HeadImgUrl||"https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"}/>
                        <div className="msgDiv">
                          <p className="msgName">{item.NickName}</p>
                          <p className="msgP">{item.MMDigest}</p>
                        </div>
                      </section>
                      <section>
                        <p>{item.time}</p>
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
  chatList: state.chatList.chatList,
});

const mapDispatchToProps = {
  setWXCHAT: headerAction.setWXCHAT,
};

ChatList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);