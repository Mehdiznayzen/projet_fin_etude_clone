import { Box } from '@mui/material'
import { About, Contact, Features, Hero } from '../containers/index'
import { Footer, Navbar } from '../components/index'
import { Styles } from '../styles/style'
import { useSelector } from 'react-redux'
import { ScrollButton,ScrollProgress } from './../components/index';


const Home = () => {
    const { colorDarkMode } = useSelector((state : any) => state.ai)
    return (
        <div
            className={`${Styles.containerPaddingX}`}
            style={{
                backgroundColor : `${colorDarkMode}`
            }}
        >
            <Navbar />
            <Hero />
            <About />
            <Features/>
            <Contact />
            <Footer />
            <ScrollButton />
            <ScrollProgress />
        </div>
    )
}

export default Home