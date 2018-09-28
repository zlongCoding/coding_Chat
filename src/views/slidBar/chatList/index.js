import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Scroll from "components/Scroll";
import headerAction from "../../chatContent/header/action";
import chatAction from "./action";
import "./index.scss";

const propTypes = {
  chatList: PropTypes.array.isRequired,
  getWeChatList: PropTypes.func.isRequired,
  setWXCHAT: PropTypes.func.isRequired,
};

class ChatList extends Component {
  constructor(props) {
    super(props);
    
    const { chatList, getWeChatList } = this.props;
    chatList.forEach((value, index) => {
      getWeChatList(value, index);
    });
    this.state = {
      changeIndex: null,
    };
  }
  componentWillUnmount() {
    return false
  }

  componentDidMount() {
    // console.log(1111111111)
    // let { chatList } = this.props
    // console.log(chatList)
    // chatList.forEach((item, index) => {
    //    console.log(item)
    //   //  this.getImg(item, index)
    // })

  }
  

  selectChatList(item, index) {
    this.setState({
      changeIndex: index,
    });
    const { setWXCHAT } = this.props;
    setWXCHAT(item);
  }

  render() {
    const { changeIndex } = this.state;
    const { chatList } = this.props;
    return (
      <div className="chatList">
        <Scroll allowScroll={false} scrollbar="custom">
          <ul>
            {chatList.map((item, index) => { 
              return (
                <li key={index} onClick={() => {this.selectChatList(item, index)}} className={index === changeIndex ? "chat_item_active" : ""}>
                  <section>
                    <img className="imgTitle" src={item.HeadImgUrl} />
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
  getWeChatList: chatAction.getWeChatList,
};

ChatList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);