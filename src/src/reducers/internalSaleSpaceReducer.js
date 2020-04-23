import types from '../types'

export const initialState = {
    tableData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INTERNAL_SALESPACE_DATA: 
        return {...state, tableData: action.tableData}
        default: return {...state}
    }
}