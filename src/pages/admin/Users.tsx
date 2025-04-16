import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSearch, FiEdit2, FiTrash2, FiMoreVertical, FiFilter, FiDownload, FiUserPlus } from 'react-icons/fi';
import { User as UserType } from '../../types/User';
import UserForm from '../../components/admin/UserForm';

// User interface
interface User extends UserType {
  id: string;
  firstName: string;
  lastName: string;
  name?: string; // Keep for backwards compatibility
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
}

// Mock data for development
const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2023-06-12 09:30 AM',
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Teacher',
    status: 'active',
    lastLogin: '2023-06-10 02:45 PM',
    createdAt: '2023-02-20',
  },
  {
    id: '3',
    firstName: 'Robert',
    lastName: 'Johnson',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    role: 'Teacher',
    status: 'inactive',
    lastLogin: '2023-05-28 11:20 AM',
    createdAt: '2023-03-05',
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Student',
    status: 'active',
    lastLogin: '2023-06-11 10:15 AM',
    createdAt: '2023-01-30',
  },
  {
    id: '5',
    firstName: 'Michael',
    lastName: 'Wilson',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    role: 'Student',
    status: 'inactive',
    lastLogin: '2023-06-01 04:10 PM',
    createdAt: '2023-02-10',
  },
  {
    id: '6',
    firstName: 'Sarah',
    lastName: 'Brown',
    name: 'Sarah Brown',
    email: 'sarah.brown@example.com',
    role: 'Parent',
    status: 'active',
    lastLogin: '2023-06-09 12:30 PM',
    createdAt: '2023-04-15',
  },
  {
    id: '7',
    firstName: 'David',
    lastName: 'Miller',
    name: 'David Miller',
    email: 'david.miller@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2023-06-12 08:45 AM',
    createdAt: '2023-01-05',
  },
];

const Users: React.FC = () => {
  // State for search, filters, and selected users
  // const [searchQuery, setSearchQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // const { users, loading, error } = useUsers();

  // State for search, filters, and selected users
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
  
  // Filter users based on search term and filters
  const filteredUsers = mockUsers.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const matchesSearch = 
      fullName.includes(searchTerm.toLowerCase()) || 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = filterRole ? user.role === filterRole : true;
    const matchesStatus = filterStatus ? user.status === filterStatus : true;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle role filter change
  const handleRoleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRole(e.target.value);
  };

  // Handle status filter change
  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Handle checkbox selection
  const handleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  // Toggle actions menu
  const toggleActionsMenu = () => {
    setIsActionsMenuOpen(!isActionsMenuOpen);
  };
  
  // Open form to add a new user
  const handleAddUser = () => {
    setCurrentUser(null);
    setIsFormOpen(true);
  };
  
  // Open form to edit an existing user
  const handleEditUser = (user: User) => {
    setCurrentUser(user);
    setIsFormOpen(true);
  };
  
  // Handle delete user
  const handleDeleteUser = (userId: string) => {
    // Implement delete functionality here
    console.log(`Delete user with ID: ${userId}`);
    // After successful deletion, you might want to refresh the users list
  };
  
  // Handle form submission
  const handleFormSubmit = (userData: Partial<User>) => {
    if (currentUser) {
      // Update existing user
      console.log('Updating user:', userData);
    } else {
      // Create new user
      console.log('Creating new user:', userData);
    }
    setIsFormOpen(false);
  };
  
  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentUser(null);
  };

  return (
    <UsersContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>User Management</PageTitle>
          <PageDescription>Manage system users, roles and permissions</PageDescription>
        </div>

        <AddUserButton onClick={handleAddUser}>
          <FiUserPlus />
          <span>Add New User</span>
        </AddUserButton>
      </PageHeader>

      <ToolbarContainer>
        <SearchAndFilters>
          <SearchContainer>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>

          <FiltersSection>
            <FilterLabel>
              <FiFilter />
              <span>Filters:</span>
            </FilterLabel>
            
            <FilterSelect value={filterRole} onChange={handleRoleFilterChange}>
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
            </FilterSelect>

            <FilterSelect value={filterStatus} onChange={handleStatusFilterChange}>
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </FilterSelect>
          </FiltersSection>
        </SearchAndFilters>

        <ActionsContainer>
          {selectedUsers.length > 0 && (
            <>
              <SelectedCount>{selectedUsers.length} selected</SelectedCount>
              <ActionButton onClick={toggleActionsMenu}>
                <FiMoreVertical />
              </ActionButton>
              {isActionsMenuOpen && (
                <ActionsMenu>
                  <ActionMenuItem>
                    <FiEdit2 />
                    <span>Edit Selected</span>
                  </ActionMenuItem>
                  <ActionMenuItem>
                    <FiTrash2 />
                    <span>Delete Selected</span>
                  </ActionMenuItem>
                </ActionsMenu>
              )}
            </>
          )}

          <ActionButton title="Export to CSV">
            <FiDownload />
          </ActionButton>
        </ActionsContainer>
      </ToolbarContainer>

      <UsersTable>
        <TableHeader>
          <HeaderRow>
            <HeaderCell width="50px">
              <CheckboxContainer>
                <Checkbox 
                  type="checkbox" 
                  checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                  onChange={handleSelectAll}
                />
              </CheckboxContainer>
            </HeaderCell>
            <HeaderCell width="25%">Name</HeaderCell>
            <HeaderCell width="25%">Email</HeaderCell>
            <HeaderCell width="15%">Role</HeaderCell>
            <HeaderCell width="15%">Status</HeaderCell>
            <HeaderCell width="20%">Last Login</HeaderCell>
            <HeaderCell width="100px">Actions</HeaderCell>
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell>
                  <CheckboxContainer>
                    <Checkbox 
                      type="checkbox" 
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </CheckboxContainer>
                </TableCell>
                <TableCell>
                  <UserCell>
                    <UserInfo>
                      <UserAvatar>
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                      </UserAvatar>
                      <UserDetails>
                        <UserName>{user.firstName} {user.lastName}</UserName>
                        <UserEmail>{user.email}</UserEmail>
                      </UserDetails>
                    </UserInfo>
                  </UserCell>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <RoleBadge $role={user.role.toLowerCase()}>{user.role}</RoleBadge>
                </TableCell>
                <TableCell>
                  <StatusIndicator $status={user.status}>
                    {user.status === 'active' ? 'Active' : 'Inactive'}
                  </StatusIndicator>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <ActionsContainer>
                    <ActionIconButton onClick={() => handleEditUser(user)} title="Edit user">
                      <FiEdit2 />
                    </ActionIconButton>
                    <ActionIconButton onClick={() => handleDeleteUser(user.id)} title="Delete user">
                      <FiTrash2 />
                    </ActionIconButton>
                  </ActionsContainer>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <EmptyStateRow>
              <EmptyStateCell colSpan={7}>
                <EmptyStateMessage>
                  No users found matching your search criteria.
                </EmptyStateMessage>
              </EmptyStateCell>
            </EmptyStateRow>
          )}
        </TableBody>
      </UsersTable>

      <Pagination>
        <PageInfo>Showing 1 to {filteredUsers.length} of {filteredUsers.length} entries</PageInfo>
        <PageButtons>
          <PageButton $isActive={true}>1</PageButton>
          <PageButton $isActive={false}>2</PageButton>
          <PageButton $isActive={false}>3</PageButton>
          <PageButtonEllipsis>...</PageButtonEllipsis>
          <PageButton $isActive={false}>10</PageButton>
        </PageButtons>
      </Pagination>

      {/* User Form Modal */}
      <UserForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={currentUser || undefined}
        formTitle={currentUser ? 'Edit User' : 'Add New User'}
      />
    </UsersContainer>
  );
};

