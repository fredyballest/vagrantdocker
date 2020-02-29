import React, { Component } from 'react'
import socketIOClient from "socket.io-client"


class App extends Component {
    
  componentDidMount() {
    const url = `http://localhost`
    const socket = socketIOClient(url)
    socket.emit('messageToServer', 'holaa')
    socket.on('messageFromServer',(dataFromServer)=>{
      console.log(dataFromServer);
     })
     

    }
    
    render() {
      return (
        <div>HOLAAA MIRASO SI FUNCIONA</div>
      )
    }
  
  }   

export default App;
