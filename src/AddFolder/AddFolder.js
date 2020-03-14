import React from 'react';
import ApiContext from '../ApiContext';
import history from '../history';
import { Route } from 'react-router-dom';





class AddFolder extends React.Component {

    static contextType = ApiContext;


    // addFolderFunc = (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:9090/folders', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name: this.state.value }),
    //     })
    //     history.goBack();
    // }



    state = {

        value: '',

    }


    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.context.addFolders(this.state.value);
    //     this.setState({
    //         value: ''
    //     })


    // }

    render() {

        console.log(this.context.notes)
        console.log(this.context.addFolders)

        return (
            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                <label htmlFor="newFolder">Name of New Folder</label>
                <input required minLength="1" maxLength="15" id="newFolder" type="text" value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
                <button type="submit">Submit New Folder</button>
            </form>
        )
    }

}



export default AddFolder;