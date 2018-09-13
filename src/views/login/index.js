import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import action from "store/action";

const propTypes = {
  isLogin: PropTypes.string.isRequired,
  Logins: PropTypes.func.isRequired,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      error: "",
      codeMessage: "登陆",
    };
  }

  componentDidMount() {
    const { Logins } = this.props;
    Logins();
  }

  setValue(e) {
    const { name, value } = e.target;
    this.setState({
      [`${name}`]: value,
    });
  }

  submit() {
    const { name, password } = this.state;
    console.log(name);
    console.log(password);
  }

  code() {
    const { codeMessage } = this.state;
    if (codeMessage === "登陆") {
      this.setState({
        codeMessage: "注册",
      });
    } else {
      this.setState({
        codeMessage: "登陆",
      });
    }
  }

  render() {
    const { isLogin } = this.props;
    const { error, codeMessage } = this.state;
    return (
      <div className="login">
        <div className="loginPointer">
          <h1>{codeMessage}Coding Chat</h1>
          <div className="textLine">
            <div>用户名：</div>
            <input type="text" placeholder="用户名" name="name" onChange={(e) => { this.setValue(e); }} />
          </div>
          <div className="textLine">
            <div>密码：</div>
            <input type="password" placeholder="密码" name="password" onChange={(e) => { this.setValue(e); }} />
          </div>
          <div className="register">
            <span>{error}</span>
            <span onClick={() => this.code()}>{codeMessage === "登陆" ? "注册" : "登陆"}</span>
          </div>
          <div>
            <button type="button" onClick={() => this.submit()}>{codeMessage}</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.app.isLogin,
});

const mapDispatchToProps = {
  Logins: action.Login,
};

Login.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
