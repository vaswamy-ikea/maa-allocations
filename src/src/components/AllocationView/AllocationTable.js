import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import loader from '../Common/Loader'



const getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTable: {
      root: {
      },
      paper: {
      }
    },
    MUIDataTableHeadRow: {
      root: {
        whiteSpace: 'nowrap'
      }
    },
    MUIDataTableBodyRow: {
      root: {
        whiteSpace: 'nowrap'
        // '&:nth-child(odd)': { 
        //   backgroundColor: '#FF0000'
        // }
      }
    },
    MUIDataTableBodyCell: {
      root: {
        '&:nth-child(2)': {
          width: '170px'
        },
        '&:nth-child(3)': {
          width: 170
        }
      }
    }
  }
})

// const AllocationTable = (props) => {
//   debugger;
//     const {allocationData, allocationColumns} = props 
//     const options = {
//       pagination: false,
//       responsive: 'scrollFullHeight',
//         print: false,
//         download: true,
//         filter: true,
//         sort:true,
//         filterType: 'textField',
//         // responsive: "scroll",
//         search:false,
//         selectableRowsOnClick: true
//       };
//         return (
//           <MuiThemeProvider theme={getMuiTheme()}>
//             <MUIDataTable
//             data={allocationData}
//             columns={allocationColumns}
//             options={options}
//           />
//         </MuiThemeProvider>
//       )
//       }
   
class AllocationTable extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    debugger;
    const {allocationData, allocationColumns, detailedAllocationData} = this.props 
    let result = []
    if(detailedAllocationData && detailedAllocationData.length > 0) {
      for (var i = 0 ; i< 100; i++) {
        result.push(detailedAllocationData[i])
      }
    }
    const options = {
      pagination: false,
      // responsive: 'stackedFullWidth',
      responsive: 'scrollMaxHeight',
      selectableRowsHeader: false,
      selectableRowsOnClick: true,
      disableToolbarSelect: true,
      // responsive: 'stacked',
        print: false,
        download: true,
        filter: true,
        sort:true,
        filterType: 'textField',
        // responsive: "scroll",
        search:false,
        selectableRowsOnClick: true,
        selectableRows: "single",
        fixedHeaderOptions : {
          xAxis: true, yAxis: true
        }
      };
        return (
          <React.Fragment>
            {detailedAllocationData && detailedAllocationData.length ?
          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
            // data={detailedAllocationData}
            data={result}
            columns={allocationColumns}
            options={options}
          />
        </MuiThemeProvider> : loader()}
        </React.Fragment>
      )
  }
      
}

const mapStateToProps = state => ({
  detailedAllocationData: state.allocationView.detailedAllocation,
})

const mapDispatchToProps  = dispatch => ({
  actions: bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (AllocationTable)
// export default AllocationTable