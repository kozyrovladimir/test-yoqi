import * as React from 'react';
import logo from '../img/logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@material-ui/core/CardMedia';
import {v1} from "uuid";

//Temp data for test render menu
const pageAboutID = v1();
const pagePracticeID = v1();
const pageCertificationID = v1();
const pageInstructorDirectoryID = v1();
const pageVODLoginID = v1();

type PageType = {
    title: string,
    id: string
}

type SubpagesType = {
    [key: string]: Array<string>
}

export const pages: Array<PageType> = [
    {title: 'ABOUT', id: pageAboutID},
    {title: 'PRACTICE', id: pagePracticeID},
    {title: 'CERTIFICATION', id: pageCertificationID},
    {title: 'INSTRUCTOR DIRECTORY', id: pageInstructorDirectoryID},
    {title: 'VIDEO ON DEMAND LOGIN', id: pageVODLoginID},
];

export const subPages: SubpagesType = {
    [pageAboutID]: ['YOQI','MARISA CRANFILL', 'FOUNDATIONS OF PRACTICE'],
    [pagePracticeID]: ['TEST YOUR QI', 'FREE VIDEOS', 'VIDEOS ON DEMAND', 'YOQI RESOURCE', 'PRACTICE FAQ'],
    [pageCertificationID]: ['TEACHER TRAINING PROGRAM', 'CLASSES &amp; WORKSHOPS', 'UPCOMING LIVE IMMERSIONS', 'TESTIMONIALS', 'HOMEWORK SUBMISSION', 'LIVE IMMERSION ASSISTANCE'],
    [pageInstructorDirectoryID]: [],
    [pageVODLoginID]: [],
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'Settings'];

const ResponsiveAppBar = () => {
    //For main menu
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    //For submenu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box component="img" src={logo} sx={{height: '94px', mr: 2, display: {xs: 'none', md: 'flex'}}}>
                    </Box>
                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    noWrap*/}
                    {/*    component="div"*/}
                    {/*    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}*/}
                    {/*>*/}
                    {/*    LOGO*/}
                    {/*</Typography>*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', justifyContent: 'center'}}}>
                        {pages.map((page) => (
                            <div key={page.id}>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    // onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: '#7d7d7d', display: 'block'}}
                                >
                                    {page.title + ' /'}
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {/*{subPages[page.id].map((subpage: string) => {*/}
                                    {/*    console.log(subpage);*/}
                                    {/*    return (*/}
                                    {/*        <MenuItem key={subpage} onClick={handleClose}>{subpage}</MenuItem>*/}
                                    {/*        )*/}
                                    {/*})}*/}
                                    {/*{console.log('menu item')}*/}
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
