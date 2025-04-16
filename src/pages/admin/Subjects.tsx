import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSearch, FiEdit2, FiTrash2, FiMoreVertical, FiFilter, FiDownload, FiBook } from 'react-icons/fi';
import { Subject } from '../../types/Subject';

// Mock data for development
const mockSubjects: Subject[] = [
  {
    id: '1',
    name: 'Mathematics',
    code: 'MATH101',
    department: 'Science',
    credits: 4,
    description: 'Introduction to calculus and algebra',
    status: 'active',
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    name: 'Physics',
    code: 'PHYS101',
    department: 'Science',
    credits: 4,
    description: 'Basic principles of physics',
    status: 'active',
    createdAt: '2023-01-20',
  },
  {
    id: '3',
    name: 'English Literature',
    code: 'ENG201',
    department: 'Humanities',
    credits: 3,
    description: 'Study of classic literature and composition',
    status: 'active',
    createdAt: '2023-02-05',
  },
  {
    id: '4',
    name: 'World History',
    code: 'HIST101',
    department: 'Humanities',
    credits: 3,
    description: 'Survey of major historical events',
    status: 'active',
    createdAt: '2023-01-30',
  },
  {
    id: '5',
    name: 'Computer Science',
    code: 'CS101',
    department: 'Technology',
    credits: 4,
    description: 'Introduction to programming and algorithms',
    status: 'active',
    createdAt: '2023-02-10',
  },
  {
    id: '6',
    name: 'Biology',
    code: 'BIO101',
    department: 'Science',
    credits: 4,
    description: 'Study of living organisms',
    status: 'active',
    createdAt: '2023-02-15',
  },
  {
    id: '7',
    name: 'Chemistry',
    code: 'CHEM101',
    department: 'Science',
    credits: 4,
    description: 'Fundamentals of chemical principles',
    status: 'inactive',
    createdAt: '2023-01-05',
  },
];

