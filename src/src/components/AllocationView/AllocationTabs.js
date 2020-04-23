import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AllocationTable from './AllocationTable';
import loader from '../Common/Loader'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Checkbox,
    FormControl,
    FormControlLabel,
    Tooltip,
    Typography
} from '@material-ui/core';



const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={5}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = { 
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      overflow:'auto'
    },
    marginTop : {
      marginTop: '50px'
    }  
  }));
  
export default   function AllocationTabs(props) {
  debugger;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const {allocationColumns, allocationData} = props
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Detailed Allocation" {...a11yProps(0)} />
            <Tab label="Space Need Overview" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {/* {allocationData  ? <AllocationTable allocationColumns = {allocationColumns} allocationData= {allocationData}/> : loader ()} */}
          {/* {allocationData && <AllocationTable allocationColumns = {allocationColumns} allocationData= {allocationData}/>} */}
          <AllocationTable allocationColumns = {allocationColumns} />
        </TabPanel>
        
        <TabPanel value={value} index={1}>
            Space need overview
        </TabPanel>
      </div>
    );
  }



