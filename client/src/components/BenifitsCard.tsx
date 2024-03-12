import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { BenefitsComponentProps } from '../interfaces/index'
import { Box } from '@mui/material';


const BenifitsCard = ({ benifit, icon, iconBg, id, subTitle, title } : BenefitsComponentProps) => {
    return (
        <VerticalTimelineElement
            key={id}
            contentStyle={{
                background: '#DCF2F1',
                color : "#2D3250"
            }}
            contentArrowStyle={{
                borderRight : `7px solid ${iconBg}`
            }}
            iconStyle={{
                background : iconBg
            }}
            icon={
                <div className='flex items-center justify-center w-full h-full'>
                    <img 
                        src={icon} 
                        alt={`logo_${title}`} 
                        className='w-[60%] object-contain h-[60%]'
                    />
                </div>
            }
        >
            <Box>
                <h3 className='text-[24px] font-bold'>{title}</h3>
                <p className='text-secondary text-[16px] font-semibold text-[#596FB7]'>{subTitle}</p>
            </Box>
            <ul 
                className='mt-5 list-disc ml-5 space-y-2'
            >
                <li className='text-white-100 text-[14px] pl-1 tracking-wider'>{benifit}</li>
            </ul>
        </VerticalTimelineElement>
    )
}

export default BenifitsCard