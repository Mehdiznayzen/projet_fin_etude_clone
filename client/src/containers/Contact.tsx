import { FormContact, Loader } from "../components"
import { Styles } from "../styles/style"
import { fadeIn } from "../utils/motion"
import { motion } from 'framer-motion';
import Fox from "../model/Fox"
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

const Contact = () => {
    const [currentAnimation, setCurrentAnimation] = useState('idle')

    // Two functions for handling the animation of the fox
    const handleFocus = () => {
        setCurrentAnimation('walk')
    }
    const handleBlur = () => {
        setCurrentAnimation('idle')
    }

    return (
        <section 
            className={`${Styles.containerMarginTop} w-full flex flex-row lg:flex-col xl:flex-row gap-[50px] items-center justify-center lg:justify-between mt-[40px]`}
            id="contact"
        >
            <motion.div
                className='form'
                variants={fadeIn("right", "spring", 0.6, 0.4)}
                initial="hidden"
                whileInView='show'
            >
                <FormContact
                    setCurrentAnimation={setCurrentAnimation}
                    handleFocus={handleFocus}
                    handleBlur = {handleBlur}
                />
            </motion.div>
            <motion.div
                className="image__container hidden xl:block mt-[-100px] w-[100%] h-[600px]"
                variants={fadeIn("left", "spring", 0.9, 0.5)}
                initial="hidden"
                whileInView="show"
            >
                <Canvas
                    camera={{
                        position : [0, 0, 5],
                        fov: 75,
                        near : 0.1,
                        far : 1000
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]}/>
                    <ambientLight intensity={0.7}/>
                    <Suspense fallback={<Loader/>}>
                        <Fox 
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.629, -0.6, 0]}
                            scale={[0.7, 0.6, 0.6]}
                        />
                    </Suspense>
                </Canvas>
            </motion.div>
        </section>
    )
}

export default Contact