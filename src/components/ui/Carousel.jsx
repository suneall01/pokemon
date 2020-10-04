import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.images = [10001, 589, 459, 50, 670, 25, 100, 400];
    this.state = {
      activeItem: 5,
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div id="carousel_fade" className="carousel slide carousel-fade mb-5" data-ride="carousel">
        <div className="carousel-inner bg-dark">
          {this.images.map((id, index) => (
            <div key={index} className={`carousel-item${index == activeItem ? ' active' : ''}`}>
              <div className="d-flex justify-content-center p-4 p-md-5">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt="img1"
                />
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carousel_fade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel_fade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
