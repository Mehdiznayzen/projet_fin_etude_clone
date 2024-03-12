import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const handleVisibleBtn = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPourcentage = (window.scrollY / scrollHeight) * 100
        
        if(scrollPourcentage >= 10){
            setVisible(true)
        }else {
            setVisible(false)
        }
    }

    const handleScrollTop = () => {
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleBtn)
    }, [])

    return (
        <Box className="fixed bottom-[40px] right-[7px] sm:right-[30px] lg:right-[40px]">
            {
                visible && (
                    <motion.button
                        className="flex items-center justify-center w-[44px] h-[44px] bg-[#EF9595] rounded-xl transition-all"
                        onClick={handleScrollTop}
                        animate = {{
                            scale:[0.8, 1.1]
                        }}
                        transition = {{
                            duration : 0.7,
                            repeat:Infinity,
                            repeatType:'reverse',
                            ease:'linear'
                        }}
                    >
                        <BsFillArrowUpCircleFill 
                            className="text-[26px] text-white"
                        />
                    </motion.button>
                )
            }
        </Box>
    )
}

export default ScrollButton