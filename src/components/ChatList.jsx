import React, { useState } from 'react';
import { Search, Edit, Plus } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import './ChatList.css';

const ChatList = () => {
    const { conversations, activeConversationId, setActiveConversationId } = useChat();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredConversations = conversations.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // In a real app, calls would be in context too, but keeping static for now as per plan focus on Chat
    const calls = [
        { id: 1, name: 'Friends', status: 'Joni is Talking...', type: 'video', avatar: 'https://i.pravatar.cc/150?u=8' },
        { id: 2, name: 'Darshan Zalavadiya', status: '30 min ago', type: 'audio', avatar: 'https://i.pravatar.cc/150?u=3' },
    ];

    return (
        <div className="chat-list-container">
            {/* Header */}
            <div className="chat-header">
                <div className="search-bar">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="user-profile">
                    <img src="https://i.pravatar.cc/150?u=1" alt="Profile" />
                    <div className="status-dot online"></div>
                </div>
            </div>

            {/* Title Section */}
            <div className="list-title">
                <h2>Message</h2>
                <div className="title-actions">
                    <Edit size={18} />
                </div>
            </div>

            {/* Tabs */}
            <div className="chat-tabs">
                {['All Chats', 'Groups', 'Contacts'].map(tab => (
                    <button
                        key={tab}
                        className={`tab-btn ${tab === 'All Chats' ? 'active' : ''}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Chats List */}
            <div className="messages-list">
                {filteredConversations.length === 0 ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: 20 }}>No results provided</div>
                ) : (
                    filteredConversations.map(chat => {
                        const lastMsg = chat.messages[chat.messages.length - 1];
                        const isActive = chat.id === activeConversationId;

                        return (
                            <div
                                key={chat.id}
                                className={`chat-item ${isActive ? 'active-chat' : ''}`}
                                onClick={() => setActiveConversationId(chat.id)}
                                style={{ backgroundColor: isActive ? 'var(--bg-hover)' : 'transparent' }}
                            >
                                <div className="avatar-wrapper">
                                    <img src={chat.avatar} alt={chat.name} />
                                    {chat.status === 'online' && <div className="status-dot online"></div>}
                                </div>
                                <div className="chat-info">
                                    <div className="chat-top">
                                        <h3>{chat.name}</h3>
                                        {lastMsg && <span className="time">{lastMsg.time}</span>}
                                    </div>
                                    <div className="chat-bottom">
                                        <p style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                                            {lastMsg ? lastMsg.text : 'Start a conversation'}
                                        </p>
                                        {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Calls Section (Static as requested in plan mostly) */}
            <div className="calls-section">
                <div className="section-header">
                    <h3>Calls</h3>
                    <button className="new-meet-btn">
                        <Plus size={14} /> New Meet
                    </button>
                </div>
                <div className="calls-list">
                    {calls.map(call => (
                        <div key={call.id} className="call-item">
                            <div className="avatar-wrapper">
                                <img src={call.avatar} alt={call.name} />
                                <div className="status-dot online"></div>
                            </div>
                            <div className="chat-info">
                                <h3>{call.name}</h3>
                                <p className="call-status">{call.status}</p>
                            </div>
                            <div className="call-actions">
                                <button className="icon-btn">
                                    <span className="icon-phone">📞</span>
                                </button>
                                <button className="icon-btn">
                                    <span className="icon-video">📹</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatList;
