import React from 'react';

export const Footer = () => {
  const footerStyle = {
    position: 'static',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#343a40', // Matches bg-dark
    color: 'white', // Matches text-light
    textAlign: 'center',
    padding: '10px 0',
    borderTop: '1px solid #dddddd', // Optional, for a subtle top border
  };

  return (
    <footer style={footerStyle}>
      <p>
        Copyright &copy; Sayandeep Dutta
      </p>
    </footer>
  );
};
