import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    InputAdornment,
    Tooltip
} from '@material-ui/core';
import {
    WarningRounded as WarningIcon,
    ErrorRounded as ErrorIcon,
    CheckRounded as CheckIcon
} from '@material-ui/icons';
import styles from './styles';
import utilities from '../../../utilities';

const ValidationAdornment = ({ position, error, warning, classes, errors, warnings, skipOKValidation }) => {
    if (error && !warning) {
        return (
            <InputAdornment position={position}>
                <Tooltip
                    placement='top'
                    title={
                        utilities.isSet(errors) && errors.length > 0 ? (
                            <React.Fragment>
                                {errors.map((e, i) => {
                                    return <div key={i}><em>{(e)}</em><br /></div>;
                                })}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {'Invalid input'}
                            </React.Fragment>
                        )
                    }
                >
                    <ErrorIcon className={classes.iconError} />
                </Tooltip>
            </InputAdornment>
        );
    } else if (warning && !error) {
        return (
            <InputAdornment position={position}>
                <Tooltip
                    placement='top'
                    title={
                        utilities.isSet(warnings) && warnings.length > 0 ? (
                            <React.Fragment>
                                {warnings.map((w, i) => {
                                    return <div key={i}><em>{w}</em><br /></div>;
                                })}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {'Invalid input'}
                            </React.Fragment>
                        )
                    }
                >
                    <WarningIcon className={classes.iconWarning} />
                </Tooltip>
            </InputAdornment>
        );
    } else if (error && warning) {
        return (
            <InputAdornment position={position}>
                <Tooltip
                    title={
                        utilities.isSet(errors) && errors.length > 0 ? (
                            <React.Fragment>
                                {errors.map((e, i) => {
                                    return <div key={i}><em>{(e)}</em><br /></div>;
                                })}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {'Invalid input'}
                            </React.Fragment>
                        )
                    }
                >
                    <ErrorIcon className={classes.iconError} />
                </Tooltip>
                <Tooltip
                    title={
                        utilities.isSet(warnings) && warnings.length > 0 ? (
                            <React.Fragment>
                                {warnings.map((w, i) => {
                                    return <div key={i}><em>{w}</em><br /></div>;
                                })}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {'Invalid input'}
                            </React.Fragment>
                        )
                    }
                >
                    <WarningIcon className={classes.iconWarning} />
                </Tooltip>
            </InputAdornment>
        );
    } else {
        if (!utilities.isSet(skipOKValidation) || (utilities.isSet(skipOKValidation) && !skipOKValidation)) {
            return (
                <InputAdornment position={position}>
                    <Tooltip title='OK' placement='top'>
                        <CheckIcon className={classes.iconOK} />
                    </Tooltip>
                </InputAdornment>
            );
        } else {
            return (
                <div />
            );
        }
    }
};

ValidationAdornment.propTypes = {
    position: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    warning: PropTypes.bool.isRequired,
    errors: PropTypes.array,
    warnings: PropTypes.array,
    skipOK: PropTypes.bool
};

ValidationAdornment.defaultProps = {
    shouldValidate: false
};

export default withStyles(styles)(ValidationAdornment);
