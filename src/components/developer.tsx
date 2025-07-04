import React from 'react'
import * as motion from 'motion/react-client'
import css from './heads.module.css'

function Developer(props: { width: number }) {

    const textArray = ["<", "D", "e", "v", "e", "l", "o", "p", "e", "r", " ", "/", ">"]
    const textArraySpan = textArray.map((item, index) => {
        return (
            <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.1, delay: 3 + (index * 0.1) } }}>{item}</motion.span>
        )
    })
    return (
        <div className={css.developerContainer}
            style={{
                fontFamily: 'Consolas',
                fontSize: (props.width <= 600) ? '4rem' : '8rem',
                color: 'white',
                position: 'absolute',
                textShadow: '1px 1px 0 black'

            }}
        >
            {textArraySpan}
        </div>
    )
}

export default Developer
