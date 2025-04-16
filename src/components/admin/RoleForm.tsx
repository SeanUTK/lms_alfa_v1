import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX, FiInfo } from 'react-icons/fi';

// Role interface
interface Role {
  id: string;
  name: string;
  description: string;
}

interface RoleFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (roleData: Omit<Role, 'id'>) => void;
  initialData?: Role;
  formTitle: string;
}

const RoleForm: React.FC<RoleFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  formTitle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });
  
  // Initialize form data when editing an existing role
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        description: initialData.description,
      });
    } else {
      setFormData({
        name: '',
        description: '',
      });
    }
    setErrors({
      name: '',
      description: '',
    });
  }, [initialData, isOpen]);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Role name is required';
      isValid = false;
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        name: formData.name,
        description: formData.description,
      });
      
      // Reset form
      setFormData({
        name: '',
        description: '',
      });
    }
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
          <ModalTitle>{formTitle}</ModalTitle>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="name">Role Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                $hasError={!!errors.name}
                placeholder="e.g., Teacher Admin, Content Manager"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                $hasError={!!errors.description}
                placeholder="Briefly describe what this role can do"
                rows={4}
              />
              {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
            </FormGroup>
            
            <InfoBox>
              <FiInfo />
              <InfoText>
                After creating the role, you can assign specific permissions.
              </InfoText>
            </InfoBox>
          </ModalBody>
          
          <ModalFooter>
            <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
            <SubmitButton type="submit">
              {initialData ? 'Update Role' : 'Create Role'}
            </SubmitButton>
          </ModalFooter>
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
  max-width: 500px;
  overflow: hidden;
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

const ModalBody = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[1]};
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

interface InputProps {
  $hasError?: boolean;
}

const Input = styled.input<InputProps>`
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.$hasError 
    ? props.theme.colors.danger[500] 
    : props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  background-color: ${props => props.$hasError 
    ? props.theme.colors.danger[50]
    : 'white'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError 
      ? props.theme.colors.danger[500]
      : props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${props => props.$hasError 
      ? 'rgba(244, 63, 94, 0.1)'
      : 'rgba(59, 130, 246, 0.1)'};
  }
`;

const TextArea = styled.textarea<InputProps>`
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.$hasError 
    ? props.theme.colors.danger[500] 
    : props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  resize: vertical;
  font-family: inherit;
  background-color: ${props => props.$hasError 
    ? props.theme.colors.danger[50]
    : 'white'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError 
      ? props.theme.colors.danger[500]
      : props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${props => props.$hasError 
      ? 'rgba(244, 63, 94, 0.1)'
      : 'rgba(59, 130, 246, 0.1)'};
  }
`;

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.danger[500]};
  margin-top: ${props => props.theme.spacing[1]};
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.primary[50]};
  border-radius: ${props => props.theme.borderRadius.md};
  border-left: 4px solid ${props => props.theme.colors.primary[500]};
  
  svg {
    color: ${props => props.theme.colors.primary[500]};
    margin-top: 2px;
  }
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.primary[700]};
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

const SubmitButton = styled.button`
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
  }
`;

export default RoleForm; 