import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const StepOne = ({ starHover, rating, handleStarClick, handleStarHover, handleStarUnHover, content } : { starHover : any, rating : any, handleStarClick : any, handleStarHover : any, handleStarUnHover : any, content: string }) => {
    return (
        <>
            <p>{content}</p>
            {
                [...Array(10)].map((_, index) => {
                    return (
                            <StarRoundedIcon
                                key = { index }
                                color = { (starHover || rating) > index ? 'warning' : 'primary' }
                                onClick = { () => handleStarClick(index + 1) }
                                onMouseOver = { () => handleStarHover(index + 1)}
                                //onMouseLeave = {handleStarUnHover}
                            />
                    )
                })
            }
        </>
    )
}