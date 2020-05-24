import React from "react"
import { useSpring, animated } from 'react-spring'


function MyLogo() {
    const opacitySpring = useSpring({
        from: {opacity:0},
        to: {opacity:1},
        delay:3000
    })
    return (
        <div>
            <animated.svg width="100%" height="100%" viewBox="0 0 186 139" style={opacitySpring}>
                <g fontFamily="Zapfino" fontSize={100}>
                    <text fill="#4ABDAC" transform="translate(32 -76)">
                        <tspan x={0} y={188}>
                            {"J"}
                        </tspan>
                    </text>
                    <text fill="#FFFF" transform="translate(32 -76)">
                        <tspan x={41} y={207}>
                            {"L"}
                        </tspan>
                    </text>
                </g>
            </animated.svg>
        </div>

    )
}

export default MyLogo
