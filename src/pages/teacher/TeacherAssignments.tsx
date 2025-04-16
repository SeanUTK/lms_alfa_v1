import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiPlus, FiSearch, FiFilter, FiDownload,
  FiChevronDown, FiCalendar, FiClock, FiUsers,
  FiFileText, FiBook, FiCheckSquare, FiAlertCircle,
  FiEye, FiEdit, FiTrash2, FiShare2
} from 'react-icons/fi';
// import { useAuth } from '../../contexts/AuthContext';

// Interface definitions
interface Assignment {
  id: number;
  title: string;
  description: string;
  courseId: number;
  courseName: string;
  dueDate: string;
  totalPoints: number;
  status: 'draft' | 'published' | 'grading' | 'completed';
  submissionsCount: number;
  gradedCount: number;
  averageScore?: number;
  createdAt: string;
}

interface NewAssignmentFormData {
  title: string;
  description: string;
  courseId: number;
  dueDate: string;
  totalPoints: number;
  status: 'draft' | 'published';
}

interface SortIconProps {
  $direction: 'asc' | 'desc';
}

interface StatusBadgeProps {
  $status: 'draft' | 'published' | 'grading' | 'completed';
}

const TeacherAssignments: React.FC = () => {
  // const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [sortBy, setSortBy] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [showNewAssignmentModal, setShowNewAssignmentModal] = useState(false);
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: 'Algebraic Equations Quiz',
      description: 'Complete the quiz on solving basic algebraic equations.',
      courseId: 1,
      courseName: 'Algebra Fundamentals',
      dueDate: '2023-12-15T23:59:59',
      totalPoints: 50,
      status: 'completed',
      submissionsCount: 28,
      gradedCount: 28,
      averageScore: 42,
      createdAt: '2023-11-30T10:00:00',
    },
    {
      id: 2,
      title: 'Geometry Shapes Project',
      description: 'Create a presentation identifying shapes in the real world.',
      courseId: 2,
      courseName: 'Geometry',
      dueDate: '2023-12-20T23:59:59',
      totalPoints: 100,
      status: 'published',
      submissionsCount: 15,
      gradedCount: 0,
      createdAt: '2023-12-01T14:30:00',
    },
    {
      id: 3,
      title: 'Midterm Exam Preparation',
      description: 'Practice questions covering all topics from the first semester.',
      courseId: 1,
      courseName: 'Algebra Fundamentals',
      dueDate: '2023-12-18T23:59:59',
      totalPoints: 25,
      status: 'published',
      submissionsCount: 10,
      gradedCount: 0,
      createdAt: '2023-12-05T09:15:00',
    },
    {
      id: 4,
      title: 'Physics Lab Report',
      description: 'Write a lab report on the pendulum experiment.',
      courseId: 3,
      courseName: 'Physics Principles',
      dueDate: '2023-12-12T23:59:59',
      totalPoints: 80,
      status: 'grading',
      submissionsCount: 25,
      gradedCount: 18,
      averageScore: 70,
      createdAt: '2023-11-28T11:20:00',
    },
    {
      id: 5,
      title: 'Chemical Reactions Worksheet',
      description: 'Complete the chemical equations and identify reaction types.',
      courseId: 4,
      courseName: 'Chemistry Fundamentals',
      dueDate: '2023-12-30T23:59:59',
      totalPoints: 40,
      status: 'draft',
      submissionsCount: 0,
      gradedCount: 0,
      createdAt: '2023-12-07T16:45:00',
    },
  ]);
  
  // New state for the assignment creation form
  const [formData, setFormData] = useState<NewAssignmentFormData>({
    title: '',
    description: '',
    courseId: 0,
    dueDate: '',
    totalPoints: 100,
    status: 'draft'
  });

  // Form validation state
  const [errors, setErrors] = useState<Partial<Record<keyof NewAssignmentFormData, string>>>({});

  // Get all unique courses from assignment data
  const courses = [...new Map(assignments.map(item => [item.courseId, { id: item.courseId, name: item.courseName }])).values()];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowFilters(false);
  };

  // Handle course selection
  const handleCourseSelect = (courseId: number | null) => {
    setSelectedCourse(courseId);
    setShowCourseDropdown(false);
  };

  // Handle sorting
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format status for display
  const getStatusText = (status: Assignment['status']): string => {
    switch (status) {
      case 'draft': return 'Draft';
      case 'published': return 'Published';
      case 'grading': return 'Grading';
      case 'completed': return 'Completed';
      default: return 'Unknown';
    }
  };

  // Filter assignments based on search term, selected filter, and course
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = 
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      assignment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'published' && assignment.status === 'published') ||
      (filter === 'draft' && assignment.status === 'draft') ||
      (filter === 'grading' && assignment.status === 'grading') ||
      (filter === 'completed' && assignment.status === 'completed') ||
      (filter === 'upcoming' && new Date(assignment.dueDate) > new Date() && assignment.status !== 'completed');
    
    const matchesCourse = 
      !selectedCourse || 
      assignment.courseId === selectedCourse;
    
    return matchesSearch && matchesFilter && matchesCourse;
  });

  // Sort filtered assignments
  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    let valueA: string | number | Date = '';
    let valueB: string | number | Date = '';

    switch (sortBy) {
      case 'title':
        valueA = a.title;
        valueB = b.title;
        break;
      case 'dueDate':
        valueA = new Date(a.dueDate);
        valueB = new Date(b.dueDate);
        break;
      case 'course':
        valueA = a.courseName;
        valueB = b.courseName;
        break;
      case 'status':
        valueA = a.status;
        valueB = b.status;
        break;
      case 'submissions':
        valueA = a.submissionsCount;
        valueB = b.submissionsCount;
        break;
      default:
        valueA = new Date(a.dueDate);
        valueB = new Date(b.dueDate);
    }

    // For string comparison
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortDirection === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } 
    // For Date comparison
    else if (valueA instanceof Date && valueB instanceof Date) {
      return sortDirection === 'asc'
        ? valueA.getTime() - valueB.getTime()
        : valueB.getTime() - valueA.getTime();
    }
    // For numeric comparison
    else {
      return sortDirection === 'asc'
        ? (valueA as number) - (valueB as number)
        : (valueB as number) - (valueA as number);
    }
  });

  // Handle form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'totalPoints' ? parseInt(value) || 0 : value
    }));
    
    // Clear error for this field when user makes changes
    if (errors[name as keyof NewAssignmentFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof NewAssignmentFormData, string>> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.courseId) {
      newErrors.courseId = 'Please select a course';
    }
    
    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    } else {
      const selectedDate = new Date(formData.dueDate);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.dueDate = 'Due date cannot be in the past';
      }
    }
    
    if (formData.totalPoints <= 0) {
      newErrors.totalPoints = 'Points must be greater than 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Create new assignment (in a real app, this would be an API call)
    const newAssignment: Assignment = {
      id: Math.floor(Math.random() * 10000), // Generate a random ID
      title: formData.title,
      description: formData.description,
      courseId: formData.courseId,
      courseName: courses.find(c => c.id === formData.courseId)?.name || '',
      dueDate: formData.dueDate,
      totalPoints: formData.totalPoints,
      status: formData.status,
      submissionsCount: 0,
      gradedCount: 0,
      createdAt: new Date().toISOString()
    };
    
    // Add to assignments
    setAssignments(prev => [newAssignment, ...prev]);
    
    // Reset form and close modal
    setFormData({
      title: '',
      description: '',
      courseId: 0,
      dueDate: '',
      totalPoints: 100,
      status: 'draft'
    });
    setShowNewAssignmentModal(false);
  };

  return (
    <AssignmentsContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>Assignments</PageTitle>
          <PageDescription>Create and manage assignments for your courses</PageDescription>
        </div>
        
        <HeaderActions>
          <ExportButton>
            <FiDownload />
            <span>Export</span>
          </ExportButton>
          
          <CreateButton onClick={() => setShowNewAssignmentModal(true)}>
            <FiPlus />
            <span>New Assignment</span>
          </CreateButton>
        </HeaderActions>
      </PageHeader>

      <SearchFilterBar>
        <SearchBox>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchBox>

        <FilterContainer>
          <FilterButton onClick={() => setShowFilters(!showFilters)}>
            <FiFilter />
            <span>Filter</span>
          </FilterButton>
          
          {showFilters && (
            <FilterDropdown>
              <FilterOption 
                onClick={() => handleFilterChange('all')}
                $isActive={filter === 'all'}
              >
                All Assignments
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('upcoming')}
                $isActive={filter === 'upcoming'}
              >
                Upcoming
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('published')}
                $isActive={filter === 'published'}
              >
                Published
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('grading')}
                $isActive={filter === 'grading'}
              >
                Needs Grading
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('completed')}
                $isActive={filter === 'completed'}
              >
                Completed
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('draft')}
                $isActive={filter === 'draft'}
              >
                Drafts
              </FilterOption>
            </FilterDropdown>
          )}
        </FilterContainer>

        <CourseDropdown>
          <CourseButton onClick={() => setShowCourseDropdown(!showCourseDropdown)}>
            <FiBook />
            <span>{selectedCourse ? courses.find(c => c.id === selectedCourse)?.name : "All Courses"}</span>
            <FiChevronDown style={{ 
              transform: showCourseDropdown ? "rotate(180deg)" : "rotate(0)", 
              transition: "transform 0.2s ease"
            }} />
          </CourseButton>
          
          {showCourseDropdown && (
            <CourseDropdownMenu>
              <CourseOption 
                onClick={() => handleCourseSelect(null)}
                $isActive={selectedCourse === null}
              >
                All Courses
              </CourseOption>
              {courses.map((course) => (
                <CourseOption 
                  key={course.id}
                  onClick={() => handleCourseSelect(course.id)}
                  $isActive={selectedCourse === course.id}
                >
                  {course.name}
                </CourseOption>
              ))}
            </CourseDropdownMenu>
          )}
        </CourseDropdown>
      </SearchFilterBar>

      <AssignmentsTable>
        <thead>
          <tr>
            <TableHeader onClick={() => handleSort('title')}>
              <span>Assignment</span>
              {sortBy === 'title' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('course')}>
              <span>Course</span>
              {sortBy === 'course' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('dueDate')}>
              <span>Due Date</span>
              {sortBy === 'dueDate' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('submissions')}>
              <span>Submissions</span>
              {sortBy === 'submissions' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('status')}>
              <span>Status</span>
              {sortBy === 'status' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader>
              <span>Actions</span>
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedAssignments.length === 0 ? (
            <tr>
              <EmptyCell colSpan={6}>
                <EmptyStateSmall>
                  <FiFileText size={24} />
                  <p>No assignments found matching your filters</p>
                </EmptyStateSmall>
              </EmptyCell>
            </tr>
          ) : (
            sortedAssignments.map(assignment => (
              <TableRow key={assignment.id}>
                <TableCell>
                  <AssignmentInfo>
                    <AssignmentIcon>
                      <FiFileText />
                    </AssignmentIcon>
                    <AssignmentDetails>
                      <AssignmentTitle>{assignment.title}</AssignmentTitle>
                      <AssignmentDescription>{assignment.description}</AssignmentDescription>
                    </AssignmentDetails>
                  </AssignmentInfo>
                </TableCell>
                <TableCell>
                  <CourseChip>{assignment.courseName}</CourseChip>
                </TableCell>
                <TableCell>
                  <DueDateContainer>
                    <CalendarIcon>
                      <FiCalendar />
                    </CalendarIcon>
                    <span>{formatDate(assignment.dueDate)}</span>
                  </DueDateContainer>
                </TableCell>
                <TableCell>
                  <SubmissionsInfo>
                    <SubmissionsCount>
                      <FiUsers size={14} />
                      <span>{assignment.submissionsCount} / {assignment.gradedCount}</span>
                    </SubmissionsCount>
                    {assignment.averageScore !== undefined && (
                      <AverageScore>
                        <span>Avg: {assignment.averageScore}/{assignment.totalPoints}</span>
                      </AverageScore>
                    )}
                  </SubmissionsInfo>
                </TableCell>
                <TableCell>
                  <StatusBadge $status={assignment.status}>
                    {getStatusIcon(assignment.status)}
                    <span>{getStatusText(assignment.status)}</span>
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <ActionButtons>
                    <ActionButton title="View Details">
                      <FiEye />
                    </ActionButton>
                    <ActionButton title="Edit Assignment">
                      <FiEdit />
                    </ActionButton>
                    {assignment.status !== 'published' && assignment.status !== 'grading' && (
                      <ActionButton title="Delete Assignment">
                        <FiTrash2 />
                      </ActionButton>
                    )}
                    {assignment.status === 'draft' && (
                      <ActionButton title="Publish Assignment">
                        <FiShare2 />
                      </ActionButton>
                    )}
                  </ActionButtons>
                </TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </AssignmentsTable>

      {/* New Assignment Modal */}
      {showNewAssignmentModal && (
        <Modal>
          <ModalContent
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModalHeader>
              <ModalTitle>Create New Assignment</ModalTitle>
              <CloseButton onClick={() => setShowNewAssignmentModal(false)}>×</CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="title">Assignment Title</FormLabel>
                  <FormInput
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter assignment title"
                    value={formData.title}
                    onChange={handleFormChange}
                    $hasError={!!errors.title}
                  />
                  {errors.title && <FormError>{errors.title}</FormError>}
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormTextarea
                    id="description"
                    name="description"
                    placeholder="Enter assignment instructions"
                    value={formData.description}
                    onChange={handleFormChange}
                    $hasError={!!errors.description}
                    rows={4}
                  />
                  {errors.description && <FormError>{errors.description}</FormError>}
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="courseId">Course</FormLabel>
                    <FormSelect
                      id="courseId"
                      name="courseId"
                      value={formData.courseId}
                      onChange={handleFormChange}
                      $hasError={!!errors.courseId}
                    >
                      <option value="">Select a course</option>
                      {courses.map(course => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </FormSelect>
                    {errors.courseId && <FormError>{errors.courseId}</FormError>}
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="dueDate">Due Date</FormLabel>
                    <FormInput
                      id="dueDate"
                      name="dueDate"
                      type="datetime-local"
                      value={formData.dueDate}
                      onChange={handleFormChange}
                      $hasError={!!errors.dueDate}
                    />
                    {errors.dueDate && <FormError>{errors.dueDate}</FormError>}
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="totalPoints">Total Points</FormLabel>
                    <FormInput
                      id="totalPoints"
                      name="totalPoints"
                      type="number"
                      min="0"
                      value={formData.totalPoints}
                      onChange={handleFormChange}
                      $hasError={!!errors.totalPoints}
                    />
                    {errors.totalPoints && <FormError>{errors.totalPoints}</FormError>}
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="status">Status</FormLabel>
                    <FormSelect
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleFormChange}
                    >
                      <option value="draft">Save as Draft</option>
                      <option value="published">Publish Immediately</option>
                    </FormSelect>
                  </FormGroup>
                </FormRow>
                
                <ModalFooter>
                  <SecondaryButton 
                    type="button" 
                    onClick={() => setShowNewAssignmentModal(false)}
                  >
                    Cancel
                  </SecondaryButton>
                  <PrimaryButton type="submit">
                    Create Assignment
                  </PrimaryButton>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
          <ModalBackdrop onClick={() => setShowNewAssignmentModal(false)} />
        </Modal>
      )}
    </AssignmentsContainer>
  );
};

// Helper function to get the appropriate icon for status
const getStatusIcon = (status: Assignment['status']) => {
  switch (status) {
    case 'draft':
      return <FiFileText />;
    case 'published':
      return <FiAlertCircle />;
    case 'grading':
      return <FiClock />;
    case 'completed':
      return <FiCheckSquare />;
    default:
      return <FiFileText />;
  }
};

// Styled Components
const AssignmentsContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
`;

const PageDescription = styled.p`
  margin: 0.5rem 0 0;
  color: ${props => props.theme.colors?.text?.secondary || '#666'};
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f5f5f5'};
  }
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors?.primary?.[500] || '#0ea5e9'};
  color: #fff;
  border: none;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors?.primary?.[600] || '#0284c7'};
  }