// Styled Components
const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[6]};
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${props => props.theme.spacing[4]};
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.8rem;
`;

const PageDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
`;

const AddUserButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${props => props.theme.spacing[4]};
  }
`;

const SearchAndFilters = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${props => props.theme.spacing[3]};
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.tertiary};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[2]} ${props.theme.spacing[2]} ${props.theme.spacing[8]}`};
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
`;

const FiltersSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const FilterSelect = styled.select`
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.primary};
  background-color: ${props => props.theme.colors.background.primary};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  position: relative;
`;

const SelectedCount = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.secondary};
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const ActionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${props => props.theme.spacing[1]};
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 10;
  min-width: 200px;
`;

const ActionMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.primary};
  cursor: pointer;
  transition: background-color ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

const UsersTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const TableHeader = styled.thead`
  background-color: ${props => props.theme.colors.background.tertiary};
`;

const HeaderRow = styled.tr``;

interface HeaderCellProps {
  width?: string;
}

const HeaderCell = styled.th<HeaderCellProps>`
  padding: ${props => props.theme.spacing[4]};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: ${props => props.theme.colors.text.secondary};
  white-space: nowrap;
  width: ${props => props.width || 'auto'};
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  transition: background-color ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

const TableCell = styled.td`
  padding: ${props => props.theme.spacing[4]};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.primary};
`;

const UserCell = styled.td`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[4]};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[4]};
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.2rem;
  font-weight: 500;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const UserEmail = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

interface RoleBadgeProps {
  $role: string;
}

const RoleBadge = styled.div<RoleBadgeProps>`
  display: inline-block;
  padding: ${props => `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.$role) {
      case 'admin': return 'rgba(79, 70, 229, 0.1)';
      case 'teacher': return 'rgba(16, 185, 129, 0.1)';
      case 'student': return 'rgba(245, 158, 11, 0.1)';
      case 'parent': return 'rgba(139, 92, 246, 0.1)';
      default: return 'rgba(79, 70, 229, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.$role) {
      case 'admin': return 'rgb(79, 70, 229)';
      case 'teacher': return 'rgb(16, 185, 129)';
      case 'student': return 'rgb(245, 158, 11)';
      case 'parent': return 'rgb(139, 92, 246)';
      default: return 'rgb(79, 70, 229)';
    }
  }};
`;

interface StatusProps {
  $status: string;
}

const StatusIndicator = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  font-size: 0.9rem;
  color: ${props => props.$status === 'active' ? props.theme.colors.accent.green : props.theme.colors.text.tertiary};
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const ActionIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color: ${props => props.theme.colors.text.secondary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const EmptyStateRow = styled.tr``;

const EmptyStateCell = styled.td`
  padding: ${props => props.theme.spacing[6]};
  text-align: center;
  color: ${props => props.theme.colors.text.tertiary};
  font-style: italic;
`;

const EmptyStateMessage = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.tertiary};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[4]} 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing[3]};
  }
`;

const PageInfo = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const PageButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
`;

interface PageButtonProps {
  $isActive: boolean;
}

const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 ${props => props.theme.spacing[2]};
  background-color: ${props => props.$isActive ? props.theme.colors.primary[500] : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.primary};
  border: 1px solid ${props => props.$isActive ? 'transparent' : props.theme.colors.neutral[300]};
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$isActive 
      ? props.theme.colors.primary[600] 
      : props.theme.colors.background.hover};
    border-color: ${props => props.$isActive ? 'transparent' : props.theme.colors.neutral[300]};
  }

  &:focus {
    outline: none;
  }
`;

const PageButtonEllipsis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

export default Users; 