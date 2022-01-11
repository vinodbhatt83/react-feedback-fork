import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const StepFour = ({userData, rating, stepTwoFeedback, stepThreeFeedback} : {userData: any, rating: number, stepTwoFeedback: any, stepThreeFeedback: any}) => {

    console.log(rating, stepTwoFeedback, stepThreeFeedback)

    const [open, setOpen] = React.useState(true)
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <p>Thanks again! Here’s what we heard:</p>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rating" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={rating} />
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={userData.stepsData["two"]} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={stepTwoFeedback} />
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={userData.stepsData["three"]} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={stepThreeFeedback} />
                    </ListItemButton>
                    </List>
                </Collapse>

            </List>
        </>
    )
}