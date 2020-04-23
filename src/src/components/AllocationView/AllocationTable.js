import React from 'react'
import MUIDataTable from "mui-datatables";

const AllocationTable = (props) => {
    const {allocationData, allocationColumns} = props 
    const options = {
        pagination: false,
        print: false,
        download: true,
        filter: true,
        sort:true,
        filterType: 'textField',
        // responsive: "scroll",
        search:false,
        selectableRowsOnClick: true
      };
    return (
        <MUIDataTable
        data={allocationData}
        columns={allocationColumns}
        options={options}
      />
    )
}

export default AllocationTable