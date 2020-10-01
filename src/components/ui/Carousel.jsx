import React from 'react';

const Carousel = () => (
  <div id="carousel_fade" className="carousel slide carousel-fade mb-5" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex bg-dark justify-content-center p-4 p-md-5">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10001.png"
            alt="img1"
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex bg-dark justify-content-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png"
            alt="img2"
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex bg-dark justify-content-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt="img2"
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex bg-dark justify-content-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
            alt="img3"
          />
        </div>
      </div>
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

export default Carousel;
