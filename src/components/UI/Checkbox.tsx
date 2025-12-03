import "../../styles/index.css"

interface CheckboxProps {
    label : string;
    checked : boolean;
    onChange : () => void;
    className? : string;
}

const Checkbox:React.FC<CheckboxProps> = ({label, checked, onChange}) => {

    const checkBoxStyles = "my-custom-checkbox-styles" // Вже спростили до одного класу

    return (
        <div>
            <label 
                className="flex items-center cursor-pointer gap-1 text-[#D3DCF8]"
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
