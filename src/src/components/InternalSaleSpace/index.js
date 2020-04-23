import React from 'react'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core'
// import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import { Link } from 'react-router-dom';
import paths from '../Routes/paths'
import InternalSalesTable from './InternalSalesTable'
import loader from '../Common/Loader'


class InternalSaleSpace extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            sid: null
        }
        // this.loadTableData ()
    }
    loadTableData = () => {
        debugger;
        this.props.actions.MAACalaculation_LoadTableData()
    }
    handleOpenStore =  () =>   {
        debugger;
        this.props.actions.Load_DetailAllocationData(this.state.sid)
        this.props.history.push(paths.allocationView)
    }

    setSid (evt, sid) {
        debugger;
        this.setState({sid:sid})
    }

    render () {
        return (
            // <React.fragments>
            <div>
                <InternalSalesTable  tableData = {this.props.tableData} selectStructure = {this.handleStructure} selectedSid = {(evt, sid) => this.setSid (evt, sid)}/>
                <Grid container style={{marginTop : '50px', marginBottom: '50px' }}>
                    <Grid xs={1}>
                        <Button variant="contained" onClick = {() => this.handleOpenStore()} style={{textTransform: 'capitalize'}}> Open</Button>
                    </Grid>
                    <Grid xs={1}>
                        <Button variant="contained" style={{textTransform: 'capitalize'}}>Copy</Button>
                    </Grid>
                    <Grid xs={1}>
                        <Button variant="contained" style={{textTransform: 'capitalize'}}>Delete</Button>
                    </Grid>
                    <Grid xs={1}>
                        <Button variant="contained" style={{textTransform: 'capitalize'}}>Refresh</Button>
                    </Grid>
                    <Grid xs={1}>
                        <Button variant="contained" style={{textTransform: 'capitalize'}}>Calculate</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allocationViewData: state.allocationView.detailedAllocation
})

const mapDispatchToProps  = dispatch => ({
    actions: bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (InternalSaleSpace)