`;

const SearchFilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors?.text?.tertiary || '#888'};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${props => props.theme.colors?.text?.tertiary || '#888'};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors?.primary?.[300] || '#7dd3fc'};
    box-shadow: 0 0 0 2px ${props => props.theme.colors?.primary?.[100] || '#e0f2fe'};
  }
`;

const FilterContainer = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f5f5f5'};
  }
`;

const FilterDropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  box-shadow: ${props => props.theme.shadows?.md || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  z-index: 10;
  overflow: hidden;
`;

const FilterOption = styled.div<{ $isActive: boolean }>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${props => props.$isActive ? props.theme.colors?.background?.tertiary || '#f0f0f0' : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors?.primary?.[500] || '#0ea5e9' : props.theme.colors?.text?.primary || '#000'};
  font-weight: ${props => props.$isActive ? '500' : 'normal'};
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
  }
`;

const CourseDropdown = styled.div`
  position: relative;
`;

const CourseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f5f5f5'};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CourseDropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  box-shadow: ${props => props.theme.shadows?.md || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  z-index: 10;
`;

const CourseOption = styled.div<{ $isActive: boolean }>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${props => props.$isActive ? props.theme.colors?.background?.tertiary || '#f0f0f0' : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors?.primary?.[500] || '#0ea5e9' : props.theme.colors?.text?.primary || '#000'};
  font-weight: ${props => props.$isActive ? '500' : 'normal'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
  }
