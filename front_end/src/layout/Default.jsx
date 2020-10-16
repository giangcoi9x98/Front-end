import React, { Component } from 'react'
import SeacrchAppBar from '../view/utils/AppBar'

export default class Default extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <SeacrchAppBar></SeacrchAppBar>
                <main style={{paddingTop:50,height:'100%',justifyContent:'center',alignItems:'center'}}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
