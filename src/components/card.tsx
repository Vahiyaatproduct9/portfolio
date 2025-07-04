'use client';
import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { presentCard, componentopacity } from '@/files/animations';
import css from './card.style.module.css'
import Link from 'next/link';


interface CardProps {
    setLoaded: (loaded: boolean) => void;
}
function Card(props: CardProps) {
    return (<motion.div variants={presentCard} initial="hidden" animate="visible" transition={{
        duration: 0.5,
        delay: 1.1,
        ease: 'easeInOut'
    }}
        className={css.card}>
        <motion.img className={css.cardBackground} src={'./images/spiderman.png'} />
        <div className={css.cardHeading}>
            <div></div>
            <motion.span variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 1.5 }}>Grishma's Cover</motion.span>
        </div>
        <div className={css.cardContent}>
            <motion.div variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 1.7 }} className={css.cardSalutation}>
                <motion.span variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 1.8 }} className={css.cardName}>Grishma D.</motion.span>
                <span>
                    <motion.span variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 1.9 }} className={css.cardContentDesigner}>Designer</motion.span>
                    {" and "}
                    <motion.span variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 2 }} className={css.cardContentDeveloper}>{'<'}Developer{' />'}</motion.span>
                </span>
            </motion.div>
            <div className={css.cardContentProjects}>
                <motion.span variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 2.1 }} >Projects</motion.span>
                <div>
                    <motion.div variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 2.3 }}><Link href={'/'}>KickStarter</Link></motion.div>
                    <motion.div variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 2.5 }}><Link href={'/'}>Portfolio</Link></motion.div>
                    <motion.div variants={componentopacity} initial="shuru" animate="animate" transition={{ duration: 0.4, delay: 2.7 }}><Link href={'/'}>Chef Claude</Link></motion.div>
                </div>
            </div>
            <div className={css.social}>
                <a href="https://instagram.com" onClick={() => { props.setLoaded(false) }}><motion.div variants={componentopacity} initial="shuru" animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 2.9 }} className={css.instagram} /></a>
                <a href="" onClick={() => { props.setLoaded(false) }}><motion.div variants={componentopacity} initial="shuru" animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 3.1 }} className={css.x} /></a>
                <a href="" onClick={() => { props.setLoaded(false) }}> <motion.div variants={componentopacity} initial="shuru" animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 3.3 }} className={css.email} /></a>
            </div>
        </div>
    </motion.div>
    )
}

export default Card
