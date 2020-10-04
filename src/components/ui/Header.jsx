/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/header.scss';

const Header = ({ title, filter }) => (
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
      className="form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="#">
          Search
        </a>
      </li>
    </ul>
  </nav>
);

Header.defaultProps = {
  title: '',
  filter: '',
};

Header.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
};

export default Header;
