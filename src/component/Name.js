import React, { Component } from 'react'
import SecondChild from './SecondChild';

export default class Name extends Component {
    constructor(){
        super();
        this.state = {name1 : 'sharvappu',name2 : 'charan'}
    }
    render() {
        return (
            <div>
                <h1>
                    <SecondChild name1 = {this.state.name1} name2 = {this.state.name2}/>
                    <SecondChild name1 = 'ganesh' name2 = 'tida' />
                </h1>
            </div>
        )
    }
}
