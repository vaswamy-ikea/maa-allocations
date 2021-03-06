import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import {
    InputLabel,
    Input,
    InputAdornment,
    Tooltip,
    IconButton
} from '@material-ui/core';
import styles from './styles';
import utilities from '../../../utilities';



const NumberTextField = ({ 
    id, value, label,actionHandleChange, name, maxLength
}) => {
    return (
        <div>
        <InputLabel shrink htmlFor={id}>{label}</InputLabel>
        <Input
        id={id}
        value={value}
        onChange={(e) => actionHandleChange(e.target.name,e.target.value, id)}
        name={name}
        inputProps={{
            // spellCheck: utilities.isSet(spellCheck) ? spellCheck : false,
            maxLength: utilities.isSet(maxLength) ? maxLength : 100
        }}
    />
    </div>
    )
}

NumberTextField.propTypes = {
    value:  PropTypes.number
}


export default withStyles(styles)(NumberTextField);