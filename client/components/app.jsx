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

  render() {
    return (
      <div className='container'>
        <PageTitle text='Student Grade Table'/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
