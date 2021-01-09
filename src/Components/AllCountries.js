import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color: '#3f51b5',
    textTransform: 'uppercase'
  }
}));

export default function AllCountries() {
  const [globalData, setGlobalData] = useState([{}]);
  
  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();
      
      setGlobalData(Object.values(Object.values(data.countryitems)[0]));
      console.log(Object.values(Object.values(data.countryitems)[0]));
    }
    getData();
  },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table>
         <thead>
             <tr>
               <th>Number of Country</th>
               <th>Country Name</th>
               <th>Total Cases</th>
               <th>Active Cases</th>
               <th>Total Deaths</th>
               <th>New Cases Today</th>
               <th>New Deaths Today</th>
               <th>Recovered</th>
               <th>Serious Caese</th>
               <th>Unresolved</th>
              
             </tr>
         </thead>
        {globalData.map((key, ind) => {
          return(
         <tbody>
            <tr>
                <td>
                  {globalData[ind].ourid}
                </td> 
                <td>
                  {globalData[ind].title}
                </td> 
                <td>
                   {globalData[ind].total_cases}
                </td> 
                <td>
                   {globalData[ind].total_active_cases}
                </td> 
                <td>
                  {globalData[ind].total_deaths}
                </td>
                <td>
                  {globalData[ind].total_new_cases_today}
                </td>
                <td>
                  {globalData[ind].total_new_deaths_today}
                </td>
                <td>
                  {globalData[ind].total_recovered}
                </td>
                <td>
                  {globalData[ind].total_serious_cases}
                </td> 
                <td>
                  {globalData[ind].total_unresolved}
                </td>
            </tr>       
          </tbody>       
         )
          
     })}
      </table>
    </div>
   
  );
}