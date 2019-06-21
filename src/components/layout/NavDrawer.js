import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider'
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar'
class NavDrawer extends Component {
    state = {
        open: false
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
                    <AppBar onClick={this.toggle} title="Contemi" />
                    <NavLink to="/">
                        <MenuItem
                            onClick={this.toggle}
                            primaryText={'CONTEMI'}
                        />
                    </NavLink>
                    <NavLink to="/about">
                        <MenuItem
                            onClick={this.toggle}
                            primaryText={'About'}
                        />
                    </NavLink>
                    <NavLink to="/users">
                        <MenuItem
                            onClick={this.toggle}
                            primaryText={'Users'}
                        />
                    </NavLink>
                    <NavLink to="/posts">
                        <MenuItem
                            onClick={this.toggle}
                            primaryText={'Posts'}
                        />
                    </NavLink>


                </Drawer>
            </div>
        );
    }
}

export default NavDrawer;