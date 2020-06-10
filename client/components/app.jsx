import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades });
      });
  }

  getAverage() {
    const grades = this.state.grades;
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
      total += grades[i].grade;
    }
    const avg = Math.trunc((total / grades.length));
    return avg;
  }

  render() {
    return (
      <div className='container'>
        <PageTitle average={this.getAverage()}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
