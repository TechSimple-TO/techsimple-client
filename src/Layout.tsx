// Layout.tsx
import React from 'react';
import './Brand.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} TechSimple-TO. All rights reserved.</p>
        <p>Contact: <a href="mailto:admin@techsimple-to.ca">admin@techsimple-to.ca</a></p>
      </footer>
    </div>
  );
};

export default Layout;