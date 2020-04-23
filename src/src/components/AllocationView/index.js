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
import AllocationTabs from './AllocationTabs'
import loader from '../Common/Loader'

class AllocationView extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
          

        allocationColumns: [ 
            {
                name: "itemNo", label: "Article Number"
            },{
                name: "articleDescription", label: "Article Description"
            },{
                name: "hfb" ,label: "HFB"
            }, {
                name: "baPaNo", label: "PA"
            },{
                name: "paName", label: "PA Name"
            }, {
                name: "rangeName",label: "Range Name"
            }, {
                name: 'division', label: 'Division'
            }, {
                name: 'specialityShop', label: 'Speciality Shop'
            },{
                name: 'rangeGroup', label: 'Range Group'
            }, {
                name: 'secondLevelRangeGroup', label: 'Second Level Range Group'
            }, {
                name: 'suggestedSalesMethod', label: 'Sales Method'
            }, {
                name: 'salesRanking', label: 'Sales Ranking '
            }, {
                name: 'primaryLocation', label: 'Primary Location'
            }, {
                name: 'allocationRatio', label: 'Homebase, Allocation Ratio (%)'
            }, {
                name: 'multipleSalesSpaceLocation' , label: 'Multiple SalesSpace Location'
            }, {
                name: 'weeklyForecast', label: 'Weekly Forecast'
            }, {
                name: 'appliedSafetyStock', label: 'Applied Safety Stock'
            }, {
                name: 'minSafetyStock', label: 'Min Safety Stock'
            }, {
                name: 'minF', label: 'MIN_F'
            }, {
                name: 'dtfpF', label: 'DTFP_F'
            }, {
                name: 'dtfpPlusF', label: 'DTFP+_F'
            }
            ],
            allocationData : [
                ["70210246", "ADDE chr black AP JP", "08", "0821", "chairs incl covers, folding chairs and benches", "ADDE", "Markethall", "Decoration"],
                ["60219185", "ADDE chr red/white AP JP", "08", "0821", "chairs incl covers, folding chairs and benches", "ADDE", "Self Serve Furniture Area", "Activity Areas"],
                ["90219198", "ADDE chr white AP JP", "08", "0821", "chairs incl covers, folding chairs and benches", "ADDE", "Showroom", "Tent"],
                ["80288798", "ADDE leg white  AP CN", "08", "0821", "chairs incl covers, folding chairs and benches", "ADDE", "Other", "Kitchen"],
                ["00409503", "AINA cushion cvr 50 * 50 grey AP", "03", "0341", "Home desks", "AINA", "Warehouse", "Bathroom"],
                ["20409502", "AINA cushion cvr 50 * 50 light pink AP", "12", "1231", "Cushions", "AINA", "Other", "Tent"],
                ["30465468", "AINA cushion cvr 50 * 50 dark grey AP", "12", "1231", "Cushions", "AINA", "Other", "Home Textile"],
                ["00398806", "AINA fabric 150 blue grey", "12", "1231", "Cushions", "AINA", "MarketHall", "Others"],
                ["90159878", "AINA fabric 150  grey", "12", "1231", "Metre fabrics", "AINA", "Self Serve Furniture Area", "Cooking & Eating"],
                ["10284122", "AINA n cushion cvr 50 * 50 beige AP", "12", "1231", "Meter fabrics, folding chairs and benches", "AINA", "Warehouse", "Others"]
            ]
        
        }
    }

    render () {
        return (
            <Grid container>

                {/* <AllocationTabs  allocationColumns = {this.state.allocationColumns} allocationData= {this.state.allocationData} /> */}
                {/* <AllocationTabs  allocationColumns = {this.state.allocationColumns} allocationData= {this.props.detailedAllocationData} />             */}
                <AllocationTabs  allocationColumns = {this.state.allocationColumns} />
                            </Grid>
        )
    }
}


const mapStateToProps = state => ({
    detailedAllocationData: state.allocationView.detailedAllocation,
})

const mapDispatchToProps  = dispatch => ({
    actions: bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (AllocationView)


