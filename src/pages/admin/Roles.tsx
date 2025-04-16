import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSearch, FiEdit2, FiTrash2, FiMoreVertical, FiDownload, FiLock, FiShield } from 'react-icons/fi';
import RoleForm from '../../components/admin/RoleForm';
import PermissionsModal from '../../components/admin/PermissionsModal';

// Role interface
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  usersCount: number;
  createdAt: string;
}

// Permission interface
interface Permission {
  id: string;
  name: string;
  description: string;
}

// Mock data for development
const mockPermissions: Permission[] = [
  { id: '1', name: 'users:read', description: 'View users' },
  { id: '2', name: 'users:write', description: 'Create and edit users' },
  { id: '3', name: 'users:delete', description: 'Delete users' },
  { id: '4', name: 'roles:read', description: 'View roles' },
  { id: '5', name: 'roles:write', description: 'Create and edit roles' },
  { id: '6', name: 'roles:delete', description: 'Delete roles' },
  { id: '7', name: 'subjects:read', description: 'View subjects' },
  { id: '8', name: 'subjects:write', description: 'Create and edit subjects' },
  { id: '9', name: 'subjects:delete', description: 'Delete subjects' },
  { id: '10', name: 'classes:read', description: 'View classes' },
  { id: '11', name: 'classes:write', description: 'Create and edit classes' },
  { id: '12', name: 'classes:delete', description: 'Delete classes' },
  { id: '13', name: 'timetables:read', description: 'View timetables' },
  { id: '14', name: 'timetables:write', description: 'Create and edit timetables' },
  { id: '15', name: 'timetables:delete', description: 'Delete timetables' },
];

// Mock roles data
const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Super Admin',
    description: 'Full system access',
    permissions: mockPermissions,
    usersCount: 2,
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    name: 'School Admin',
    description: 'School-specific administration',
    permissions: mockPermissions.filter(p => !p.name.includes('delete') && !p.name.includes('roles')),
    usersCount: 5,
    createdAt: '2023-02-10',
  },
  {
    id: '3',
    name: 'Teacher',
    description: 'Teaching and content management',
    permissions: mockPermissions.filter(p => 
      (p.name.includes('subjects:read') || 
       p.name.includes('classes:read') || 
       p.name.includes('timetables:read'))),
    usersCount: 25,
    createdAt: '2023-01-20',
  },
  {
    id: '4',
    name: 'Student',
    description: 'Learning and content consumption',
    permissions: mockPermissions.filter(p => 
      p.name.includes(':read') && 
      !p.name.includes('users:read') && 
      !p.name.includes('roles:read')),
    usersCount: 150,
    createdAt: '2023-01-25',
  },
  {
    id: '5',
    name: 'Parent',
    description: 'Student monitoring and communication',
    permissions: mockPermissions.filter(p => 
      p.name.includes(':read') && 
      !p.name.includes('users:read') && 
      !p.name.includes('roles:read')),
    usersCount: 120,
    createdAt: '2023-02-15',
  },
];

