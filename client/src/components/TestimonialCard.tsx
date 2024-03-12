import { TestimonialCardProps } from "../interfaces"
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { Tilt } from 'react-tilt'
import { Typography } from "antd";
import { Box } from "@chakra-ui/react";


const TestimonialCard = ({ id, image, message, name } : TestimonialCardProps) => {
    return (
        <Tilt>
            <motion.div
                className="bg-[#DCF2F1] p-3 w-[400px] rounded-xl flex flex-col cursor-pointer" style={{boxShadow : '1px 1px 10px #4CB9E7'}}
                variants={fadeIn("right", "spring", id * 0.5, 0.75)}
                initial="hidden"
                whileInView='show'
            >
                <Typography className='text-black font-black text-[48px] typography__font'>"</Typography>
                <div className="mt-1">
                    <Typography.Title 
                        className="typography__font tracking-[1px]"
                        level={5}
                        style={{ color : "#2D3250"}}
                    >
                        {message}
                    </Typography.Title>

                    <Box className='mt-7 flex justify-around items-center gap-1'>
                        <div className='flex-1 flex flex-col'>
                            <Typography className='font-medium text-[16px] typography__font'>
                                <span className='blue-text-gradient text-[#596FB7]'>@</span> {name}
                            </Typography>
                        </div>
                        <img
                            src={image}
                            alt={`feedback_by-${name}`}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                    </Box>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default TestimonialCard