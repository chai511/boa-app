import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.email}</h3>
            </div>
        )
    }
}
