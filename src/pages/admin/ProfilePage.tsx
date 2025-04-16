import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiUser,  FiLock, FiSave, FiX, FiInfo, } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

// Field validation interface
interface ValidationErrors {
  username?: string;
  email?: string;
  fullName?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const ProfilePage: React.FC = () => {
  const { user, updateProfile, updatePassword } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    role: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [activeTab, setActiveTab] = useState('general');
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Load user data into form
  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        username: user.username || '',
        email: user.email || '',
        fullName: user.fullName || '',
        role: user.role || ''
      });
    }
  }, [user]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateGeneralForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Full name validation (optional but if provided, should be valid)
    if (formData.fullName && formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validatePasswordForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Current password validation
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
      isValid = false;
    }

    // New password validation
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
      isValid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
      isValid = false;
    } else if (!/\d/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one number';
      isValid = false;
    } else if (!/[a-zA-Z]/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one letter';
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Clear error message when changing tabs
    setErrorMessage('');
    setSuccessMessage('');
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Reset form to original values when canceling
      if (user) {
        setFormData({
          ...formData,
          username: user.username || '',
          email: user.email || '',
          fullName: user.fullName || '',
          role: user.role || ''
        });
      }
      // Clear errors when canceling
      setErrors({});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset messages
    setSuccessMessage('');
    setErrorMessage('');

    // Validate form
    if (!validateGeneralForm()) {
      setErrorMessage('Please correct the errors in the form');
      return;
    }
    
    try {
      // Update user profile using AuthContext
      updateProfile({
        username: formData.username,
        email: formData.email,
        fullName: formData.fullName
      });
      
      // Show success message
      setSuccessMessage('Profile updated successfully!');
      setErrorMessage('');
      
      // Exit edit mode
      setIsEditing(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setErrorMessage('Failed to update profile. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset messages
    setSuccessMessage('');
    setErrorMessage('');

    // Validate password form
    if (!validatePasswordForm()) {
      setErrorMessage('Please correct the errors in the form');
      return;
    }
    
    try {
      // Update password using AuthContext
      const success = updatePassword(formData.currentPassword, formData.newPassword);
      
      if (!success) {
        setErrorMessage('Current password is incorrect');
        setErrors({
          ...errors,
          currentPassword: 'Current password is incorrect'
        });
        return;
      }
      
      // Reset password fields
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      // Show success message
      setSuccessMessage('Password changed successfully!');
      setErrorMessage('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setErrorMessage('Failed to change password. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <HeaderTitle>My Profile</HeaderTitle>
      </PageHeader>

      {/* Alerts */}
      {successMessage && <SuccessAlert>{successMessage}</SuccessAlert>}
      {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}

      <ProfileContainer>
        <ProfileSidebar>
          <ProfileImage>
            {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
          </ProfileImage>
          <RoleLabel>{user?.role}</RoleLabel>
          
          <TabsContainer>
            <TabButton 
              $isActive={activeTab === 'general'} 
              onClick={() => handleTabChange('general')}
            >
              <FiUser />
              <span>General Information</span>
            </TabButton>
            <TabButton 
              $isActive={activeTab === 'security'} 
              onClick={() => handleTabChange('security')}
            >
              <FiLock />
              <span>Password & Security</span>
            </TabButton>
          </TabsContainer>
        </ProfileSidebar>
        
        <ProfileContent>
          {activeTab === 'general' && (
            <form onSubmit={handleSubmit}>
              <ContentHeader>
                <SectionTitle>General Information</SectionTitle>
                <ActionButtons>
                  {isEditing ? (
                    <>
                      <SaveButton type="submit">
                        <FiSave />
                        Save Changes
                      </SaveButton>
                      <CancelButton type="button" onClick={toggleEditing}>
                        <FiX />
                        Cancel
                      </CancelButton>
                    </>
                  ) : (
                    <EditButton type="button" onClick={toggleEditing}>
                      Edit Profile
                    </EditButton>
                  )}
                </ActionButtons>
              </ContentHeader>
              
              <FormGroup>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput 
                  type="text" 
                  id="username" 
                  name="username" 
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  $hasError={!!errors.username}
                />
                {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  $hasError={!!errors.fullName}
                />
                {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  $hasError={!!errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="role">Role</FormLabel>
                <FormInput 
                  type="text" 
                  id="role" 
                  name="role" 
                  value={formData.role}
                  disabled={true}
                />
                <FormHint>Role cannot be changed</FormHint>
              </FormGroup>
            </form>
          )}
          
          {activeTab === 'security' && (
            <form onSubmit={handleChangePassword}>
              <ContentHeader>
                <SectionTitle>Password & Security</SectionTitle>
              </ContentHeader>
              
              <PasswordRequirements>
                <FiInfo />
                <div>
                  <p>Password must:</p>
                  <ul>
                    <li>Be at least 6 characters long</li>
                    <li>Include at least one number</li>
                    <li>Include at least one letter</li>
                  </ul>
                </div>
              </PasswordRequirements>
              
              <FormGroup>
                <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
                <FormInput 
                  type="password" 
                  id="currentPassword" 
                  name="currentPassword" 
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your current password"
                  $hasError={!!errors.currentPassword}
                />
                {errors.currentPassword && <ErrorMessage>{errors.currentPassword}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="newPassword">New Password</FormLabel>
                <PasswordInputWrapper>
                  <FormInput 
                    type="password" 
                    id="newPassword" 
                    name="newPassword" 
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    $hasError={!!errors.newPassword}
                  />
                </PasswordInputWrapper>
                {errors.newPassword && <ErrorMessage>{errors.newPassword}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
                <FormInput 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                  $hasError={!!errors.confirmPassword}
                />
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
              </FormGroup>
              
              <SaveButton type="submit">
                <FiSave />
                Change Password
              </SaveButton>
            </form>
          )}
        </ProfileContent>
      </ProfileContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ProfileSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 auto 1rem;
`;

const RoleLabel = styled.div`
  background-color: ${props => props.theme.colors.primary[100]};
  color: ${props => props.theme.colors.primary[700]};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin: 0 auto;
  text-transform: capitalize;
  text-align: center;
  width: fit-content;
  display: block;
  margin-bottom: 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface TabButtonProps {
  $isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$isActive ? props.theme.colors.primary[50] : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors.primary[700] : props.theme.colors.text.secondary};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$isActive ? props.theme.colors.primary[50] : props.theme.colors.background.hover};
    color: ${props => props.$isActive ? props.theme.colors.primary[700] : props.theme.colors.text.primary};
  }
  
  svg {
    font-size: 1.25rem;
  }
`;

const ProfileContent = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border.light};
  padding: 2rem;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
`;

interface FormInputProps {
  $hasError?: boolean;
}

const FormInput = styled.input<FormInputProps>`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.$hasError ? props.theme.colors.danger[500] : props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? props.theme.colors.danger[500] : props.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? props.theme.colors.danger[100] : props.theme.colors.primary[100]};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.background.tertiary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.danger[500]};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: "⚠";
  }
`;

const FormHint = styled.p`
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.text.tertiary};
  font-size: 0.75rem;
`;

const PasswordRequirements = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.primary[50]};
  margin-bottom: 1.5rem;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  svg {
    color: ${props => props.theme.colors.primary[500]};
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
  
  p {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  ul {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
    
    li {
      margin-bottom: 0.25rem;
    }
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    font-size: 1rem;
  }
`;

const EditButton = styled(Button)`
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    border-color: ${props => props.theme.colors.border.dark};
  }
`;

const SaveButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary[500]};
  color: white;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }
`;

const CancelButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.colors.text.secondary};
  border: none;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const Alert = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;

const SuccessAlert = styled(Alert)`
  background-color: ${props => props.theme.colors.success[50]};
  color: ${props => props.theme.colors.success[700]};
  border: 1px solid ${props => props.theme.colors.success[200]};
`;

const ErrorAlert = styled(Alert)`
  background-color: ${props => props.theme.colors.danger[50]};
  color: ${props => props.theme.colors.danger[700]};
  border: 1px solid ${props => props.theme.colors.danger[200]};
`;

export default ProfilePage; 