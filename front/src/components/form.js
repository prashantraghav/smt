import React from 'react';

const Form = (props) => {
	return (
		<form className="create-case">
			<div className="form-group">
				<label>Reference Number</label>
				<input type="text" name="ref" />
			</div>
			<div className="form-group">
				<label>Candidate Name</label>
				<input type="text" name="name" />
			</div>
			<div className="form-group">
				<label>Personal Id</label>
				<input type="text" name="id" />
			</div>
			<div className="form-group">
				<label>Years</label>
				<input type="text" name="years" />
			</div>
			<div className="form-group">
				<button type="submit" name="submit" >Submit</button>
			</div>
		</form>
	)
}

export default Form;
