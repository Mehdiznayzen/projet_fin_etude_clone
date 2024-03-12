import { Box } from "@chakra-ui/react"
import {
    HomeFilled,
    LogoutOutlined,
    ContactsOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, Typography, Form, Input, Select } from 'antd';
import { useEffect, useState } from "react";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Lottie from "lottie-react";
import animation from '../assets/lottieFiles_dashboard.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLazyGetSummaryQuery } from "../api/SummarizeApi";
import loader from '../assets/loader.svg'
import { SentencesToGenerate, howToUse } from "../constants";
import animationHowToUse from '../assets/how_to_use_animation.json'
import copyIcon from '../assets/copy.svg'
import tickIcon from '../assets/tick.svg'

const { Sider, Content } = Layout;
const toastOptions = {
    position: "top-right" as "top-right",
    autoClose : 8000,
    pauseOnHover : true,
    draggable : true,
    theme : 'dark'
}

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const [valuesForm , setValuesForm] = useState({ url : '', language : 'EN' })
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()
    const [summaryText, setSummaryText] = useState('')
    const [sentenceGenerate, setSentenceGenerate] = useState('')
    const [showHowToUse, setShowHowToUse] = useState(false) 
    const [copied, setCopied] = useState(false)

    // function for generating some sentences
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * SentencesToGenerate.length)
        const randomSentence = SentencesToGenerate[randomNumber]
        setSentenceGenerate(randomSentence.sentence)
        setInterval(() => {
            const randomNumber = Math.floor(Math.random() * SentencesToGenerate.length)
            const randomSentence = SentencesToGenerate[randomNumber]
            setSentenceGenerate(randomSentence.sentence)
        }, 4000)
    }, [])

    // function for validate the form
    const handleValidate = () => {
        if(valuesForm.url === '' || valuesForm.language === ''){
            toast.error('You need to fill the fields first !!', toastOptions)
            return false
        }
        return true
    }
    
    // function for submiting the data
    const handleFinish = async () => {
        if(handleValidate()){
            const { data } = await getSummary({ url : valuesForm.url, language : valuesForm.language.toLowerCase()})
            setSummaryText(data?.summary)
            setValuesForm({
                url : '',
                language : 'EN'
            })
        }
    }

    // The Date of the today
    const today = new Date()
    const year = today.getFullYear()

    // Get Month name 
    const monthName = today.toLocaleDateString('en-US', { month: 'long' });

    // Get Day name
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[today.getDay()];

    // Get The date 
    const numberDay = today.getDate()

    // function for handle copy the text summary
    const handleCopy = (copyText : any) => {
        setCopied(true)
        navigator.clipboard.writeText(copyText)

        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }

    return (
        <Box 
            className={`summarizer_section min-h-screen`}
        >
            <Layout className="min-h-screen">
                <Sider 
                    trigger={null} 
                    collapsible collapsed={collapsed} 
                    style={{ 
                        display : 'flex',
                        flexDirection : 'column',
                        justifyContent : 'space-between',
                        background : '#fff',
                    }}
                >
                    <Box className="flex flex-col gap-[30px]">
                        <Box className="img_logo w-full flex flex-col items-center justify-center">
                            <img src={logo} alt="logo" className="w-[100px] my-4" />
                            <Typography.Title 
                                level={5} 
                                className="typography__font tracking-[2px]"
                                style={{ color : "#5BC1CD" }}
                            >
                                AI Summarizer
                            </Typography.Title>
                        </Box>
                        <Box className="flex items-center justify-center">
                            <div className="flex items-center justify-center bg-[#5BC1CD] w-[80%] rounded-3xl h-[5px]" />
                        </Box>
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <SpaceDashboardIcon />,
                                    label: 'Summarize',
                                    style:{color : '#5BC1CD'},
                                    onClick : () => { setShowHowToUse(false)}
                                },
                                {
                                    key: '2',
                                    icon: <HomeFilled />,
                                    label: 'Home',
                                    onClick : () => navigate('/'),
                                    style:{color : '#5BC1CD'}
                                },
                                {
                                    key: '3',
                                    icon: <HowToVoteIcon />,
                                    label: 'How to use',
                                    style:{color : '#5BC1CD'},
                                    onClick : () => { setShowHowToUse(true)}
                                },
                                {
                                    key: '4',
                                    icon: <ContactsOutlined />,
                                    label: 'Contact Us',
                                    style:{color : '#5BC1CD'},
                                    onClick : () => navigate('/'),
                                },
                                {
                                    key: '5',
                                    icon: <LogoutOutlined />,
                                    label: 'Sign Out',
                                    style:{color : '#5BC1CD'}
                                },
                            ]}
                            style={{ background : '#fff'}}
                        />
                    </Box>
                    <Box className="flex items-center justify-center">
                        <div className="flex items-center justify-center bg-[#5BC1CD] my-4 w-[80%] rounded-3xl h-[5px]" />
                    </Box>
                    <Box className="mt-[190px] text-center">
                        <Typography.Title
                            level={5}
                            className="typography__font tracking-[0.3px]"
                            style={{
                                color : '#5BC1CD'
                            }}
                        >
                            &copy; Copyright. All rights reserved.
                        </Typography.Title>
                    </Box>
                </Sider>
                <Layout className="bg-[#5BC1CD]">
                    <Content
                        style={{
                            padding: 14,
                            minHeight: 280,
                            background: "#fff",
                            margin : '10px',
                            borderRadius : '20px'
                        }}
                    >
                        <Box
                            className="flex flex-col gap-[10px]"
                        >
                            <Box className="flex justify-between">
                                <Typography.Title
                                    level={4}
                                    className="typography__font tracking-[1px] font-semibold"
                                    style={{
                                        color : "#3081D0"
                                    }}
                                >
                                    DashBoard
                                </Typography.Title>
                                <p className="tracking-[1px] text-[#3081D0] text-[15px] font-semibold">
                                    { numberDay } { monthName } { year }, { dayName }
                                </p>
                            </Box>
                            <Box className="flex items-center justify-center">
                                <div 
                                    className="w-[1030px] px-[60px] bg-[#F6D6D6] h-[170px] rounded-xl flex items-center justify-between"
                                >
                                    <div className="w-[70%]">
                                        <Typography.Title
                                            level={4}
                                            className="typography__font tracking-[1px] font-semibold"
                                            style={{
                                                color : "#3081D0"
                                            }}
                                        >
                                            Welcome Back <span className="text-[#176B87]">Mehdi</span>
                                        </Typography.Title>
                                        <p
                                            className="text-[#000] tracking-[0.4px]"
                                        >
                                            Analyze and summarize links quickly. Get the key points, highlights and insights from your links in just a few minutes.
                                        </p>
                                    </div>
                                    <Lottie
                                        animationData={animation} 
                                        className="w-[260px]"
                                    />
                                </div>
                            </Box>
                        </Box>
                        {
                            !showHowToUse ? 
                                <Box className="form__summarizer__container mt-[40px] flex flex-row justify-center gap-[30px]">
                                <div 
                                    className="form_container grid gap-[30px] w-[500px] h-[300px] border p-[20px] rounded-xl bg-[#F6D6D6]"
                                >
                                    <Typography.Title
                                        level={4}
                                        className="typography__font tracking-[1px] font-semibold text-center"
                                        style={{
                                            color : "#04364A"
                                        }}
                                    >
                                        Summarize Any <span className="text-[#176B87]">Link</span>
                                    </Typography.Title>
                                    <Form
                                        name="basic"
                                        className="flex flex-col"
                                        onFinish={handleFinish}
                                    >
                                        <Form.Item
                                            label="URL"
                                        >
                                            <Input 
                                                name="url"
                                                type="url"
                                                placeholder="Enter an URL"
                                                value={valuesForm.url}
                                                onChange={(e) => setValuesForm({
                                                    ...valuesForm,
                                                    url : e.target.value
                                                })}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label="Language"
                                        >
                                            <Select
                                                value={valuesForm.language}
                                                onChange={(e) => setValuesForm({ ...valuesForm, language : e})}
                                                options={[
                                                    { value: 'EN', label: 'EN' },
                                                    { value: 'AR', label: 'AR' },
                                                    { value: 'FR', label: 'FR' },
                                                    { value: 'CA', label: 'CA' },
                                                    { value: 'HE', label: 'HE' },
                                                    { value: 'AM', label: 'AM' },
                                                    { value: 'SK', label: 'SK' },
                                                    { value: 'IT', label: 'IT' },
                                                    { value: 'HU', label: 'HU' },
                                                    { value: 'FI', label: 'FI' },
                                                ]}
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button 
                                                htmlType="submit"
                                                className="bg-[#176B87] text-white w-[100%] border-none"
                                            >
                                                Summarize
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                                <div 
                                    className="summrizer_container w-[500px] p-[20px] rounded-xl bg-[#F6D6D6] min-h-[300px] flex items-center justify-center"
                                >
                                    {
                                        !summaryText && !isFetching && !error &&
                                        <Box 
                                            className="text-center"
                                        >
                                            <Typography.Title
                                                level={5}
                                                className="typography__font tracking-[0.7px]"
                                                style={{
                                                    color : "#176B87"
                                                }}
                                            >
                                                { sentenceGenerate }
                                            </Typography.Title>
                                        </Box>
                                    }
                                    {
                                        isFetching ? (
                                            <Box
                                                className="w-full h-full flex flex-col items-center justify-center"
                                            >
                                                <Typography.Title
                                                    level={4}
                                                    className="text-center typography__font"
                                                    style={{
                                                        color : "#176B87"
                                                    }}
                                                >
                                                    Please wait ....
                                                </Typography.Title>
                                                <img 
                                                    src={loader} 
                                                    alt="loader" 
                                                    className='w-20 h-20 object-contain' 
                                                /> 
                                            </Box>
                                        ) : 
                                        error ? (
                                            <Typography.Title
                                                level={5}
                                                className="text-center typography__font"
                                                style={{
                                                    color : "#176B87"
                                                }} 
                                            >
                                                Well, that's wasn't supposed to happen...
                                                <br />
                                                <span className='font-normal text-gray-500'>
                                                    {
                                                        error?.data?.error
                                                    }
                                                </span>
                                            </Typography.Title>
                                        ) : (
                                            <Box className="flex flex-col gap-[10px]">
                                                <Typography
                                                    className="typography__font font-semibold tracking-[0.6px]"
                                                >
                                                    { summaryText }
                                                </Typography>
                                                {
                                                    summaryText && 
                                                    <img 
                                                        src={copied ? tickIcon : copyIcon}
                                                        onClick={() => handleCopy(summaryText)} 
                                                        alt="copy__icon"
                                                        className="w-[30px] bg-[#EEF5FF] cursor-pointer p-1 rounded-xl "
                                                    />
                                                }
                                            </Box>
                                        )
                                    }
                                </div>
                            </Box> : 
                            <Box
                                className="flex items-center justify-between mt-[40px] px-[50px]"
                            >
                                <Box>
                                    <Lottie
                                        animationData={animationHowToUse}
                                        className="w-[440px]"
                                    />
                                </Box>
                                <Box className="border w-[667px] bg-[#F6D6D6] rounded-xl p-[10px]">
                                    <Typography.Title
                                        level={4}
                                        className="typography__font font-semibold tracking-[0.6px] text-center"
                                        style={{
                                            color : "#176B87"
                                        }}
                                    >
                                        How To Use
                                    </Typography.Title>
                                    <div className="using__box flex flex-col items-start gap-[10px]">
                                        {
                                            howToUse.map((item) => {
                                                const { id, text } = item
                                                return (
                                                    <Box
                                                        className="flex items-center gap-[6px]"
                                                    >
                                                        <span className="border bg-[#1D2B53] text-white w-[30px] h-[30px] flex items-center justify-center rounded-full">
                                                            { id }
                                                        </span>
                                                        
                                                        <Typography
                                                            className="typography__font font-semibold tracking-[0.6px] text-center"
                                                            style={{
                                                                color : "#176B87"
                                                            }}
                                                        >
                                                            
                                                            { text }
                                                        </Typography>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </div>
                                </Box>
                            </Box>
                        }
                    </Content>
                </Layout>
            </Layout>
        </Box>
    )
}

export default Dashboard
