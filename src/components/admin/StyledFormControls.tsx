import React from 'react';
import styled from 'styled-components';
import { Input as BaseInput, Checkbox as BaseCheckbox, Dropdown as BaseDropdown } from '../ui';
import { useTheme } from '../ThemeProvider';

// Enhanced Input component with custom styling for admin panel
export const AdminInput = styled(BaseInput)`
  border-color: ${({ theme }) => theme.isDark ? '#3A3A3A' : '#E0E0E0'};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  
  &:focus, &:focus-within {
    border-color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.isDark ? 'rgba(108, 138, 255, 0.2)' : 'rgba(78, 99, 228, 0.2)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  }
  
  .prefix-icon {
    color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
  }
`;

// Enhanced Checkbox component with custom styling for admin panel
export const AdminCheckbox = styled(BaseCheckbox)`
  &.custom-checkbox {
    .checkbox-control {
      border-color: ${({ theme }) => theme.isDark ? '#3A3A3A' : '#E0E0E0'};
      background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
      
      &:hover {
        border-color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
      }
      
      &.checked {
        background-color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
        border-color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
      }
    }
  }
`;

// Enhanced Dropdown component with custom styling for admin panel
export const AdminDropdown = styled(BaseDropdown)`
  .dropdown-toggle {
    border-color: ${({ theme }) => theme.isDark ? '#3A3A3A' : '#E0E0E0'};
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
    color: ${({ theme }) => theme.isDark ? '#F5F5F5' : '#1A1A1A'};
    
    &:hover {
      border-color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
    }
    
    .dropdown-icon {
      color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
    }
  }
  
  .dropdown-menu {
    background-color: ${({ theme }) => theme.isDark ? '#242424' : 'white'};
    border-color: ${({ theme }) => theme.isDark ? '#3A3A3A' : '#E0E0E0'};
    box-shadow: 0 4px 12px ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'};
    
    .dropdown-item {
      color: ${({ theme }) => theme.isDark ? '#F5F5F5' : '#1A1A1A'};
      
      &:hover, &.active {
        background-color: ${({ theme }) => theme.isDark ? 'rgba(108, 138, 255, 0.2)' : 'rgba(78, 99, 228, 0.1)'};
        color: ${({ theme }) => theme.isDark ? '#6C8AFF' : '#4E63E4'};
      }
    }
  }
`;

// Custom component to enhance standard checkboxes with the desired styling
export const EnhancedCheckbox: React.FC<React.ComponentProps<typeof BaseCheckbox>> = (props) => {
  const { isDarkMode } = useTheme();
  
  return (
    <AdminCheckbox 
      {...props} 
      className={`custom-checkbox ${props.className || ''}`}
      checkColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
      checkBackgroundColor={isDarkMode ? '#6C8AFF' : '#4E63E4'}
    />
  );
}; 