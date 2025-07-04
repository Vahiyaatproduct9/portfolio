'use client'
import React, { useEffect, useRef, useState } from 'react'
import css from './overview.style.module.css'
import * as motion from 'motion/react-client'
import skills from '../../../files/skills'

function Overview() {
    const [width1, setWidth1] = useState(400)
    const [width2, setWidth2] = useState(400)
    const [width3, setWidth3] = useState(400)
    const overviewContentChild1 = useRef<HTMLDivElement>(null)
    const overviewContentChild2 = useRef<HTMLDivElement>(null)
    const overviewContentChild3 = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const overviewContentChildElement1 = overviewContentChild1.current;
        if (overviewContentChildElement1 && typeof overviewContentChildElement1.offsetHeight === 'number') {
            setWidth1(overviewContentChildElement1.offsetHeight);
        }
        const overviewContentChildElement2 = overviewContentChild2.current;
        if (overviewContentChildElement2 && typeof overviewContentChildElement2.offsetHeight === 'number') {
            setWidth2(overviewContentChildElement2.offsetHeight);
        }
        const overviewContentChildElement3 = overviewContentChild3.current;
        if (overviewContentChildElement3 && typeof overviewContentChildElement3.offsetHeight === 'number') {
            setWidth3(overviewContentChildElement3.offsetHeight);
        }
    }, [])
    const skillBoxes = skills.map((skill, index) => {
        return (
            <div>
                <div className={css.SkillsContentBodyImage}>
                    <img src={skill.image} />
                </div>
                <div className={css.SkillsContentBodyBody}>
                    {skill.name}
                </div>
            </div>
        )
    })

    return (

        <div className={css.body}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className={css.overviewHead}>
                <span>Overview</span>
            </motion.div>
            <div className={css.overviewContent}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }} className={css.Projects} >
                    <div ref={overviewContentChild1}>
                        <motion.section style={{
                            width: width1 - 20
                        }} className={css.ChildHead}>
                            Projects
                        </motion.section>
                        <section className={css.ChildContent}>
                            <div className={css.ProjectChildContent}>
                                <div className={css.ProjectChildContentHead}>
                                    <a href='https://kickstarter.com'> KickStarter <span>↗</span></a>
                                </div>
                                <div className={css.ProjectChildContentContent}>
                                    <p><b>KickStarter</b> is a next-gen social app built for creative minds to drop, share, and remix ideas across tech, fashion, design, cosmetics, and more.
                                        <br />Think: the chaotic brilliance of <b>4chan</b> threads, the inspo power of <b>Pinterest</b>, and the clean scroll-worthy vibe of <b>Instagram</b> — all mashed into one. Users can post their ideas, join topic-based threads, and vibe with a community that actually gets creativity. It’s not just another app — it’s the place where raw ideas become the next big thing.</p>
                                </div>
                            </div>
                            <div className={css.ProjectChildContent}>
                                <div className={css.ProjectChildContentHead}>
                                    <a href='https://mlpredictor.com' rel='blank'> ML Predictor <span>↗</span></a>
                                </div>
                                <div className={css.ProjectChildContentContent}>
                                    <p><b>KickStarter</b> is a next-gen social app built for creative minds to drop, share, and remix ideas across tech, fashion, design, cosmetics, and more.
                                        <br />Think: the chaotic brilliance of <b>4chan</b> threads, the inspo power of <b>Pinterest</b>, and the clean scroll-worthy vibe of <b>Instagram</b> — all mashed into one. Users can post their ideas, join topic-based threads, and vibe with a community that actually gets creativity. It’s not just another app — it’s the place where raw ideas become the next big thing.</p>
                                </div>
                            </div>
                            <div className={css.ProjectChildContent}><div className={css.ProjectChildContentHead}>
                                <a href='https://stylemorph.com'> StyleMorph <span>↗</span></a>
                            </div>
                                <div className={css.ProjectChildContentContent}>
                                    <p><b>KickStarter</b> is a next-gen social app built for creative minds to drop, share, and remix ideas across tech, fashion, design, cosmetics, and more.
                                        <br />Think: the chaotic brilliance of <b>4chan</b> threads, the inspo power of <b>Pinterest</b>, and the clean scroll-worthy vibe of <b>Instagram</b> — all mashed into one. Users can post their ideas, join topic-based threads, and vibe with a community that actually gets creativity. It’s not just another app — it’s the place where raw ideas become the next big thing.</p>
                                </div></div>
                        </section>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }} className={css.Skills}>
                    <div ref={overviewContentChild2}>
                        <section style={{
                            width: width2 - 20
                        }} className={css.ChildHead}>
                            Skills
                        </section>
                        <section className={css.ChildContent}>
                            <div className={css.SkillsContentBody}>
                                {skillBoxes}
                            </div>
                        </section>
                    </div>
                    <div className={css.dummyDiv}></div>

                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }} className={css.Achievements}>
                    <div ref={overviewContentChild3}>
                        <section style={{
                            width: width3 - 20
                        }} className={css.ChildHead}>
                            Achievements
                        </section>
                        <section className={css.ChildContent}>
                            No Achievements Yet :{'('}
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Overview
