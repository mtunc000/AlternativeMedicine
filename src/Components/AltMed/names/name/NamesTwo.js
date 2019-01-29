import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NamesTwo extends Component {
    state = {
        name: this.props.type.charAt(0).toUpperCase().concat(this.props.type.slice(1))
        
    }
    

    render() {
        const { name } = this.state
      

        const { handleClick } = this.props

       
      return <div className={name} 
      onClick={() => handleClick(name)}>{name}
    
    
      </div>;
      
      
      
    }
  }

  NamesTwo.propTypes = {
    type: PropTypes.string.isRequired
  };