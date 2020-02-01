import React from 'react'
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles({
    header: {
        textAlign: 'center'
    }
})

interface ControlsProps {
    className?: string
}

const Controls = ({className} : ControlsProps) => {
    const classes = useStyles()
    return (
        <div className={`${className} ${classes.header}`}>
            Controls
        </div>
    )
}

export default Controls
