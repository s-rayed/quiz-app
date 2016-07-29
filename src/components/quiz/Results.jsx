import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {
  render() {
    var percent = ((this.props.score / this.props.questions.length) * 100)
    if(percent > 80){
      var message = 'Good job';
    } else if(percent < 80 && percent > 60){
      var message = 'Meh, thats okay';
    } else {
      var message = 'You suck. I advise you to close the browser and never touch your laptop again';
    }
    return(
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length} correct!</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Try again?</a>
      </div>
    )
  }
}

export default Results;