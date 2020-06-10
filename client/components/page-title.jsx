import React from 'react';

function PageTitle(props) {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-8'>Student Grade Table</h1>
        <h2 className='col-sm'>Average Grade <span className='badge badge-secondary'>{props.average}</span></h2>
      </div>
    </div>
  );
}

export default PageTitle;
