import { Button, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormComponentProps } from '../interfaces';

const toastOptions = {
    position: "top-right" as "top-right",
    autoClose : 8000,
    pauseOnHover : true,
    draggable : true,
    theme : 'dark'
}

const FormContact = ({ handleBlur, handleFocus, setCurrentAnimation } : FormComponentProps) => {
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleFinish = () => {
        setIsSending(true)
        setCurrentAnimation('hit')
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
            {
                from_name : values.name,
                to_name : "Mehdi",
                from_email : values.email,
                to_email : 'mehdiznayzen@gmail.com',
                message : values.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )

        .then(() => {
            setIsSending(false);
        
            const clearedValues = {
                name: "",
                email: "",
                message: "",
            };
        
            Object.assign(values, clearedValues);
        
            toast.success("Thank you. I will get back to you as soon as possible.", toastOptions);
        })
        
        .catch((error) => {
            setIsSending(false);
            console.error(error);
            toast.error("Ahh, something went wrong. Please try again.", toastOptions)
        })

    };

    return (
        <div className="w-[100%] form__container sm:w-[590px] lg:w-[600px] flex flex-col gap-[30px] rounded-2xl bg-[#DCF2F1] p-[30px]">
            <div className="info__container">
                <Typography.Title 
                    level={3} 
                    className='typography__font'
                    style={{
                        color : "#2D3250"
                    }}
                >
                    Get In Touch <br />
                    <span className='text-[55px] sm:text-[65px] tracking-[5px] text-[#6499E9]'>Contact</span>
                </Typography.Title>
            </div>

            <Form
                name="basic"
                onFinish={handleFinish}
                className='flex flex-col gap-[20px] w-full'
                autoComplete="off"
            >
                <Form.Item
                    label="Your name:"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your name!',
                        },
                    ]}
                >
                    <Input
                        name='name'
                        placeholder="What's your name?"
                        value={values.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className='h-[40px]'
                    />
                </Form.Item>

                <Form.Item
                    label="Your email:"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!',
                        },
                    ]}
                >
                    <Input
                        name='email'
                        placeholder="What's your email?"
                        value={values.email}
                        type='email'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className='h-[40px]'
                    />
                </Form.Item>

                <Form.Item
                    label="Your message:"
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your message!',
                        },
                    ]}
                >
                    <Input.TextArea
                        name='message'
                        placeholder="What do you want to say?"
                        value={values.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        rows={6}
                        className='h-[40px]'
                    />
                </Form.Item>

                <Form.Item>
                    {
                        isSending ? 
                        <Button 
                            type="default" 
                            htmlType="submit"
                            className='h-[40px] font-bold tracking-[3px]'
                            style={{
                                background : "#FF90BC",
                                width: "100%"
                            }}
                            loading
                            draggable
                        >
                            Sending....
                        </Button>
                        :
                        <Button 
                            type="default" 
                            htmlType="submit"
                            className='h-[40px] font-bold text-white tracking-[3px]'
                            style={{
                                background : "#6499E9",
                                width: "100%"
                            }}
                        >
                            Send
                        </Button>
                    }
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormContact;
