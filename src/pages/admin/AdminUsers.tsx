import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { Card, Button, Input, Dropdown, Checkbox, Pagination, Loader, Badge } from '../../components/ui';
import { AdminInput, EnhancedCheckbox, AdminDropdown } from '../../components/admin/StyledFormControls';
import { useTheme } from '../../components/ThemeProvider';

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    status: 'Active',
    lastLogin: '2023-05-15T10:30:00',
    registeredDate: '2023-01-10T09:15:00',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Teacher',
    status: 'Active',
    lastLogin: '2023-05-14T16:45:00',
    registeredDate: '2022-08-22T14:30:00',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2023-05-15T09:10:00',
    registeredDate: '2022-03-05T11:20:00',
  },
  {
    id: 4,
    name: 'Emily Williams',
    email: 'emily.williams@example.com',
    role: 'Student',
    status: 'Inactive',
    lastLogin: '2023-04-20T13:25:00',
    registeredDate: '2023-02-15T10:45:00',
  },
  {
    id: 5,
    name: 'Robert Brown',
    email: 'robert.brown@example.com',
    role: 'Teacher',
    status: 'Active',
    lastLogin: '2023-05-12T11:15:00',
    registeredDate: '2022-09-30T08:30:00',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    role: 'Student',
    status: 'Active',
    lastLogin: '2023-05-13T14:50:00',
    registeredDate: '2023-03-18T15:20:00',
  },
  {
    id: 7,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    role: 'Student',
    status: 'Pending',
    lastLogin: null,
    registeredDate: '2023-05-10T09:40:00',
  },
  {
    id: 8,
    name: 'Linda Miller',
    email: 'linda.miller@example.com',
    role: 'Teacher',
    status: 'Active',
    lastLogin: '2023-05-15T08:30:00',
    registeredDate: '2022-11-05T13:15:00',
  },
];

const AdminUsers: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<typeof mockUsers>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const { isDarkMode } = useTheme();

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter users based on search term and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchTerm === '' ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === null || user.role === roleFilter;
    const matchesStatus = statusFilter === null || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Selection handlers
  const handleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map((user) => user.id));
    }
  };

  const handleSelectUser = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return '#10b981';
      case 'Inactive':
        return '#ef4444';
      case 'Pending':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <LoaderContainer>
          <Loader size={50} />
        </LoaderContainer>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <PageContainer>
        <Header>
          <h1>User Management</h1>
          <HeaderActions>
            <Button variant="primary" size="md">
              <i className="fas fa-plus"></i> Add New User
            </Button>
          </HeaderActions>
        </Header>

        <FilterSection>
          <SearchContainer>
            <AdminInput
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              prefix={<i className="fas fa-search"></i>}
            />
          </SearchContainer>
          <FiltersContainer>
            <AdminDropdown
              label="Role"
              value={roleFilter || 'All Roles'}
              onChange={(value) => setRoleFilter(value === 'All Roles' ? null : value)}
              options={['All Roles', 'Student', 'Teacher', 'Admin']}
            />
            <AdminDropdown
              label="Status"
              value={statusFilter || 'All Statuses'}
              onChange={(value) => setStatusFilter(value === 'All Statuses' ? null : value)}
              options={['All Statuses', 'Active', 'Inactive', 'Pending']}
            />
          </FiltersContainer>
        </FilterSection>

        <ActionsBar>
          <div>
            {selectedUsers.length > 0 && (
              <>
                <span>{selectedUsers.length} users selected</span>
                <Button variant="outline" size="sm">
                  <i className="fas fa-envelope"></i> Email
                </Button>
                <Button variant="danger" size="sm">
                  <i className="fas fa-trash-alt"></i> Delete
                </Button>
              </>
            )}
          </div>
          <Button variant="outline" size="sm">
            <i className="fas fa-download"></i> Export
          </Button>
        </ActionsBar>

        <TableCard>
          <Table>
            <THead>
              <TR>
                <TH width="40px">
                  <EnhancedCheckbox
                    checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                    onChange={handleSelectAll}
                  />
                </TH>
                <TH>User</TH>
                <TH>Role</TH>
                <TH>Status</TH>
                <TH>Last Login</TH>
                <TH>Registered</TH>
                <TH width="80px">Actions</TH>
              </TR>
            </THead>
            <TBody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <TR key={user.id}>
                    <TD>
                      <EnhancedCheckbox
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                      />
                    </TD>
                    <TD>
                      <UserInfo>
                        <UserAvatar>
                          {user.name.split(' ').map((n) => n[0]).join('')}
                        </UserAvatar>
                        <UserDetails>
                          <UserName>{user.name}</UserName>
                          <UserEmail>{user.email}</UserEmail>
                        </UserDetails>
                      </UserInfo>
                    </TD>
                    <TD>
                      <Badge $role={user.role}>{user.role}</Badge>
                    </TD>
                    <TD>
                      <StatusBadge $color={getStatusColor(user.status)}>
                        {user.status}
                      </StatusBadge>
                    </TD>
                    <TD>{formatDate(user.lastLogin)}</TD>
                    <TD>{formatDate(user.registeredDate)}</TD>
                    <TD>
                      <ActionButtons>
                        <ActionButton aria-label="Edit user">
                          <i className="fas fa-edit"></i>
                        </ActionButton>
                        <ActionButton aria-label="Delete user">
                          <i className="fas fa-trash-alt"></i>
                        </ActionButton>
                      </ActionButtons>
                    </TD>
                  </TR>
                ))
              ) : (
                <TR>
                  <EmptyTD colSpan={7}>
                    <EmptyState>
                      <i className="fas fa-search"></i>
                      <p>No users found matching your criteria</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSearchTerm('');
                          setRoleFilter(null);
                          setStatusFilter(null);
                        }}
                      >
                        Clear Filters
                      </Button>
                    </EmptyState>
                  </EmptyTD>
                </TR>
              )}
            </TBody>
          </Table>
        </TableCard>

        {filteredUsers.length > 0 && (
          <PaginationContainer>
            <div>
              Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} of{' '}
              {filteredUsers.length} users
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </PaginationContainer>
        )}
      </PageContainer>
    </AdminLayout>
  );
};

