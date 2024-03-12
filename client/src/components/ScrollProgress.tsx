import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)
    const { colorScrollProgress } = useSelector((state : any) => state.ai)

    const handleProgress = () => {
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let scrollTop = document.documentElement.scrollTop

        const progress = (scrollTop / height) * 100
        setScrollProgress(progress)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleProgress)
    }, [])

    return (
        <Box
            className={`fixed top-0 left-0 h-[6px] rounded-xl`}
            style = {{
                width : `${scrollProgress}%`,
                background : `${colorScrollProgress}`
            }}
        >
        </Box>
    )
}

export default ScrollProgress