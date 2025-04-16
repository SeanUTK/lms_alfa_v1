import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiBook, FiSearch, FiUser, FiClock, FiAward, FiChevronRight, FiCpu } from 'react-icons/fi';

const MyCourses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data - would normally come from API
  const courses = [
    { 
      id: 1, 
      name: 'Mathematics', 
      teacher: 'Dr. Smith', 
      progress: 75, 
      nextClass: 'Tomorrow, 9:00 AM',
      description: 'Advanced algebra and calculus concepts for college preparation.',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      creditHours: 4,
      materials: 12,
      assignments: 8,
      status: 'active',
      color: 'primary'
    },
    { 
      id: 2, 
      name: 'Physics', 
      teacher: 'Prof. Johnson', 
      progress: 60, 
      nextClass: 'Thursday, 11:30 AM',
      description: 'Mechanics, thermodynamics, and introduction to electromagnetism.',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      creditHours: 4,
      materials: 15,
      assignments: 10,
      status: 'active',
      color: 'warning'
    },
    { 
      id: 3, 
      name: 'English Literature', 
      teacher: 'Mrs. Davis', 
      progress: 100, 
      nextClass: 'Completed',
      description: 'Analysis of classic and contemporary literary works with focus on critical thinking.',
      startDate: '2022-09-01',
      endDate: '2022-12-15',
      creditHours: 3,
      materials: 20,
      assignments: 6,
      status: 'completed',
      color: 'success'
    },
    { 
      id: 4, 
      name: 'Chemistry', 
      teacher: 'Dr. Wilson', 
      progress: 50, 
      nextClass: 'Friday, 10:15 AM',
      description: 'Fundamental principles of chemistry including atomic structure and chemical bonding.',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      creditHours: 4,
      materials: 18,
      assignments: 9,
      status: 'active',
      color: 'info'
    },
    { 
      id: 5, 
      name: 'World History', 
      teacher: 'Prof. Anderson', 
      progress: 100, 
      nextClass: 'Completed',
      description: 'Survey of major historical events and civilizations from ancient times to present day.',
      startDate: '2022-09-01',
      endDate: '2022-12-15',
      creditHours: 3,
      materials: 22,
      assignments: 7,
      status: 'completed',
      color: 'purple'
    },
    { 
      id: 6, 
      name: 'Computer Science', 
      teacher: 'Dr. Roberts', 
      progress: 0, 
      nextClass: 'Starts July 15',
      description: 'Introduction to programming concepts, algorithms, and data structures.',
      startDate: '2023-07-15',
      endDate: '2023-12-20',
      creditHours: 4,
      materials: 16,
      assignments: 12,
      status: 'upcoming',
      color: 'danger'
    },
    { 
      id: 7, 
      name: 'Introduction to Psychology', 
      teacher: 'Dr. Martinez', 
      progress: 0, 
      nextClass: 'Starts July 10',
      description: 'Exploration of human behavior, cognitive processes, and psychological theories.',
      startDate: '2023-07-10',
      endDate: '2023-12-18',
      creditHours: 3,
      materials: 14,
      assignments: 8,
      status: 'upcoming',
      color: 'purple'
    }
  ];

  // Filter courses based on active tab and search term
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') {
      return matchesSearch;
    } else {
      return matchesSearch && course.status === activeTab;
    }
  });

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'active': return 'In Progress';
      case 'completed': return 'Completed';
      case 'upcoming': return 'Upcoming';
      default: return status;
    }
  };

  return (
    <PageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <HeaderContent>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <PageTitle>My Courses</PageTitle>
            <PageDescription>View and manage your enrolled courses</PageDescription>
          </motion.div>
        </HeaderContent>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <FilterSection>
            <SearchContainer>
              <SearchIcon>
                <FiSearch />
              </SearchIcon>
              <SearchInput 
                type="text" 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>
          </FilterSection>
        </motion.div>
      </PageHeader>

      <TabsContainer>
        <TabButton 
          $isActive={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          All Courses
        </TabButton>
        <TabButton 
          $isActive={activeTab === 'active'} 
          onClick={() => setActiveTab('active')}
        >
          In Progress
        </TabButton>
        <TabButton 
          $isActive={activeTab === 'completed'} 
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </TabButton>
        <TabButton 
          $isActive={activeTab === 'upcoming'} 
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </TabButton>
      </TabsContainer>

      <ResultCount>
        Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
      </ResultCount>

      <CourseGrid>
        {filteredCourses.map((course, index) => (
          <CourseCard 
            key={course.id} 
            as={motion.div} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.2 }
            }}
          >
            <CourseCardTop $color={course.color}>
              <CourseStatus $status={course.status}>
                {getStatusLabel(course.status)}
              </CourseStatus>
              <CourseName>{course.name}</CourseName>
              <CourseDescription>{course.description}</CourseDescription>
            </CourseCardTop>
            
            <CourseCardBody>
              <CourseTeacher>
                <TeacherAvatar>
                  <FiUser />
                </TeacherAvatar>
                <span>{course.teacher}</span>
              </CourseTeacher>
              
              {course.status !== 'upcoming' && (
                <ProgressSection>
                  <ProgressLabel>Progress</ProgressLabel>
                  <ProgressBar>
                    <ProgressFill $progress={course.progress} $status={course.status} />
                  </ProgressBar>
                  <ProgressValue>{course.progress}%</ProgressValue>
                </ProgressSection>
              )}
              
              <CourseStats>
                <StatItem>
                  <StatIcon $color={course.color}><FiBook /></StatIcon>
                  <StatDetails>
                    <StatValue>{course.materials}</StatValue>
                    <StatLabel>Materials</StatLabel>
                  </StatDetails>
                </StatItem>
                <StatItem>
                  <StatIcon $color={course.color}><FiCpu /></StatIcon>
                  <StatDetails>
                    <StatValue>{course.creditHours}</StatValue>
                    <StatLabel>Credits</StatLabel>
                  </StatDetails>
                </StatItem>
                <StatItem>
                  <StatIcon $color={course.color}><FiAward /></StatIcon>
                  <StatDetails>
                    <StatValue>{course.assignments}</StatValue>
                    <StatLabel>Assignments</StatLabel>
                  </StatDetails>
                </StatItem>
              </CourseStats>
              
              <CourseFooter>
                <NextClassInfo>
                  <FiClock size={14} />
                  <span>{course.nextClass}</span>
                </NextClassInfo>
                
                <ViewCourseButton to={`/student/courses/${course.id}`}>
                  View Course
                  <FiChevronRight size={16} />
                </ViewCourseButton>
              </CourseFooter>
            </CourseCardBody>
          </CourseCard>
        ))}
      </CourseGrid>
      
      {filteredCourses.length === 0 && (
        <EmptyState>
          <EmptyIcon>
            <FiBook size={48} />
          </EmptyIcon>
          <EmptyTitle>No courses found</EmptyTitle>
          <EmptyDescription>
            {searchTerm 
              ? `No courses match your search "${searchTerm}"`
              : `No ${activeTab !== 'all' ? activeTab : ''} courses available`
            }
          </EmptyDescription>
        </EmptyState>
      )}
    </PageContainer>
  );
};

