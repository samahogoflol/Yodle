interface TotalPriceSummaryBlockProps {
    totalPriceStyles : string;
    finalPrice : string;
}

const TotalPriceSummaryBlock:React.FC<TotalPriceSummaryBlockProps> = ({totalPriceStyles, finalPrice}) => {
    return (
        <div>
            <div className={totalPriceStyles}>
                <h4 className="text-[22px] font-medium leading-[120%] md:text-[26px] md:font-semibold md:leading-[130%]">Total</h4>
                <h2 className="leading-[120%] font-medium text-[22px] md:text-[26px] md:font-semibold md:leading-[130%]">{finalPrice} $</h2>
            </div>
        </div>
    )
}

export default TotalPriceSummaryBlock