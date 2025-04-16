import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiFileText, FiCalendar, FiClock, FiSearch, FiChevronDown, FiCheckCircle,  FiPaperclip, FiUpload,} from 'react-icons/fi';
import Card from '../../components/common/Card';

// Get status color - moved outside component
const getStatusColor = (status: string) => {
  switch(status) {
    case 'completed':
      return '#4caf50';
    case 'in-progress':
      return '#2196f3';
    case 'overdue':
      return '#f44336';
    case 'upcoming':
      return '#ff9800';
    default:
      return '#9e9e9e';
  }
};

const Assignments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data - would normally come from API
  const courses = [
    { id: 1, name: 'Mathematics', teacher: 'Dr. Smith' },
    { id: 2, name: 'Physics', teacher: 'Prof. Johnson' },
    { id: 3, name: 'English Literature', teacher: 'Mrs. Davis' },
    { id: 4, name: 'Chemistry', teacher: 'Dr. Wilson' },
    { id: 5, name: 'World History', teacher: 'Prof. Anderson' },
    { id: 6, name: 'Computer Science', teacher: 'Dr. Roberts' },
  ];
  
  const assignments = [
    {
      id: 1,
      title: 'Quadratic Equations Problem Set',
      courseId: 1,
      courseName: 'Mathematics',
      dueDate: '2023-05-15T23:59:59',
      assignedDate: '2023-04-28',
      description: 'Complete the problem set on quadratic equations including word problems and applications.',
      status: 'completed',
      grade: 92,
      submissionDate: '2023-05-14T14:25:00',
      attachments: [
        { id: 1, name: 'Problem_Set.pdf', size: '1.2 MB' }
      ],
      feedbackProvided: true
    },
    {
      id: 2,
      title: 'Physics Lab Report: Forces and Motion',
      courseId: 2,
      courseName: 'Physics',
      dueDate: '2023-05-22T23:59:59',
      assignedDate: '2023-05-01',
      description: 'Write a lab report based on the experiments conducted on forces and motion. Include all data tables and analysis.',
      status: 'in-progress',
      grade: null,
      submissionDate: null,
      attachments: [
        { id: 2, name: 'Lab_Instructions.pdf', size: '2.4 MB' },
        { id: 3, name: 'Data_Collection_Template.xlsx', size: '0.8 MB' }
      ],
      feedbackProvided: false
    },
    {
      id: 3,
      title: 'Macbeth Character Analysis Essay',
      courseId: 3,
      courseName: 'English Literature',
      dueDate: '2023-05-10T23:59:59',
      assignedDate: '2023-04-25',
      description: 'Write a 1500-word essay analyzing the character development of Macbeth throughout the play.',
      status: 'overdue',
      grade: null,
      submissionDate: null,
      attachments: [
        { id: 4, name: 'Essay_Guidelines.pdf', size: '1.1 MB' }
      ],
      feedbackProvided: false
    },
    {
      id: 4,
      title: 'Chemical Reactions Worksheet',
      courseId: 4,
      courseName: 'Chemistry',
      dueDate: '2023-05-18T23:59:59',
      assignedDate: '2023-05-04',
      description: 'Complete the worksheet on balancing chemical equations and identifying reaction types.',
      status: 'in-progress',
      grade: null,
      submissionDate: null,
      attachments: [
        { id: 5, name: 'Chemical_Reactions_Worksheet.pdf', size: '1.5 MB' }
      ],
      feedbackProvided: false
    },
    {
      id: 5,
      title: 'World War II Research Project',
      courseId: 5,
      courseName: 'World History',
      dueDate: '2023-06-05T23:59:59',
      assignedDate: '2023-05-02',
      description: 'Research and create a presentation on a specific aspect of World War II. Topics must be approved by the teacher.',
      status: 'upcoming',
      grade: null,
      submissionDate: null,
      attachments: [
        { id: 6, name: 'Research_Project_Guidelines.pdf', size: '1.7 MB' }
      ],
      feedbackProvided: false
    },
    {
      id: 6,
      title: 'Python Programming Assignment',
      courseId: 6,
      courseName: 'Computer Science',
      dueDate: '2023-05-20T23:59:59',
      assignedDate: '2023-05-06',
      description: 'Create a Python program that implements the specified algorithms and data structures.',
      status: 'in-progress',
      grade: null,
      submissionDate: null,
      attachments: [
        { id: 7, name: 'Programming_Assignment_Details.pdf', size: '1.3 MB' },
        { id: 8, name: 'Starter_Code.zip', size: '0.5 MB' }
      ],
      feedbackProvided: false
    },
    {
      id: 7,
      title: 'Linear Algebra Quiz',
      courseId: 1,
      courseName: 'Mathematics',
      dueDate: '2023-05-08T23:59:59',
      assignedDate: '2023-05-01',
      description: 'Complete the online quiz on linear algebra concepts including matrices and determinants.',
      status: 'completed',
      grade: 88,
      submissionDate: '2023-05-07T15:30:00',
      attachments: [
        { id: 9, name: 'Study_Guide.pdf', size: '1.0 MB' }
      ],
      feedbackProvided: true
    },
    {
      id: 8,
      title: 'Energy Conservation Analysis',
      courseId: 2,
      courseName: 'Physics',
      dueDate: '2023-05-30T23:59:59',
      assignedDate: '2023-05-10',
      description: 'Analyze the given scenarios and apply energy conservation principles to solve the problems.',
      status: 'upcoming',
      grade: null,
      submissionDate: null,
      attachments: [
        { id: 10, name: 'Energy_Problems.pdf', size: '1.8 MB' }
      ],
      feedbackProvided: false
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  // Get days remaining until due date
  const getDaysRemaining = (dueDateStr: string) => {
    const dueDate = new Date(dueDateStr);
    const today = new Date();
    
    // Set time to 00:00:00 for accurate day calculation
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    
    const differenceMs = dueDate.getTime() - today.getTime();
    const differenceDays = Math.ceil(differenceMs / (1000 * 3600 * 24));
    
    return differenceDays;
  };

  // Filter assignments based on search term, selected course, and active tab
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          assignment.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = selectedCourse ? assignment.courseId === parseInt(selectedCourse) : true;
    
    const matchesTab = activeTab === 'all' ? true : 
                      activeTab === assignment.status;
    
    return matchesSearch && matchesCourse && matchesTab;
  });

  // Handle course selection
  const handleCourseSelect = (courseId: string | null) => {
    setSelectedCourse(courseId);
    setShowCourseDropdown(false);
  };

  // Get status text
  const getStatusText = (status: string, dueDate: string) => {
    switch(status) {
      case 'completed':
        return 'Completed';
      case 'in-progress': {
        const daysRemaining = getDaysRemaining(dueDate);
        if (daysRemaining <= 0) return 'Due Today';
        if (daysRemaining === 1) return 'Due Tomorrow';
        return `Due in ${daysRemaining} days`;
      }
      case 'overdue':
        return 'Overdue';
      case 'upcoming':
        return 'Upcoming';
      default:
        return status;
    }
  };

  // Format course name for dropdown display
  const getCourseName = (courseId: string | null) => {
    if (!courseId) return 'All Courses';
    const course = courses.find(c => c.id === parseInt(courseId));
    return course ? course.name : 'All Courses';
  };

  return (
    <AssignmentsContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Assignments</PageTitle>
          <PageDescription>View and manage your course assignments</PageDescription>
        </HeaderContent>
      </PageHeader>

      <FilterSection>
        <SearchBar>
          <SearchIcon>
            <FiSearch size={18} />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search assignments..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <FilterControls>
          <CourseDropdown>
            <CourseSelector onClick={() => setShowCourseDropdown(!showCourseDropdown)}>
              <span>{getCourseName(selectedCourse)}</span>
              <FiChevronDown size={16} />
            </CourseSelector>
            
            {showCourseDropdown && (
              <CourseDropdownMenu>
                <CourseOption 
                  onClick={() => handleCourseSelect(null)}
                  $isSelected={selectedCourse === null}
                >
                  All Courses
                </CourseOption>
                {courses.map(course => (
                  <CourseOption 
                    key={course.id}
                    onClick={() => handleCourseSelect(course.id.toString())}
                    $isSelected={selectedCourse === course.id.toString()}
                  >
                    {course.name}
                  </CourseOption>
                ))}
              </CourseDropdownMenu>
            )}
          </CourseDropdown>
          
          <TabsContainer>
            <TabButton 
              $isActive={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            >
              All
            </TabButton>
            <TabButton 
              $isActive={activeTab === 'in-progress'} 
              onClick={() => setActiveTab('in-progress')}
            >
              In Progress
            </TabButton>
            <TabButton 
              $isActive={activeTab === 'upcoming'} 
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </TabButton>
            <TabButton 
              $isActive={activeTab === 'completed'} 
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </TabButton>
            <TabButton 
              $isActive={activeTab === 'overdue'} 
              onClick={() => setActiveTab('overdue')}
            >
              Overdue
            </TabButton>
          </TabsContainer>
        </FilterControls>
      </FilterSection>

      <AssignmentsList>
        {filteredAssignments.map(assignment => (
          <AssignmentCard key={assignment.id} as={motion.div} whileHover={{ y: -4 }}>
            <AssignmentHeader>
              <CourseName>{assignment.courseName}</CourseName>
              <AssignmentStatus $status={assignment.status}>
                <StatusIndicator $status={assignment.status} />
                <span>{getStatusText(assignment.status, assignment.dueDate)}</span>
              </AssignmentStatus>
            </AssignmentHeader>
            
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>{assignment.description}</AssignmentDescription>
            
            <AssignmentDates>
              <DateItem>
                <FiCalendar size={14} />
                <span>Assigned: {formatDate(assignment.assignedDate)}</span>
              </DateItem>
              <DateItem>
                <FiClock size={14} />
                <span>Due: {formatDate(assignment.dueDate)} at {formatTime(assignment.dueDate)}</span>
              </DateItem>
            </AssignmentDates>
            
            {assignment.attachments.length > 0 && (
              <AttachmentSection>
                <AttachmentHeader>
                  <FiPaperclip size={14} />
                  <span>Attachments</span>
                </AttachmentHeader>
                <AttachmentList>
                  {assignment.attachments.map(attachment => (
                    <AttachmentItem key={attachment.id}>
                      <AttachmentName>
                        <FiFileText size={14} />
                        <span>{attachment.name}</span>
                      </AttachmentName>
                      <AttachmentSize>{attachment.size}</AttachmentSize>
                    </AttachmentItem>
                  ))}
                </AttachmentList>
              </AttachmentSection>
            )}
            
            {assignment.status === 'completed' && (
              <CompletedSection>
                <CompletedHeader>
                  <FiCheckCircle size={14} color="#4caf50" />
                  <span>Completed on {formatDate(assignment.submissionDate!)}</span>
                </CompletedHeader>
                {assignment.grade !== null && (
                  <GradeDisplay $grade={assignment.grade}>
                    <GradeLabel>Grade:</GradeLabel>
                    <GradeValue $grade={assignment.grade}>{assignment.grade}%</GradeValue>
                  </GradeDisplay>
                )}
              </CompletedSection>
            )}
            
            <AssignmentFooter>
              {assignment.status === 'completed' ? (
                <ViewFeedbackButton>
                  View Feedback
                </ViewFeedbackButton>
              ) : (
                <SubmitButton $status={assignment.status}>
                  <FiUpload size={16} />
                  <span>
                    {assignment.status === 'overdue' ? 'Submit Late' : 'Submit Assignment'}
                  </span>
                </SubmitButton>
              )}
              <ViewDetailsButton>
                View Details
              </ViewDetailsButton>
            </AssignmentFooter>
          </AssignmentCard>
        ))}
      </AssignmentsList>
      
      {filteredAssignments.length === 0 && (
        <NoAssignmentsMessage>
          <FiFileText size={40} />
          <h3>No assignments found</h3>
          <p>Try adjusting your search or filters to find assignments</p>
        </NoAssignmentsMessage>
      )}
    </AssignmentsContainer>
  );
};

const AssignmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const PageDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.shadows.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

const SearchIcon = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${props => props.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const FilterControls = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const CourseDropdown = styled.div`
  position: relative;
`;

const CourseSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.text.primary};
  background-color: ${props => props.theme.colors.background.secondary};
  min-width: 180px;
  justify-content: space-between;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const CourseDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`;

interface CourseOptionProps {
  $isSelected: boolean;
}

const CourseOption = styled.div<CourseOptionProps>`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.$isSelected ? props.theme.colors.primary : props.theme.colors.text.primary};
  background-color: ${props => props.$isSelected ? `${props.theme.colors.primary}10` : 'transparent'};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

interface TabButtonProps {
  $isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  background-color: ${props => {
    if (props.$isActive) {
      return props.children === 'All' ? '#4F46E5' : props.theme.colors.primary;
    }
    return 'transparent';
  }};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: 1px solid ${props => {
    if (props.$isActive) {
      return props.children === 'All' ? '#4F46E5' : props.theme.colors.primary;
    }
    return props.theme.colors.border.light;
  }};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => {
      if (props.$isActive) {
        return props.children === 'All' ? '#4338CA' : props.theme.colors.primary;
      }
      return props.theme.colors.background.hover;
    }};
  }
`;

const AssignmentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AssignmentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border.light};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const AssignmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CourseName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`;

