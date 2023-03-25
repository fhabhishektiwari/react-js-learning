import { useState } from 'react';
import { makeStyles } from '@mui/styles';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import {ListItemText , List , ListItem,Collapse, Drawer} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        backgroundColor: '#2196f3',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'center',
        color: theme.palette.primary.contrastText,
    },
}));

const SideMenuBar=()=> {
    const [open, setOpen] = useState(false);
    const [nestedOpen, setNestedOpen] = useState(false);
    const classes = useStyles();

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleNestedToggle = () => {
        setNestedOpen(!nestedOpen);
    };

    const renderNestedList = () => {
        return (
            <List component="div" disablePadding>
                <ListItem button onClick={handleNestedToggle}>
                    <ListItemText primary="Nested Item" />
                    {nestedOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary="Sub Item 1" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Sub Item 2" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        );
    };

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className={classes.drawerHeader}>
                <h2>Menu</h2>
            </div>
            <List>
                <ListItem button onClick={handleToggle}>
                    <ListItemText primary="Item 1" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {renderNestedList()}
                </Collapse>
                <ListItem button>
                    <ListItemText primary="Item 2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Item 3" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideMenuBar;