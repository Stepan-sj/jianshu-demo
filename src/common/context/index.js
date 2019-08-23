import React from 'react'
import { getConsoleOutput } from '@jest/console';

const context = React.createContext('light');

class father extends React.Component{
    render(){
        console.log(this.a)
        return (
            <context.Provider value={{a:1}}>
                <Child></Child>
            </context.Provider>
        )
    }
}

class Child extends React.Component{
    render(){
        return (
            <Childchild></Childchild>
        )
    }
}

class Childchild extends React.Component{
    static contextType = context
    render(){
        // console.log(this.context.a)
        return (
            <div>children</div>
        )
    }
}

export default father;