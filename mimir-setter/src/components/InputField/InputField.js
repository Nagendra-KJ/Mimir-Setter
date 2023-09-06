import { TextField } from "@mui/material"
import {styled} from '@mui/system'
import { useState } from "react";

const StyledInputField = styled(TextField, {})({
    backgroundColor:'transparent',
    margin:'auto',
    borderRadius:5,
    opacity: 0.6,
    '& .MuiOutlinedInput-root.Mui-focused': {
        "& > fieldset": {borderColor:'#f0eeed', opacity:1}
    },
});

const inputProps = {
    style: {
            textAlign: 'center',
        }
}



function InputField(props) {

    const [num, setNum] = useState('');

    const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setNum(e.target.value);
        }
    }
    return (
        <StyledInputField inputProps={inputProps} variant="outlined" 
                            onChange={(e) => handleChange(e)} value={props.textValue ? props.textValue : num} 
                            disabled={props.disableInput}/>
    );
}

export {InputField}