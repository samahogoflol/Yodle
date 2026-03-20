interface HowToBookCardProps {
    title : string;
    number : string;
    subtitle : string;
}

export const HowToBookCard = ({title, number, subtitle} : HowToBookCardProps) => {
    return (
        <div className="w-full bg-[#2E78E5] p-5 flex flex-col gap-15 md:gap-[104px] text-white">
            <div className="flex items-center justify-between">
                <h2 className="text-[22px] md:text-[26px] leading-[130%] font-normal">{title}</h2>
                <span className="opacity-50 text-[42px] md:text-[60px] font-bold leading-[84%]">{number}</span>
            </div>
            <div>
                <span className="text-[16px] md:text-[20px] leading-[130%] opacity-80">{subtitle}</span>
            </div>
        </div>
    )
}