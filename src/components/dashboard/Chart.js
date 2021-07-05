import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import firebase from '../main/firebase'
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

export default function Chart() {
  const [data,setData] = useState()
  const saveData = (data) =>{
    const saveRef = firebase.database().ref('GNTU');
    const todo = {
      ntu:600,
      date:"2021/07/03",
      pump: "false"
    }
    saveRef.push(todo)
  }
  const getData =() =>{
    const todoRef = firebase.database().ref('GNTU');
    todoRef.on('value', (snapshot)=>{
      const todos = snapshot.val();
      const todoList =[];
      for (let id in todos){
        todoList.push({id,...todos[id]})
      }
      setData(todoList)
    })
  }
  useEffect(() => {
    const getData =() =>{
      const todoRef = firebase.database().ref('GNTU');
      todoRef.on('value', (snapshot)=>{
        const todos = snapshot.val();
        const todoList =[];
        for (let id in todos){
          todoList.push({id,...todos[id]})
        }
        setData(todoList)
      })
    }
    getData()
  }, [])
  console.log({...data})
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>กราฟความขุ่นใสในบ่อกุ้ง</Title>
      <button onClick={()=>saveData()}> save</button>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <YAxis dataKey="ntu" stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              {/* ความขุ่นใส ($) */}
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="ntu" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
