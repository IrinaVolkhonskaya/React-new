import React, { Component } from 'react';

const GENDERS = {
	male: 'male',
	female: 'female',
};

const INITIAL_STATE = {
	login: '',
	email: '',
	pass: '',
	agreedToTerms: false,
	gender: GENDERS.male,
	age: ''
};

export default class SignupForm extends Component {
	state = { ...INITIAL_STATE };

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		console.log(this.state);

		this.reset();
	};

	handleAgreeChange = ({ target }) => {
		const { checked } = target;

		this.setState({
			agreedToTerms: checked,
		});
	};

	reset = () => {
		this.setState({ ...INITIAL_STATE });
	};

	render() {
		const { login, email, pass, agreedToTerms, gender, age } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="login"
					value={login}
					onChange={this.handleChange}
					placeholder="login"
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={this.handleChange}
					placeholder="email"
				/>
				<input
					type="password"
					name="pass"
					value={pass}
					onChange={this.handleChange}
					placeholder="password"
				/>

				<input
					type="checkbox"
					checked={agreedToTerms}
					onChange={this.handleAgreeChange}
				/>
				<button disabled={!agreedToTerms}>Signup as {login}</button>
				<hr />
				<section>
					<h3>Choose your gender</h3>
					<label>
						Male
						<input
							type="radio"
							checked={gender === GENDERS.male}
							name="gender"
							value={GENDERS.male}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Female
						<input
							type="radio"
							checked={gender === GENDERS.female}
							name="gender"
							value={GENDERS.female}
							onChange={this.handleChange}
						/>
					</label>
				</section>
				<label>
					Choose your age
					<select name="age" value={age} onChange={this.handleChange}>
						<option value="" disabled>
							...
						</option>
						<option value="18-25">18-25</option>
						<option value="26-35">26-35</option>
						<option value="36+">36+</option>
					</select>
				</label>
			</form>
		);
	}
}
