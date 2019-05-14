import React from 'react';
import NotesForm from "./NotesForm";
import "./Notes.scss";

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: ''
        }

    };

    onSubmit = notes => {
        this.setState({notes: [...this.state.notes, " ", notes]});  
      }

    render() {
        return (
            <div className="container">
                <div className="section-title ">Notes</div>
                <div>
                    <div className="content-container">
                        {this.state.notes}
                    </div>
                    <div className="buttons">
                    <NotesForm onSubmit = {this.onSubmit} />
                    </div>
                </div>
                
                
            </div>
            
        );
    }
}

export default NotesContainer