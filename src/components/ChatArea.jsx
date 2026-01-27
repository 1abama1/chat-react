import React, { useState } from 'react';
import { Video, Phone, Paperclip, Camera, Mic, Smile } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import './ChatArea.css';

const ChatArea = () => {
    const { activeConversation, sendMessage } = useChat();
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
        setInputValue('');
    };

    if (!activeConversation) {
        return <div className="chat-area empty-state">Select a chat to start messaging</div>;
    }

    return (
        <div className="chat-area">
            {/* Header */}
            <div className="chat-area-header">
                <div className="header-user-info">
                    <img src={activeConversation.avatar} alt={activeConversation.name} />
                    <div>
                        <h3>{activeConversation.name}</h3>
                        {activeConversation.status === 'online' && <span className="status-text">Online</span>}
                    </div>
                </div>
                <div className="header-actions">
                    <button><Video size={20} /></button>
                    <button><Phone size={20} /></button>
                </div>
            </div>

            {/* Message List */}
            <div className="messages-container">
                <div className="date-separator"><span>Today</span></div>
                {activeConversation.messages.length === 0 ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: 20 }}>No messages yet</div>
                ) : (
                    activeConversation.messages.map((msg) => (
                        <div key={msg.id} className={`message-wrapper ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                            {msg.sender !== 'me' && (
                                <img src={activeConversation.avatar} className="message-avatar" alt="User" />
                            )}
                            <div className="message-bubble">
                                {msg.text}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
                <button className="icon-btn"><Smile size={20} /></button>
                <input
                    type="text"
                    placeholder="Message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <div className="input-actions">
                    <button className="icon-btn"><Paperclip size={20} /></button>
                    <button className="icon-btn"><Camera size={20} /></button>
                    <button className="icon-btn"><Mic size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default ChatArea;
