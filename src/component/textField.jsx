import React from "react";

const TextField = ({  type, name, value, onChange, label }) => {
    
    return (
            <div className="input-group has-validation">
                <label htmlFor={name} className="m-1">{label}</label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                />
                
            </div>
    );
};
TextField.defaultProps = {
    type: "text"
};

export default TextField;