`;

const AssignmentsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius?.lg || '8px'};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows?.sm || '0 1px 3px rgba(0, 0, 0, 0.1)'};
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${props => props.theme.colors?.text?.secondary || '#666'};
  background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
  border-bottom: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${props => props.theme.colors?.text?.primary || '#000'};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`;

const SortIcon = styled.span<SortIconProps>`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${props => props.$direction === 'desc' ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.2s ease;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: ${props => props.theme.colors?.background?.hover || '#f0f0f0'};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  vertical-align: middle;
`;

const EmptyCell = styled.td`
  padding: 3rem 1rem;
  text-align: center;
`;

const EmptyStateSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
  
  p {
    margin: 0;
  }
`;

const AssignmentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const AssignmentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  background-color: ${props => props.theme.colors?.primary?.[50] || '#e0f2fe'};
  color: ${props => props.theme.colors?.primary?.[500] || '#0ea5e9'};
  flex-shrink: 0;
  font-size: 1rem;
`;

const AssignmentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AssignmentTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const AssignmentDescription = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CourseChip = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.theme.colors?.primary?.[50] || '#e0f2fe'};
  color: ${props => props.theme.colors?.primary?.[700] || '#0369a1'};
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DueDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
`;

const CalendarIcon = styled.span`
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

const SubmissionsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SubmissionsCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  font-size: 0.875rem;
`;

const AverageScore = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
`;

