import React from 'react'
import Draggable from 'react-draggable'

export default class Triangle extends React.Component {

    constructor() {
        super()
    }

    render() {
        const { points, color } = this.props
        const pt = points.map(p => p.join(',')).join(' ')

        const t = selected => <polygon 
            points={pt} 
            style={{ fill: color, stroke: selected? 'black' : null }} 
            onClick={this.props.onClick}/>
        const el = this.props.selected?
            <Draggable>{t(true)}</Draggable> :
            t(false)

        return el
    }

}
