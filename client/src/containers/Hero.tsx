import React from "react"
import { Styles } from "../styles/style"
import animation from '../assets/Hero_animation.json'
import Lottie from 'lottie-react'
import { Typography } from "antd"
import { ButtonComponent } from "../components"
import { PlayCircleOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion"

const Hero = () => {
    return (
        <section 
            className={`${Styles.containerMarginTop} flex flex-col lg:flex-row items-center justify-between mt-[130px] lg:mt-[30px] xl:mt-[0px]`}
        >
            <React.Fragment>
                <motion.div 
                    className='info__container flex flex-col gap-[10px] text-center lg:text-start w-[460px] sm:w-[560px] lg:w-[600px]'
                    variants={fadeIn("right", "spring", 0.5, 0.7)}
                    initial="hidden"
                    animate='show'
                >
                    <Typography.Title
                        style={{ fontFamily : "'Roboto Slab', serif", color : "#6499E9", letterSpacing:'2px' }}
                        level={2}
                    >
                        Introducing the future of <span className="highlight">AI</span> With <br className="hidden lg:block"/>
                        Article <span className="text-[#EF9595]" style={{ fontFamily : "'Grape Nuts', cursive"}}>Extractor and Summarizer</span>
                    </Typography.Title>
                    <Typography.Title 
                        style={{ color : "#6499E9"}}
                        level={5}
                    >
                        Simplify your reading with Summize, an open-source article summarizer 
                        that transforms lengthy articles into clear and concise summaries
                    </Typography.Title>
                    <ButtonComponent
                        title="Get Started"
                        icon={<PlayCircleOutlined />}
                        background="#EF9595"
                        type="dashed"
                        onClick={() => {}}
                        color="#fff"
                    />
                </motion.div>
                <motion.div 
                    className='animation__container'
                    variants={fadeIn("left", "spring", 0.6, 0.8)}
                    initial="hidden"
                    whileInView='show'
                >
                    <Lottie 
                        animationData={animation}
                        className="w-[500px] sm:w-[600px] lg:w-[600px]"
                    />
                </motion.div>
            </React.Fragment>
            
            {/* Scroll animation */}
            <motion.div 
                className="hidden lg:flex absolute bottom-[20px] items-center justify-center w-[90%]"
                initial = {{
                    opacity : 0
                }}
                animate = {{
                    opacity : 1,
                    transition : {
                        duration : 0.6,
                        delay : 0.8
                    }
                }}
            >
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-red-400  p-2">
                        <motion.div
                            animate={{
                                y : [0, 26, 0],
                            }}
                            transition={{
                                duration : 1.5,
                                repeat : Infinity,
                                repeatType : 'loop'
                            }}
                            className='rounded-full w-3 h-3 bg-[#EF9595]'
                        />
                    </div>
                </a>
            </motion.div>

        </section>
    )
}

export default Hero