interface StatusProps {
  $status: string;
}

const AssignmentStatus = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => getStatusColor(props.$status)};
  background-color: ${props => `${getStatusColor(props.$status)}15`};
`;

const StatusIndicator = styled.div<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => getStatusColor(props.$status)};
`;

const AssignmentTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const AssignmentDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.5;
`;

const AssignmentDates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${props => props.theme.colors.text.secondary};
`;

const AttachmentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const AttachmentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const AttachmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const AttachmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background-color: ${props => props.theme.colors.background.hover};
  border-radius: 6px;
  font-size: 13px;
  
  &:hover {
    background-color: ${props => `${props.theme.colors.primary}10`};
  }
`;

const AttachmentName = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.theme.colors.text.primary};
`;

const AttachmentSize = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const CompletedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const CompletedHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${props => props.theme.colors.text.secondary};
`;

interface GradeProps {
  $grade: number;
}

const GradeDisplay = styled.div<GradeProps>`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GradeLabel = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const GradeValue = styled.div<GradeProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${props => {
    if (props.$grade >= 90) return '#4caf50';
    if (props.$grade >= 80) return '#8bc34a';
    if (props.$grade >= 70) return '#ff9800';
    return '#f44336';
  }};
`;

const AssignmentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
`;

const ViewDetailsButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => `${props.theme.colors.primary}10`};
  }
`;

const ViewFeedbackButton = styled.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SubmitButton = styled.button<StatusProps>`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${props => props.$status === 'overdue' ? '#f44336' : '#4F46E5'};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.$status === 'overdue' ? '#d32f2f' : '#4338CA'};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NoAssignmentsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  
  h3 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export default Assignments; 