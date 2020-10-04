import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const gender = ['male', 'female', 'genderless'];
    const region = ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar'];
    const habitat = [
      'cave',
      'forest',
      'grassland',
      'mountain',
      'rare',
      'rough-terrain',
      'sea',
      'urban',
      'water-edge',
    ];

    return (
      <div className="row mb-2">
        <div className="col">
          <div className="col collapse p-2"  id="collapseableform">
            <div>
              <label className="m-0" htmlFor="gender">
                Gender
              </label>
              <div>
                {gender.map((item, index) => (
                  <div key={index} className="form-check-inline">
                    <input type="checkbox" className="form-check-input" id={item} />
                    <label className="form-check-label" for="exampleCheck1">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="m-0" htmlFor="region">Region</label>
              <div>
                {region.map((item, index) => (
                  <div key={index} className="form-check-inline">
                    <input type="checkbox" className="form-check-input" id={item} />
                    <label className="form-check-label" for="exampleCheck1">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="m-0" htmlFor="habitat">Habitat</label>
              <div>
                {habitat.map((item, index) => (
                  <div key={index} className="form-check-inline">
                    <input type="checkbox" className="form-check-input" id={item} />
                    <label className="form-check-label" for="exampleCheck1">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
