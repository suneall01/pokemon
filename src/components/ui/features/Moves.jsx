import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Moves extends Component {
   
    render() {
        const { moves } = this.props
        return (
            <div>
              {moves.map((item, index) => (
                <div key ={index} className="accordion" id={`accordion${index}`}>
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
                          {item.move.name}
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
                        {item.version_group_details.map((value, new_index) => (
                            <div key={new_index} className="pt-1">
                               <p className="mb-0">Learned Method: {value.move_learn_method.name} </p>     
                               <p className="mb-0">Version Group: {value.version_group.name} </p>     
                               <p className="mb-0">Learned At: {value.level_learned_at} </p>     
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
              //   </div>
              ))}
            </div>
          );
    }
}
