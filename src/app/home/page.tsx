'use client'
import React, { useEffect, useState } from 'react'
import css from './home.module.css'
import { motion, useTransform, useScroll, useMotionValueEvent, AnimatePresence, useMotionValue, vh } from 'motion/react'
import { opacity } from '@/files/animations'
import Card from '@/components/cardContinuos'
import DualHeads from '@/components/dualheads'
import Designer from '@/components/designer'
import Developer from '@/components/developer'
import HomeInfo from './homecomponents/homeinfo'
import Overview from './homecomponents/overview'
function Home() {
    const [loaded, setLoaded] = useState(false)
    const [randomposition, setRandomPosition] = useState({ x: 0, y: 0 })
    const [y, setY] = useState<number>(1260)
    function getrandomposition(x: number, y: number) {
        setInterval(() => { setRandomPosition({ x: ((Math.random()) * x), y: ((Math.random()) * y) }) }, 3000)
    }
    useEffect(() => {
        setLoaded(true)

    }, [])
    getrandomposition(100, 100)
    let { scrollY } = useScroll()
    let height = useTransform(scrollY, [0, y], [260, y + 20])
    let width = useTransform(scrollY, [0, y], [260, window.innerWidth + 20])
    let borderRadius = useTransform(scrollY, [0, y], [500 + 'px', 0 + 'px'])
    let spanOpacity = useTransform(scrollY, [0, y - 701, y - 700, y], ['rgba(0, 17, 71,' + 0.6 + ')', 'rgba(0, 17, 71,' + 1 + ')', 'linear-gradient(' + 72 + 'deg, rgb(41, 0, 117), rgb(0,17,71))', 'linear-gradient(' + 252 + 'deg, rgb(0, 162, 255), rgb(0,17,71))'])
    let x = useTransform(scrollY, [0, y], [40, 140])
    let Opacity = useTransform(scrollY, [0, y - 200], [1, 0])
    let isShown = useTransform(scrollY, [0, y], [1, 0])
    let isCentered = useTransform(scrollY, [0, y * 1.5], [0, 1])
    return (
        <div className={css.body}>
            <motion.div className={css.cardcontainer} style={{ justifyContent: isCentered.get() < 0.5 ? 'space-around' : 'center' }}>
                <motion.div style={{ rotate: isCentered.get() * 3 + 'deg' }} whileHover={{ rotateZ: -3 }}>{window.innerWidth > 600 ? <Card setLoaded={setLoaded} /> : null}</motion.div>
                <motion.div style={{ width: (1 - isCentered.get()) * 500 }} className={css.dummydiv} />
            </motion.div>
            <div className={css.container}>

                <motion.div initial={{
                    x: -200, y: -100,
                    opacity: 0
                }} animate={{
                    borderRadius: randomposition.x + '%',
                    opacity: 1,
                    x: -200 + randomposition.x,
                    y: -100 + randomposition.y,
                    transition: {
                        duration: 3,
                        ease: 'easeInOut'
                    }
                }} className={`${css.blob} + ${css.b1} + bg-sky-600 h-[80%] w-[60%]`}></motion.div>
                <motion.div initial={{
                    x: 200, y: -100,
                    opacity: 0
                }} animate={{
                    borderRadius: randomposition.x + '%',
                    opacity: 1,
                    x: 200 + randomposition.x * 0.6,
                    y: -100 + randomposition.y * 1.5,
                    transition: {
                        duration: 1,
                        ease: 'easeInOut'
                    }
                }} className={`${css.blob} + ${css.b2} + bg-blue-900 h-[40%] w-[30%]`}></motion.div>
                <motion.div initial={{
                    x: 300, y: -200,
                    opacity: 0
                }} animate={{
                    borderRadius: randomposition.x + '%',
                    opacity: 1,
                    x: 300 + randomposition.x * 1.2,
                    y: -200 + randomposition.y * 1.5,
                    transition: {
                        duration: 1,
                        ease: 'easeInOut'
                    }
                }} className={`${css.blob} + ${css.b3} + bg-blue-900 h-[20%] w-[60%]`}></motion.div>
                <motion.div initial={{
                    x: 300, y: 200,
                    opacity: 0
                }} animate={{
                    borderRadius: randomposition.x + '%',
                    opacity: 1,
                    top: 300 + randomposition.x * 1.2,
                    y: -100 + randomposition.y * 1.5,
                    transition: {
                        delay: 2,
                        duration: 2,
                        ease: 'easeInOut'
                    }
                }} className={`${css.blob} + ${css.b4} + bg-blue-900 h-[50%] w-[30%]`}></motion.div>
                <motion.div className={css.containerchild} variants={opacity} initial="hidden" animate="visible">
                    <section className='absolute top-0 left-0 w-full h-full' style={{ zIndex: -1 }}>
                        <div className={css.headContainer}>
                            <motion.div style={{ paddingLeft: x }} className={css.DesignerContainer}>
                                <Designer x={(window.innerWidth > 678) ? 600 : window.innerWidth} y={(window.innerWidth > 768) ? 167 : 100} />
                            </motion.div>
                            <div className={css.and}>
                                <motion.span
                                    initial={{
                                        x: -130,
                                        y: -130,
                                        height: 0,
                                        width: 0,
                                        borderRadius: 0,
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        height: [0, 260],
                                        width: [0, 260],
                                        borderRadius: '100%',
                                        background: 'rgba(0, 17, 71,0.6)',
                                        transition: {
                                            content: { delay: 4.1, duration: 0.1 },
                                            x: { delay: 3, duration: 0.7 },
                                            y: { delay: 3, duration: 0.7 },
                                            height: { delay: 3, duration: 0.7 },
                                            width: { delay: 3, duration: 0.7 },
                                            borderRadius: { delay: 4, duration: 0.4 }
                                        }
                                    }}
                                    style={{
                                        height,
                                        width,
                                        borderRadius,
                                        background: spanOpacity,
                                        overflow: 'hidden'
                                    }}>
                                    <AnimatePresence>
                                        {isShown.get() > 0.1 ? (<motion.span initial={{ opacity: 0 }} animate={{
                                            opacity: 1, transition: {
                                                opacity: { delay: 4.5, duration: 0.1 }
                                            }
                                        }} exit={{
                                            y: -30,
                                            opacity: 0,
                                            transition: {
                                                opacity: {
                                                    duration: 2,
                                                    delay: 0
                                                }
                                            }
                                        }} style={{ opacity: Opacity }}>
                                            &
                                        </motion.span>) : (
                                            <motion.div initial={{ opacity: 0, }}
                                                animate={{
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.7
                                                    }
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.7
                                                    }
                                                }}>
                                                <Overview />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.span>
                            </div>
                            <motion.div style={{ paddingRight: x }} className={css.DeveloperContainer}>
                                <Developer width={window.innerWidth} />
                            </motion.div>
                        </div>
                        <DualHeads x={window.innerWidth} y={y} />

                    </section>
                </motion.div>
            </div>
            <HomeInfo />
        </div>
    )
}

export default Home
