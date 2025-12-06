interface TotalPriceSummaryBlockProps {
    totalPriceStyles : string;
    finalPrice : string;
}

const TotalPriceSummaryBlock:React.FC<TotalPriceSummaryBlockProps> = ({totalPriceStyles, finalPrice}) => {
    return (
        <div>
            <div className={totalPriceStyles}>
                <p>Total</p>
                <p>{finalPrice}</p>
            </div>
        </div>
    )
}

export default TotalPriceSummaryBlock