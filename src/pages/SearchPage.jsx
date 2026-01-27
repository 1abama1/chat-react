import React from 'react';

const SearchPage = () => {
    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', backgroundColor: 'var(--bg-dark)' }}>
            <h2>Search</h2>
            <div style={{ marginTop: 20 }}>
                <input
                    type="text"
                    placeholder="Search messages..."
                    style={{
                        padding: '10px 15px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        width: '300px'
                    }}
                />
            </div>
        </div>
    );
};

export default SearchPage;
