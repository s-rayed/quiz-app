import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/ScoreBox.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Brad'
            },
            {
              id: 'c',
              text: 'Steven'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
            {
              id: 'a',
              text: 'Sara'
            },
            {
              id: 'b',
              text: 'Sue'
            },
            {
              id: 'c',
              text: 'Donna'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Bob'
            },
            {
              id: 'b',
              text: 'Harry'
            },
            {
              id: 'c',
              text: 'Wayne'
            }
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'What is your best friends name?',
          choices: [
            {
              id: 'a',
              text: 'John'
            },
            {
              id: 'b',
              text: 'Paul'
            },
            {
              id: 'c',
              text: 'Jerry'
            }
          ],
          correct: 'a'
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
    return(
      <div>
        <Scorebox {...this.state} />
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      </div>
    )
  }
}

export default App;