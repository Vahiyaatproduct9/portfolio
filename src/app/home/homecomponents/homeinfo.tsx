'use effect'
import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import css from './homeinfo.module.css'
function HomeInfo() {
    return (
        <div className={css.body}>
            <span>This is the Home Page</span>

        </div>
    )
}

export default HomeInfo
