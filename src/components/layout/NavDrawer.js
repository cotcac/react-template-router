import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider'
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar'
class NavDrawer extends Component {
    state = {
        open: true
    }
    

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <div>
                <AppBar position="fixed" color="primary" onClick={this.toggle} title="LOGO" />
                <Drawer open={this.state.open}>

                    <Divider />
                    <AppBar   onClick={this.toggle} title="LODE" />
                    <NavLink to="/">
                        <MenuItem
                      
                            primaryText={'LODE'}
                        />
                    </NavLink>
                    <NavLink to="/about">
                        <MenuItem
                        
                            primaryText={'About'}
                        />
                    </NavLink>
                    <NavLink to="/users">
                        <MenuItem
                         
                            primaryText={'Users'}
                        />
                    </NavLink>
                    <NavLink to="/posts">
                        <MenuItem
                          
                            primaryText={'Posts'}
                        />
                    </NavLink>


                </Drawer>
            </div>
        );
    }
}

export default NavDrawer;
