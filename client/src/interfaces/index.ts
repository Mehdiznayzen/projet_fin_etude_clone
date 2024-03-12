import { ReactNode } from "react";

export interface ButtonComponentProps {
    title : string,
    type : "link" | "dashed" | "default" | "primary" | "text",
    background ?: string,
    icon ?: ReactNode,
    onClick ?: () => void,
    color : string,
} 

export interface BenefitsComponentProps {
    id: number;
    title: string;
    subTitle: string;
    benifit: string;
    icon: string;
    iconBg: string;
}

export interface TestimonialCardProps {
    id : number,
    name : string,
    image : string,
    message : string
}

export interface FormComponentProps{
    setCurrentAnimation : React.Dispatch<React.SetStateAction<string>>,
    handleFocus : () => void,
    handleBlur : () => void,
}

export interface FoxModelProps{
    currentAnimation : string,
    position : Object,
    rotation : Object,
    scale : Object
}