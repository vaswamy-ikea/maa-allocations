import React from 'react'

// import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions'
import SaleSpaceTabs from './SaleSpaceTabs'


class SaleSpaceStructure extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }

    render () {
        return (
            <div>
                <SaleSpaceTabs  tableData = {this.props.tableData}/>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    tableData: state.tableData
})

const mapDispatchToProps  = dispatch => ({
    actions: bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (SaleSpaceStructure)

