import React from 'react';

const WarningBanner = () => {
  return (
    <div style={{
      backgroundColor: '#fff3cd',
      color: '#856404',
      padding: '10px 20px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: '500',
      borderBottom: '1px solid #ffeeba',
      width: '100%',
      zIndex: 1000,
    }}>
      ⚠️ This is a student project for demonstration purposes only. It is not affiliated with Coinbase in any way.
    </div>
  );
};

export default WarningBanner;
