import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [],
      region: [],
      habitat: [],
      currentFilter: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.gender.length < props.gender.length) {
      return {
        gender: [...props.gender],
        region: [...props.region],
        habitat: [...props.habitat],
      };
    }
    return null;
  }

  onHandleClick = (clicked) => (e) => {
    e.preventDefault();
    const { onFilterClick = (f) => f } = this.props;
    console.log(e.target.value);
    console.log(clicked);
    const currentFilter = e.target.value;
    const data = {
      clicked,
      currentFilter,
    };

    this.setState({ currentFilter }, () => onFilterClick(data));
  };

  render() {
    const { gender, region, habitat, currentFilter } = this.state;

    return (
      <div className="row mb-2">
        <div className="col">
          <div className="col collapse p-2" id="collapseableform">
            <div>
              <label className="m-0" htmlFor="gender">
                Gender
              </label>
              <div>
                {gender.map((item, index) => (
                  <div key={index} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item.name}
                      onChange={this.onHandleClick('gender')}
                      checked={currentFilter == item.name}
                    />
                    <label className="form-check-label" htmlFor="gender">
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="m-0" htmlFor="region">
                Region
              </label>
              <div>
                {region.map((item, index) => (
                  <div key={index} className="form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item.name}
                      onChange={this.onHandleClick('pokedex')}
                      checked={currentFilter == item.name}
                    />
                    <label className="form-check-label" htmlFor="region">
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="m-0" htmlFor="habitat">
                Habitat
              </label>
              <div>
                {habitat.map((item, index) => (
                  <div key={index} className="form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item.name}
                      onChange={this.onHandleClick('pokemon-habitat')}
                      checked={currentFilter == item.name}
                    />
                    <label className="form-check-label" htmlFor="habitat">
                      {item.name}
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

export default Filters;
