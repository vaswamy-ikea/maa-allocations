import React, {forwardRef} from 'react'

import MaterialTable from "material-table";
import Grid from '@material-ui/core/Grid';
// import Icons from '@material-ui/core/Icon'
// import {Icon} from '@material-ui/core'
import FilterList from '@material-ui/icons/FilterList';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import MenuBar from './MenuBar'

class InternalSalesTable extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            selectedRow: null
          }
    }

    render () {
        const tableIcons = {
            Filter: forwardRef((props,ref) => <FilterList {...props} ref= {ref}/>),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
        }
        return (
            <MaterialTable
            icons = {tableIcons}
            title="Select sale space structure and operation"
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'SSSID', field: 'sssid' },
              { title: 'Store name', field: 'storename'},
              {title: 'RuCode', field: 'rucode'},
              {title: 'Created from', field: 'createdfrom'},
              {title: 'Valid Date', field: 'validdate', type: 'date'},
              {title: 'Created By', field: 'createdby'},
              {title: 'Created Date', field: 'createdate' , type: 'date'},
              {title: 'State', field: 'state'},
              {title: 'Range store', field: 'rangestore'},
              {title: 'Forecast Store', field: 'forecaststore'},
              {title: 'Last Calculation Date', field: 'lastcalculationdate'}
            ]}
            data={[
              { name: '001 - FEB 19 LOURES', sssid: '3130', storename: '001 - IKEA LISBON - LOURES', rucode: 'PT' , createdfrom: 'CSSS FY19', validdate: '10/08/2019', createdby: 'STBR', createdate: '10/08/2018',
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
              state: 'Available', rangestore: '059', forecaststore: '003', lastcalculationdate: 63 }
            ]}    
            // data={this.props.tableData}
            onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}    
            options={{
              filtering: true,
              paging: false,
              search: false,
              sorting: true,
              headerStyle : {
                  fontWeight: 'bold',
                  color: '#000000'
              },
              rowStyle:  rowData => ({
                backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF',
                whiteSpace: 'nowrap'
              }) 
            }}
          />
        )
    }
}

export default InternalSalesTable