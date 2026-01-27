import React from 'react';
import { Home, Search, Share2, Settings, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Sidebar.css';

const Sidebar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="sidebar">
            {/* Logo Area */}
            <div className="sidebar-logo">
                <div className="logo-icon">D</div>
            </div>

            {/* Navigation Menu */}
            <nav className="sidebar-nav">
                <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
                    <Home size={24} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/search" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Search size={24} />
                    <span>Search</span>
                </NavLink>
                <NavLink to="/share" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Share2 size={24} />
                    <span>Share</span>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Settings size={24} />
                    <span>Setting</span>
                </NavLink>
            </nav>

            {/* Bottom Actions */}
            <div className="sidebar-bottom">
                <button className="nav-item" onClick={toggleTheme}>
                    {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
                <div className="user-avatar">
                    <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
