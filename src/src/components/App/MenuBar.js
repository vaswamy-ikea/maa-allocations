// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from "@material-ui/core/Menu";
// import MenuItem from '@material-ui/core/MenuItem';
// import { makeStyles } from '@material-ui/core/styles';
// import Fade from "@material-ui/core/Fade";
// import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem,NavbarText
// } from 'reactstrap';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex'
//   },
//   menuItems: {
//     color : '#ffffff',
//     textTransform: 'none'
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));
// const handleClick = (event, type) => {
    
//   if (type == 'file') {
//     this.setState ({
//       anchorElFile: event.currentTarget
//     })
//   } else if (type === 'tasks' ) {
//     this.setState ({
//       anchorElTasks: event.currentTarget
//     })
//   } else if (type === 'windows' ) {
//     this.setState ({
//       anchorWindows: event.currentTarget
//     })
//   } else if (type === 'help' ) {
//     this.setState ({
//       anchorElHelp: event.currentTarget
//     })
//   }
// };

// const handleClose = (event,type) => {
    
//   if (type == 'file') {
//     this.setState ({
//       anchorElFile: null
//     })
//   } else if (type === 'tasks' ) {
//     this.setState ({
//       anchorElTasks: null
//     })
//   } else if (type === 'windows' ) {
//     this.setState ({
//       anchorWindows: event.currentTarget
//     })
//   } else if (type === 'help' ) {
//     this.setState ({
//       anchorElHelp: event.currentTarget
//     })
//   }
// };

// export default class MenuListComposition extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       anchorElFile: '',
//       anchorElTasks: '',
//       anchorWindows: '',
//       anchorElHelp: ''
//     }

//   }

  

  

  


//   render () {
//     const classes = useStyles ();
//     const openElFile = Boolean(this.state.anchorElFile)
//     const openElTasks = Boolean(this.state.anchorElTasks)
//     const openElWindows = Boolean(this.state.anchorWindows)
//     const openElHelp = Boolean(this.state.anchorElHelp)
//     return (
//       <div>
//         <Button
//           aria-controls="file-menu"
//           aria-haspopup="true"
//           onClick={handleClick('file')}
//         >
//           File
//         </Button>
//         <Menu
//           className={classes.menuItems}
//           id="file-menu"
//           anchorElFile={this.state.anchorElFile}
//           keepMounted
//           open={openElFile}
//           onClose={handleClose('file')}
//           TransitionComponent={Fade}
//         >
//           <MenuItem onClick={handleClose()}>Profile</MenuItem>
//           <MenuItem onClick={handleClose()}>My account</MenuItem>
//           <MenuItem onClick={handleClose()}>Logout</MenuItem>
//         </Menu>
  
//         <Button
//           aria-controls="tasks-menu"
//           aria-haspopup="true"
//           onClick={handleClick('tasks')}
//         >
//           Tasks
//         </Button>
//         <Menu
//           id="tasks-menu"
//           anchorElTasks={this.state.anchorElTasks}
//           keepMounted
//           open={openElTasks}
//           onClose={handleClose('tasks')}
//           TransitionComponent={Fade}
//         >
//           <MenuItem onClick={handleClose()}>1212</MenuItem>
//           <MenuItem onClick={handleClose()}>My asdasd</MenuItem>
//           <MenuItem onClick={handleClose()}>sgsdfsd</MenuItem>
//         </Menu>
  
//         <Button
//           aria-controls="windows-menu"
//           aria-haspopup="true"
//           onClick={handleClick('windows')}
//         >
//           Windows
//         </Button>
//         <Menu
//           id="windows-menu"
//           anchorElWindows={this.state.anchorElWindows}
//           keepMounted
//           open={openElWindows}
//           onClose={handleClose('windows')}
//           TransitionComponent={Fade}
//         >
//           <MenuItem onClick={handleClose()}>Profile1</MenuItem>
//           <MenuItem onClick={handleClose()}>My account2</MenuItem>
//           <MenuItem onClick={handleClose()}>Logout3</MenuItem>
//         </Menu>
  
//         <Button
//           aria-controls="help-menu"
//           aria-haspopup="true"
//           onClick={handleClick('help')}
//         >
//           Help
//         </Button>
//         <Menu
//           id="help-menu"
//           anchorElHelp={this.state.anchorElHelp}
//           keepMounted
//           open={openElHelp}
//           onClose={handleClose('menu')}
//           TransitionComponent={Fade}
//         >
//           <MenuItem onClick={handleClose()}>Profile1</MenuItem>
//           <MenuItem onClick={handleClose()}>My account2</MenuItem>
//           <MenuItem onClick={handleClose()}>Logout3</MenuItem>
//         </Menu>
//       </div>
//     );
//   }
// }



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
//  const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex'
//     },
//     menuItems: {
//       color : '#ffffff',
//       textTransform: 'none'
//     },
//     paper: {
//       marginRight: theme.spacing(2),
//     },


