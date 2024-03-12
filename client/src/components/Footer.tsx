import logo from '../assets/logo.png'
import { Typography } from "antd"
import { icons__footer, linkNavbar } from "../constants"
import { Link } from "react-router-dom"
import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box
            className="flex flex-col justify-center gap-[30px] h-[300px] my-[70px] lg:my-0"
        >

            {/* Links and social media */}
            <Box className="flex flex-col lg:flex-row gap-[20px] items-center justify-center lg:justify-between">
                <div className="logo__container flex flex-col gap-[10px] w-[100%]">
                    <img 
                        src={logo} 
                        alt="logo-footer"
                        className="w-[100px]" 
                    />
                    <Typography.Title
                        level={5}
                        className="typography__font"
                        style={{
                            color : "#6499E9"
                        }}
                    >
                        Mehdi Znayzen Company for <br />
                        <span className='text-[#596FB7] text-[24px]'>
                            Summarize URL's
                        </span>
                    </Typography.Title>
                </div>
                <div className="links-container flex justify-between w-full lg:justify-end gap-[140px]">
                    <div className="footer_links flex flex-col gap-[10px]">
                        <Typography.Title
                            className="typography__font tracking-[2px]"
                            style={{
                                color : "#6499E9"
                            }}
                            level={4}
                        >
                            Company
                        </Typography.Title>
                        <ul className="flex flex-col items-start gap-[15px]">
                            {
                                linkNavbar.map((link) => {
                                    const { id, name, url } = link
                                    return (
                                        <li
                                            key={id}
                                            className='text-[#596FB7]'
                                        >
                                            <a 
                                                href={url}
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="footer_links flex flex-col gap-[10px]">
                        <Typography.Title
                            className="typography__font tracking-[2px]"
                            style={{
                                color : "#6499E9"
                            }}
                            level={4}
                        >
                            Follow Us
                        </Typography.Title>
                        <ul className="flex flex-col items-start gap-[12px]">
                            {
                                icons__footer.map((icon__link) => {
                                    const { icon, id, url, text } = icon__link
                                    return (
                                        <Link
                                            to={url}
                                            key={id}
                                            target="_blank"
                                            className="text-[#596FB7]"
                                        >
                                            {icon} {text}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Box><hr />

            {/* Copy Right */}
            <Box
                className='flex flex-col gap-[20px] items-center justify-center'
            >
                <div className="droit__container text-center">
                    <Typography.Title
                        level={5}
                        className="typography__font"
                        style={{
                            color : "#6499E9"
                        }}
                    >
                        &copy; Copyright. All rights reserved.
                    </Typography.Title>
                </div>
            </Box>
        </Box>
    )
}

export default Footer