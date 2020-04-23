import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Routes } from '../Routes';
import actions from '../../actions';
// import Notifications from '../Common/notifications';
import styles from './styles';

class MainContent extends Component {
    render () {
        const { classes, itemSearchShow, itemSearchPinned } = this.props;

        return (
            <main className={classes.content}>
                <div>
                    <Suspense fallback={this.props.loader}>
                        <Routes />
                    </Suspense>
                    {/* <Notifications /> */}
                </div>
            </main>
        );
    }
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainContent));
