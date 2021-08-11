import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Components/Navbar/Navbar';
import Filter from './Components/Filter/Filter';
import CardComponent from './Components/Card/Card';


const useStyles = makeStyles((theme) => ({

  root: {
    textAlign:'center',
    width: '100%vw',
    backgroundColor: "#fafafa",
  }
}));

 // External API Source
const baseURL = "https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds";

const App = () => {

  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    FetchData()
  }, [])
  
  //Data Fetching from the API
  const FetchData = async () => {

    const data = await fetch(baseURL); 
    const response = await data.json()
    console.log(response.result) 

    // Data in Format : [item[item[{..}, {..}, {..}, {..}, {..}]]]
    setItems(response.result)     
  } 

  return (
   <div className={classes.root}>
    <Navbar />
    <Filter />
    <CardComponent items={items}/>
    </div>
  
  )
}

export default App;
