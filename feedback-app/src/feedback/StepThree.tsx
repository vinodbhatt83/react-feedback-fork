import React from 'react'
import TextField from '@mui/material/TextField';

export const StepThree = ({ content, setStepThreeFeedback } : { content: string, setStepThreeFeedback: any }) => {
    return (
        <>
            <p>{content}</p>
            <TextField
                id="feedbackTextField"
                multiline
                rows={8}
                fullWidth
                required
                onChange={(e) => setStepThreeFeedback(e.target.value)}
            />
        </>
    )
}