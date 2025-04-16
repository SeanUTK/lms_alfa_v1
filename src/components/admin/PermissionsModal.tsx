import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX, FiShield, FiFilter, FiSearch, FiCheck, FiAlertCircle } from 'react-icons/fi';

// Permission interface
interface Permission {
  id: string;
  name: string;
  description: string;
}

// Role interface
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

interface PermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role;
  allPermissions: Permission[];
  onSave: (roleId: string, permissionIds: string[]) => void;
}

const PermissionsModal: React.FC<PermissionsModalProps> = ({
  isOpen,
  onClose,
  role,
  allPermissions,
  onSave,
}) => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  // Extract unique permission categories
  const permissionCategories = Array.from(
    new Set(allPermissions.map(p => p.name.split(':')[0]))
  );
  
  // Initialize selected permissions with current role permissions
  useEffect(() => {
    if (role && role.permissions) {
      setSelectedPermissions(role.permissions.map(p => p.id));
    }
  }, [role]);
  
  // Filter permissions based on search and category
  const filteredPermissions = allPermissions.filter(permission => {
    const matchesSearch = 
      permission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permission.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter 
      ? permission.name.startsWith(categoryFilter + ':') 
      : true;
      
    return matchesSearch && matchesCategory;
  });
  
  // Group permissions by category
  const groupedPermissions = filteredPermissions.reduce((groups, permission) => {
    const category = permission.name.split(':')[0];
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(permission);
    return groups;
  }, {} as Record<string, Permission[]>);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };
  
  // Handle permission selection
  const handlePermissionToggle = (permissionId: string) => {
    if (selectedPermissions.includes(permissionId)) {
      setSelectedPermissions(selectedPermissions.filter(id => id !== permissionId));
    } else {
      setSelectedPermissions([...selectedPermissions, permissionId]);
    }
  };
  
  // Handle select all for a category
  const handleSelectCategory = (category: string) => {
    const categoryPermissionIds = allPermissions
      .filter(p => p.name.startsWith(category + ':'))
      .map(p => p.id);
      
    const allSelected = categoryPermissionIds.every(id => selectedPermissions.includes(id));
    
    if (allSelected) {
      // Remove all permissions in this category
      setSelectedPermissions(selectedPermissions.filter(id => 
        !categoryPermissionIds.includes(id)
      ));
    } else {
      // Add all permissions in this category
      const newSelected = [...selectedPermissions];
      categoryPermissionIds.forEach(id => {
        if (!newSelected.includes(id)) {
          newSelected.push(id);
        }
      });
      setSelectedPermissions(newSelected);
    }
  };
  
  // Handle save
  const handleSave = () => {
    onSave(role.id, selectedPermissions);
    onClose();
  };
  
  // Early return if modal is not open
  if (!isOpen) return null;

  return (
    <ModalOverlay
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <ModalHeader>
          <div>
            <ModalTitle>Manage Permissions</ModalTitle>
            <ModalSubtitle>Role: {role.name}</ModalSubtitle>
          </div>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>
        </ModalHeader>
        
        <ModalToolbar>
          <SearchContainer>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Search permissions..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>
          
          <FilterContainer>
            <FilterLabel>
              <FiFilter />
              <span>Category:</span>
            </FilterLabel>
            <FilterSelect value={categoryFilter} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              {permissionCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </FilterSelect>
          </FilterContainer>
        </ModalToolbar>
        
        <PermissionsList>
          <PermissionsHeader>
            <PermissionsCount>
              {selectedPermissions.length} of {allPermissions.length} permissions selected
            </PermissionsCount>
          </PermissionsHeader>
          
          {Object.entries(groupedPermissions).length > 0 ? (
            Object.entries(groupedPermissions).map(([category, permissions]) => (
              <PermissionCategory key={category}>
                <CategoryHeader>
                  <CategoryName>
                    <FiShield /> {category}
                  </CategoryName>
                  <CategorySelectButton 
                    onClick={() => handleSelectCategory(category)}
                  >
                    {permissions.every(p => selectedPermissions.includes(p.id)) 
                      ? 'Deselect All' 
                      : 'Select All'}
                  </CategorySelectButton>
                </CategoryHeader>
                <PermissionItems>
                  {permissions.map(permission => (
                    <PermissionItem key={permission.id}>
                      <PermissionCheckbox>
                        <Checkbox 
                          type="checkbox" 
                          checked={selectedPermissions.includes(permission.id)}
                          onChange={() => handlePermissionToggle(permission.id)}
                        />
                      </PermissionCheckbox>
                      <PermissionInfo>
                        <PermissionName>{permission.name}</PermissionName>
                        <PermissionDescription>
                          {permission.description}
                        </PermissionDescription>
                      </PermissionInfo>
                    </PermissionItem>
                  ))}
                </PermissionItems>
              </PermissionCategory>
            ))
          ) : (
            <EmptyState>
              <FiAlertCircle />
              <EmptyStateText>No permissions found matching your search criteria.</EmptyStateText>
            </EmptyState>
          )}
        </PermissionsList>
        
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>
            <FiCheck />
            <span>Save Permissions</span>
          </SaveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadows.xl};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[4]};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const ModalSubtitle = styled.p`
  margin: ${props => props.theme.spacing[1]} 0 0 0;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing[1]};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const ModalToolbar = styled.div`
  padding: ${props => props.theme.spacing[4]};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  display: flex;
  gap: ${props => props.theme.spacing[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing[3]};
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

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
`;

const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const FilterSelect = styled.select`
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: white;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const PermissionsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
`;

const PermissionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing[2]};
  border-bottom: 1px solid ${props => props.theme.colors.border.lighter};
`;

const PermissionsCount = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const PermissionCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[3]};
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryName = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  
  svg {
    color: ${props => props.theme.colors.primary[500]};
  }
`;

const CategorySelectButton = styled.button`
  background: none;
  border: none;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.primary[600]};
  cursor: pointer;
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[50]};
  }
`;

const PermissionItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
  padding-left: ${props => props.theme.spacing[1]};
`;

const PermissionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
  }
`;

const PermissionCheckbox = styled.div`
  padding-top: 2px;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const PermissionInfo = styled.div`
  flex: 1;
`;

const PermissionName = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

const PermissionDescription = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[8]} 0;
  color: ${props => props.theme.colors.text.secondary};
  
  svg {
    font-size: 2rem;
  }
`;

const EmptyStateText = styled.div`
  font-size: 0.9rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[4]};
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const CancelButton = styled.button`
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: white;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
  }
`;

export default PermissionsModal; 