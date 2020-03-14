import React from 'react';
import ApiContext from '../ApiContext';


class AddNote extends React.Component {

    static contextType = ApiContext;

    date = new Date();

    addNoteFunc = (e) => {
        e.preventDefault();
        fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                modified: this.date,
                folderId: this.props.match.params.folderId,
                content: this.state.content
            }),
        }

        )
    }

    state = {

        name: '',
        modified: '',
        folderId: '',
        content: ''

    }

    render() {


        return (

            <form onSubmit={(e) => { this.addNoteFunc(e) }}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <label htmlFor="content">Content</label>
                <input id="content" value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
                <button type="submit">Add New Note</button>
            </form>
        )
    }

}




export default AddNote;