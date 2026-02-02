import "../../styles/index.css"

interface CheckboxProps {
    label : string;
    checked : boolean;
    onChange : () => void;
    className? : string;
}

const Checkbox:React.FC<CheckboxProps> = ({label, checked, onChange, className}) => {

    const checkBoxStyles = "my-custom-checkbox-styles"

    return (
        <div>
            <label 
                className={` ${className} flex items-center cursor-pointer gap-1 text-white `}
            >
                <input 
                    type="checkbox" 
                    className={checkBoxStyles}
                    checked={checked}
                    onChange={onChange} 
                />
                {label}
            </label>
        </div>
    )
}

export default Checkbox;
