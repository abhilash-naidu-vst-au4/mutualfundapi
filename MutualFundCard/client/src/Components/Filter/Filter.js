import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  
    filter:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',

    },
    root: {
      width: '100%',
      maxWidth: 250,
      backgroundColor: theme.palette.background.paper,
  
    },
  }));

    const Filter = () =>  {
    const classes = useStyles();
    const [checkedRisk, setCheckedRisk] = useState([]);
    const [checkedAmount, setCheckedAmount] = useState([]);

    const handleChangeRisk = (e) => {
    setCheckedRisk(e.taarget.value);
  };
  
  const handleChangeAmount = (e) => {
    setCheckedAmount(e.taarget.value);
  };
  
    
    
    return(
      <div className ={classes.filter}>
      <List  className={classes.root}>
      <ListItem button>
      <Typography variant="h6">FILTERS</Typography>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <Typography variant="overline">Filter By Risk </Typography>
      </ListItem>
      <ListItem>
      <FormControl component="fieldset">
      <FormGroup aria-label="risk" name="risk" value={checkedRisk}>
        <FormControlLabel value="low" control={<Checkbox />} label="Low" onChange={handleChangeRisk}/>
        <FormControlLabel value="moderate" control={<Checkbox  />} label="Moderate" onChange={handleChangeRisk} />
        <FormControlLabel value="high" control={<Checkbox  />} label="High" onChange={handleChangeRisk}/>
      </FormGroup>
    </FormControl>
    </ListItem>
      <ListItem button>
      <Typography variant="overline">Filter By Minimum Investment </Typography>
      </ListItem>
      <ListItem>
      <FormControl component="fieldset">
      <RadioGroup aria-label="amount" name="amount" value={checkedAmount} onChange={handleChangeAmount}>
        <FormControlLabel value="one" control={<Radio />} label="₹ 500" />
        <FormControlLabel value="two" control={<Radio />} label="₹ 1000" />
        <FormControlLabel value="three" control={<Radio />} label="₹ 5000" />
      </RadioGroup>
    </FormControl>
    </ListItem>
      <Divider light />
    </List>
    </div>
        
    )
};

export default Filter;

