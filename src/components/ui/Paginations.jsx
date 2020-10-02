import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Paginations extends Component {
  constructor(props) {
    super(props);
    // const { totalRecords = null, pageLimit = 20, pageNeighbours = 0 } = props;

    // this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 20;
    // this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    // // pageNeighbours can be: 0, 1 or 2
    // this.pageNeighbours =
    //   typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;

    // this.totalPages = 0;

    this.state = {
      currentPage: 1,
      totalPages: 0,
      totalRecords: 0,
      pageLimit: 20,
      pageNeighbours: 0,
    };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = (page) => {
    const { onPageChanged = (f) => f } = this.props;
    const { totalPages, totalRecords, pageLimit } = this.state;

    this.fetchPageNumbers();
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };

    this.setState({ currentPage, totalPages, pageLimit, totalRecords }, () =>
      onPageChanged(paginationData)
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pageLimit != prevProps.pageLimit) {
      this.gotoPage(this.props.currentPage);
    }
  }

  handleClick = (page) => (evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };

  fetchPageNumbers = () => {
    const { currentPage, totalRecords, pageLimit, pageNeighbours } = this.props;

    const totalPages = Math.ceil(totalRecords / pageLimit);
    this.setState({ currentPage, totalPages, pageLimit, totalRecords });

    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  render() {
    // if (!this.totalRecords || this.totalPages === 1) return null;

    const pages = this.fetchPageNumbers();
    const { currentPage } = this.state;

    return (
      <Fragment>
        <nav aria-label="Pokemons Pagination">
          <ul className="pagination pagination-lg justify-content-center">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                );

              return (
                <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                  <a className="page-link" href="#" onClick={this.handleClick(page)}>
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

Paginations.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Paginations;
