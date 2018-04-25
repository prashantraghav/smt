import React from 'react';

const List = (props) => {
    return (
      <div className="row list-of-candidates">
	<div className="row heading-4 candidate">
	  <div className="ref-no">Refrence No.</div>
	  <div className="name-and-uid">Name and Personal Id</div>
	  <div className="years">Years</div>
	  <div className="status">Status</div>
	  <div className="action">Action</div>
	</div>
	<div className="row candidate">
	  <div className="ref-no">1001</div>
	  <div className="name-and-uid">Prashant Raghav</div>
	  <div className="years">2016 - 2018</div>
	  <div className="status">Partially Completed</div>
	  <div className="action">View Result</div>
	</div>
      </div>
    )
  }

export default List;
