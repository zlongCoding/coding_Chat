import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import action from "store/home/action";
import "./style.scss";
import Header from "../header"
const propTypes = {
};

class Content extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="chat_content">
        <Header />
        <section id="chat_content_msglist">
           <ul>
             <li>
               
               <div className="clearfix">
                 <div className="chat_message me">
                   <div className="chat_message_system">
                       <div className="chat_content_time">2:21</div>
                   </div>
                   <img className="chat_avatar" src={"https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"}/>
                   <div className="chat_content_msg">
                     {/* <div className="bubble  bubble_default"> */}
                     <div className="bubble  bubble_primary">
                       <div className="bubble_cont">
                         <div className="plain">
                           <pre className="content_chat_pre">fafasfaf</pre>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </li>
           </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

Content.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Content);
