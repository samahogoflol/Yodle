export type SortCriteria = typeof filtersOptions[number]['value'];

export const filtersOptions = [
        {
           label : "Recommended",
           value : "RATING_DESC"
        },
        {
            label : "Most experienced",
            value : "EXPERIENCE_DESC"
        },
        {
           label : "Price : Low to High",
           value : "PRICE_INC"
        },
        {
           label : "Price : High to Low",
           value : "PRICE_DESC"
        }
];