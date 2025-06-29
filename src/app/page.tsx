'use client';
import Main from './home/page'
import css from '../files/main.module.css'
import { opacity, presentHeading, presentCard, componentopacity } from '../files/animations'
import { motion, spring } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const Home = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <motion.div variants={opacity} initial="hidden" animate="visible" exit={{

    }} transition={{
      duration: 0.4,
      ease: 'easeInOut'
    }} className={css.container}>
      <motion.div variants={presentHeading} initial="hidden" animate="visible" transition={{
        delay: 0.4,
        duration: 0.6,
        ease: 'easeInOut'
      }} className={css.headingContainer}>
        <span className={css.Heading}>Grishma's Cover</span>
        <span className={css.SubHeading}>Die Trying</span>
      </motion.div>
      <motion.div className={css.cardContainer}>
        <motion.div variants={presentCard} initial="hidden" animate="visible" transition={{
          duration: 0.5,
          delay: 1.1,
          ease: 'easeInOut'
        }} className={css.card}>
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
              <a href=""><motion.div variants={componentopacity} initial="shuru" animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1, type: spring } }} transition={{ duration: 0.4, delay: 2.9 }} className={css.instagram} /></a>
              <a href=""><motion.div variants={componentopacity} initial="shuru" animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 3.1 }} className={css.x} /></a>
              <a href=""> <motion.div variants={componentopacity} initial="shuru" animate={{ opacity: 0.7, y: 0 }} whileHover={{ opacity: 1, transition: { delay: 0, duration: 0.1 } }} transition={{ duration: 0.4, delay: 3.3 }} className={css.email} /></a>
            </div>
          </div>

        </motion.div>
        <div className={css.exploreContainer}>
          <Link href={"/home"}>Explore</Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
