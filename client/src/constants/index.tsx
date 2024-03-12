// Icon for features
import Customized_Summaries from '../assets/Customized Summaries.png'
import Enhanced_Productivity from '../assets/Enhanced Productivity.png'
import Improved_Information_Retention from '../assets/Improved Information Retention.png'
import Multilingual_Summarization from '../assets/Multilingual Summarization.png'
import Time_efficiency from '../assets/Time Efficiency.png'

// Icon for Footer links
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export const linkNavbar = [
    {
        id : 1,
        name : 'Home',
        url : '#'
    },
    {
        id : 2,
        name : 'About',
        url : '#about'
    },
    {
        id : 3,
        name : 'Features',
        url : '#features'
    },
    {
        id : 4,
        name : 'Contact',
        url : '#contact'
    },
]

export const icons__footer = [
    {
        id: 1,
        icon: <FacebookIcon />,
        url: 'https://www.facebook.com',
        text: 'Facebook'
    },
    {
        id: 2,
        icon: <WhatsAppIcon />,
        url: 'https://www.whatsApp.com',
        text: 'WhatsApp'
    },
    {
        id: 3,
        icon: <LinkedInIcon />,
        url: 'https://www.LinkedIn.com',
        text: 'LinkedIn'
    },
    {
        id: 4,
        icon: <GitHubIcon />,
        url: 'https://www.Github.com',
        text: 'Github'
    },
];

export const benifts = [
    {
        id : 1,
        title : "Time Efficiency",
        subTitle : "Accelerated Information Processing",
        benifit : "AI summarizers swiftly distill vast content, saving time for users and enabling quicker access to key information.",
        icon : Time_efficiency,
        iconBg : "#B4D4FF"
    },
    {
        id : 2,
        title : "Enhanced Productivity",
        subTitle : "Streamlined Workflows",
        benifit : "AI summarization tools boost productivity by automating the extraction of essential details, allowing professionals to focus on critical tasks.",
        icon : Enhanced_Productivity,
        iconBg : "#86B6F6"
    },
    {
        id : 3,
        title : "Improved Information Retention",
        subTitle : "Cognitive Load Reduction",
        benifit : "AI summarizers aid in reducing cognitive overload by presenting concise summaries, facilitating better comprehension and retention of information.",
        icon : Improved_Information_Retention,
        iconBg : "#37B5B6"
    },
    {
        id : 4,
        title : "Multilingual Summarization",
        subTitle : "Global Accessibility",
        benifit : "AI-powered summarizers break language barriers, providing users with the ability to quickly understand and extract information from content in various languages",
        icon : Multilingual_Summarization,
        iconBg : "#F3D7CA"
    },
    {
        id : 5,
        title : "Customized Summaries",
        subTitle : "Tailored Information Extraction",
        benifit : "AI summarizers offer customization options, allowing users to generate summaries based on specific preferences or criteria, catering to individualized information needs",
        icon : Customized_Summaries,
        iconBg : "#86B6F6"
    },
]

export const testimonialInfo = [
    {
        id : 1,
        message : "Users often appreciate AI summarizers for their ability to quickly distill and summarize large volumes of information. This is particularly valuable for professionals and researchers who need to process extensive documents quickly.",
        name : "Chris Brown",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id : 2,
        message : "AI summarizers are seen as efficient tools that help streamline information consumption. By condensing content, users can focus on essential points without spending excessive time on reading lengthy texts.",
        name : "Lisa Wang",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        id : 3,
        message : "When AI summarizers provide accurate and relevant summaries, users find them valuable. However, accuracy is crucial, and there may be concerns if the summarizer fails to capture essential information or misinterprets the content.",
        name : "Sara Lee",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
]

export const ReasonsError = [
    {
        id : 1,
        reason : "The address may have been typed incorrectly .",
    },
    {
        id : 2,
        reason : "It may be a broken or outdated link .",
    }
]

export const SentencesToGenerate = [
    {
        id : 1,
        sentence : `Leverage the power of artificial intelligence to automatically summarize web links, extracting key insights for efficient information consumption`
    },
    {
        id : 2,
        sentence : `Utilize AI-driven summarization tools to distill lengthy articles into concise and digestible summaries, saving time and enhancing comprehension.`
    },
    {
        id : 3,
        sentence : `Empower your research workflow by employing AI algorithms that analyze and summarize URLs, providing you with a quick overview of content`
    },
    {
        id : 4,
        sentence : `Experience the convenience of AI-driven link summarization, allowing you to extract essential information from web pages effortlessly.`
    },
    {
        id : 5,
        sentence : `Enhance your productivity with AI-powered link summaries, enabling you to quickly grasp the main points of online articles and documents`
    },
    {
        id : 6,
        sentence : `Effortlessly generate insightful summaries from URLs using cutting-edge AI technology, streamlining the way you consume online content.`
    },
    {
        id : 7,
        sentence : `Transform the way you read and analyze articles online by incorporating AI-driven link summarization into your daily routine.`
    },
    {
        id : 8,
        sentence : `Unlock the potential of AI summarization tools to automatically generate concise and relevant summaries for web links.`
    },
    {
        id : 9,
        sentence : `Discover the efficiency of AI-based link summarization, providing you with a condensed version of online content without compromising depth.`
    },
    {
        id : 10,
        sentence : `Improve your information retrieval process with AI-driven link summarizers, ensuring you stay informed while minimizing reading time.`
    }
]

export const howToUse = [
    {
        id : 1,
        text : "Type a link in the own input box."
    },
    {
        id : 2,
        text : "Add a language from the drop-down list."
    },
    {
        id : 3,
        text : "Click the “Summarize” button to generate a summary."
    },
    {
        id : 4,
        text : "When you have finished summarizing the text, you can copy the text it generated."
    },
]