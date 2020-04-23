import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import paths from './paths';
// import utilities from '../../utilities'

const InternalSaleSpace = lazy(() =>
    import('../InternalSaleSpace' ),
);


const SaleSpaceStructure = lazy(() =>
    import('../SaleSpaceStructure' ),
);

const AllocationView  = lazy ( () => 
    import ('../AllocationView' )
)


const getTitle = (path) => {
    switch (path.toLowerCase()) {
    case '/InternalSaleSpace':
        return 'InternalSaleSpace';
    case '/SaleSpaceStructure':
        return 'SaleSpaceStructure';
        case '/AllocationView':
        return 'AllocationView'
    default:
        return '';
    }
};

const Routes = () => (
    <Switch>
        <Route exact path={paths.internalSaleSpace} component={InternalSaleSpace} />
        <Route exact path={paths.storeProperties} component={SaleSpaceStructure} />
        <Route exact path={paths.allocationView} component={AllocationView} />
        {/* <Route component={RouteError} /> */}
    </Switch>
);

export { Routes, getTitle };
