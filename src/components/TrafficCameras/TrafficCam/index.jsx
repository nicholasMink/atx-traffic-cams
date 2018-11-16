import React, { Component } from 'react'

export class TrafficCamera extends Component {

  render() {
    return (
      <div className={ this.props.classStyle }>
        <img 
          src={ this.props.imageUrl } 
          onError={(e) => {e.target.onError = null; e.target.src='https://lh5.googleusercontent.com/srRvzIlNW6n-ZoKpPANQDP3fuGj-_vWKL4gAHevPzMciEqHY0Tm4UX2D2km-mMieyMOzDI5CjGzBTJCCAvLe=w1366-h623'}} 
          alt={ this.props.imageAlt } 
        />
        <p>{ this.props.location }</p>
        <a href={ this.props.link }>View More</a>
      </div>
    )
  }
}

export default TrafficCamera
