import { Box } from '@chakra-ui/react'
import Logo from '../assets/logo.png'
import { linkNavbar } from '../constants/index'
import { ButtonComponent } from './index'
import { LoginOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FaRegMoon } from 'react-icons/fa6'
import { FiSun } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../services/Slice'
import { motion } from 'framer-motion';

const Navbar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const { darkMode } = useSelector((state : any) => state.ai)
    const dispatch = useDispatch()
    const [bgNavbar, setBgNavbar] = useState('')
    
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = (window.scrollY / scrollHeight) * 100;

        if(scrollPercentage >= 4){
            setBgNavbar('#D4E7C5')
        }else {
            setBgNavbar('')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <motion.nav 
            className={`flex items-center justify-between fixed w-full h-[80px] z-50 pr-[60px] lg:pr-[90px] p-[10px] rounded-md mt-2`} 
            style={{
                background : bgNavbar,
            }}
            initial = {{
                y : -250
            }}
            animate = {{
                y : 0,
                transition : {
                    delay : 0.5,
                    type : 'spring',
                    stiffness : 350
                }
            }}
        >
            <Box className="logo__links-container flex items-center">
                <Link to={'/'}>
                    <img 
                        className='w-[73px]'
                        src={Logo} 
                        alt="Logo" 
                    />
                </Link>
            </Box>

            {/* Desktop Navigation */}
            <Box className="hidden lg:block">
                <ul className='flex items-center gap-[40px] mt-[9px]'>
                    {
                        linkNavbar.map((link) => {
                            const { name, url, id } = link
                            return (
                                <li>
                                    <a
                                        className='text-[13px] lg:text-[15px] font-bold tracking-[2px] text-[#6499E9] hover:text-[#EF9595]'
                                        key={id}
                                        href={url}
                                    >
                                        {name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </Box>
            <Box className="hidden lg:flex items-center gap-[30px] mt-[10px]">
                <ButtonComponent 
                    title={'Log In'}
                    type='dashed'
                    icon={<LoginOutlined />}
                    onClick={() => navigate('/login')}
                    color='#fff'
                    background='#EF9595'
                />
                <Box 
                    className='text-[30px] text-[#fff] border-2 cursor-pointer border-dashed p-[5px] rounded-full bg-[#EF9595]'
                    onClick={() => dispatch(actions.handleDarkModel())}
                >
                    {
                        darkMode ? <FaRegMoon/> : <FiSun/>
                    }
                </Box>
            </Box>

            {/* Mobile Navigation */}
            <div className="icon__menu block lg:hidden mt-[10px] cursor-pointer p-2 border rounded-full bg-[#EF9595]" onClick={() => setToggle(!toggle)}>
                {
                    !toggle ? 
                    <MenuOutlinedIcon className='text-[40px]'/>
                    :
                    <CloseOutlinedIcon />
                }    
            </div>
            {
                toggle && (
                    <motion.div 
                        className="flex flex-col gap-[30px] lg:hidden rounded-[40px] absolute right-[50px] h-[500px] w-[400px] mobile__navigation items-center justify-center top-[70px]"
                        initial={{
                            x : 600
                        }}
                        animate = {{
                            x : 0,
                            transition : {
                                delay : 0.3,
                                duration : 0.2,
                                type : 'spring',
                                stiffness : 250
                            }
                        }}
                    >
                        <ul className='flex flex-col items-center gap-[60px] mt-[9px]'>
                            {
                                linkNavbar.map((link) => {
                                    const { name, url, id } = link
                                    return (
                                        <li key={id}>
                                            <a
                                                className='text-[15px]'
                                                href={url}
                                                onClick={() => setToggle(false)}
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Box className="">
                            <ButtonComponent 
                                title={'Log In'}
                                icon={<LoginOutlined />}
                                type='dashed'
                                onClick={() => navigate('/login')}
                                color='#EEEEEE'
                                background='#9400FF'
                            />
                        </Box>
                    </motion.div>
                )
            }
        </motion.nav>
    )
}

export default Navbar