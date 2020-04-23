import React, { useState } from 'react';
import PropTypes from 'prop-types';
import utilities from '../../../utilities';
import { withStyles } from '@material-ui/core/styles';
import {
    Select,
    MenuItem,
    InputLabel,
    Input,
    Tooltip,
    InputAdornment,
    IconButton,
    Checkbox,
    ListItemText,
    ClickAwayListener
} from '@material-ui/core';
import {
    Close as CloseIcon,
    ArrowDropDown as ArrowIcon
} from '@material-ui/icons';
// import ValidationAdornment from './validationAdornment';
import styles from './styles';

const MenuProps = items => ({
    PaperProps: {
        style: {
            // height: items * 46 + 18,
            width: 250,
            maxHeight: 'calc(100% - 30px)'
        }
    },
    MenuListProps: {
        style: {
            padding: 0
        }
    }
});

const SelectField = ({ id, value, name,  label, classes, displayEmpty, limitText, error, errors, warning, warnings, deselectable, skipOKValidation, removable, multiple,
    actionHandleChange, disabled, items, renderValue }) => {
        debugger;
        console.log('getting disabled value', items)
    const getJoinedValue = (selected) => {
        if (limitText) {
            let joined = selected.join(', ');
            if (joined.length < 15) {
                return joined;
            } else {
                return joined.substring(0, 15).concat('...');
            }
        } else {
            return selected;
        }
    };

    const getMaxValue = (selected) => {
        if (limitText) {
            return selected.length < 15 ? selected : selected.substring(0, 15).concat('...');
        } else {
            return selected;
        }
    };

    const isRemovable = () => {
        if (removable) {
            if (multiple) {
                return value.length > 0;
            } else {
                return value !== '';
            }
        }

        return false;
    };

    const toggleDeselectable = (e) => {
        if (allSelected()) {
            actionHandleChange([]);
        } else if (someSelected() || noneSelected()) {
            let vals = [];
            items.forEach(item => vals.push(utilities.getValueFromKeyValueObject(item)));
            actionHandleChange(vals);
        }
        setOpen(false);
        e.stopPropagation();
        e.preventDefault();
    };

    const handleChange = (e, id) => {
        debugger;
        actionHandleChange(e.target.name,e.target.value, id);
        // if (!multiple) {
            setOpen(false);
        // }
        e.stopPropagation();
        e.preventDefault();
    };

    const handleRemove = (e, id) => {
        actionHandleChange(multiple ? [] : '', id);
        setOpen(false);
        e.stopPropagation();
        e.preventDefault();
    };

    const handleClickAway = () => setOpen(false);

    const allSelected = () => value.length === items.length;

    const someSelected = () => value.length > 0 && value.length !== items.length;

    const noneSelected = () => value.length === 0;

    const [open, setOpen] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => handleClickAway()}>
            <div>
                {utilities.isSetAndNotEmpty(label) &&
                    <InputLabel shrink htmlFor={id}>{label}</InputLabel>
                }
                {disabled ? (
                    <Input
                        id={id}
                        value={value && items.length > 0 ? utilities.getValueFromKeyValueArray(items, value) : ''}
                        disabled={disabled}
                        autoComplete='off'
                        fullWidth
                        classes={{
                            disabled: classes.textDisabled
                        }}
                        inputProps={{
                            spellCheck: false
                        }}
                    />
                ) : (
                    <Select
                        open={open}
                        id={id}
                        name={name}
                        fullWidth
                        multiple={multiple}
                        value={utilities.isSet(value) ? value : ''}
                        onChange={(e) => handleChange(e, id)}
                        classes={{ selectMenu: classes.selectHeight }}
                        IconComponent={() => (<ArrowIcon style={{ fontSize: 24, cursor: 'pointer' }} onClick={() => setOpen(true)} />)}
                        input={
                            <Input
                                onClick={() => setOpen(true)}
                                fullWidth
                                margin='dense'
                                // startAdornment={!disabled && <ValidationAdornment position='start' error={error} errors={errors} warning={warning} warnings={warnings} skipOKValidation={skipOKValidation} />}
                                endAdornment={
                                    !disabled &&
                                        <InputAdornment position='end'>
                                            {deselectable && multiple && (
                                                <Tooltip title={allSelected() ? 'Deselect all' : 'Select all'} placement='top-end'>
                                                    <Checkbox
                                                        color='primary'
                                                        indeterminate={someSelected()}
                                                        checked={allSelected()}
                                                        onChange={(e) => toggleDeselectable(e)}
                                                    />
                                                </Tooltip>
                                            )}
                                            {isRemovable() && (
                                                utilities.isSetAndNotEmpty(value) && (
                                                    <Tooltip title='Remove' placement='top-end'>
                                                        <IconButton onClick={(e) => handleRemove(e, id)}>
                                                            <CloseIcon style={{ fontSize: 18 }} color='primary' />
                                                        </IconButton>
                                                    </Tooltip>
                                                )
                                            )}
                                        </InputAdornment>
                                }
                                inputProps={{
                                    spellCheck: false
                                }}
                                id={id}
                            />
                        }
                        displayEmpty={displayEmpty}
                        renderValue={utilities.isSet(renderValue) ? renderValue : selected => multiple ? getJoinedValue(selected) : getMaxValue(utilities.getValueFromKeyValueArray(items, selected))}
                        MenuProps={MenuProps(items.length)}
                    >
                        {items.map(item => {
                            // if (multiple) {
                                const key = utilities.getKeyFromKeyValueObject(item);
                                return (
                                    <MenuItem key={key} value={key}>
                                        <ListItemText primary={key} />
                                    </MenuItem>
                                );
                            // } else {
                            //     return (
                            //         <MenuItem key={utilities.getKeyFromKeyValueObject(item)} value={utilities.getKeyFromKeyValueObject(item)}>{utilities.getValueFromKeyValueObject(item)}</MenuItem>
                            //     );
                            // }
                        })}
                    </Select>
                )}
            </div>
        </ClickAwayListener>
    );
};

SelectField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    label: PropTypes.string.isRequired,
    displayEmpty: PropTypes.bool.isRequired,
    removable: PropTypes.bool.isRequired,
    deselectable: PropTypes.bool.isRequired,
    multiple: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    warning: PropTypes.bool.isRequired,
    limitText: PropTypes.bool.isRequired,
    errors: PropTypes.array,
    warnings: PropTypes.array,
    disabled: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    actionHandleChange: PropTypes.func.isRequired,
    renderValue: PropTypes.func,
    skipOKValidation: PropTypes.bool
};

SelectField.defaultProps = {
    id: null,
    multiple: false,
    deselectable: false,
    disabled: false,
    skipOKValidation: false,
    displayEmpty: false,
    removable: false,
    error: false,
    warning: false,
    limitText: false,
    errors: [],
    warnings: [],
    actionHandleChange: f => f,
    items: [],
    value: ''
};

export default withStyles(styles)(SelectField);
