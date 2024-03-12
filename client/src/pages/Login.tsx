import { Button, Form, Input, Typography } from 'antd';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/Sign up-amico.png'
import { Link } from 'react-router-dom';

const toastOptions = {
    position: "bottom-right" as "top-right",
    autoClose : 8000,
    pauseOnHover : true,
    draggable : true,
    theme : 'dark'
}

const Login = () => {
    const [formValues, setFormValues] = useState({ email : '', password : '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e : any) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleValidate = () => {
        if(!formValues.email){
            toast.error('Email is required !!', toastOptions)
            return false
        }else if (!formValues.password){
            toast.error('Password is required !!', toastOptions)
            return false
        }
        return true
    }

    const handleFinish = () => {
        setIsLoading(true)
        if(handleValidate()){
            console.log(formValues)
        }
        setIsLoading(false)
    }

    return (
        <div
            className="min-h-screen flex items-center bg-[#F3F8FF]"
        >
            <div className="form_signup_img w-[0%] lg:w-[50%] h-screen hidden xl:block">
                <img src={image} alt="" />
            </div>
            <div className="h-screen flex flex-col gap-[27px] items-center justify-center w-[100%] xl:w-[50%]">
                <div className="absolute right-5 top-5 flex items-center gap-[30px]">
                    <Link className='ml-2' to={'/'}>
                        <Button className='rounded-full w-[100px] h-[40px]'>
                            Back Home
                        </Button>
                    </Link>
                    <Typography
                        className='typography__font tracking-[1px]'
                    >
                        Dont' have an account ?
                        <Link className='ml-2' to={'/signup'}>
                            <Button className='rounded-full w-[100px] h-[40px] bg-[#86B6F6] text-white'>
                                Sign Up
                            </Button>
                        </Link>
                    </Typography>
                </div>
                <Typography.Title
                    level={2}
                    className='typography__font tracking-[3px] text-center'
                    style={{
                        color : "#86B6F6"
                    }}
                >
                    Welcome Back ! <br />
                    <span
                        className='text-[16px] text-[#ccc]'
                    >
                        Start The Adventure
                    </span>
                </Typography.Title>
                <Form
                    onFinish={handleFinish}
                    className="grid w-[530px] sm:w-[570px] lg:w-[600px] p-3 rounded-xl"
                >
                    <Form.Item
                        label="Email"
                    >
                        <Input 
                            name="email"
                            placeholder="Ex : mehdi@gmail.com"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                    >
                        <Input.Password
                            name="password"
                            placeholder=""
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        {
                            isLoading ? 
                            <Button
                                type="default" 
                                htmlType="submit" 
                                className='w-[530px] rounded-lg border-none text-[#fff] font-bold tracking-[1px] sm:w-[570px] lg:w-[600px] h-[40px] bg-[#86B6F6]'
                                loading
                                disabled
                            >
                                Logging...
                            </Button> : 
                            <Button
                                type="default" 
                                htmlType="submit" 
                                className='w-[530px] rounded-lg border-none text-[#fff] font-bold tracking-[1px] sm:w-[570px] lg:w-[600px] h-[40px] bg-[#86B6F6]'>
                                Log In
                            </Button>
                        }
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login