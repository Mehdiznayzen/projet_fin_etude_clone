import { Button, Typography } from "antd"
import { ReasonsError } from "../constants"
import { Link } from "react-router-dom"
import Animation from '../assets/ErrorPage_animation.json'
import Lottie from "lottie-react"

const ErrorPage = () => {
    return (
        <section className="flex items-center flex-col lg:flex-row justify-around h-screen w-full">
            <div className="info flex flex-col gap-2">
                <Typography.Title
                    level={1}
                    className="typography__font tracking-[2px]"
                    style={{
                        color : "#11009E"
                    }}
                >
                    So Sorry !
                </Typography.Title>
                <Typography
                    className="typography__font text-[30px] font-bold tracking-[3px]"
                    style={{
                        color : "#11009E"
                    }}
                >
                    The Page You Are Looking For <br /> Cannot Be Found
                </Typography>
                <ul className="flex flex-col">
                    <p className="text-[20px] my-1 text-blue-950 font-semibold tracking-[2px]">Possibles Reasons</p>
                    {
                        ReasonsError.map((reasonError) => {
                            const { id, reason } = reasonError

                            return (
                                <li className="list-disc ml-10" key={id}>{reason}</li>
                            )
                        })
                    }
                </ul>
                <Link
                    to={'/'}
                    className="my-3"
                >
                    <Button className="bg-blue-950 text-white h-[40px] rounded-xl w-[200px]">Back Home</Button>
                </Link>
            </div>
            <div className="animation_container">
                <Lottie
                    animationData={Animation}
                />
            </div>
        </section>
    )
}

export default ErrorPage