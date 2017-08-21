import React from 'react';

class Film extends React.Component {
  render(){
    return(
      <div className="film">
      <h4 className="filmTitle">{this.props.title}</h4>
      <h5>{this.props.children}</h5>
      </div>
      );
  }
}

export default Film;