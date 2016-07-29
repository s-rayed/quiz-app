import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/ScoreBox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'ReactJS is an MVC based framework?',
          choices: [
            {
              id: 'a',
              text: 'True'
            },
            {
              id: 'b',
              text: 'False'
            },
            {
              id: 'c',
              text: 'WTF IS MVC?'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'Which of the following concepts is/are key to ReactJS?',
          choices: [
            {
              id: 'a',
              text: 'Component-oriented design'
            },
            {
              id: 'b',
              text: 'Event delegation model'
            },
            {
              id: 'c',
              text: 'Both of the above'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'Which of the following needs to be updated to achieve dynamic UI updates?',
          choices: [
            {
              id: 'a',
              text: 'Props'
            },
            {
              id: 'b',
              text: 'State'
            },
            {
              id: 'c',
              text: 'The entire DOM fool'
            }
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: '`div` defined within render method is an actual DOM div element',
          choices: [
            {
              id: 'a',
              text: 'True'
            },
            {
              id: 'b',
              text: 'False'
            },
            {
              id: 'c',
              text: 'Never thought about it ..... give me a sec........... maybe?'
            }
          ],
          correct: 'b'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render() {
    if(this.state.current > this.state.questions.length){
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    )
  }
}

export default App;