import type { SVGProps } from "react";

type ArrowBackProps = SVGProps<SVGSVGElement>;

export const ArrowBack = ({ 
    width = "30", 
    height = "30", 
    stroke = "#3A3636", 
    className,
    ...props 
}: ArrowBackProps) => {
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path 
                d="M21 12H3M3 12L7.5 7.5M3 12L7.5 16.5" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}