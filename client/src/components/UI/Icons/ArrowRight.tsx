import React from 'react';

export const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        width="39" 
        height="39" 
        viewBox="0 0 39 39" 
        xmlns="http://www.w3.org/2000/svg"
        {...props} 
    >
        <path 
            d="M28.7071 19.7071C29.0976 19.3166 29.0976 18.6834 28.7071 18.2929L22.3431 11.9289C21.9526 11.5384 21.3195 11.5384 20.9289 11.9289C20.5384 12.3195 20.5384 12.9526 20.9289 13.3431L26.5858 19L20.9289 24.6569C20.5384 25.0474 20.5384 25.6805 20.9289 26.0711C21.3195 26.4616 21.9526 26.4616 22.3431 26.0711L28.7071 19.7071ZM10 19V20H28V19V18H10V19Z" 
            fill="currentColor" 
        />
    </svg>
);
