import React from 'react';

const DisplayItemNumber = () => (
  <nav aria-label="Page navigation">
    <ul className="pagination pagination-lg justify-content-end">
      <li className="page-item">
        <a className="page-link" href="#">
          10
        </a>
      </li>
      <li className="page-item ">
        <a className="page-link" href="#">
          20
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          30
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          50
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">
          100
          <span className="sr-only">(current)</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default DisplayItemNumber;
