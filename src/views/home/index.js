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
   this._isMounted = true;

  }
  componentDidMount() {
    console.log(this._isMounted)
    // Api.get({
    //   url: "/account"
    // }).then(res => {
    //   console.log(res.data.msg)
    //   if (this._isMounted) {
    //   this.setState({
    //     userState: false
    //   })
    // }
    // })
  }
  componentWillUnmount() {
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
