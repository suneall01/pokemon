/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/header.scss';

class Header extends Component {
  handleTextChange = (e) => {
    const { onTextChange, onTextChanged } = this.props;
    onTextChange(e.target.value);
    onTextChanged(e.target.value);
  };

  render() {
    const { title } = this.props;
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-white text-uppercase" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control-dark w-100 mx-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => this.handleTextChange(e)}
        />
      </nav>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
