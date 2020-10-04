import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GameIndices extends Component {
  render() {
    const { gameIndices } = this.props;
    return (
      <div>
        {gameIndices.map((item, index) => (
          <div key={index} className="accordion" id={`accordion${index}`}>
            {/* <div className="card"> */}
            <div className="card-header" id={`heading${index}`}>
              <h2 className="mb-0">
                <a
                  className="btn btn-link btn-block text-left text-capitalize"
                  // type="link"
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded={`${index == 0 ? 'true' : 'false'}`}
                  aria-controls={`collapse${index}`}
                >
                  {item.version.name}
                </a>
              </h2>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${index == 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent={`#accordion${index}`}
            >
              <div className="card-body p-2">
                <p className="mb-0">Game Index: {item.game_index}</p>
              </div>
            </div>
          </div>
          //   </div>
        ))}
      </div>
    );
  }
}