interface TabButtonProps {
  $isActive: boolean;
}

interface ProgressProps {
  $progress: number;
  $status?: string;
}

interface StatusProps {
  $status: string;
}

interface ColorProps {
  $color: string;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
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
  align-items: center;
  gap: 16px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 280px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.tertiary};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 36px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.2s ease;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    overflow-x: auto;
    padding-bottom: 8px;
    width: 100%;
    
    &::-webkit-scrollbar {
      height: 3px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.background.light};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.primary[200]};
      border-radius: 4px;
    }
  }
`;

const TabButton = styled.button<TabButtonProps>`
  background-color: ${props => props.$isActive ? props.theme.colors.primary[500] : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: 1px solid ${props => props.$isActive ? props.theme.colors.primary[500] : props.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => {
      if (props.$isActive) {
        return props.theme.colors.primary[600];
      }
      return props.theme.colors.background.hover;
    }};
  }
`;

const ResultCount = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: -8px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  transition: all 0.3s ease;
  height: 100%;
`;

const CourseCardTop = styled.div<ColorProps>`
  padding: 20px;
  position: relative;
  
  ${props => {
    switch(props.$color) {
      case 'primary':
        return `
          background: linear-gradient(135deg, ${props.theme.colors.primary[400]}, ${props.theme.colors.primary[500]});
          color: white;
        `;
      case 'warning':
        return `
          background: linear-gradient(135deg, ${props.theme.colors.warning[400]}, ${props.theme.colors.warning[500]});
          color: white;
        `;
      case 'success':
        return `
          background: linear-gradient(135deg, ${props.theme.colors.success[400]}, ${props.theme.colors.success[500]});
          color: white;
        `;
      case 'danger':
        return `
          background: linear-gradient(135deg, ${props.theme.colors.danger[400]}, ${props.theme.colors.danger[500]});
          color: white;
        `;
      case 'purple':
        return `
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          color: white;
        `;
      case 'info':
        return `
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: white;
        `;
      default:
        return `
          background: linear-gradient(135deg, ${props.theme.colors.primary[400]}, ${props.theme.colors.primary[500]});
          color: white;
        `;
    }
  }}
`;

