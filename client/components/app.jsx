import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addGrades = this.addGrades.bind(this);
    this.deleteGrades = this.deleteGrades.bind(this);
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
    if (grades.length === 0) {
      return 'N/A';
    } else {
      let total = 0;
      for (let i = 0; i < grades.length; i++) {
        total += grades[i].grade;
      }
      const avg = Math.trunc(total / grades.length);
      return avg;
    }
  }

  addGrades(newStudent) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent)
    })
      .then(res => res.json())
      .then(newGrade => {
        const grades = this.state.grades.slice();
        grades[grades.length] = newGrade;
        this.setState({ grades });
      });
  }

  deleteGrades(Id) {
    let eventTarget = null;
    const grades = this.state.grades.slice();
    for (let i = 0; i < grades.length; i++) {
      if (Id === grades[i].id) {
        eventTarget = grades[i];
        break;
      }
    }
    fetch(`/api/grades/${Id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(rs => {
        grades.slice(eventTarget, 1);
        this.setState({ grades });
      });
    this.getGrades();
  }

  render() {
    return (
      <div className='container'>
        <PageTitle average={this.getAverage()}/>
        <div className='d-flex justify-content-between'>
          <GradeTable grades={this.state.grades} deleteGrades={this.deleteGrades}/>
          <GradeForm onSubmit={this.addGrades}/>
        </div>
      </div>
    );
  }
}

export default App;
