import React from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const StepTwo = ({ content, setStepTwoFeedback } : { content: string, setStepTwoFeedback: any }) => {
    return (
        <>
            <p>{content}</p>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="doctorFeedback" name="row-radio-buttons-group" onChange={(e) => setStepTwoFeedback(e.target.value)}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </>
    )
}