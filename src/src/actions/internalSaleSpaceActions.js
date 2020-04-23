import types from '../types'

const tableData =  [{ name: '001 - FEB 19 LOURES', sssid: '3130', storename: '001 - IKEA LISBON - LOURES', rucode: 'PT' , createdfrom: 'CSSS FY19', validdate: '10/08/2019', createdby: 'STBR', createdate: '10/08/2018',
state: 'Archived', rangestore: '059', forecaststore: '001', lastcalculationdate: 63 },
{ name: '002 - IKEA Kyiv - 2019-04-01', sssid: '3123', storename: '002 - IKEA Kyiv', rucode: 'UA' , createdfrom: 'CSSS FY20', validdate: '05/02/2020', createdby: 'KYATH', createdate: '05/02/2019',
state: 'Available', rangestore: '001', forecaststore: '001', lastcalculationdate: 63 },
{ name: '062 - AUG 19 CAUSEWAY BAY', sssid: '3398', storename: '005 - IKEA AALBORG', rucode: 'CA' , createdfrom: 'CSSS FY18', validdate: '21/09/2018', createdby: 'drtel', createdate: '21/02/2018',
state: 'Busy', rangestore: '007', forecaststore: '005', lastcalculationdate: 63 },
{ name: '003 - AUG19 - IKEA Richmond', sssid: '3398', storename: '022 - TAMPINES', rucode: 'HR' , createdfrom: 'CSSS FY20', validdate: '27/09/2018', createdby: 'jiisin', createdate: '27/01/2018',
state: 'Archived', rangestore: '022', forecaststore: '022', lastcalculationdate: 63 },
{ name: '022 - OCT19 - Tampines- training', sssid: '3398', storename: '022 - IKEA ZAGREB', rucode: 'SG' , createdfrom: 'CSSS FY120', validdate: '02/02/2018', createdby: 'stbr', createdate: '02/01/2018',
state: 'Available', rangestore: '059', forecaststore: '003', lastcalculationdate: 63 },


{ name: '001 - FEB 19 LOURES', sssid: '3130', storename: '001 - IKEA LISBON - LOURES', rucode: 'PT' , createdfrom: 'CSSS FY19', validdate: '10/08/2019', createdby: 'STBR', createdate: '10/08/2018',
state: 'Archived', rangestore: '059', forecaststore: '001', lastcalculationdate: 63 },
{ name: '002 - IKEA Kyiv - 2019-04-01', sssid: '3123', storename: '002 - IKEA Kyiv', rucode: 'UA' , createdfrom: 'CSSS FY20', validdate: '05/02/2020', createdby: 'KYATH', createdate: '05/02/2019',
state: 'Available', rangestore: '001', forecaststore: '001', lastcalculationdate: 63 },
{ name: '062 - AUG 19 CAUSEWAY BAY', sssid: '3398', storename: '005 - IKEA AALBORG', rucode: 'CA' , createdfrom: 'CSSS FY18', validdate: '21/09/2018', createdby: 'drtel', createdate: '21/02/2018',
state: 'Busy', rangestore: '007', forecaststore: '005', lastcalculationdate: 63 },
{ name: '003 - AUG19 - IKEA Richmond', sssid: '3398', storename: '022 - TAMPINES', rucode: 'HR' , createdfrom: 'CSSS FY20', validdate: '27/09/2018', createdby: 'jiisin', createdate: '27/01/2018',
state: 'Archived', rangestore: '022', forecaststore: '022', lastcalculationdate: 63 },
{ name: '022 - OCT19 - Tampines- training', sssid: '3398', storename: '022 - IKEA ZAGREB', rucode: 'SG' , createdfrom: 'CSSS FY120', validdate: '02/02/2018', createdby: 'stbr', createdate: '02/01/2018',
state: 'Available', rangestore: '059', forecaststore: '003', lastcalculationdate: 63 }]


const getTableData = (tableData) => {
    return { type: types.INTERNAL_SALESPACE_TABLEDATA, tableData }
}

const MAACalaculation_LoadTableData = () => {
    return (dispatch, getState) => {
        //Make an api call when available to fetch real data
        dispatch(getTableData(tableData));
        
        // return api.getAdminInfo().then(response => {
        //     const adminModel = models.adminObjectModel(response.data);
        //     dispatch({ type: types.ADMINISTRATION_LOAD_META_DATA_SUCCESS, metaData: adminModel });
        // }).catch(error => {
        //     dispatch({ type: types.ADMINISTRATION_LOAD_META_DATA_FAILURE, error });
        // });
    };
}

 export default {
    MAACalaculation_LoadTableData
 }