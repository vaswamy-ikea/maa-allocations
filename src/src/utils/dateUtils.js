import moment from 'moment/moment';

// the date object must be an moment object
const isValidDate = date => date.isValid();

const isValidDateStrictISO8601 = date => moment(date, moment.ISO_8601, true).isValid();

const isValidDateStrict = date => moment.utc(date, 'L', true).isValid();

const isValidDateNotStrict = date => moment.utc(date).isValid();

const dayPickerPastDays = { before: moment.utc(new Date()).add(1, 'days')._d };

const getDateTomorrow = moment(new Date()).add(1, 'days')._d;

const getNow = moment(new Date())._d;

const convertToDate = date => {
    const d = moment.utc(date, 'L', true)._d;
    return d instanceof Date && !isNaN(d) ? d : null;
};

const formatDate = date => date ? moment(date).format('L') : '';

const formatDateTime = date => `${moment(date).format('L LTS')}`;

const format = date => date ? moment(date).format('YYYY-MM-DD') : null;

const getLocalFormat = _ => moment.localeData().longDateFormat('L');

const isDateObject = (date) => date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);

const isDateBetween = (date, before, after) => moment(date).isSameOrAfter(before, 'day') && moment(date).isSameOrBefore(after, 'day');

const setHoursToDate = (date, hours) => {
    date.setHours(hours);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
};

const setBeginningOfDayToDate = (date) => {
    date.setHours(0);
    date.setMinutes(-date.getTimezoneOffset());
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
};

const setEndOfDayToDate = (date) => {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(59);
    return date;
};

const getIsoDateObjectByString = (date) => {
    let m = moment.utc(date, getLocalFormat(), moment.locale());
    return new Date(m.toISOString());
};

const dateIsAfter = (date) => setBeginningOfDayToDate(date) > setBeginningOfDayToDate(new Date());

export default {
    isValidDate,
    isValidDateStrict,
    isValidDateStrictISO8601,
    isValidDateNotStrict,
    dayPickerPastDays,
    getNow,
    getDateTomorrow,
    formatDate,
    formatDateTime,
    format,
    getLocalFormat,
    isDateObject,
    isDateBetween,
    setHoursToDate,
    setBeginningOfDayToDate,
    setEndOfDayToDate,
    getIsoDateObjectByString,
    dateIsAfter,
    convertToDate
};
