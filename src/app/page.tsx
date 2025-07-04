'use client';
import css from '../files/main.module.css'
import { opacity, presentHeading } from '../files/animations'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Card from '@/components/card';
const Home = () => {
  const [loaded, setLoaded] = useState(false)
  const [parentshow, setParentShow] = useState(true)
  let top = useMotionValue(576)
  useEffect(() => {
    setLoaded(true)
  }, [])
  const router = useRouter()
  const handleRedirect = useCallback((href: string, time: number) => {
    setLoaded(false)
    setTimeout(() => {
      setParentShow(false),
        setTimeout(() => router.push(href), time)
    }, 500)
  }, [])

  return (
    <motion.div key={"home"} variants={opacity} initial="hidden" animate="visible" transition={{
      duration: 0.4,
      ease: 'easeInOut'
    }} className={css.container}>
      <motion.div key="heading" variants={presentHeading} initial="hidden" animate="visible" transition={{
        delay: 0.4,
        duration: 0.6,
        ease: 'easeInOut'
      }} exit="exit" className={css.headingContainer}>
        <span className={css.Heading}>Grishma's Cover</span>
        <span className={css.SubHeading}>Die Trying</span>
      </motion.div>
      <AnimatePresence>
        {parentshow && (

          <motion.div key={"cardContainer"}
            initial={{ opacity: 1 }}
            exit={{
              y: -200,
              height: '100%',
              top: 200,
              opacity: 0.99,
              transition: {
                delay: 0, duration: 0.4,
                opacity: { duration: 10 }
              }
            }}
            className={css.cardContainer}>
            <AnimatePresence>

              <motion.div className={css.containerCover} style={!loaded ? { top } : { top: 'auto' }}>
                <Card setLoaded={setLoaded} />
                <motion.div className={css.exploreContainer} initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4, delay: 0 } }}>
                  {loaded && (<div >
                    <button onClick={() => { handleRedirect('/home', 500) }}>Explore</button>
                  </div>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
