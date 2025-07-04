'use client';
import React from 'react'
import { motion } from "motion/react"
import css from './card.style.module.css'
import Link from 'next/link';


interface CardProps {
    setLoaded: (loaded: boolean) => void;
}
function Card(props: CardProps) {
    return (<motion.div
        className={css.card}>
        <motion.img className={css.cardBackground} src={'./images/spiderman.png'} />
        <div className={css.cardHeading}>
            <div></div>
            <motion.span>Grishma's Cover</motion.span>
        </div>
        <div className={css.cardContent}>
            <motion.div className={css.cardSalutation}>
                <motion.span className={css.cardName}>Grishma D.</motion.span>
                <span>
                    <motion.span className={css.cardContentDesigner}>Designer</motion.span>
                    {" and "}
                    <motion.span className={css.cardContentDeveloper}>{'<'}Developer{' />'}</motion.span>
                </span>
            </motion.div>
            <div className={css.cardContentProjects}>
                <motion.span >Projects</motion.span>
                <div>
                    <motion.div><Link href={'/'}>KickStarter</Link></motion.div>
                    <motion.div><Link href={'/'}>Portfolio</Link></motion.div>
                    <motion.div><Link href={'/'}>Chef Claude</Link></motion.div>
                </div>
            </div>
            <div className={css.social}>
                <a href="https://instagram.com" onClick={() => { props.setLoaded(false) }}><motion.div animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 2.9 }} className={css.instagram} /></a>
                <a href="" onClick={() => { props.setLoaded(false) }}><motion.div animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 3.1 }} className={css.x} /></a>
                <a href="" onClick={() => { props.setLoaded(false) }}> <motion.div animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 3.3 }} className={css.email} /></a>
            </div>
        </div>
    </motion.div>
    )
}

export default Card
