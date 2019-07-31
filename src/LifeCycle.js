// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import DisplayProducts from './DisplayProducts';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//               <img src="/assets/avatar.png" alt="Avatar" width="30" />
//           </Typography>
//           <Button color="inherit">Cart</Button>
//         </Toolbar>
//       </AppBar>
//       <DisplayProducts />
//     </div>
//   );
// }


import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Home from './pages/HomePage';
import Holidays from './pages/HolidaysPage';
import Tools from './pages/ToolsPage';
import SideBar from './components/sideBar'
import Footer from './components/Footer'

import menuDetails from './components/sidemenuBar.json';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: 130,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function LifeCycle() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [path, setPath] = React.useState('/admin');


  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  if (window.location) {
      var getPath = window.location.pathname.substring(1, window.location.pathname.length);
  }

  function selectedMenu(navLink){
    setPath(navLink);
  }
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Administrative Asst. HUB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      > 
      <div className={classes.drawerHeader}>
                        
        <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
        </IconButton>
    </div>
    <Divider />
      {(menuDetails.map((data, id) => {
        return(<SideBar menus={data} index={id} menuSelection={selectedMenu} />);
      }))}
          
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
         <div>
            {(() => {
                switch (path) {
                  case '/admin':
                      return <Home />
                  case '/admin/tools':
                      return <Tools />
                  case '/admin/holidays':
                      return <Holidays />
                  default:
                      return null;
                }
            })()}
            {(path) ? null : <Home />}
        </div>
      </main>
      <Footer />
    </div>
  );
}




 // <div className={classes.drawerHeader}>
 //          <IconButton onClick={handleDrawerClose}>
 //            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
 //          </IconButton>
 //        </div>
 //        <Divider />
 //        <List>
 //          {['Home', 'Tools and Links'].map((text, index) => (
 //            <ListItem button key={text}>
 //              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
 //              <ListItemText primary={text} />
 //            </ListItem>
 //          ))}
 //        </List>
 //        <Divider />
 //        <List>
 //          {['Holiday Calender'].map((text, index) => (
 //            <ListItem button key={text}>
 //              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
 //              <ListItemText primary={text} />
 //            </ListItem>
 //          ))}
 //        </List>