const Roles: React.FC = () => {
  // State for search, filters, and selected roles
  const [searchTerm, setSearchTerm] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<Role | null>(null);
  const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
  
  // State for roles and permissions
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [permissions] = useState<Permission[]>(mockPermissions);
  
  // Filter roles based on search term
  const filteredRoles = roles.filter(role => 
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle checkbox selection
  const handleSelectRole = (roleId: string) => {
    if (selectedRoles.includes(roleId)) {
      setSelectedRoles(selectedRoles.filter(id => id !== roleId));
    } else {
      setSelectedRoles([...selectedRoles, roleId]);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedRoles.length === filteredRoles.length) {
      setSelectedRoles([]);
    } else {
      setSelectedRoles(filteredRoles.map(role => role.id));
    }
  };

  // Toggle actions menu
  const toggleActionsMenu = () => {
    setIsActionsMenuOpen(!isActionsMenuOpen);
  };
  
  // Open form to add a new role
  const handleAddRole = () => {
    setCurrentRole(null);
    setIsFormOpen(true);
  };
  
  // Open form to edit an existing role
  const handleEditRole = (role: Role) => {
    setCurrentRole(role);
    setIsFormOpen(true);
  };
  
  // Handle delete role
  const handleDeleteRole = (roleId: string) => {
    // In a real application, this would send a delete request to the API
    // For now, we'll just update our local state
    setRoles(roles.filter(role => role.id !== roleId));
    setSelectedRoles(selectedRoles.filter(id => id !== roleId));
    console.log(`Delete role with ID: ${roleId}`);
  };
  
  // Open permissions modal for a role
  const handleManagePermissions = (role: Role) => {
    setCurrentRole(role);
    setIsPermissionsModalOpen(true);
  };
  
  // Handle form submission for role creation/update
  const handleFormSubmit = (roleData: Omit<Role, 'id' | 'permissions' | 'usersCount' | 'createdAt'>) => {
    if (currentRole) {
      // Update existing role
      setRoles(roles.map(role => 
        role.id === currentRole.id 
          ? { 
              ...role, 
              name: roleData.name, 
              description: roleData.description 
            } 
          : role
      ));
      console.log('Updating role:', { id: currentRole.id, ...roleData });
    } else {
      // Create new role with empty permissions
      const newRole: Role = {
        id: Date.now().toString(), // Generate a temporary ID
        name: roleData.name,
        description: roleData.description,
        permissions: [],
        usersCount: 0,
        createdAt: new Date().toISOString().split('T')[0],
      };
      setRoles([...roles, newRole]);
      console.log('Creating new role:', newRole);
    }
    setIsFormOpen(false);
  };
  
  // Handle permissions update
  const handlePermissionsUpdate = (roleId: string, permissionIds: string[]) => {
    // Update the role's permissions
    setRoles(roles.map(role => 
      role.id === roleId 
        ? { 
            ...role, 
            permissions: permissions.filter(p => permissionIds.includes(p.id))
          } 
        : role
    ));
    console.log(`Updated permissions for role ${roleId}:`, permissionIds);
  };
  
  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentRole(null);
  };
  
  const handlePermissionsModalClose = () => {
    setIsPermissionsModalOpen(false);
    setCurrentRole(null);
  };

  // Handle bulk delete of selected roles
  const handleBulkDelete = () => {
    setRoles(roles.filter(role => !selectedRoles.includes(role.id)));
    setSelectedRoles([]);
    setIsActionsMenuOpen(false);
    console.log('Bulk deleting roles:', selectedRoles);
  };

  return (
    <RolesContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>Role Management</PageTitle>
          <PageDescription>Manage roles and their associated permissions</PageDescription>
        </div>

        <AddRoleButton onClick={handleAddRole}>
          <FiShield />
          <span>Add New Role</span>
        </AddRoleButton>
      </PageHeader>

      <ToolbarContainer>
        <SearchAndFilters>
          <SearchContainer>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Search roles..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>
        </SearchAndFilters>

        <ActionsContainer>
          {selectedRoles.length > 0 && (
            <>
              <SelectedCount>{selectedRoles.length} selected</SelectedCount>
              <ActionButton onClick={toggleActionsMenu}>
                <FiMoreVertical />
              </ActionButton>
              {isActionsMenuOpen && (
                <ActionsMenu>
                  <ActionMenuItem onClick={handleBulkDelete}>
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

      <RolesTable>
        <TableHeader>
          <HeaderRow>
            <HeaderCell width="50px">
              <CheckboxContainer>
                <Checkbox 
                  type="checkbox" 
                  checked={selectedRoles.length === filteredRoles.length && filteredRoles.length > 0}
                  onChange={handleSelectAll}
                />
              </CheckboxContainer>
            </HeaderCell>
            <HeaderCell width="20%">Role Name</HeaderCell>
            <HeaderCell width="30%">Description</HeaderCell>
            <HeaderCell width="20%">Permissions</HeaderCell>
            <HeaderCell width="10%">Users</HeaderCell>
            <HeaderCell width="150px">Actions</HeaderCell>
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {filteredRoles.length > 0 ? (
            filteredRoles.map(role => (
              <TableRow key={role.id}>
                <TableCell>
                  <CheckboxContainer>
                    <Checkbox 
                      type="checkbox" 
                      checked={selectedRoles.includes(role.id)}
                      onChange={() => handleSelectRole(role.id)}
                    />
                  </CheckboxContainer>
                </TableCell>
                <TableCell>
                  <RoleName>{role.name}</RoleName>
                </TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>
                  <PermissionsPreview>
                    <PermissionCount>{role.permissions.length} permissions</PermissionCount>
                    <ViewPermissionsButton onClick={() => handleManagePermissions(role)}>
                      View/Edit
                    </ViewPermissionsButton>
                  </PermissionsPreview>
                </TableCell>
                <TableCell>
                  <UsersCount>{role.usersCount} users</UsersCount>
                </TableCell>
                <TableCell>
                  <ActionsContainer>
                    <ActionIconButton onClick={() => handleEditRole(role)} title="Edit role">
                      <FiEdit2 />
                    </ActionIconButton>
                    <ActionIconButton onClick={() => handleDeleteRole(role.id)} title="Delete role">
                      <FiTrash2 />
                    </ActionIconButton>
                    <ActionIconButton onClick={() => handleManagePermissions(role)} title="Manage permissions">
                      <FiLock />
                    </ActionIconButton>
                  </ActionsContainer>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <EmptyStateRow>
              <EmptyStateCell colSpan={6}>
                <EmptyStateMessage>
                  No roles found matching your search criteria.
                </EmptyStateMessage>
              </EmptyStateCell>
            </EmptyStateRow>
          )}
        </TableBody>
      </RolesTable>

      <Pagination>
        <PageInfo>Showing 1 to {filteredRoles.length} of {filteredRoles.length} entries</PageInfo>
        <PageButtons>
          <PageButton $isActive={true}>1</PageButton>
        </PageButtons>
      </Pagination>

      {/* Role Form Modal */}
      <RoleForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={currentRole || undefined}
        formTitle={currentRole ? 'Edit Role' : 'Add New Role'}
      />
      
      {/* Permissions Modal */}
      {currentRole && (
        <PermissionsModal
          isOpen={isPermissionsModalOpen}
          onClose={handlePermissionsModalClose}
          role={currentRole}
          allPermissions={permissions}
          onSave={handlePermissionsUpdate}
        />
      )}
    </RolesContainer>
  );
};

// Styled Components
const RolesContainer = styled.div`
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

const AddRoleButton = styled.button`
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
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.secondary};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[2]} ${props => props.theme.spacing[2]} ${props => props.theme.spacing[8]};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  position: relative;
`;

const SelectedCount = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-right: ${props => props.theme.spacing[2]};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background.light};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[2]};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const ActionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${props => props.theme.spacing[1]};
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 10;
  min-width: 160px;
`;

const ActionMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const RolesTable = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
`;

interface HeaderCellProps {
  width?: string;
}

const TableHeader = styled.div`
  background-color: ${props => props.theme.colors.background.lighter};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
`;

const HeaderCell = styled.div<HeaderCellProps>`
  flex: ${props => props.width ? 'none' : '1'};
  width: ${props => props.width || 'auto'};
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
  border-bottom: 1px solid ${props => props.theme.colors.border.lighter};
  transition: all ${props => props.theme.transition.fast};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const TableCell = styled.div<HeaderCellProps>`
  flex: ${props => props.width ? 'none' : '1'};
  width: ${props => props.width || 'auto'};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.9rem;
`;

const EmptyStateRow = styled.div`
  padding: ${props => `${props.theme.spacing[6]} ${props.theme.spacing[4]}`};
`;

interface EmptyStateCellProps {
  colSpan?: number;
}

const EmptyStateCell = styled.div<EmptyStateCellProps>`
  text-align: center;
`;

const EmptyStateMessage = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const RoleName = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const PermissionsPreview = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
`;

const PermissionCount = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const ViewPermissionsButton = styled.button`
  font-size: 0.8rem;
  padding: ${props => `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
  background-color: ${props => props.theme.colors.primary[50]};
  color: ${props => props.theme.colors.primary[600]};
  border: none;
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[100]};
  }
`;

const UsersCount = styled.div`
  font-size: 0.85rem;
`;

const ActionIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.full};
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${props => props.theme.spacing[3]};
  }
`;

const PageInfo = styled.div`
  font-size: 0.85rem;
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
    border-color: ${props => props.$isActive ? 'transparent' : props.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
  }
`;

// const PageButtonEllipsis = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 32px;
//   height: 32px;
//   font-size: 0.85rem;
//   color: ${props => props.theme.colors.text.secondary};
// `;

export default Roles; 