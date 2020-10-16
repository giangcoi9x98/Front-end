import React, { Component } from 'react'
import SearchAppBar from '../view/utils/AppBar'
export default class User extends Component {
    render() {
        return (
            <div style={{ flex: 1 }}>
                <main style={{}}>    
                    <SearchAppBar></SearchAppBar> 
                        {this.props.children}
                </main>
            </div>
        )
    }
}

