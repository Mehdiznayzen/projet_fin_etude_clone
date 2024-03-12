import { Box } from '@chakra-ui/react'
import { Typography } from 'antd'
import { testimonialInfo } from '../constants'
import { TestimonialCard } from '.'



const Testimonials = () => {
    return (
        <Box
            className={`mt-[60px] rounded-xl p-[40px] flex flex-col gap-[20px]`}
            id="testimonials"
        >
            <Box className="text__container text-center">
                <Typography.Title
                    className="typography__font tracking-[3px]"
                    style={{
                        color : "#6499E9"
                    }}
                    level={3}
                >
                    What Others Say <br />
                    <span className="text-[46px] sm:text-[56px] tracking-[4px]">Testimonials.</span>
                </Typography.Title>
            </Box>
            <Box className="flex flex-wrap lg:flex-row justify-center lg:justify-between gap-7">
                {
                    testimonialInfo.map((item) => {
                        const { id, image, message, name } = item
                        return (
                            <TestimonialCard
                                id={id}
                                image={image}
                                message={message}
                                name={name}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Testimonials