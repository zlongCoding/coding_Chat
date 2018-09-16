import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import User from "../user";
import Chat from "../chat"
import Api from "utils/api";

const propTypes = {
};

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      userState: true
    }
  }
  componentDidMount() {
  //  Api.get({
  //    url: "/wechat/qrcode"
  //  })
  }

  render() {
    let { userState } = this.state
    return (
       <div id="weChat">
       {
         userState ? <User /> : <Chat />
       }
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

Home.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
