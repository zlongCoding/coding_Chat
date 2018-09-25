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
    const { chatList } = this.props;
    console.log(chatList);
    this.state = {
      changeIndex: null
    }
  }

  componentDidMount() {
    // let { chatList } = this.props
    // console.log(chatList)
    // chatList.forEach((item, index) => {
    //    console.log(item)
    //   //  this.getImg(item, index)
    // })

  }
  getImg(parmas, index) {
    Api.get({
      url: "/wechat/avator",
      params: {
        img: parmas.HeadImgUrl,
        title: parmas.UserName
      }
    }).then(res => {
      let {
        chatList,
        dispatchChatlist
      } = this.props
      let Obj = [...chatList]
      Obj[index].HeadImgUrl = 'data:image/jpeg;base64,' + res
      dispatchChatlist(obj)
    })
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
    console.log(chatList)
    return (
      <div className="chatList">
        <Scroll allowScroll={false} scrollbar="custom">
					    <ul>
					    	{
					    	chatList.map((item, index) => {
					    		return (
					    			<li key={index} onClick={() => {this.selectChatList(item, index)}} className={index === changeIndex ? "chat_item_active" : ""}>
                      <section>
                        <img className="imgTitle" src={item.HeadImgUrl}/>
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