const isNull = value => value == null;

const isUndefined = value => typeof value === 'undefined';

const isEmpty = value => value === '';
const isSet = value => !isUndefined(value) && !isNull(value);

const isSetAndNotEmpty = value => !isUndefined(value) && !isNull(value) && !isEmpty(value);

const getKeyFromKeyValueObject = (keyValueObject) => Object.keys(keyValueObject)[0];

const getValueFromKeyValueObject = (keyValueObject) => keyValueObject[Object.keys(keyValueObject)]; 

const getKeyValueObjectByKey = (keyValueItems, key) => keyValueItems.find(keyValueItem => Object.keys(keyValueItem)[0] === key);

const getValueFromKeyValueArray = (keyValueItems, key) => getValueFromKeyValueObject(getKeyValueObjectByKey(keyValueItems, key));

export default  {
    isUndefined,
    isSet,
    isNull,
    isEmpty,
    isSetAndNotEmpty,
    getKeyFromKeyValueObject,
    getValueFromKeyValueObject,
    getValueFromKeyValueArray,
    getKeyValueObjectByKey
}