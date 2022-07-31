import React, { Component } from 'react'
import TextInput from './PropsStates/Textinput'
import ChildParentInvoke from './Intercomp/ChildParentInvoke'
import Context from './ContextApi/ContextApi'
import Button from './Hooks/Hook2'
import DataLoader from './Hooks/Hook4'
import UseRefDemo from './Hooks/Hook5'
import CompLifeCycle from './lifecycle/CompLifeCycle'
import StatefulApp from './PropsStates/StatefullApp'
import FamilyContext from './contextapifamily/FamilyContext'
import MyComponent from './UsingRefs'
import Axios from './Axios-example/Axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={'name':'Chai'}
    }
    render() {
        return (
            <div>
              <Axios/>
            </div>
        )
    }
}

