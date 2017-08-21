import React from 'react';
import FilmList from './FilmList.jsx';

class FilmBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Back to the future",
        time: "1430, 1530"
      },
      {
        id: 2,
        title: "Goonies",
        time: "1200, 1230, 1400"
      }]
    }
  }

  render(){
    return(
      <div className="film-box">
      <h2>Film Title</h2>
      <FilmList data={this.state.data}/>
      </div>
      )
  }
}

export default FilmBox;