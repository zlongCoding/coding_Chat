import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import action from "store/home/action";
import "./style.scss";

const propTypes = {
};

class SendMessage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="send_message">
       <div id="toolbar">
         <a href="javascript:;" className="web_wechat_face" title="表情"></a>
         <a href="javascript:;" className="web_wechat_screencut" title="未开发的截图"></a>
         <a href="javascript:;" className="web_wechat_pic" title="图片和文件"></a>
       </div>
       <div id="enditorContent">
         <pre contentEditable="true" className="msg_editor"></pre>
       </div>
       <div className="send_type">
         <span>按下Cmd+Enter换行</span>
         <button>发送</button>
       </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

SendMessage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