const StatusBadge = styled.div<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.$status) {
      case 'draft': return props.theme.colors?.neutral?.[100] || '#f1f5f9';
      case 'published': return props.theme.colors?.primary?.[50] || '#e0f2fe';
      case 'grading': return props.theme.colors?.warning?.[50] || '#fffbeb';
      case 'completed': return props.theme.colors?.success?.[50] || '#f0fdf4';
      default: return props.theme.colors?.neutral?.[100] || '#f1f5f9';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'draft': return props.theme.colors?.neutral?.[700] || '#334155';
      case 'published': return props.theme.colors?.primary?.[700] || '#0369a1';
      case 'grading': return props.theme.colors?.warning?.[700] || '#b45309';
      case 'completed': return props.theme.colors?.success?.[700] || '#15803d';
      default: return props.theme.colors?.neutral?.[700] || '#334155';
    }
  }};
  
  svg {
    font-size: 0.875rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  background-color: transparent;
  color: ${props => props.theme.colors?.text?.secondary || '#666'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
    color: ${props => props.theme.colors?.primary?.[500] || '#0ea5e9'};
  }
`;

// Modal Styled Components
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndices?.modal || 1000};
`;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius?.lg || '8px'};
  box-shadow: ${props => props.theme.shadows?.xl || '0 10px 25px rgba(0, 0, 0, 0.1)'};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors?.border?.light || '#eee'};
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${props => props.theme.colors?.text?.tertiary || '#888'};
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${props => props.theme.colors?.text?.primary || '#000'};
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