// Styled components
const PageContainer = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  h1 {
    margin: 0;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  div {
    display: flex;
    align-items: center;
    gap: 12px;
    
    span {
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-right: 8px;
    }
  }
`;

const TableCard = styled(Card)`
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  background-color: ${({ theme }) => theme.colors.cardSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TBody = styled.tbody`
  & > tr:nth-child(even) {
    background-color: ${({ theme }) => 
      theme.isDark 
        ? 'rgba(255, 255, 255, 0.03)' 
        : 'rgba(0, 0, 0, 0.02)'
    };
  }
`;

const TR = styled.tr`
  &:hover {
    background-color: ${({ theme }) => 
      theme.isDark 
        ? 'rgba(255, 255, 255, 0.05)' 
        : 'rgba(0, 0, 0, 0.04)'
    } !important;
  }
`;

const TH = styled.th<{ width?: string }>`
  padding: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  width: ${({ width }) => width || 'auto'};
`;

const TD = styled.td`
  padding: 16px;
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;

const EmptyTD = styled.td`
  padding: 48px 16px;
  text-align: center;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.textTertiary};
  
  i {
    font-size: 36px;
    opacity: 0.5;
  }
  
  p {
    margin: 0;
    font-size: 16px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

const UserEmail = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Badge = styled.span<{ $role: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${({ $role, theme }) => {
    switch ($role) {
      case 'Admin':
        return theme.isDark ? '#7209b7' : '#9d4edd';
      case 'Teacher':
        return theme.isDark ? '#0353a4' : '#4cc9f0';
      case 'Student':
        return theme.isDark ? '#00509d' : '#4361ee';
      default:
        return theme.isDark ? '#2b2b2b' : '#e2e8f0';
    }
  }};
  color: white;
`;

const StatusBadge = styled.span<{ $color: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${({ $color }) => $color + '20'};
  color: ${({ $color }) => $color};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.cardSecondary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export default AdminUsers; 