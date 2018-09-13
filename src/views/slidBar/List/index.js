import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import action from "store/chatBar/action";

const propTypes = {
  message: PropTypes.number.isRequired,
};

class List extends Component {
  constructor(props) {
    super(props);
    const { message } = this.props;
    console.log(message);
  }

  componentDidMount() {
    const { message } = this.props;
    console.log(message);
  }

  render() {
    return (
      <div>aaaa</div>
    );
  }
}

const mapStateToProps = state => ({
  _id_list: state.chatBar.listIndex,
});

const mapDispatchToProps = {
  getIndex: action.getIndex,
};

List.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(List);