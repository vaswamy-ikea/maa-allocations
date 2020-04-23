// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


//  export default function saleSpaceTab (props) {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
    
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//     return (
//         <div className={classes.root}>
//         <AppBar position="static">
//             <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//                 <Tab label="Item One" {...a11yProps(0)} />
//                 <Tab label="Item Two" {...a11yProps(1)} />
//                 <Tab label="Item Three" {...a11yProps(2)} />
//             </Tabs>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//             Item One
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//             Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//             Item Three
//         </TabPanel>
//         </div>
//     )
// }



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SSSProperties from './SSSPropertiesForm';
import Range from './Range'
import {NormalTextField, NumberTextField} from '../Common/Forms';


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
import { SaveOutlined as SaveIcon } from '@material-ui/icons';

function TabPanel(props) {
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
  },
  marginTop : {
    marginTop: '50px'
  }  
}));

export default function SaleSpaceTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="SSS Properties" {...a11yProps(0)} />
          <Tab label="Range" {...a11yProps(1)} />
          <Tab label="Zones" {...a11yProps(2)} />
          <Tab label="Sales Ranking" {...a11yProps(3)} />
          <Tab label="Import" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SSSProperties />
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        {/* <Range />
        Range */}
        Range
      </TabPanel>
      <TabPanel value={value} index={2}>
        Zones
      </TabPanel>
      <TabPanel value={value} index={3}>
        Sales Ranking
      </TabPanel>
      <TabPanel value={value} index={4}>
        Import
      </TabPanel>
    </div>
  );
}