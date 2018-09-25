import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appAction from 'store/action';
import LoginChecker from 'components/hoc/LoginChecker';
import Home from "views/home"
const propTypes = {
  isLogin: PropTypes.bool.isRequired,
  checkoutLogin: PropTypes.func.isRequired
};


class BasicLayout extends Component {
  constructor(props) {
    super(props);
    let { checkoutLogin, isLogin } = this.props
    checkoutLogin()
  }
  componentDidMount() {
  }
  
  render() {
    const { isLogin } = this.props;
    return (
      <LoginChecker isLogin = {isLogin}>
          <Home />
      </LoginChecker>
    );
  }
}

const mapStateToProps =state => ({
  isLogin: state.app.isLogin,
});
const mapDispatchToProps = {
  checkoutLogin: appAction.checkoutLogin,
};

BasicLayout.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
