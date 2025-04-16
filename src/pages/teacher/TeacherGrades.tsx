import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiSearch, FiFilter, FiDownload, FiEdit,
  FiChevronDown, FiUser, FiUsers, FiBook,
  FiCheckCircle, FiXCircle, FiAlertCircle,
  FiFileText
} from 'react-icons/fi';
// import { useAuth } from '../../contexts/AuthContext';

// Interface definitions
interface Student {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface Course {
  id: number;
  name: string;
  code: string;
  students: number;
}

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
  totalPoints: number;
  weight: number;
}

interface GradeEntry {
  id: number;
  studentId: number;
  student: Student;
  courseId: number;
  course: Course;
  assignmentId: number;
  assignment: Assignment;
  score: number | null;
  submitted: boolean;
  submittedAt?: string;
  feedback?: string;
  status: 'pending' | 'graded' | 'missing' | 'excused';
}

interface SortIconProps {
  $direction: 'asc' | 'desc';
}

interface GradeIndicatorProps {
  $value: number | null;
  $total: number;
}

interface StatusBadgeProps {
  $status: 'pending' | 'graded' | 'missing' | 'excused';
}

const TeacherGrades: React.FC = () => {
  // const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showAssignmentDropdown, setShowAssignmentDropdown] = useState(false);
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [editableGradeId, setEditableGradeId] = useState<number | null>(null);
  const [editGradeValue, setEditGradeValue] = useState<string>('');

  // Mock data for the component
  const students: Student[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@school.edu', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@school.edu', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Michael Johnson', email: 'michael.j@school.edu', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@school.edu', avatar: 'https://randomuser.me/api/portraits/women/67.jpg' },
    { id: 5, name: 'Robert Wilson', email: 'robert.w@school.edu', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { id: 6, name: 'Sarah Brown', email: 'sarah.b@school.edu', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { id: 7, name: 'James Miller', email: 'james.m@school.edu', avatar: 'https://randomuser.me/api/portraits/men/42.jpg' },
    { id: 8, name: 'Olivia Martinez', email: 'olivia.m@school.edu', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' }
  ];

  const courses: Course[] = [
    { id: 1, name: 'Algebra Fundamentals', code: 'MATH101', students: 30 },
    { id: 2, name: 'Geometry', code: 'MATH102', students: 25 },
    { id: 3, name: 'Physics Principles', code: 'PHYS101', students: 28 },
    { id: 4, name: 'Chemistry Fundamentals', code: 'CHEM101', students: 22 }
  ];

  const assignments: Assignment[] = [
    { id: 1, title: 'Algebraic Equations Quiz', dueDate: '2023-12-15', totalPoints: 50, weight: 10 },
    { id: 2, title: 'Geometry Shapes Project', dueDate: '2023-12-20', totalPoints: 100, weight: 20 },
    { id: 3, title: 'Midterm Exam Preparation', dueDate: '2023-12-18', totalPoints: 25, weight: 5 },
    { id: 4, title: 'Physics Lab Report', dueDate: '2023-12-12', totalPoints: 80, weight: 15 },
    { id: 5, title: 'Chemical Reactions Worksheet', dueDate: '2023-12-30', totalPoints: 40, weight: 8 }
  ];

  // Generate mock grade entries
  const generateGradeEntries = (): GradeEntry[] => {
    const entries: GradeEntry[] = [];
    let entryId = 1;

    courses.forEach(course => {
      assignments.filter(a => 
        (course.id === 1 && [1, 3].includes(a.id)) || 
        (course.id === 2 && [2].includes(a.id)) ||
        (course.id === 3 && [4].includes(a.id)) ||
        (course.id === 4 && [5].includes(a.id))
      ).forEach(assignment => {
        students.forEach(student => {
          const randomStatus = (): 'pending' | 'graded' | 'missing' | 'excused' => {
            const rand = Math.random();
            if (rand < 0.6) return 'graded';
            if (rand < 0.8) return 'pending';
            if (rand < 0.95) return 'missing';
            return 'excused';
          };

          const status = randomStatus();
          const submitted = status === 'graded' || status === 'pending';
          const score = status === 'graded' ? Math.floor(Math.random() * (assignment.totalPoints + 1)) : null;
          
          entries.push({
            id: entryId++,
            studentId: student.id,
            student,
            courseId: course.id,
            course,
            assignmentId: assignment.id,
            assignment,
            score,
            submitted,
            submittedAt: submitted ? '2023-12-10T15:30:00' : undefined,
            feedback: status === 'graded' ? 'Good work overall. Pay attention to problem 3.' : undefined,
            status
          });
        });
      });
    });

    return entries;
  };

  const gradeEntries = generateGradeEntries();

  // Filter grades based on search, course, assignment and filter
  const filteredGrades = gradeEntries.filter(grade => {
    const matchesSearch = 
      grade.student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      grade.student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.assignment.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = 
      !selectedCourse || 
      grade.courseId === selectedCourse;
    
    const matchesAssignment = 
      !selectedAssignment || 
      grade.assignmentId === selectedAssignment;
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'graded' && grade.status === 'graded') ||
      (filter === 'pending' && grade.status === 'pending') ||
      (filter === 'missing' && grade.status === 'missing') ||
      (filter === 'excused' && grade.status === 'excused');
    
    return matchesSearch && matchesCourse && matchesAssignment && matchesFilter;
  });

  // Sort filtered grades
  const sortedGrades = [...filteredGrades].sort((a, b) => {
    let valueA: string | number | null = '';
    let valueB: string | number | null = '';

    switch (sortBy) {
      case 'name':
        valueA = a.student.name;
        valueB = b.student.name;
        break;
      case 'course':
        valueA = a.course.name;
        valueB = b.course.name;
        break;
      case 'assignment':
        valueA = a.assignment.title;
        valueB = b.assignment.title;
        break;
      case 'score':
        valueA = a.score;
        valueB = b.score;
        break;
      case 'status':
        valueA = a.status;
        valueB = b.status;
        break;
      default:
        valueA = a.student.name;
        valueB = b.student.name;
    }

    // For string comparison
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortDirection === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } 
    // For null values
    else if (valueA === null && valueB === null) {
      return 0;
    }
    else if (valueA === null) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    else if (valueB === null) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    // For numeric comparison
    else {
      return sortDirection === 'asc'
        ? (valueA as number) - (valueB as number)
        : (valueB as number) - (valueA as number);
    }
  });

  // Get all unique courses from the gradeEntries
  const uniqueCourses = [...new Set(gradeEntries.map(item => item.courseId))].map(
    courseId => courses.find(c => c.id === courseId)
  ).filter(Boolean) as Course[];

  // Get all unique assignments from filtered courses
  const uniqueAssignments = [...new Set(
    gradeEntries
    .filter(item => !selectedCourse || item.courseId === selectedCourse)
    .map(item => item.assignmentId)
  )]
  .map(assignmentId => assignments.find(a => a.id === assignmentId))
  .filter(Boolean) as Assignment[];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle course selection
  const handleCourseSelect = (courseId: number | null) => {
    setSelectedCourse(courseId);
    setShowCourseDropdown(false);
    // Reset assignment selection when changing course
    setSelectedAssignment(null);
  };

  // Handle assignment selection
  const handleAssignmentSelect = (assignmentId: number | null) => {
    setSelectedAssignment(assignmentId);
    setShowAssignmentDropdown(false);
  };

  // Handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowFilters(false);
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

  // Handle editing grade
  const handleEditGrade = (gradeId: number, currentScore: number | null) => {
    setEditableGradeId(gradeId);
    setEditGradeValue(currentScore === null ? '' : currentScore.toString());
  };

  // Handle save grade
  const handleSaveGrade = (_gradeId: number) => {
    // Here you would update the grade in your database
    // For now, we'll just reset the editable state
    setEditableGradeId(null);
    setEditGradeValue('');
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditableGradeId(null);
    setEditGradeValue('');
  };

  // Format percentage for display
  const formatPercentage = (score: number | null, total: number): string => {
    if (score === null) return 'N/A';
    return `${Math.round((score / total) * 100)}%`;
  };

  // Get grade status text
  const getStatusText = (status: GradeEntry['status']): string => {
    switch (status) {
      case 'graded': return 'Graded';
      case 'pending': return 'Pending';
      case 'missing': return 'Missing';
      case 'excused': return 'Excused';
      default: return 'Unknown';
    }
  };

  // Calculate class average score for the selected assignment
  const calculateClassAverage = (): string => {
    if (!selectedAssignment) return 'N/A';
    
    const relevantGrades = gradeEntries.filter(
      g => g.assignmentId === selectedAssignment && g.status === 'graded'
    );
    
    if (relevantGrades.length === 0) return 'N/A';
    
    const sum = relevantGrades.reduce((acc, curr) => acc + (curr.score || 0), 0);
    const average = sum / relevantGrades.length;
    const assignment = assignments.find(a => a.id === selectedAssignment);
    
    if (!assignment) return 'N/A';
    
    return `${average.toFixed(1)} / ${assignment.totalPoints} (${Math.round((average / assignment.totalPoints) * 100)}%)`;
  };

  return (
    <GradesContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>Grades</PageTitle>
          <PageDescription>Manage and review student grades for your courses</PageDescription>
        </div>
        
        <HeaderActions>
          <ExportButton>
            <FiDownload />
            <span>Export Grades</span>
          </ExportButton>
        </HeaderActions>
      </PageHeader>

      <FiltersSection>
        <SearchFilterBar>
          <SearchBox>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search students or assignments..."
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
                  All Grades
                </FilterOption>
                <FilterOption 
                  onClick={() => handleFilterChange('graded')}
                  $isActive={filter === 'graded'}
                >
                  Graded
                </FilterOption>
                <FilterOption 
                  onClick={() => handleFilterChange('pending')}
                  $isActive={filter === 'pending'}
                >
                  Pending
                </FilterOption>
                <FilterOption 
                  onClick={() => handleFilterChange('missing')}
                  $isActive={filter === 'missing'}
                >
                  Missing
                </FilterOption>
                <FilterOption 
                  onClick={() => handleFilterChange('excused')}
                  $isActive={filter === 'excused'}
                >
                  Excused
                </FilterOption>
              </FilterDropdown>
            )}
          </FilterContainer>
        </SearchFilterBar>

        <CourseAssignmentFilters>
          <CourseDropdown>
            <CourseButton onClick={() => setShowCourseDropdown(!showCourseDropdown)}>
              <FiBook />
              <span>{selectedCourse ? uniqueCourses.find(c => c.id === selectedCourse)?.name : "All Courses"}</span>
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
                {uniqueCourses.map((course) => (
                  <CourseOption 
                    key={course.id}
                    onClick={() => handleCourseSelect(course.id)}
                    $isActive={selectedCourse === course.id}
                  >
                    {course.name} ({course.code})
                  </CourseOption>
                ))}
              </CourseDropdownMenu>
            )}
          </CourseDropdown>

          <AssignmentDropdown>
            <AssignmentButton onClick={() => setShowAssignmentDropdown(!showAssignmentDropdown)}>
              <FiFileText />
              <span>{selectedAssignment ? uniqueAssignments.find(a => a.id === selectedAssignment)?.title : "All Assignments"}</span>
              <FiChevronDown style={{ 
                transform: showAssignmentDropdown ? "rotate(180deg)" : "rotate(0)", 
                transition: "transform 0.2s ease"
              }} />
            </AssignmentButton>
            
            {showAssignmentDropdown && (
              <AssignmentDropdownMenu>
                <AssignmentOption 
                  onClick={() => handleAssignmentSelect(null)}
                  $isActive={selectedAssignment === null}
                >
                  All Assignments
                </AssignmentOption>
                {uniqueAssignments.map((assignment) => (
                  <AssignmentOption 
                    key={assignment.id}
                    onClick={() => handleAssignmentSelect(assignment.id)}
                    $isActive={selectedAssignment === assignment.id}
                  >
                    {assignment.title} ({assignment.totalPoints} pts)
                  </AssignmentOption>
                ))}
              </AssignmentDropdownMenu>
            )}
          </AssignmentDropdown>
        </CourseAssignmentFilters>
      </FiltersSection>

      {selectedAssignment && (
        <AssignmentSummary>
          <SummaryTitle>
            {uniqueAssignments.find(a => a.id === selectedAssignment)?.title}
          </SummaryTitle>
          <SummaryDetails>
            <SummaryItem>
              <SummaryLabel>Due Date:</SummaryLabel>
              <SummaryValue>
                {new Date(uniqueAssignments.find(a => a.id === selectedAssignment)?.dueDate || '').toLocaleDateString()}
              </SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Total Points:</SummaryLabel>
              <SummaryValue>
                {uniqueAssignments.find(a => a.id === selectedAssignment)?.totalPoints}
              </SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Weight:</SummaryLabel>
              <SummaryValue>
                {uniqueAssignments.find(a => a.id === selectedAssignment)?.weight}%
              </SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Class Average:</SummaryLabel>
              <SummaryValue>
                {calculateClassAverage()}
              </SummaryValue>
            </SummaryItem>
          </SummaryDetails>
        </AssignmentSummary>
      )}

      <GradesTable>
        <thead>
          <tr>
            <TableHeader onClick={() => handleSort('name')}>
              <span>Student</span>
              {sortBy === 'name' && (
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
            <TableHeader onClick={() => handleSort('assignment')}>
              <span>Assignment</span>
              {sortBy === 'assignment' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('score')}>
              <span>Score</span>
              {sortBy === 'score' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader>
              <span>Percentage</span>
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
          {sortedGrades.length === 0 ? (
            <tr>
              <EmptyCell colSpan={7}>
                <EmptyStateSmall>
                  <FiUsers size={24} />
                  <p>No grades found matching your filters</p>
                </EmptyStateSmall>
              </EmptyCell>
            </tr>
          ) : (
            sortedGrades.map(grade => (
              <TableRow key={grade.id}>
                <TableCell>
                  <StudentInfo>
                    <StudentAvatar src={grade.student.avatar || 'https://via.placeholder.com/40'} alt={grade.student.name} />
                    <StudentDetails>
                      <StudentName>{grade.student.name}</StudentName>
                      <StudentEmail>{grade.student.email}</StudentEmail>
                    </StudentDetails>
                  </StudentInfo>
                </TableCell>
                <TableCell>
                  <CourseChip>
                    {grade.course.name}
                    <CourseCode>{grade.course.code}</CourseCode>
                  </CourseChip>
                </TableCell>
                <TableCell>
                  <AssignmentTitle>{grade.assignment.title}</AssignmentTitle>
                </TableCell>
                <TableCell>
                  {editableGradeId === grade.id ? (
                    <EditScoreContainer>
                      <ScoreInput
                        type="number"
                        value={editGradeValue}
                        onChange={(e) => setEditGradeValue(e.target.value)}
                        min="0"
                        max={grade.assignment.totalPoints}
                      />
                      <span>/ {grade.assignment.totalPoints}</span>
                      <EditActions>
                        <EditButton onClick={() => handleSaveGrade(grade.id)}>
                          <FiCheckCircle />
                        </EditButton>
                        <EditButton onClick={handleCancelEdit}>
                          <FiXCircle />
                        </EditButton>
                      </EditActions>
                    </EditScoreContainer>
                  ) : (
                    <GradeScore>
                      {grade.score !== null ? `${grade.score} / ${grade.assignment.totalPoints}` : 'Not graded'}
                    </GradeScore>
                  )}
                </TableCell>
                <TableCell>
                  <GradePercentage $value={grade.score} $total={grade.assignment.totalPoints}>
                    {formatPercentage(grade.score, grade.assignment.totalPoints)}
                  </GradePercentage>
                </TableCell>
                <TableCell>
                  <StatusBadge $status={grade.status}>
                    {getStatusIcon(grade.status)}
                    <span>{getStatusText(grade.status)}</span>
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <ActionButtons>
                    {grade.status !== 'excused' && (
                      <ActionButton
                        title="Edit Grade"
                        onClick={() => handleEditGrade(grade.id, grade.score)}
                        disabled={editableGradeId !== null && editableGradeId !== grade.id}
                      >
                        <FiEdit />
                      </ActionButton>
                    )}
                  </ActionButtons>
                </TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </GradesTable>
    </GradesContainer>
  );
};

// Helper function to get the appropriate icon for status
const getStatusIcon = (status: GradeEntry['status']) => {
  switch (status) {
    case 'graded':
      return <FiCheckCircle />;
    case 'pending':
      return <FiAlertCircle />;
    case 'missing':
      return <FiXCircle />;
    case 'excused':
      return <FiUser />;
    default:
      return <FiAlertCircle />;
  }
};

// Styled Components
const GradesContainer = styled.div`
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

const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchFilterBar = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CourseAssignmentFilters = styled.div`
  display: flex;
  gap: 1rem;
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
  flex: 1;
  min-width: 200px;
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
  width: 100%;
  
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
  left: 0;
  right: 0;
  top: calc(100% + 0.5rem);
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

const AssignmentDropdown = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`;

const AssignmentButton = styled(CourseButton)``;

const AssignmentDropdownMenu = styled(CourseDropdownMenu)``;

const AssignmentOption = styled(CourseOption)``;

const AssignmentSummary = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius?.lg || '8px'};
  box-shadow: ${props => props.theme.shadows?.sm || '0 1px 3px rgba(0, 0, 0, 0.1)'};
`;

const SummaryTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
`;

const SummaryDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SummaryLabel = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
`;

const SummaryValue = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors?.text?.primary || '#000'};
`;

const GradesTable = styled.table`
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

const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StudentAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const StudentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentName = styled.div`
  font-weight: 500;
`;

const StudentEmail = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
`;

const CourseChip = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.theme.colors?.primary?.[50] || '#e0f2fe'};
  color: ${props => props.theme.colors?.primary?.[700] || '#0369a1'};
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  font-size: 0.75rem;
  font-weight: 500;
  max-width: 150px;
`;

const CourseCode = styled.span`
  font-size: 0.7rem;
  opacity: 0.8;
  margin-top: 0.1rem;
`;

const AssignmentTitle = styled.div`
  font-size: 0.875rem;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GradeScore = styled.div`
  font-weight: 500;
`;

const GradePercentage = styled.div<GradeIndicatorProps>`
  font-weight: 500;
  color: ${props => {
    if (props.$value === null) return props.theme.colors?.text?.tertiary || '#666';
    const percentage = (props.$value / props.$total) * 100;
    if (percentage >= 90) return props.theme.colors?.success?.[600] || '#16a34a';
    if (percentage >= 70) return props.theme.colors?.warning?.[500] || '#f59e0b';
    return props.theme.colors?.danger?.[500] || '#ef4444';
  }};
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
      case 'graded': return props.theme.colors?.success?.[50] || '#f0fdf4';
      case 'pending': return props.theme.colors?.warning?.[50] || '#fffbeb';
      case 'missing': return props.theme.colors?.danger?.[50] || '#fef2f2';
      case 'excused': return props.theme.colors?.neutral?.[100] || '#f1f5f9';
      default: return props.theme.colors?.neutral?.[100] || '#f1f5f9';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'graded': return props.theme.colors?.success?.[700] || '#15803d';
      case 'pending': return props.theme.colors?.warning?.[700] || '#b45309';
      case 'missing': return props.theme.colors?.danger?.[700] || '#b91c1c';
      case 'excused': return props.theme.colors?.neutral?.[700] || '#334155';
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
  justify-content: center;
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
  
  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
    color: ${props => props.theme.colors?.primary?.[500] || '#0ea5e9'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EditScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

const ScoreInput = styled.input`
  width: 50px;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  border: 1px solid ${props => props.theme.colors?.primary?.[300] || '#7dd3fc'};
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors?.primary?.[100] || '#e0f2fe'};
  }
`;

const EditActions = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-left: 0.5rem;
`;

const EditButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  background-color: transparent;
  color: ${props => props.theme.colors?.text?.secondary || '#666'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
    
    &:first-child {
      color: ${props => props.theme.colors?.success?.[500] || '#22c55e'};
    }
    
    &:last-child {
      color: ${props => props.theme.colors?.danger?.[500] || '#ef4444'};
    }
  }
`;

export default TeacherGrades; 