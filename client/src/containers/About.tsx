import { Styles } from "../styles/style"
import aboutImage from '../assets/about04-removebg-preview.png'
import { Typography } from "antd"
import { ButtonComponent } from "../components"
import InfoIcon from '@mui/icons-material/Info';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion"


const About = () => {
    return (
        <section 
            className={`${Styles.containerMarginTop} flex w-full flex-col items-center justify-center gap-[40px]`}
            id="about"
        >
            <motion.div 
                style={{
                    border : "3px solid #492E87"
                }}
                className="w-[170px] flex items-center justify-between p-[7px] rounded-xl"
                variants={fadeIn('up', 'spring', 0.3, 0.3)}
                animate='hidden'
                whileInView={'show'}
            >
                <div className="w-[15px] h-[15px] rounded-full bg-[#EF9595]"/>
                <Typography
                    className="typography__font text-[20px] font-semibold tracking-[3px] animation"
                    style={{
                        color : "#492E87"
                    }}
                >
                    About
                </Typography>
                <div className="w-[15px] h-[15px] rounded-full bg-[#EF9595]"/>
            </motion.div>
            <div 
                className="flex flex-col lg:flex-row items-center gap-[40px]"
            >
                <motion.div
                    variants={fadeIn('right', 'spring', 0.7, 0.2)}
                    animate='hidden'
                    whileInView={'show'}
                >
                    <img 
                        src={aboutImage}
                        className="w-[700px]"
                    />
                </motion.div>
                <motion.div
                    className="w-[460px] sm:w-[560px] lg:w-[600px] flex flex-col gap-[20px]"
                    variants={fadeIn('left', 'spring', 0.5, 0.2)}
                    animate='hidden'
                    whileInView={'show'}
                >
                    <Typography.Title
                        className="typography__font text-center"
                        level={2}
                        style={{
                            color : "#6C22A6"
                        }}
                    >
                        ChatGPT Summarizer
                    </Typography.Title>
                    <Typography.Title 
                        className="typography__font text-center"
                        level={5}
                        style={{
                            color : "#6499E9"
                        }}
                    >
                        Welcome to ChatGPT Summarizer, an innovative service that makes life easier by generating instant summaries for websites. 
                        Simply provide a page URL, and our intelligent API will create a concise and informative summary. Whether you need 
                        to summarize articles, blogs, or reports, ChatGPT Summarizer lets you quickly get the gist without having to read 
                        the entire content. Save time and quickly access key information with our text summarization tool powered by the 
                        power of AI. To try is to adopt it!
                    </Typography.Title>
                    <ButtonComponent
                        color="#fff"
                        title="More About It"
                        type="dashed"
                        background="#EF9595"
                        icon={<InfoIcon />}
                        onClick={() => {}}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default About