import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeCourse(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleChangeGrade(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(event) {
    event.preventDefault();
    const resetGrade = {
      name: '',
      course: '',
      grade: ''
    };
    this.props.onReset(resetGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Add Grade</h2>
        <form className="d-flex flex-column" onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <input required type="text" name="name" placeholder="Student Name" value={this.state.name} onChange={this.handleChangeName}/>
          <input required type="text" name="course" placeholder="Student Course" value={this.state.course} onChange={this.handleChangeCourse}/>
          <input required type="text" name="grade" placeholder="Student Grade" value={this.state.grade} onChange={this.handleChangeGrade}/>
          <div>
            <input type="submit" value="Submit" className="btn btn-success"/>
            <input type="reset" value="Cancel" className="btn btn-light"/>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
