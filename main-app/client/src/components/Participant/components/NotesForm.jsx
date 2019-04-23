import React from 'react';


class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: ''
        }
    }

    onChange = event => {
        this.setState({notes: event.target.value})
    }

    mySubmitFunction = event => {
        event.preventDefault()
        if (this.state.notes && this.props.onSubmit) {
            this.props.onSubmit(this.state.notes)
        }
        this.setState({notes: ''})
    }

    render() {
        return (
            <form className="form-notes" onSubmit={this.mySubmitFunction}>
                <label className="label">Add notes:</label>
                    <textarea
                        className='form-textarea'
                        placeholder = "Notes" 
                        value={this.state.notes}
                        onChange={this.onChange}
                        name="" id="" cols="30" rows="10" 
                    />
                
                <button className="system-button" type="submit">Submit</button>        
            </form>
        )
    }
}

export default NotesForm;