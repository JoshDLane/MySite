import React, {useState, useEffect} from "react"
import { useSpring, animated, useTransition } from 'react-spring'
import textToSVG from 'text-to-svg'


function LoadingIcon() {
    const AnimFeTurbulence = animated('feTurbulence')
    const AnimFeDisplacementMap = animated('feDisplacementMap')
    const[ loadDone, setLoadDone ] = useState(false)
    const { freq, scale, transform, opacity } = useSpring({
        from: { scale:5, opacity: 0, transform: 'scale(1)', t:0, freq: '0.0, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(.8)', t:0, freq: '0.035, 0.0',  },
        config: { duration: 8000 },
        // onRest: () => {setLoadDone(true)}

    })
    const {o} = useSpring({
        from: {o:0},
        o:4,
        config: {duration: 4000}
    })
    return (
        <div>
            <animated.svg width="100%" height="100%" viewBox="0 0 186 139" style={{opacity: o.interpolate([0.1, 1, 2, 3, 4], [0, 1, 1, .3, 0])}}>
                <defs>
                    <filter id="water">
                        <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1" result="TURB" seed="8" />
                        <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
                    </filter>
                </defs>
                <g filter="url(#water)" fontFamily="Zapfino" fontSize={100}>
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

export default LoadingIcon