//     navbar: {
//       overflow: 'hidden',
//       backgroundColor: '#333'
//     },
    
//     navbarItem :  {
//       float: 'left',
//       fontSize: '16px',
//       color: 'white',
//       textAlign: 'center',
//       padding: '14px 16px',
//       textDecoration: 'none'
//     },
    
//     dropdown:  {
//       float: 'left',
//       overflow: 'hidden',
//       zIndex: 1,
//         '&:hover' : {
//           dropdowncontent : {
//             display: 'block'
//           }
//         }
//     },
    
//     dropbtn: {
//       fontSize: '16px',  
//       border: 'none',
//       outline: 'none',
//       color: 'white',
//       padding: '14px 16px',
//       backgroundColor: 'inherit',
//       fontFamily: 'inherit',
//       margin: 0
//     },
    
//     dropdownContent:  {
//       display: 'none',
//       position: 'absolute',
//       backgroundColor:' #f9f9f9',
//       minWidth: '160px',
//       boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
//     },
//     dropdownItem:  {
//       float: 'none',
//       color: 'black',
//       padding: '12px 16px',
//       textDecoration: 'none',
//       display: 'block',
//       textAlign: 'left',
//     },
    
    
//   }));
// const MenuBar = (props) => {
//   const classes = useStyles ();
//   return (
//     <div className={classes.navbar}>
//     <a className={classes.navbarItem} href="">Home</a>
//     <a className={classes.navbarItem} href="">News</a>
//     <div class={classes.dropdown}>
//       <button className={classes.dropbtn}>Dropdown 
//       </button>
//       <div className={classes.dropdownContent}>
//         <a className={classes.dropdownItem} href="">Link 1</a>
//         <a className={classes.dropdownItem} href="">Link 2</a>
//         <a className={classes.dropdownItem} href="">Link 3</a>
//       </div>
//     </div> 
//   </div>
//   );
// }

// export default MenuBar;



// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// export default function MenuBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [anchorEl2, setAnchorEl2] = React.useState(null);

//   const handleClickElem1 = (event) => {
//       setAnchorEl(event.currentTarget);
//   };

//   const handleClickElem2 = (event) => {
//     setAnchorEl2(event.currentTarget);
// };

//   const handleCloseElem1 = (type) => {
//       setAnchorEl(null);
//   };

  
//   const handleCloseElem2 = (type) => {
//     setAnchorEl2(null);
// };

//   return (
//     <div>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickElem1}>
//         Open Menu
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleCloseElem1}
//       >
//         <MenuItem onClick={handleCloseElem1}>Profile</MenuItem>
//         <MenuItem onClick={handleCloseElem1}>My account</MenuItem>
//         <MenuItem onClick={handleCloseElem1}>Logout</MenuItem>
//       </Menu>

//       <Button aria-controls="simple-menu-2" aria-haspopup="true" onClick={handleClickElem2}>
//         Open Menu
//       </Button>
//       <Menu
//         id="simple-menu-2"
//         anchorEl2={anchorEl2}
//         keepMounted
//         open={Boolean(anchorEl2)}
//         onClose={handleCloseElem2}
//       >
//         <MenuItem onClick={handleCloseElem2}>Profile12</MenuItem>
//         <MenuItem onClick={handleCloseElem2}>My account12</MenuItem>
//         <MenuItem onClick={handleCloseElem2}>Logout12</MenuItem>
//       </Menu>
//     </div>
//   );
// }



import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  // Link,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import Link from '@material-ui/core/Link';

// import {
//   Link
// } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import paths from '../Routes/paths'

const useStyles = makeStyles(theme => ({
  menuItem : {
    color : '#fff',
    '&:hover' : {
      color: '#fff'
    }
  }
}))

const MenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles()
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=""  navbar>
            <NavItem>
              <NavLink href="" className={classes.menuItem}>File</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className={classes.menuItem} nav>
                Tasks
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem >
                  Add/modify store
                </DropdownItem>
                <DropdownItem >
                 Manage Central sales space structure
                </DropdownItem>
                <DropdownItem  />
                <DropdownItem tag={Link} to={paths.internalSaleSpace}>
                 Manage local sales space structure
                </DropdownItem>
                <DropdownItem tag={Link} to={paths.storeProperties}>
                  Manage virtual BU
                </DropdownItem>
                <DropdownItem tag={Link} to={paths.allocationView}>
                  Start Planning Wizard ...
                </DropdownItem>
                <DropdownItem>
                 SAM Admin
                </DropdownItem>
                <DropdownItem>
                 Transfer to CKB status
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="" className={classes.menuItem}>Window</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="" className={classes.menuItem}>Help</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar