import rnd from 'random'
import colorName from 'color-name'
import pickRandom from 'pick-random'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'

import React from 'react'
import Triangle from './triangle.jsx'


const COLORS = Object.keys(colorName)

export default class App extends React.Component {

    constructor() {
        super()

        this.state = {
            triangles: []
        }
    }

    setTriangles(targetN) {
        const { triangles } = this.state

        if (triangles.length > targetN) {
            // Trim the array
            this.setState({ 
                triangles: triangles.slice(0, targetN),
            })
        }
        else if (triangles.length < targetN) {
            // Generate new triangles and append them
            // to the list
            const delta = targetN - triangles.length
            const newTriangles = []
            for(let j = 0; j < delta; j++)
                newTriangles.push({
                    vertices: this.genTriangle(1000, 1000),
                    color: pickRandom(COLORS)
                })
            this.setState({
                triangles: triangles.concat(newTriangles),
            })
        }
    }

    genTriangle(maxX, maxY, radius = 40) {
        // Pick a center point
        const cx = rnd.uniform(0, maxX)()
        const cy = rnd.uniform(0, maxY)()

        const nd = rnd.normal(radius, radius/2)
        const rang = rnd.uniform(0, Math.PI*2)

        // Pick three distances and three angles
        const vertexPolar = [
            [ nd(), rang()],
            [ nd(), rang() ],
            [ nd(), rang() ]
        ]

        // Convert polar coordinates (from center) to cartesian
        const vertex = vertexPolar.map(vp => ([
            cx + vp[0]*Math.cos(vp[1]),
            cy + vp[0]*Math.sin(vp[1])
        ]))

        return vertex

    }

    componentDidMount() {
        this.setTriangles(1)
        console.log(this.state)
    }

    render() {
        return <div>
            <Slider 
                min={10} 
                max={10000}
                onChange={v => this.setTriangles(v)}
                />
            <svg width="100%" height="1000">
                { this.state.triangles.map((t, idx) => <Triangle 
                    points={t.vertices}
                    color={t.color}
                    key={idx}/>) }
            </svg>

            </div>
    }

}