const Subjects: React.FC = () => {
  // State for search, filters, and selected subjects
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  // const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
  const [_isFormOpen, setIsFormOpen] = useState(false);
  const [_currentSubject, setCurrentSubject] = useState<Subject | null>(null);
  
  // Filter subjects based on search term and filters
  const filteredSubjects = mockSubjects.filter(subject => {
    const matchesSearch = 
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment ? subject.department === filterDepartment : true;
    const matchesStatus = filterStatus ? subject.status === filterStatus : true;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle department filter change
  const handleDepartmentFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterDepartment(e.target.value);
  };

  // Handle status filter change
  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Handle checkbox selection
  const handleSelectSubject = (subjectId: string) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter(id => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedSubjects.length === filteredSubjects.length) {
      setSelectedSubjects([]);
    } else {
      setSelectedSubjects(filteredSubjects.map(subject => subject.id));
    }
  };

  // Toggle actions menu
  const toggleActionsMenu = () => {
    setIsActionsMenuOpen(!isActionsMenuOpen);
  };
  
  // Open form to add a new subject
  const handleAddSubject = () => {
    setCurrentSubject(null);
    setIsFormOpen(true);
  };
  
  // Open form to edit an existing subject
  const handleEditSubject = (subject: Subject) => {
    setCurrentSubject(subject);
    setIsFormOpen(true);
  };
  
  // Handle delete subject
  const handleDeleteSubject = (subjectId: string) => {
    // Implement delete functionality here
    console.log(`Delete subject with ID: ${subjectId}`);
    // After successful deletion, you might want to refresh the subjects list
  };
  
  // Handle form submission
  // const handleFormSubmit = (subjectData: Subject) => {
  //   if (currentSubject) {
  //     // Update existing subject
  //     console.log('Updating subject:', subjectData);
  //   } else {
  //     // Create new subject
  //     console.log('Creating new subject:', subjectData);
  //   }
  //   setIsFormOpen(false);
  // };
  
  // const handleFormClose = () => {
  //   setIsFormOpen(false);
  //   setCurrentSubject(null);
  // };

  return (
    <SubjectsContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>Subject Management</PageTitle>
          <PageDescription>Manage courses, subjects and academic content</PageDescription>
        </div>

        <AddSubjectButton onClick={handleAddSubject}>
          <FiBook />
          <span>Add New Subject</span>
        </AddSubjectButton>
      </PageHeader>

      <ToolbarContainer>
        <SearchAndFilters>
          <SearchContainer>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Search subjects..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>

          <FiltersSection>
            <FilterLabel>
              <FiFilter />
              <span>Filters:</span>
            </FilterLabel>
            
            <FilterSelect value={filterDepartment} onChange={handleDepartmentFilterChange}>
              <option value="">All Departments</option>
              <option value="Science">Science</option>
              <option value="Humanities">Humanities</option>
              <option value="Technology">Technology</option>
              <option value="Arts">Arts</option>
              <option value="Business">Business</option>
            </FilterSelect>

            <FilterSelect value={filterStatus} onChange={handleStatusFilterChange}>
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </FilterSelect>
          </FiltersSection>
        </SearchAndFilters>

        <ActionsContainer>
          {selectedSubjects.length > 0 && (
            <>
              <SelectedCount>{selectedSubjects.length} selected</SelectedCount>
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

      <SubjectsTable>
        <TableHeader>
          <HeaderRow>
            <HeaderCell width="50px">
              <CheckboxContainer>
                <Checkbox 
                  type="checkbox" 
                  checked={selectedSubjects.length === filteredSubjects.length && filteredSubjects.length > 0}
                  onChange={handleSelectAll}
                />
              </CheckboxContainer>
            </HeaderCell>
            <HeaderCell width="20%">Subject Name</HeaderCell>
            <HeaderCell width="10%">Code</HeaderCell>
            <HeaderCell width="15%">Department</HeaderCell>
            <HeaderCell width="10%">Credits</HeaderCell>
            <HeaderCell width="25%">Description</HeaderCell>
            <HeaderCell width="10%">Status</HeaderCell>
            <HeaderCell width="100px">Actions</HeaderCell>
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map(subject => (
              <TableRow key={subject.id}>
                <TableCell>
                  <CheckboxContainer>
                    <Checkbox 
                      type="checkbox" 
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => handleSelectSubject(subject.id)}
                    />
                  </CheckboxContainer>
                </TableCell>
                <TableCell>
                  <SubjectName>{subject.name}</SubjectName>
                </TableCell>
                <TableCell>{subject.code}</TableCell>
                <TableCell>
                  <DepartmentBadge $department={subject.department.toLowerCase()}>
                    {subject.department}
                  </DepartmentBadge>
                </TableCell>
                <TableCell>{subject.credits}</TableCell>
                <TableCell>
                  <DescriptionCell>{subject.description}</DescriptionCell>
                </TableCell>
                <TableCell>
                  <StatusIndicator $status={subject.status}>
                    {subject.status === 'active' ? 'Active' : 'Inactive'}
                  </StatusIndicator>
                </TableCell>
                <TableCell>
                  <ActionsContainer>
                    <ActionIconButton onClick={() => handleEditSubject(subject)} title="Edit subject">
                      <FiEdit2 />
                    </ActionIconButton>
                    <ActionIconButton onClick={() => handleDeleteSubject(subject.id)} title="Delete subject">
                      <FiTrash2 />
                    </ActionIconButton>
                  </ActionsContainer>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <EmptyStateRow>
              <EmptyStateCell colSpan={8}>
                <EmptyStateMessage>
                  No subjects found matching your search criteria.
                </EmptyStateMessage>
              </EmptyStateCell>
            </EmptyStateRow>
          )}
        </TableBody>
      </SubjectsTable>

      <Pagination>
        <PageInfo>Showing 1 to {filteredSubjects.length} of {filteredSubjects.length} entries</PageInfo>
        <PageButtons>
          <PageButton $isActive={true}>1</PageButton>
          <PageButton $isActive={false}>2</PageButton>
          <PageButton $isActive={false}>3</PageButton>
          <PageButtonEllipsis>...</PageButtonEllipsis>
          <PageButton $isActive={false}>10</PageButton>
        </PageButtons>
      </Pagination>

      {/* Subject Form Modal will be implemented in a separate component */}
    </SubjectsContainer>
  );
};

// Styled Components
const SubjectsContainer = styled.div`
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

const AddSubjectButton = styled.button`
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
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.9rem;
  min-width: 150px;
  appearance: auto;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-grow: 1;
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
  border: 1px solid ${props => props.theme.colors.border};
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
  border: 1px solid ${props => props.theme.colors.border};
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

const SubjectsTable = styled.table`
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

const SubjectName = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

interface DepartmentBadgeProps {
  $department: string;
}

const DepartmentBadge = styled.div<DepartmentBadgeProps>`
  display: inline-block;
  padding: ${props => `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.$department) {
      case 'science': return 'rgba(16, 185, 129, 0.1)';
      case 'humanities': return 'rgba(79, 70, 229, 0.1)';
      case 'technology': return 'rgba(245, 158, 11, 0.1)';
      case 'arts': return 'rgba(236, 72, 153, 0.1)';
      case 'business': return 'rgba(59, 130, 246, 0.1)';
      default: return 'rgba(107, 114, 128, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.$department) {
      case 'science': return 'rgb(16, 185, 129)';
      case 'humanities': return 'rgb(79, 70, 229)';
      case 'technology': return 'rgb(245, 158, 11)';
      case 'arts': return 'rgb(236, 72, 153)';
      case 'business': return 'rgb(59, 130, 246)';
      default: return 'rgb(107, 114, 128)';
    }
  }};
`;

const DescriptionCell = styled.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
    border-color: ${props => props.$isActive ? 'transparent' : props.theme.colors.neutral[400]};
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

export default Subjects; 