import React, {Component} from 'react';

export default class NoteEditor extends Component {
    state= {
        text: ''
    }

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
    }; 

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);

        this.props.onSubmit(this.state.text);

        this.setState({ text: '' });
    };

    render() {
        const { text } = this.state;

        return (
          <form onSubmit={this.handleSubmit}>
             <input
                type="text" 
                name="text" 
                value={text} 
                onChange={this.handleChange} 
                />
             <button>Add note</button>
          </form>
        )
    }
}
