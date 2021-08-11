import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    nav:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#6a26cd',
       
        
    }, 
    navElement: {
        fontSize: '2rem',
        color: '#fff',
        cursor: 'pointer',
        paddingTop: '5px',
        paddingBottom: '10px',
        
    },
}));

const Navbar = () => {

const classes = useStyles();

    
    return(
        <div className= {classes.nav}>
            <div className ={classes.navElement}>ALL FUNDS </div>
        </div>
    )

}

export default Navbar;