// Form components
const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0;
  
  @media (max-width: ${props => props.theme.breakpoints?.md || '768px'}) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
`;

interface FormInputProps {
  $hasError?: boolean;
}

const FormInput = styled.input<FormInputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  border: 1px solid ${props => 
    props.$hasError 
      ? props.theme.colors?.danger?.[500] || '#ef4444' 
      : props.theme.colors?.border?.light || '#ddd'
  };
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: ${props => 
      props.$hasError 
        ? props.theme.colors?.danger?.[500] || '#ef4444'
        : props.theme.colors?.primary?.[300] || '#7dd3fc'
    };
    box-shadow: 0 0 0 2px ${props => 
      props.$hasError 
        ? props.theme.colors?.danger?.[100] || '#fee2e2' 
        : props.theme.colors?.primary?.[100] || '#e0f2fe'
    };
  }
`;

const FormTextarea = styled.textarea<FormInputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  border: 1px solid ${props => 
    props.$hasError 
      ? props.theme.colors?.danger?.[500] || '#ef4444' 
      : props.theme.colors?.border?.light || '#ddd'
  };
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  font-size: 0.875rem;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${props => 
      props.$hasError 
        ? props.theme.colors?.danger?.[500] || '#ef4444'
        : props.theme.colors?.primary?.[300] || '#7dd3fc'
    };
    box-shadow: 0 0 0 2px ${props => 
      props.$hasError 
        ? props.theme.colors?.danger?.[100] || '#fee2e2' 
        : props.theme.colors?.primary?.[100] || '#e0f2fe'
    };
  }
