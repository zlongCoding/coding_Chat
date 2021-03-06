import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import action from "store/action";
import Api from "utils/api";

const propTypes = {
  // user: PropTypes.object.isRequired,
  // Login: PropTypes.func.isRequired,
};

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this)
    this.state = {
      name: "",
      password: "",
      error: "",
      codeMessage: "登陆",
    };
  }

  componentDidMount() {
    const { setUser, user } = this.props;
    // setUser();
    console.log(user)
  }

  setValue(e) {
    const { name, value } = e.target;
    this.setState({
      [`${name}`]: value,
    });
  }

  submit() {
    const { name, password, codeMessage } = this.state;
    console.log(name);
    console.log(password);
    if (codeMessage === "登陆") {
      Api.post({
        url: "/account/login",
        data: {
          username: name,
          password: password
        }
      }).then(res => {
        if (res.code === 200) {
          this.props.history.push('/')
        } else {
          this.setState({
            error: res.data.msg
          })
        }
      })
    } else {
      Api.post({
        url: "/account/register",
        data: {
          username: name,
          password: password
        }
      }).then(res => {
        if (res.code === 200) {
          this.props.history.push('/')
        } else {
          this.setState({
            error: res.msg
          })
        }
      })
    }
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
    // const { isLogin } = this.props;
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
  user: state.app.user,
});

const mapDispatchToProps = {
  Login: action.Login,
};

Login.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
