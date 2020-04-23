import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Helmet } from 'react-helmet';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  export  default loader;