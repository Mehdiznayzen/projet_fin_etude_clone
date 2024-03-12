import { Typography } from "antd"
import { Styles } from "../styles/style"
import { Box } from "@mui/material"
import { VerticalTimeline } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { benifts } from "../constants";
import { BenifitsCard } from "../components";
import { Testimonials } from ".";


const Features = () => {
    return (
        <section
            id='features'
            className={`${Styles.containerMarginTop} mt-[100px] lg:mt-[0px]`}
        >
            <Box className="text__container flex flex-col text-center lg:text-start">
                <Typography.Title
                    className="typography__font tracking-[3px]"
                    style={{
                        color : "#6499E9"
                    }}
                    level={3}
                >
                    What is The Benifits Of <br />
                    <span className="text-[56px] tracking-[4px]">AI Summarizer</span>
                </Typography.Title>
            </Box>
            <Box
                className=''
            >
                <VerticalTimeline>
                    {
                        benifts.map((item) => {
                            const { benifit, icon, iconBg, id, subTitle, title } = item
                            return (
                                <BenifitsCard
                                    benifit = {benifit}
                                    icon={icon}
                                    id={id}
                                    title={title}
                                    subTitle={subTitle}
                                    iconBg={iconBg}
                                />
                            )
                        })
                    }
                </VerticalTimeline>
            </Box>
            <Testimonials />
        </section>
    )
}

export default Features