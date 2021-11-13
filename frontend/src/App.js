import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import styled from 'styled-components';

import Chat from './components/Chat';
import Login from  './components/Login'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import NoChannel from './components/NoChannel';


function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState({name: 'jack', id: 'trululu'})
  
  const getChannels = () => {
    fetch('/channel/all')
      .then(response => response.json())
      .then(data => setRooms(data));
  }
  
  useEffect(() => {
    getChannels();
  }, [])


  return (
    <div className="App">
      <Router>
        {
          !user 
          ?
          <Login />
          :
          <Container>
            <Header />
            <Main>
              <Sidebar rooms={ rooms } getChannels={getChannels} />
              <Routes>
                <Route 
                  path="/room/:channelId" 
                  element={<Chat />} 
                />
                <Route path="*" element={<NoChannel />} />
              </Routes>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`