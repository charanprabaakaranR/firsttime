import React, { Component } from 'react'

export default class SecondChild extends Component {
    constructor(props){
        super(props);
        this.state = {name1 : this.props.name1,name2 : this.props.name2,name : this.props.name1}
        this.changename = this.changename.bind(this);
    }
    changename()
    {
        console.log('function called');
        if(this.state.name === this.state.name1)
        {
            this.setState({name : this.state.name2});
        }
        else
        {
            this.setState({name : this.state.name1});
                
        }
        
    }

    render() {
        return (
            <div>
                <div>
                <h1>
                    {this.state.name}
                </h1>
                <button onClick = {this.changename}>change</button>
            </div>
            </div>
        )
    }
}
