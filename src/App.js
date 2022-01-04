import React from 'react'
import './App.css'
import { AuthProvider } from './AuthContext';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Login from './Login'
import ChatFeed from './ChatFeed';
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Chat" element={<ChatFeed />} />
          </Routes>
        </AuthProvider>
      </Router >
    </>
  )
}

export default App
