import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AdminContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <AdminLayoutWrapper>
      {/* Sidebar placeholder - implement actual sidebar later */}
      <div style={{ width: '240px', backgroundColor: '#2C2C2C' }}></div>
      <AdminContent>{children}</AdminContent>
    </AdminLayoutWrapper>
  );
};

export default AdminLayout; 