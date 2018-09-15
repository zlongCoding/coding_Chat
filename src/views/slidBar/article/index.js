import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./style.scss";

const propTypes = {

}

class Article extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <section className="article">
        <p className="ico_loading">暂无文章</p>
      </section>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

Article.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Article);