import types from '../types'
import axios from 'axios'


const getAllocationTableData = (detailedAllocation) => {
    debugger;
    return { type: types.DETAILED_ALLOCATION_TABLEDATA, detailedAllocation }
}

const Load_DetailAllocationData = (sid) => { 
    debugger;
    return (dispatch, getState) => {
        
            // return axios.get(`http://10.62.18.83:9090/api/v1/allocatableitems/${sid}`)
            return axios.get(`https://isp-api-test.azurewebsites.net/api/v1/allocatableitems/${sid}`)
            .then(function (response) {
                debugger;
                dispatch(getAllocationTableData(response));
             })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };
}

export default {
    Load_DetailAllocationData
}