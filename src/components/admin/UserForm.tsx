import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX, FiUser, FiMail, FiLock, FiShield, FiCalendar, FiCheck, FiUserPlus } from 'react-icons/fi';

// User interface matching the one in Users.tsx
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
}

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: Partial<User>) => void;
  initialData?: Partial<User>;
  formTitle: string;
}

const UserForm: React.FC<UserFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  formTitle
}) => {
  // Form state
  const [formData, setFormData] = useState<Partial<User>>({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Student',
    status: 'active',
  });
  
  // Password fields (only for new users)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with data if editing
  useEffect(() => {
    if (initialData) {
      // Handle existing data which might still have "name" instead of first/last name
      if (initialData.name && (!initialData.firstName || !initialData.lastName)) {
        const nameParts = (initialData.name as string).split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';
        
        setFormData({
          ...initialData,
          firstName,
          lastName
        });
      } else {
        setFormData({
          ...initialData
        });
      }
    }
  }, [initialData]);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Handle password changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.password;
        return newErrors;
      });
    }
  };
  
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.confirmPassword;
        return newErrors;
      });
    }
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.role) {
      newErrors.role = 'Role is required';
    }
    
    if (!formData.status) {
      newErrors.status = 'Status is required';
    }
    
    // Password validation (only for new users)
    if (!initialData?.id) {
      if (!password) {
        newErrors.password = 'Password is required';
      } else if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Include password in submission for new users
      const userData = initialData?.id
        ? formData
        : { ...formData, password };
        
      onSubmit(userData);
      
      // Reset form after submission
      if (!initialData?.id) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          role: 'Student',
          status: 'active',
        });
        setPassword('');
        setConfirmPassword('');
      }
      
      setIsSubmitting(false);
    }
  };
  
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
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <ModalHeader>
          <ModalTitleContainer>
            <ModalIcon>
              <FiUserPlus />
            </ModalIcon>
            <div>
              <ModalTitle>{formTitle}</ModalTitle>
              <ModalSubtitle>
                {initialData?.id ? 'Update user information' : 'Create a new user account'}
              </ModalSubtitle>
            </div>
          </ModalTitleContainer>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>
        </ModalHeader>
        
        <FormDivider />
        
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Personal Information</SectionTitle>
            <FormGrid>
              <FormGroup>
                <FormLabel htmlFor="firstName">
                  <FiUser />
                  <span>First Name</span>
                </FormLabel>
                <FormInput
                  id="firstName"
                  name="firstName"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  $hasError={!!errors.firstName}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="lastName">
                  <FiUser />
                  <span>Last Name</span>
                </FormLabel>
                <FormInput
                  id="lastName"
                  name="lastName"
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  $hasError={!!errors.lastName}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">
                  <FiMail />
                  <span>Email Address</span>
                </FormLabel>
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  $hasError={!!errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="role">
                  <FiShield />
                  <span>Role</span>
                </FormLabel>
                <FormSelect
                  id="role"
                  name="role"
                  value={formData.role || ''}
                  onChange={handleChange}
                  $hasError={!!errors.role}
                >
                  <option value="">Select a role</option>
                  <option value="Admin">Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                </FormSelect>
                {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
              </FormGroup>
            </FormGrid>
          </FormSection>
          
          {!initialData?.id && (
            <FormSection>
              <SectionTitle>Security</SectionTitle>
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="password">
                    <FiLock />
                    <span>Password</span>
                  </FormLabel>
                  <FormInput
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                    $hasError={!!errors.password}
                  />
                  {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="confirmPassword">
                    <FiLock />
                    <span>Confirm Password</span>
                  </FormLabel>
                  <FormInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm password"
                    $hasError={!!errors.confirmPassword}
                  />
                  {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                </FormGroup>
              </FormGrid>
            </FormSection>
          )}
          
          <FormSection>
            <SectionTitle>Account Status</SectionTitle>
            <FormGrid>
              <FormGroup>
                <FormLabel htmlFor="status">
                  <FiCalendar />
                  <span>Status</span>
                </FormLabel>
                <StatusOptions>
                  <StatusOption $isActive={formData.status === 'active'} $status="active">
                    <StatusRadio
                      id="statusActive"
                      name="status"
                      value="active"
                      checked={formData.status === 'active'}
                      onChange={handleChange}
                    />
                    <StatusCheck $isActive={formData.status === 'active'}>
                      <FiCheck />
                    </StatusCheck>
                    <StatusLabel htmlFor="statusActive">Active</StatusLabel>
                  </StatusOption>
                  
                  <StatusOption $isActive={formData.status === 'inactive'} $status="inactive">
                    <StatusRadio
                      id="statusInactive"
                      name="status"
                      value="inactive"
                      checked={formData.status === 'inactive'}
                      onChange={handleChange}
                    />
                    <StatusCheck $isActive={formData.status === 'inactive'}>
                      <FiCheck />
                    </StatusCheck>
                    <StatusLabel htmlFor="statusInactive">Inactive</StatusLabel>
                  </StatusOption>
                </StatusOptions>
                {errors.status && <ErrorMessage>{errors.status}</ErrorMessage>}
              </FormGroup>
            </FormGrid>
          </FormSection>
          
          <FormDivider />
          
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : initialData?.id ? 'Update User' : 'Create User'}
            </SubmitButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${props => props.theme.spacing[4]};
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${props => props.theme.spacing[6]};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[4]};
`;

const ModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
`;

const ModalIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => `${props.theme.colors.primary[500]}15`};
  color: ${props => props.theme.colors.primary[600]};
  font-size: 1.5rem;
  box-shadow: 0 0 0 6px ${props => `${props.theme.colors.primary[500]}05`};
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
`;

const ModalSubtitle = styled.p`
  margin: ${props => props.theme.spacing[1]} 0 0 0;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  opacity: 0.9;
`;

const FormDivider = styled.div`
  height: 1px;
  background-color: ${props => `${props.theme.colors.border}80`};
  margin: ${props => props.theme.spacing[5]} 0;
  opacity: 0.8;
`;

const FormSection = styled.div`
  margin-bottom: ${props => props.theme.spacing[6]};
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[5]};
`;

const SectionTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 ${props => props.theme.spacing[4]} 0;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  
  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 18px;
    background-color: ${props => props.theme.colors.primary[500]};
    border-radius: ${props => props.theme.borderRadius.full};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.full};
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing[1]};
  
  svg {
    color: ${props => props.theme.colors.primary[400]};
    font-size: 1rem;
  }
`;