`;

const FormSelect = styled.select<FormInputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  border: 1px solid ${props => 
    props.$hasError 
      ? props.theme.colors?.danger?.[500] || '#ef4444' 
      : props.theme.colors?.border?.light || '#ddd'
  };
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  font-size: 0.875rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  
  &:focus {
    outline: none;
    border-color: ${props => 
      props.$hasError 
        ? props.theme.colors?.danger?.[500] || '#ef4444'
        : props.theme.colors?.primary?.[300] || '#7dd3fc'
    };
    box-shadow: 0 0 0 2px ${props => 
      props.$hasError 
        ? props.theme.colors?.danger?.[100] || '#fee2e2' 
        : props.theme.colors?.primary?.[100] || '#e0f2fe'
    };
  }
`;

const FormError = styled.div`
  color: ${props => props.theme.colors?.danger?.[500] || '#ef4444'};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors?.primary?.[500] || '#0ea5e9'};
  color: #fff;
  border: none;
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors?.primary?.[600] || '#0284c7'};
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  color: ${props => props.theme.colors?.text?.primary || '#000'};
  border: 1px solid ${props => props.theme.colors?.border?.light || '#ddd'};
  border-radius: ${props => props.theme.borderRadius?.md || '4px'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
  }
`;

export default TeacherAssignments; 