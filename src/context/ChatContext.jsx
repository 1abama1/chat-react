import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useChat = () => useContext(ChatContext);

const initialConversations = [
    {
        id: 1,
        name: 'Figma Teams',
        avatar: 'https://i.pravatar.cc/150?u=2',
        status: 'online',
        unread: 2,
        messages: [] // Empty for now, would populate
    },
    {
        id: 2,
        name: 'Darshan Zalavadiya',
        avatar: 'https://i.pravatar.cc/150?u=3',
        status: 'online',
        unread: 0,
        messages: [
            { id: 1, text: 'Hello, Darshan', sender: 'me', time: '9:30 am' },
            { id: 2, text: 'Hello', sender: 'them', time: '9:31 am' },
            { id: 3, text: 'How are you', sender: 'me', time: '9:31 am' },
            { id: 4, text: 'I am good', sender: 'them', time: '9:32 am' },
        ]
    },
    {
        id: 3,
        name: 'School App Client',
        avatar: 'https://i.pravatar.cc/150?u=4',
        status: 'offline',
        unread: 0,
        messages: [
            { id: 1, text: 'Project update?', sender: 'them', time: 'Yesterday' }
        ]
    },
    {
        id: 4,
        name: 'UI/UX Teams',
        avatar: 'https://i.pravatar.cc/150?u=5',
        status: 'offline',
        unread: 0,
        messages: [
            { id: 1, text: 'Design looks great!', sender: 'them', time: 'Last Week' }
        ]
    },
];

export const ChatProvider = ({ children }) => {
    const [conversations, setConversations] = useState(initialConversations);
    const [activeConversationId, setActiveConversationId] = useState(2); // Default to Darshan

    const activeConversation = conversations.find(c => c.id === activeConversationId);

    const sendMessage = (text) => {
        if (!text.trim() || !activeConversationId) return;

        setConversations(prev => prev.map(chat => {
            if (chat.id === activeConversationId) {
                const newMessage = {
                    id: Date.now(),
                    text,
                    sender: 'me',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                return {
                    ...chat,
                    messages: [...chat.messages, newMessage]
                };
            }
            return chat;
        }));
    };

    return (
        <ChatContext.Provider value={{
            conversations,
            activeConversationId,
            setActiveConversationId,
            activeConversation,
            sendMessage
        }}>
            {children}
        </ChatContext.Provider>
    );
};
