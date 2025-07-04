'use client'
import React from 'react'
import css from './dualheads.module.css'
import * as motion from 'motion/react-client'

function DualHeads(props: { x: number, y: number }) {
    let y = props.y;
    let x = props.x;
    return (
        <motion.div>
            <motion.svg className={css.svg} height={y} width={x}>

                <path className={css.path} d={`
                    M ${x},0
                    L ${x},${y}
                    L 0,${y},
                    Q ${x / 4},${y / 2} ${x / 2},${y / 2}
                    Q ${x * (3 / 4)},${y / 2} ${x},0
                    Z
                    `} />
            </motion.svg>
        </motion.div>
    )
}

export default DualHeads
