import { Button } from 'antd'
import { ButtonComponentProps } from '../interfaces'


const ButtonComponent = ({ title, type, background, icon, onClick, color, } : ButtonComponentProps) => {
    return (
        <Button
            style={{
                background : `${background}`,
                color : `${color}`
            }}
            type={type}
            icon={icon ? icon : null}
            onClick={onClick}
            className={`font-bold h-[40px]`}
        >
            { title }
        </Button>
    )
}

export default ButtonComponent