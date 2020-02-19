import React, { Component } from 'react'

import Header from '../Header/Header'
import Main from './Main'

class Events extends Component {
    render() {
        return (
            <div className="event">
                <Header />
                <div>
                    <div>Circle</div>
                    <div><Main /></div>
                    <div>Side List</div>
                </div>
            </div>
        )
    }
}

export default Events