interface FormInputProps {
  $hasError?: boolean;
}

const FormInput = styled.input<FormInputProps>`
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
  border: 1px solid ${props => props.$hasError 
    ? props.theme.colors.accent.red 
    : props.theme.colors.neutral[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  height: 44px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError 
      ? props.theme.colors.accent.red 
      : props.theme.colors.primary[400]};
    box-shadow: ${props => props.$hasError
      ? '0 0 0 3px rgba(220, 38, 38, 0.1)' 
      : '0 0 0 3px rgba(99, 102, 241, 0.15)'};
    transform: translateY(-1px);
  }
  
  &:hover:not(:focus) {
    border-color: ${props => props.$hasError 
      ? props.theme.colors.accent.red 
      : props.theme.colors.primary[200]};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
    opacity: 0.7;
  }
`;

const FormSelect = styled.select<FormInputProps>`
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
  border: 1px solid ${props => props.$hasError 
    ? props.theme.colors.accent.red 
    : props.theme.colors.neutral[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  height: 44px;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError 
      ? props.theme.colors.accent.red 
      : props.theme.colors.primary[400]};
    box-shadow: ${props => props.$hasError
      ? '0 0 0 3px rgba(220, 38, 38, 0.1)' 
      : '0 0 0 3px rgba(99, 102, 241, 0.15)'};
    transform: translateY(-1px);
  }
  
  &:hover:not(:focus) {
    border-color: ${props => props.$hasError 
      ? props.theme.colors.accent.red 
      : props.theme.colors.primary[200]};
  }
`;

const StatusOptions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing[3]};
  margin-top: ${props => props.theme.spacing[1]};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

interface StatusOptionProps {
  $isActive: boolean;
  $status: 'active' | 'inactive';
}

const StatusOption = styled.div<StatusOptionProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[4]};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 2px solid ${props => props.$isActive
    ? props.$status === 'active'
      ? props.theme.colors.success[500]
      : props.theme.colors.warning[500]
    : props.theme.colors.neutral[300]
  };
  background-color: ${props => props.$isActive
    ? props.$status === 'active'
      ? props.theme.colors.success[50]
      : props.theme.colors.warning[50]
    : 'transparent'
  };
  box-shadow: ${props => props.$isActive ? '0 2px 4px rgba(0, 0, 0, 0.05)' : 'none'};
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  min-width: 150px;
  
  &:hover {
    background-color: ${props => {
      if (props.$isActive) {
        return props.$status === 'active'
          ? props.theme.colors.success[100]
          : props.theme.colors.warning[100];
      }
      return props.theme.colors.background.tertiary;
    }};
    border-color: ${props => {
      if (props.$isActive) {
        return props.$status === 'active'
          ? props.theme.colors.success[600]
          : props.theme.colors.warning[600];
      }
      return props.theme.colors.primary[200];
    }};
    transform: translateY(-1px);
  }
`;

const StatusRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

interface StatusCheckProps {
  $isActive: boolean;
}

const StatusCheck = styled.div<StatusCheckProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: ${props => props.theme.borderRadius.full};
  border: 2px solid ${props => props.$isActive
    ? props.theme.colors.primary[500]
    : props.theme.colors.text.tertiary
  };
  color: white;
  background-color: ${props => props.$isActive
    ? props.theme.colors.primary[500]
    : 'transparent'
  };
  transition: all ${props => props.theme.transition.fast};
  
  svg {
    opacity: ${props => props.$isActive ? 1 : 0};
    font-size: 14px;
  }
`;

const StatusLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.colors.text.primary};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.accent.red};
  font-size: 0.8rem;
  margin-top: ${props => props.theme.spacing[1]};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  
  &::before {
    content: "⚠";
    font-size: 0.8rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${props => props.theme.spacing[3]};
  margin-top: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const CancelButton = styled.button`
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[5]}`};
  background-color: transparent;
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  min-width: 120px;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
    border-color: ${props => props.theme.colors.neutral[400]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 2;
  }
`;

const SubmitButton = styled.button`
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[5]}`};
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 1;
    margin-bottom: ${props => props.theme.spacing[2]};
  }
`;

export default UserForm; 