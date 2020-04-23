import types from '../types'

export const initialState = {
    detailedAllocation: null
}

export default (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case types.DETAILED_ALLOCATION_TABLEDATA: 
        return {...state, detailedAllocation: action.detailedAllocation.data}
        default: return {...state}
    }
}