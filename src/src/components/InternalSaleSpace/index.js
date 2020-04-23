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


class InternalSaleSpace extends React.Component {
    constructor (props) {
        super(props)
        // this.loadTableData ()
    }
    loadTableData = () => {
        debugger;
        this.props.actions.MAACalaculation_LoadTableData()
    }
    handleOpenStore =  () =>   {
        this.props.history.push(paths.allocationView)
    }

    render () {
        return (
            // <React.fragments>
            <div>
                <InternalSalesTable  tableData = {this.props.tableData}/>
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
    // tableData: state.tableData
})

const mapDispatchToProps  = dispatch => ({
    // actions: bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (InternalSaleSpace)