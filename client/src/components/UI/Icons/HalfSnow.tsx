export const HalfSnow = ({ className }: { className?: string }) => {
    return (
        <svg 
            viewBox="0 0 255 510" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid meet" 
            className={className}
        >
            <rect x="-50" width="100" height="510" fill="#FDFDFD"/>
            <rect x="-255" y="305" width="100" height="510" transform="rotate(-90 -255 305)" fill="#FDFDFD"/>
            <rect x="-215.668" y="110.043" width="100" height="510" transform="rotate(-45 -215.668 110.043)" fill="#FDFDFD"/>
            <rect x="144.957" y="39.332" width="100" height="510" transform="rotate(45 144.957 39.332)" fill="#FDFDFD"/>
        </svg>
    )
}