const CourseStatus = styled.div<StatusProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => {
    switch(props.$status) {
      case 'active':
        return `
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        `;
      case 'completed':
        return `
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        `;
      case 'upcoming':
        return `
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        `;
      default:
        return `
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        `;
    }
  }}
`;

const CourseName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
`;

const CourseDescription = styled.p`
  font-size: 13px;
  opacity: 0.9;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CourseCardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const CourseTeacher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

const TeacherAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.primary};
`;

const ProgressSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProgressLabel = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colors.text.secondary};
  width: 60px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background-color: ${props => props.theme.colors.background.light};
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div<ProgressProps>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => {
    if (props.$status === 'completed') return props.theme.colors.success[500];
    if (props.$progress >= 80) return props.theme.colors.success[500];
    if (props.$progress >= 60) return props.theme.colors.primary[500];
    if (props.$progress >= 40) return props.theme.colors.warning[500];
    return props.theme.colors.warning[500];
  }};
  border-radius: 3px;
  transition: width 1s ease-in-out;
`;

const ProgressValue = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  width: 40px;
  text-align: right;
`;

const CourseStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatIcon = styled.div<ColorProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  
  ${props => {
    switch(props.$color) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
      case 'warning':
        return `
          background-color: ${props.theme.colors.warning[50]};
          color: ${props.theme.colors.warning[500]};
        `;
      case 'success':
        return `
          background-color: ${props.theme.colors.success[50]};
          color: ${props.theme.colors.success[500]};
        `;
      case 'danger':
        return `
          background-color: ${props.theme.colors.danger[50]};
          color: ${props.theme.colors.danger[500]};
        `;
      case 'purple':
        return `
          background-color: #f3e8ff;
          color: #7c3aed;
        `;
      case 'info':
        return `
          background-color: #e0f7ff;
          color: #0ea5e9;
        `;
      default:
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
    }
  }}
`;

const StatDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
`;

const NextClassInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ViewCourseButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  background-color: ${props => props.theme.colors.primary[50]};
  color: ${props => props.theme.colors.primary[500]};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[100]};
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 16px;
  text-align: center;
`;

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 8px;
`;

const EmptyDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
  max-width: 400px;
`;

export default MyCourses; 