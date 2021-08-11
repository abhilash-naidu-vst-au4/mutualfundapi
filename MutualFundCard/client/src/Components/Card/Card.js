import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, purple} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const CardComponent = ({items}) => {
const useStyles = makeStyles((theme) => ({
  
    rootCard: {
      minWidth: 400,
      maxWidth: 450,
      borderRadius: 16,
      boxShadow: '0 8px 16px 0 #BDC9D7',
      overflow: 'hidden',
      
    },
    btn: {
      borderRadius: 40,
      padding: '0.125rem 0.75rem',
      fontSize: '0.75rem',
      marginTop: '10px',
      marginBottom: '10px',
      marginRight: '10px',
      float :'right',
    },
    innerCard : {
      alignItems: 'center',
      marginLeft: '5%',
      marginRight:'5%',
      marginTop: '5px',
    },
    gridcontainer :{
      borderRadius: 16,
      boxShadow: 'inset 0 8px 16px 0 #BDC9D7',
      overflow: 'hidden',
      maxWidth: '100%',
    },
    control: {
      padding: theme.spacing(2),
    },
    square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  
    },
  
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    
      },
      
  }));
  
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: '#6a26cd',
      '&:hover': {
        backgroundColor: '#000',
        color:'#fff'
      },
    },
  }))(Button);

  const classes = useStyles();

return (
      <div className="grid">
        {items.map((item, index) => {
          return(
    <div className ={classes.card} key={index}>
    <Card className={classes.rootCard}>
      <CardHeader 
        avatar={
          <Avatar variant="square" className ={classes.square } src = {item.fundImage}></Avatar>
        }
        title={item.name}
      />
      <div className = {classes.innerCard}>
      <Grid container spacing={0} className={classes.gridcontainer}>
        <Grid item xs={4}>
        <Typography variant="caption" gutterBottom display="block">Annualized Returns</Typography>
        <Typography variant="h6" gutterBottom color="primary">{item.annualizedReturn}</Typography>
        <Divider />
        </Grid>
        <Grid item xs={4}>
        <Typography variant="caption" gutterBottom display="block">3Yr Returns</Typography>
        <Typography variant="h6"gutterBottom color="primary">{item.threeYearReturn} </Typography>
        <Divider />
        </Grid>
        <Grid item xs={4}>
        <Typography variant="caption" gutterBottom display="block">Min. Investment</Typography>
        <Typography variant="h6"gutterBottom color="primary">₹ {item.minInvestment} </Typography>
        <Divider />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="caption" gutterBottom display="block">Risk Profile</Typography>
        <Typography variant="h6" gutterBottom color="primary">{item.riskProfile} </Typography>
        </Grid>
      </Grid>
      </div>
      <ColorButton className={classes.btn} variant='outlined' color = "primary">
           SELECT FUND
          </ColorButton>
    </Card>
     </div>
          )
         })}
         </div>  
)
}

export default CardComponent;