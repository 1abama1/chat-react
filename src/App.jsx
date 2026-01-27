import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatArea from './components/ChatArea';
import SettingsPage from './pages/SettingsPage';
import SearchPage from './pages/SearchPage';
import SharePage from './pages/SharePage';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';

const Layout = () => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

const ChatLayout = () => {
  return (
    <>
      <ChatList />
      <ChatArea />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ChatLayout />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="share" element={<SharePage />} />
            </Route>
          </Routes>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
