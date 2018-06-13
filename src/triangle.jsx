import React from 'react'
import Draggable from 'react-draggable'

export default class Triangle extends React.Component {

    constructor() {
        super()
    }

    render() {
        const { points, color } = this.props
        const pt = points.map(p => p.join(',')).join(' ')

        return <Draggable><polygon points={pt} style={{ fill: color }} onClick={this.props.onClick}/></Draggable>
    }

}
