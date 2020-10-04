import React, { Component } from 'react';

class DisplayItemNumber extends Component {
  constructor(props) {
    super(props);
    const { pageLimit = 20 } = props;

    this.state = { pageLimit};
  }

  componentDidMount() {
    this.setCurrentLimit(20);
  }

  setCurrentLimit = (pageLimit) => {
    const { onLimitChanged = (f) => f } = this.props;
    const data = {
      pageLimit,
    };

    this.setState({ pageLimit }, () => onLimitChanged(data));
  };

  handleClick = (limit) => (evt) => {
    evt.preventDefault();
    this.setCurrentLimit(limit);
  };

  render() {
    const numbers = [10, 20, 30, 50, 100];
    const { pageLimit } = this.state;
    return (
      <div className="col-md-5">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg justify-content-end">
            {numbers.map((limit, index) => (
              <li className={`page-item${pageLimit === limit ? ' active' : ''}`} key={index}>
                <a className="page-link" href="#" onClick={this.handleClick(limit)}>
                  {limit}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default DisplayItemNumber;
