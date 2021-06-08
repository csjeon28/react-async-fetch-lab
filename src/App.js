// create your App component here
import React, { Component } from 'react'

const api_url = 'http://api.open-notify.org/astros.json';
class App extends Component {

    state = {
        peopleInSpaceList: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpaceList.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch(api_url)
            .then(resp => resp.json())
            .then(({ people }) => this.setState({ peopleInSpaceList: people }))
    }
}

export default App;