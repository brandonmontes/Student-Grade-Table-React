import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: 0
    };
  }

  componentDidMount() {
    this.getGrades();
    this.getAverage();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades });
      });
  }

  getAverage() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        let total = 0;
        for (let i = 0; i < grades.length; i++) {
          total += grades[i].grade;
        }
        const avg = Math.trunc((total / grades.length));
        this.setState({ average: avg });
      });
  }

  render() {
    return (
      <div className='container'>
        <PageTitle average={this.state.average}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
