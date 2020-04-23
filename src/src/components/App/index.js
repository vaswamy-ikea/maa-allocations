import React , {forwardRef }from 'react';
import 'core-js/stable';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MaterialTable from "material-table";
import { getTitle } from '../Routes';
import {Button, Grid} from '@material-ui/core'
import FilterList from '@material-ui/icons/FilterList';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import MenuBar from './MenuBar'
import CircularProgress from '@material-ui/core/CircularProgress';
import { hot } from 'react-hot-loader';
import MainContent from './MainContent'
import InternalSalesTable from '../InternalSaleSpace'
import SaleSpaceStructure from '../SaleSpaceStructure'
// import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // buttonRow: {
  //   marginTop: '20px'
  // },
  marginTop: {
    marginTop: '20px' 
  }
}));

const tableIcons = {
    Filter: forwardRef((props,ref) => <FilterList {...props} ref= {ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
}


const loader = () => (
  <div >
      <Helmet>
          <title>{'MAA  :: Loading'}</title>
      </Helmet>

      <CircularProgress color='primary' thickness={1.0} size={100} />
      <br />
      <Typography variant='body1'>
          {'Loading MAA...'}
      </Typography>
  </div>
);


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
            <MenuBar />
      </Toolbar>
    </AppBar>
    <MainContent loader={loader()} />
    <Grid
  
    >

    </Grid>
      {/* <Grid container justify="center" spacing={1} className={classes.marginTop}>
        <Grid xs={9}>
          <SaleSpaceStructure />
        </Grid>
        
      </Grid> */}
      
  </div>
  );
}

// export default withRouter(App);
export default hot(module)(withRouter(App));
