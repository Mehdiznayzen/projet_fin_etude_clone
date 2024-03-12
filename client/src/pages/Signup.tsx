import { Button, Form, Input, Typography } from 'antd';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/Computer login-rafiki.png'
import { Link } from 'react-router-dom';

const toastOptions = {
    position: "bottom-right" as "top-right",
    autoClose : 8000,
    pauseOnHover : true,
    draggable : true,
    theme : 'dark'
}

const Login = () => {
    const [formValues, setFormValues] = useState({ username : '', email : '', password : '', confirmPassword : '', image : '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleValidateImage = (e : any) => {
        const selectedFile = e.target.files[0]

        if(selectedFile){
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']

            if(!allowedTypes.includes(selectedFile)){
                toast.error('Please upload a valid image (JPEG, PNG, GIF, JPG)', toastOptions);
            }
        }
    }

    const handleChange = (e : any) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleValidate = () => {
        const maxSizeImage = 5

        if(!formValues.username){
            toast.error('Username is required !!', toastOptions)
            return false
        }else if(formValues.username.length < 4){
            toast.error('Username must be greater than 4 caracaters !!', toastOptions)
            return false
        }else if(!formValues.email){
            toast.error('Email is required !!', toastOptions)
            return false
        }else if (!formValues.password || !formValues.confirmPassword){
            toast.error('Password is required !!', toastOptions)
            return false
        }else if(formValues.password.length < 6){
            toast.error('Password must be greater than 4 caracaters !!', toastOptions)
            return false
        }else if(formValues.password !== formValues.confirmPassword){
            toast.error('Password and confirm password must be the same !!', toastOptions)
            return false
        }else if(!formValues.image){
            toast.error('Please upload your image !!', toastOptions)
            return false
        }else if(formValues.image.size > maxSizeImage * 1024 * 1024){
            toast.error(`Image size exceeds ${maxSizeImage}MB. Please upload a smaller image.`, toastOptions);
            return false;
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
                        Already have an account ?
                        <Link className='ml-2' to={'/login'}>
                            <Button className='rounded-full w-[100px] h-[40px] bg-[#86B6F6] text-white'>
                                Log In
                            </Button>
                        </Link>
                    </Typography>
                </div>
                <Typography.Title
                    level={4}
                    className='typography__font tracking-[3px] text-center'
                    style={{
                        color : "#86B6F6"
                    }}
                >
                    Welcome To Mehdi Summarizer ! <br />
                    <span
                        className='text-[16px] text-[#ccc]'
                    >
                        Register Your Account
                    </span>
                </Typography.Title>
                <Form
                    onFinish={handleFinish}
                    className="grid w-[530px] sm:w-[570px] lg:w-[600px] p-3 rounded-xl"
                >
                    <Form.Item
                        label="Username"
                    >
                        <Input 
                            name="username"
                            placeholder="Ex : Mehdi"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </Form.Item>

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

                    <Form.Item
                        label="Confirm Password"
                    >
                        <Input.Password
                            name="confirmPassword"
                            placeholder=""
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Your Image"
                    >
                        <Input
                            name="image"
                            type='file'
                            value={formValues.image}
                            onChange={(e) => {
                                handleChange(e)
                                handleValidateImage(e)
                            }}
                            accept='image/*'
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
                                Registring...
                            </Button> : 
                            <Button
                                type="default" 
                                htmlType="submit" 
                                className='w-[530px] rounded-lg border-none text-[#fff] font-bold tracking-[1px] sm:w-[570px] lg:w-[600px] h-[40px] bg-[#86B6F6]'>
                                Register
                            </Button>
                        }
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login