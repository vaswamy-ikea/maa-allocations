import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Checkbox,
    FormControl,
    FormControlLabel,
    Tooltip,
    Typography
} from '@material-ui/core';
import {NormalTextField, NumberTextField, SelectField, DatePickerTextField} from '../Common/Forms';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import dateUtils from '../../utils/dateUtils';
import utilities from '../../utilities';
import moment from 'moment/moment';

const tomorrow = dateUtils.setBeginningOfDayToDate(moment.utc(new Date()).add(1, 'days')._d);
    const disabledDates = {
        fromDate: [{ before: tomorrow }],
        toDate: [{ before: tomorrow }]
    };

class SSSProperties extends Component {

    state = {
        description: '',
        fromDateSelected: null,
        fromDate:'',
        storeName: '',
        storeNameSelected: '',
        // expDate: new Date(),
        expDate: '',
        forecastAdj: '',
        // storeItems : ['001','002','003','004']
        storeItems : [
            {SPR: 'SPR'},
            {RSP: 'RSP'},
            {SEC: 'SEC'},
            {CES: 'CES'},
            {GFR: 'GFR'},
            {DDD: 'DDD'}
        ]
    };

    handleChange = (name,val, id) => {
        debugger;
        this.setState ({
            [name]: val
        })
    }

    dateChanged = (dateStr, fieldName) => {
        debugger;
        let state = { ...this.state };
        let date = dateUtils.isValidDateStrict(dateStr) ? dateUtils.convertToDate(dateStr) : null;
        let isValid = utilities.isSetAndNotEmpty(date) && date >= tomorrow; // && (date >= disabledDates[fieldName][0].before || date <= disabledDates[fieldName][0].after);
        const otherDate = fieldName === 'fromDate' ? 'fromDate' : 'fromDate';
        const otherDateSelected = state.fromDateSelected;
        // Check if we need to modify dates to make to and from date be in the correct order.
        if (isValid) {
            // state['fromDateSelected'] = state['fromDate'] = date;
           
            if (fieldName === 'fromDate') {
                this.setState({
                    fromDate:date,
                    fromDateSelected: date
                })
            //     date = dateUtils.setBeginningOfDayToDate(date);
            //     if (utilities.isSetAndNotEmpty( state.fromDateSelected) && moment(date).isAfter( state.fromDateSelected)) {
            //         const toDate = new Date(date);
            //         dateUtils.setEndOfDayToDate(toDate);
            //         state[`${otherDate}Selected`] = state[`${otherDate}`] = toDate;
            //     }
                // state[`${fieldName}Selected`] = state[`${fieldName}`] = date;
            } else if (fieldName === 'toDate') {
                date = dateUtils.setEndOfDayToDate(date);
                if (utilities.isSetAndNotEmpty(otherDateSelected) && moment(date).isBefore(otherDateSelected)) {
                    const fromDate = new Date(date);
                    dateUtils.setBeginningOfDayToDate(fromDate);
                    state[`${otherDate}Selected`] = state[`${otherDate}`] = fromDate;
                }
            }
        } else {
            state[`${fieldName}Selected`] = null;
            state[`${fieldName}`] = dateStr;
        }

        // state[`${fieldName}Error`] = fieldName === 'toDate' && dateStr === '' ? false : !isValid;
        // setLocalState(state);
        this.setState({
            state
        })
    };

    
    handleChangeCommitDatePicker = (date) => {
        this.setState({ commitDate: date });
    };

    handleChangeTextCommitDatePicker = (val, id) => {
        this.setState({ commitDate: val });
    };

    handleSelectChange = (name,val) => {
        debugger;
        this.setState ({
            storeNameSelected: val
        })
    }

    getSelectedDays = (val) => {
        if (val === '') {
            return moment.utc(new Date())._d;
        } else {
            if (utilities.isSetAndNotEmpty(val) && dateUtils.isValidDateStrict(val)) {
                return moment.utc(new Date(val))._d;
            } else {
                return moment.utc(new Date())._d;
            }
        }
    };

    errorCheck = (date, todayDate) => {
        if (utilities.isSetAndNotEmpty(date) && !dateUtils.isValidDateStrict(date)) {
            return true;
        }
        if (typeof date === 'object') {
            if (date.getDate() < todayDate.getDate() && date.getMonth() <= todayDate.getMonth() && date.getFullYear() <= todayDate.getFullYear()) {
                return true;
            }
        }
        return false;
    };
   
    render () {
        const {
            expDate,
            fromDateSelected,
            fromDate,
            storeNameSelected,
            storeName,
            storeItems,
            description
        } = this.state
        const todayDate = new Date();
        debugger;
        return (
            <Card >
            <CardContent>
            <Grid container>
           
            <Grid item xs = {6} >
                <FormControl margin='dense' >
                <NormalTextField
                        id='storeName'
                        label='Name'
                        value={storeName}
                        actionHandleChange={this.handleChange}
                        name='storeName'
                        maxLength = "50"
                        // autoFocus
                    />
                </FormControl>
            </Grid>
            <Grid item xs = {6}>
                <FormControl margin='dense' >
                    <NormalTextField
                        id='description'
                        label='Description'
                        value={description}
                        actionHandleChange={this.handleChange}
                        name='description'
                        maxLength = "100"
                        // autoFocus
                    />
                </FormControl >
            </Grid>
            <Grid item xs = {6} style={{marginTop : '50px'}}>
                <FormControl margin='dense'>
                {/* <NumberTextField
                    id='expdate'
                    label='Exp. valid date'
                    value={this.state.expDate}
                    // autoFocus
                    // actionHandleChange={this.handleChange}
                /> */}

                {/* <DatePickerTextField
                            id='commitDatePicker'
                            value={expDate}
                            label={'Exp. valid date'}
                            removable={false}
                            type='date'
                            disabledDays={[{ before: todayDate }]}
                            selectedDays={this.getSelectedDays(this.state.expDate)}
                            disabled={false}
                            error={this.errorCheck(this.state.expDate, todayDate)}
                            warning={false}
                            actionHandleChangeDatePicker={this.handleChangeCommitDatePicker}
                            actionHandleChangeTextDatePicker={this.handleChangeTextCommitDatePicker}
                            showFormHelper
                            showWeekNumbers
                            showOutsideDays
                        /> */}

                     <DatePickerTextField value={fromDate} label='Exp. valid date'
                            skipOKValidation
                            actionHandleChangeDatePicker={val => this.dateChanged(val, 'fromDate')}
                            actionHandleChangeTextDatePicker={val => this.dateChanged(val, 'fromDate')}
                            selectedDays={fromDateSelected}
                            disabledDays={disabledDates.fromDate}
                            // disabled={!enabled}
                        />
                </FormControl>
            </Grid>
            <Grid item xs = {6} style={{marginTop : '50px'}}>
                <FormControl disabled={false} margin='dense'>
                <SelectField
                    id='storeNameList'
                    label='Store'
                    value = {storeNameSelected}
                    name='storeNameList'
                    disabled = {false}
                    items={storeItems}
                    actionHandleChange={this.handleSelectChange}
                />
                </FormControl>
            </Grid>
            <Grid item xs = {6} style={{marginTop : '50px'}}>
                <FormControl margin='dense'>
                    <NumberTextField
                        id='forecastAdjFactor'
                        label='Forecast Adjustment Factor'
                        value={this.state.forecastAdj}
                        actionHandleChange={this.handleChange}
                        name='forecastAdjFactor'
                        maxLength = "13"
                        // autoFocus
                    />
                </FormControl>
            </Grid>
            </Grid>
            </CardContent>
            </Card>
        
        )
    }


}

export default SSSProperties;