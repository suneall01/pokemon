/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/header.scss';

const Header = ({ title, filter }) => (
  <header className="blog-header py-3 mb-2">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4">
        <a className="blog-header-logo text-dark" href="#">
          {title}
        </a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <div className={`dropdown ${filter}`}>
          <a
            className="text-muted"
            href="#"
            aria-label="Filter"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="mx-3"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <title>Filter</title>
              <line x1="2" y1="2" x2="18" y2="2" />
              <line x1="6" y1="8" x2="15" y2="8" />
              <line x1="9" y1="14" x2="12" y2="14" />
            </svg>
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">
              Name
            </a>
            <a className="dropdown-item" href="#">
              Gender
            </a>
            <a className="dropdown-item" href="#">
              Habitat
            </a>
            <a className="dropdown-item" href="#">
              Region
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
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
