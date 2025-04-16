import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiSearch, FiFilter, FiDownload, FiMail, 
  FiChevronDown, FiUsers, FiCheckCircle, FiXCircle,
   FiEdit, FiEye,  FiBook
} from 'react-icons/fi';
// import { useAuth } from '../../contexts/AuthContext';

// Safe theme access helper function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const getThemeValue = (path: string[], fallback: string) => (props: any) => {
//   try {
//     let value = props.theme;
//     for (const key of path) {
//       value = value[key];
//       if (value === undefined) return fallback;
//     }
//     return value;
//   } catch (e) {
//     return fallback;
//   }
// };

interface Student {
  id: number;
  name: string;
  email: string;
  grade: string;
  courses: string[];
  attendance: number;
  avatar?: string;
  performance: number;
  status: 'active' | 'inactive';
}

// Add proper interface definitions for styled components
interface FilterOptionProps {
  $isActive: boolean;
}

interface SortIconProps {
  $direction: 'asc' | 'desc';
}

interface AttendanceProps {
  $value: number;
}

interface PerformanceIndicatorProps {
  $value: number;
}

interface StatusBadgeProps {
  $status: 'active' | 'inactive';
}

const TeacherStudents: React.FC = () => {
  // const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Mock data for students
  const students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@school.edu',
      grade: '10-A',
      courses: ['Algebra Fundamentals', 'Geometry'],
      attendance: 92,
      performance: 85,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@school.edu',
      grade: '10-A',
      courses: ['Algebra Fundamentals'],
      attendance: 98,
      performance: 92,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.j@school.edu',
      grade: '11-B',
      courses: ['Physics Principles'],
      attendance: 78,
      performance: 65,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.d@school.edu',
      grade: '10-B',
      courses: ['Geometry'],
      attendance: 88,
      performance: 78,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    },
    {
      id: 5,
      name: 'Robert Wilson',
      email: 'robert.w@school.edu',
      grade: '12-C',
      courses: ['Chemistry Fundamentals'],
      attendance: 65,
      performance: 70,
      status: 'inactive',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      id: 6,
      name: 'Sarah Brown',
      email: 'sarah.b@school.edu',
      grade: '11-A',
      courses: ['Biology 101'],
      attendance: 95,
      performance: 88,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      id: 7,
      name: 'James Miller',
      email: 'james.m@school.edu',
      grade: '10-A',
      courses: ['Algebra Fundamentals', 'Geometry'],
      attendance: 89,
      performance: 76,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      id: 8,
      name: 'Olivia Martinez',
      email: 'olivia.m@school.edu',
      grade: '12-C',
      courses: ['Chemistry Fundamentals'],
      attendance: 82,
      performance: 94,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
  ];

  // Get all unique courses from student data
  const uniqueCourses = [...new Set(students.flatMap(student => student.courses))];

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
  const handleCourseSelect = (course: string | null) => {
    setSelectedCourse(course);
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

  // Filter students based on search term, selected filter, and course
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.grade.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'active' && student.status === 'active') ||
      (filter === 'inactive' && student.status === 'inactive') ||
      (filter === 'highPerformers' && student.performance >= 85) ||
      (filter === 'needsHelp' && student.performance < 70);
    
    const matchesCourse = 
      !selectedCourse || 
      student.courses.includes(selectedCourse);
    
    return matchesSearch && matchesFilter && matchesCourse;
  });

  // Sort filtered students
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    let compareValueA: string | number = '';
    let compareValueB: string | number = '';

    switch (sortBy) {
      case 'name':
        compareValueA = a.name;
        compareValueB = b.name;
        break;
      case 'grade':
        compareValueA = a.grade;
        compareValueB = b.grade;
        break;
      case 'attendance':
        compareValueA = a.attendance;
        compareValueB = b.attendance;
        break;
      case 'performance':
        compareValueA = a.performance;
        compareValueB = b.performance;
        break;
      default:
        compareValueA = a.name;
        compareValueB = b.name;
    }

    // For string comparison
    if (typeof compareValueA === 'string' && typeof compareValueB === 'string') {
      return sortDirection === 'asc'
        ? compareValueA.localeCompare(compareValueB)
        : compareValueB.localeCompare(compareValueA);
    } 
    // For numeric comparison
    else {
      return sortDirection === 'asc'
        ? (compareValueA as number) - (compareValueB as number)
        : (compareValueB as number) - (compareValueA as number);
    }
  });

  return (
    <StudentsContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>Students</PageTitle>
          <PageDescription>Manage and monitor student progress across your courses</PageDescription>
        </div>
        
        <HeaderActions>
          <ExportButton>
            <FiDownload />
            <span>Export Data</span>
          </ExportButton>
        </HeaderActions>
      </PageHeader>

      <SearchFilterBar>
        <SearchBox>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search students..."
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
                All Students
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('active')}
                $isActive={filter === 'active'}
              >
                Active Students
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('inactive')}
                $isActive={filter === 'inactive'}
              >
                Inactive Students
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('highPerformers')}
                $isActive={filter === 'highPerformers'}
              >
                High Performers ({'>'}85%)
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('needsHelp')}
                $isActive={filter === 'needsHelp'}
              >
                Needs Help ({'<'}70%)
              </FilterOption>
            </FilterDropdown>
          )}
        </FilterContainer>

        <CourseDropdown>
          <CourseButton onClick={() => setShowCourseDropdown(!showCourseDropdown)}>
            <FiBook />
            <span>{selectedCourse ? selectedCourse : "All Courses"}</span>
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
              {uniqueCourses.map((course, index) => (
                <CourseOption 
                  key={index}
                  onClick={() => handleCourseSelect(course)}
                  $isActive={selectedCourse === course}
                >
                  {course}
                </CourseOption>
              ))}
            </CourseDropdownMenu>
          )}
        </CourseDropdown>
      </SearchFilterBar>

      <StudentsTable>
        <thead>
          <tr>
            <TableHeader onClick={() => handleSort('name')}>
              <span>Student Name</span>
              {sortBy === 'name' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('grade')}>
              <span>Class</span>
              {sortBy === 'grade' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader>
              <span>Courses</span>
            </TableHeader>
            <TableHeader onClick={() => handleSort('attendance')}>
              <span>Attendance</span>
              {sortBy === 'attendance' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader onClick={() => handleSort('performance')}>
              <span>Performance</span>
              {sortBy === 'performance' && (
                <SortIcon $direction={sortDirection}>
                  <FiChevronDown />
                </SortIcon>
              )}
            </TableHeader>
            <TableHeader>
              <span>Status</span>
            </TableHeader>
            <TableHeader>
              <span>Actions</span>
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.length === 0 ? (
            <tr>
              <EmptyCell colSpan={7}>
                <EmptyStateSmall>
                  <FiUsers size={24} />
                  <p>No students found matching your filters</p>
                </EmptyStateSmall>
              </EmptyCell>
            </tr>
          ) : (
            sortedStudents.map(student => (
              <TableRow key={student.id}>
                <TableCell>
                  <StudentInfo>
                    <StudentAvatar src={student.avatar || 'https://via.placeholder.com/40'} alt={student.name} />
                    <StudentDetails>
                      <StudentName>{student.name}</StudentName>
                      <StudentEmail>{student.email}</StudentEmail>
                    </StudentDetails>
                  </StudentInfo>
                </TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>
                  <CoursesList>
                    {student.courses.map((course, index) => (
                      <CourseChip key={index}>{course}</CourseChip>
                    ))}
                  </CoursesList>
                </TableCell>
                <TableCell>
                  <AttendanceValue $value={student.attendance}>
                    {student.attendance}%
                  </AttendanceValue>
                </TableCell>
                <TableCell>
                  <PerformanceBar>
                    <PerformanceIndicator $value={student.performance} />
                    <PerformanceValue>{student.performance}%</PerformanceValue>
                  </PerformanceBar>
                </TableCell>
                <TableCell>
                  <StatusBadge $status={student.status}>
                    {student.status === 'active' ? (
                      <>
                        <FiCheckCircle />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <FiXCircle />
                        <span>Inactive</span>
                      </>
                    )}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <ActionButtons>
                    <ActionButton title="View Profile">
                      <FiEye />
                    </ActionButton>
                    <ActionButton title="Email Student">
                      <FiMail />
                    </ActionButton>
                    <ActionButton title="Edit">
                      <FiEdit />
                    </ActionButton>
                  </ActionButtons>
                </TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </StudentsTable>
    </StudentsContainer>
  );
};

const StudentsContainer = styled.div`
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
    border-color: ${props => props.theme.colors?.primary?.[300] || '#007BFF'};
    box-shadow: 0 0 0 2px ${props => props.theme.colors?.primary?.[100] || '#e6f7ff'};
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

const FilterOption = styled.div<FilterOptionProps>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${props => props.$isActive ? props.theme.colors?.background?.tertiary || '#f0f0f0' : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors?.primary?.[500] || '#007bff' : props.theme.colors?.text?.primary || '#666'};
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
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
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

const CourseOption = styled.div<FilterOptionProps>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${props => props.$isActive ? props.theme.colors?.background?.tertiary || '#f0f0f0' : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors?.primary?.[500] || '#007bff' : props.theme.colors?.text?.primary || '#666'};
  font-weight: ${props => props.$isActive ? '500' : 'normal'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
  }
`;

const StudentsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${props => props.theme.colors?.background?.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius?.lg || '8px'};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows?.sm || '0 0 10px rgba(0, 0, 0, 0.1)'};
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const StudentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentName = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const StudentEmail = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors?.text?.tertiary || '#666'};
`;

const CoursesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseChip = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.theme.colors?.primary?.[50] || '#e0f0ff'};
  color: ${props => props.theme.colors?.primary?.[700] || '#007bff'};
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  font-size: 0.75rem;
  white-space: nowrap;
`;

const AttendanceValue = styled.div<AttendanceProps>`
  font-weight: 500;
  color: ${props => {
    if (props.$value >= 90) return props.theme.colors?.success?.[500] || '#4caf50';
    if (props.$value >= 75) return props.theme.colors?.warning?.[500] || '#ff9800';
    return props.theme.colors?.danger?.[500] || '#f44336';
  }};
`;

const PerformanceBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const PerformanceIndicator = styled.div<PerformanceIndicatorProps>`
  width: 80px;
  height: 6px;
  background-color: ${props => props.theme.colors?.background?.tertiary || '#f0f0f0'};
  border-radius: ${props => props.theme.borderRadius?.full || '50%'};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$value}%;
    background-color: ${props => {
      if (props.$value >= 85) return props.theme.colors?.success?.[500] || '#4caf50';
      if (props.$value >= 70) return props.theme.colors?.warning?.[500] || '#ff9800';
      return props.theme.colors?.danger?.[500] || '#f44336';
    }};
    border-radius: ${props => props.theme.borderRadius?.full || '50%'};
  }
`;

const PerformanceValue = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
`;

const StatusBadge = styled.div<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius?.sm || '4px'};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => 
    props.$status === 'active' 
      ? props.theme.colors?.success?.[50] || '#e8f5e9' 
      : props.theme.colors?.danger?.[50] || '#ffebee'};
  color: ${props => 
    props.$status === 'active' 
      ? props.theme.colors?.success?.[600] || '#43a047' 
      : props.theme.colors?.danger?.[600] || '#c62828'};
  
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
    color: ${props => props.theme.colors?.primary?.[500] || '#007bff'};
  }
`;

export default TeacherStudents; 