import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import firebase from '../main/firebase'
import { useEffect } from 'react';
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const [data,setData] = useState()
  useEffect(() => {
    const getData =() =>{
      const todoRef = firebase.database().ref('NTU');
      todoRef.on('value', (snapshot)=>{
        const todos = snapshot.val();
        // const todoList =[];
        // for (let id in todos){
        //   todoList.push({id,...todos[id]})
        // }
        setData(todos)
      })
    }
    getData()
  }, [])
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Turbidity (NTU)</Title>
      <Typography component="p" variant="h4">
        {data}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* on 15 March, 2019 */}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          {/* View balance */}
        </Link>
      </div>
    </React.Fragment>
  );
}
