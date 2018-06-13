import React from 'react'

export default class Triangle extends React.Component {

    constructor() {
        super()
    }

    render() {
        const { points, color } = this.props
        const pt = points.map(p => p.join(',')).join(' ')

        return <polygon points={pt} style={{ fill: color }}/>
    }

}
