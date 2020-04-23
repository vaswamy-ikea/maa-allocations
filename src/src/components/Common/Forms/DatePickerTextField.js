import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import actions from '../../../actions';
import utilities from '../../../utilities';
import dateUtils from '../../../utils/dateUtils';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import {
    DateRange as DateRangeIcon,
    Close as CloseIcon
} from '@material-ui/icons';
import {
    IconButton,
    Popover,
    InputAdornment,
    InputLabel,
    Input,
    Tooltip
} from '@material-ui/core';
import ValidationAdornment from './validationAdornment';

class DatePickerTextField extends Component {
    state = {}

    handleOpenDatePicker = (e, id) => this.setState({ [id]: !this.state[id], anchorEl: e.currentTarget });

    handleCloseDatePicker = (id) => this.setState({ [id]: false });

    handleChangeDatePicker = (date, modifiers = {}, e, id) => {
        debugger;
        if (modifiers.disabled) { return; }
        this.props.actionHandleChangeDatePicker(date, modifiers, e, id);
        this.handleCloseDatePicker(id);
    };

    handleChangeTextDatePicker = (val, id) => {
        this.props.actionHandleChangeTextDatePicker(val, id);
    };

    handleOnBlurDatePicker = (e, id) => this.handleChangeTextDatePicker(e.target.value, id);

    handleOnEnterDatePicker = (e, id) => (e.key === 'Enter' && e.target.value !== '') && this.handleChangeTextDatePicker(e.target.value, id);

    correctValueDatePicker = (val) => dateUtils.isDateObject(val) ? dateUtils.formatDate(val) : val;

    render () {
        const { classes } = this.props;
        return (
            <div>
                <InputLabel shrink htmlFor={this.props.id}>{this.props.label}</InputLabel>
                <Input
                    id={this.props.id}
                    name={this.props.id}
                    autoFocus={utilities.isSet(this.props.autoFocus) ? this.props.autoFocus : false}
                    value={this.correctValueDatePicker(this.props.value)}
                    disabled={this.props.disabled}
                    autoComplete={utilities.isSetAndNotEmpty(this.props.autoComplete) ? 'off' : 'on'}
                    fullWidth
                    onChange={(e) => this.handleChangeTextDatePicker(e.target.value, this.props.id)}
                    onBlur={(e) => this.handleOnBlurDatePicker(e, this.props.id)}
                    onKeyPress={(e) => this.handleOnEnterDatePicker(e, this.props.id)}
                    placeholder={this.props.showFormHelper && dateUtils.getLocalFormat()}
                    classes={{
                        disabled: classes.textDisabled
                    }}
                    inputProps={{
                        spellCheck: utilities.isSet(this.props.spellCheck) ? this.props.spellCheck : false
                    }}
                    // startAdornment={!this.props.disabled && <ValidationAdornment position='start' error={this.props.error} warning={this.props.warning} skipOKValidation={this.props.skipOKValidation} />}
                    endAdornment={
                        !this.props.disabled &&
                            <InputAdornment position='end'>
                                {this.props.removable ? (
                                    this.props.value !== '' ? (
                                        <div style={{ display: 'flex' }}>
                                            <IconButton onClick={(e) => this.handleOpenDatePicker(e, this.props.id)}>
                                                <DateRangeIcon style={{ fontSize: 18 }} color='primary' />
                                            </IconButton>
                                            <Tooltip title='Remove' placement='top-end'>
                                                <IconButton onClick={() => this.handleChangeTextDatePicker('', this.props.id)}>
                                                    <CloseIcon style={{ fontSize: 18 }} color='primary' />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    ) : (
                                        <IconButton onClick={(e) => this.handleOpenDatePicker(e, this.props.id)}>
                                            <DateRangeIcon style={{ fontSize: 18 }} color='primary' />
                                        </IconButton>
                                    )
                                ) : (
                                    <IconButton onClick={(e) => this.handleOpenDatePicker(e, this.props.id)}>
                                        <DateRangeIcon style={{ fontSize: 18 }} color='primary' />
                                    </IconButton>
                                )}
                            </InputAdornment>
                    }
                />
                <Popover
                    open={this.state[this.props.id] === undefined ? false : this.state[this.props.id]}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetorigin={{ horizontal: 'left', vertical: 'top' }}
                    onClose={() => this.handleCloseDatePicker(this.props.id)}
                >
                    <DayPicker
                        // locale={this.props.languageCode}
                        localeUtils={MomentLocaleUtils}
                        onDayClick={(date, modifiers, e) => this.handleChangeDatePicker(date, modifiers, e, this.props.id)}
                        month={this.props.selectedDays}
                        selectedDays={this.props.selectedDays}
                        disabledDays={this.props.disabledDays}
                        showWeekNumbers={this.props.showWeekNumbers}
                        showOutsideDays={this.props.showOutsideDays}
                    />
                </Popover>
            </div>
        );
    }
};

DatePickerTextField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    spellCheck: PropTypes.bool,
    autoComplete: PropTypes.string,
    removable: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    warning: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    disabledDays: PropTypes.array.isRequired,
    selectedDays: PropTypes.instanceOf(Date),
    showFormHelper: PropTypes.bool.isRequired,
    showWeekNumbers: PropTypes.bool.isRequired,
    showOutsideDays: PropTypes.bool.isRequired,
    actionHandleChangeDatePicker: PropTypes.func.isRequired,
    actionHandleChangeTextDatePicker: PropTypes.func.isRequired,
    skipOKValidation: PropTypes.bool
};

DatePickerTextField.defaultProps = {
    id: null,
    removable: false,
    error: false,
    warning: false,
    disabled: false,
    disabledDays: [],
    selectedDays: null,
    showFormHelper: true,
    showWeekNumbers: true,
    showOutsideDays: true,
    actionHandleChangeDatePicker: f => f,
    actionHandleChangeTextDatePicker: f => f
};

const mapStateToProps = state => ({
    // languageCode: state.application.languageCode
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DatePickerTextField));
