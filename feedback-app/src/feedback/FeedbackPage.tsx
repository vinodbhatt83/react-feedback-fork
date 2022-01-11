import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

export const FeedbackPage = ({userData} : {userData: any}) => {
    const [step, setStep] = useState("one")
    const [rating, setRating] = useState(0)
    const [stepTwoFeedback, setStepTwoFeedback] = useState("")
    const [stepThreeFeedback, setStepThreeFeedback] = useState("")
    const [starHover, setStarHover] = useState(undefined)

    const handleStarClick = (rating: number) => {
        setRating(rating)
    }

    const handleStarHover = (rating: any) => {
        setStarHover(rating)
    }

    const handleStarUnHover = () => {
        setStarHover(undefined)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const uniqid = Date.now();

        switch(step) {
            case "one":
            return fetch('http://localhost:8000/entry', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    "id": uniqid,
                    "resource": {
                        "resourceType": "Feedback",
                        "step": step,
                        "rating": rating
                    }
                }
                )
            }).then(() => setStep("two"))

            case "two":
                return fetch('http://localhost:8000/entry', {
                    method: 'POST',
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({
                        "id": uniqid,
                        "resource": {
                            "resourceType": "Feedback",
                            "step": step,
                            "feedback": stepTwoFeedback
                        }
                    }
                    )
                }).then(() => setStep("three"))

            case "three":
                return fetch('http://localhost:8000/entry', {
                    method: 'POST',
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({
                        "id": uniqid,
                        "resource": {
                            "resourceType": "Feedback",
                            "step": step,
                            "feedback": stepThreeFeedback
                        }
                    }
                    )
                }).then(() => {
                    
                    setStep("four")
                })
            default:
                return null
        }
    }

    return (
        <Box 
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {
                (() => {
                    console.log('switch', rating, stepTwoFeedback, stepThreeFeedback);
                    switch(step) {
                        case "one":
                            return <StepOne
                                        starHover = {starHover}
                                        rating = {rating}
                                        handleStarClick = {handleStarClick}
                                        handleStarHover = {handleStarHover}
                                        handleStarUnHover = {handleStarHover}
                                        content = {userData.stepsData[step]}
                                    />
                        case "two":
                            return <StepTwo
                                        content = {userData.stepsData[step]}
                                        setStepTwoFeedback = {setStepTwoFeedback}
                                    />
                        case "three":
                            return <StepThree
                                        content = {userData.stepsData[step]}
                                        setStepThreeFeedback = {setStepThreeFeedback}
                                    />
                        case "four":
                            return <StepFour
                                        userData = {userData}
                                        rating = {rating}
                                        stepTwoFeedback = {stepTwoFeedback}
                                        stepThreeFeedback = {stepThreeFeedback}
                                    />
                        default: 
                            return null
                    }
                })()
            }
            <div>
                {
                    step === "four" ? '' :
                        <Button variant="contained" endIcon={<SendIcon />} size="large" color="secondary" type="submit">
                            Submit
                        </Button>
                }
            </div>
        </Box>
    )
}