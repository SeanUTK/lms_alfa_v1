import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, FiClock, FiBook, 
  FiFileText, FiAward, FiTrendingUp
} from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const StudentDashboard: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month'>('week');
  const { user } = useAuth();

  // Mock data - would normally come from API
  const upcomingAssignments = [
    { id: 1, title: 'Math Quiz: Algebra Basics', dueDate: '2023-04-20', subject: 'Mathematics', status: 'pending' },
    { id: 2, title: 'Physics Lab Report', dueDate: '2023-04-22', subject: 'Physics', status: 'pending' },
    { id: 3, title: 'Literature Essay', dueDate: '2023-04-25', subject: 'English', status: 'in-progress' },
  ];

  const recentGrades = [
    { id: 1, title: 'Chemistry Test', grade: 92, subject: 'Chemistry', date: '2023-04-10' },
    { id: 2, title: 'History Essay', grade: 88, subject: 'History', date: '2023-04-05' },
    { id: 3, title: 'Biology Quiz', grade: 95, subject: 'Biology', date: '2023-04-02' },
  ];

  const enrolledCourses = [
    { id: 1, name: 'Mathematics', progress: 75, teacher: 'Dr. Smith', nextClass: 'Tomorrow, 9:00 AM' },
    { id: 2, name: 'Physics', progress: 60, teacher: 'Prof. Johnson', nextClass: 'Thursday, 11:30 AM' },
    { id: 3, name: 'English Literature', progress: 85, teacher: 'Mrs. Davis', nextClass: 'Wednesday, 1:00 PM' },
  ];

  const upcomingLessons = [
    { id: 1, title: 'Introduction to Calculus', subject: 'Mathematics', time: '9:00 AM', duration: '1 hour', room: 'Room 101' },
    { id: 2, title: 'Wave Mechanics', subject: 'Physics', time: '11:30 AM', duration: '1 hour', room: 'Lab 3' },
  ];

  const dashboardStats = [
    { id: 1, title: 'Courses', value: enrolledCourses.length, icon: <FiBook />, color: 'primary' },
    { id: 2, title: 'Assignments', value: upcomingAssignments.length, icon: <FiFileText />, color: 'yellow' },
    { id: 3, title: 'Average Grade', value: '91%', icon: <FiAward />, color: 'green' },
    { id: 4, title: 'Progress', value: '68%', icon: <FiTrendingUp />, color: 'purple' },
  ];

  return (
    <DashboardContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <WelcomeSection>
        <WelcomeMessage>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Welcome back, {user?.fullName || 'Student'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Here's an overview of your academic progress
          </motion.p>
        </WelcomeMessage>
        <TimePeriodSelector>
          <TimePeriodButton
            $isActive={timePeriod === 'today'}
            onClick={() => setTimePeriod('today')}
          >
            Today
          </TimePeriodButton>
          <TimePeriodButton
            $isActive={timePeriod === 'week'}
            onClick={() => setTimePeriod('week')}
          >
            This Week
          </TimePeriodButton>
          <TimePeriodButton
            $isActive={timePeriod === 'month'}
            onClick={() => setTimePeriod('month')}
          >
            This Month
          </TimePeriodButton>
        </TimePeriodSelector>
      </WelcomeSection>

      {/* Stats Overview */}
      <StatsGrid>
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <StatCard>
              <StatIconContainer $color={stat.color}>
                {stat.icon}
              </StatIconContainer>
              <StatContent>
                <StatValue>{stat.value}</StatValue>
                <StatTitle>{stat.title}</StatTitle>
              </StatContent>
            </StatCard>
          </motion.div>
        ))}
      </StatsGrid>

      {/* Main Content Grid */}
      <DashboardGrid>
        {/* Upcoming Assignments */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <SectionHeader>
            <SectionTitle>
              <FiFileText />
              <span>Upcoming Assignments</span>
            </SectionTitle>
            <ViewAllButton as={Link} to="/student/assignments">
              View All
            </ViewAllButton>
          </SectionHeader>
          <ContentCard>
            {upcomingAssignments.map((assignment, index) => (
              <AssignmentItem 
                key={assignment.id}
                as={motion.div}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AssignmentHeader>
                  <SubjectBadge $subject={assignment.subject}>{assignment.subject}</SubjectBadge>
                  <AssignmentStatus $status={assignment.status}>
                    {assignment.status === 'pending' ? 'Pending' : 'In Progress'}
                  </AssignmentStatus>
                </AssignmentHeader>
                <AssignmentTitle>{assignment.title}</AssignmentTitle>
                <AssignmentDueDate>
                  <FiClock size={14} />
                  <span>Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </AssignmentDueDate>
              </AssignmentItem>
            ))}
          </ContentCard>
        </GridItem>

        {/* Today's Schedule */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <SectionHeader>
            <SectionTitle>
              <FiCalendar />
              <span>Today's Schedule</span>
            </SectionTitle>
            <ViewAllButton as={Link} to="/student/schedule">
              View Calendar
            </ViewAllButton>
          </SectionHeader>
          <ContentCard>
            {upcomingLessons.map((lesson, index) => (
              <ScheduleItem 
                key={lesson.id}
                as={motion.div}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <ScheduleTime>
                  <TimeIcon><FiClock /></TimeIcon>
                  <TimeText>{lesson.time}</TimeText>
                  <Duration>{lesson.duration}</Duration>
                </ScheduleTime>
                <ScheduleDetails>
                  <LessonTitle>{lesson.title}</LessonTitle>
                  <LessonDetails>
                    {lesson.subject} • {lesson.room}
                  </LessonDetails>
                </ScheduleDetails>
              </ScheduleItem>
            ))}
          </ContentCard>
        </GridItem>

        {/* Recent Grades */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <SectionHeader>
            <SectionTitle>
              <FiAward />
              <span>Recent Grades</span>
            </SectionTitle>
            <ViewAllButton>View All</ViewAllButton>
          </SectionHeader>
          <ContentCard>
            {recentGrades.map((grade, index) => (
              <GradeItem 
                key={grade.id}
                as={motion.div}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <GradeInfo>
                  <GradeTitle>{grade.title}</GradeTitle>
                  <GradeSubject>{grade.subject} • {new Date(grade.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</GradeSubject>
                </GradeInfo>
                <GradeValue $grade={grade.grade}>{grade.grade}%</GradeValue>
              </GradeItem>
            ))}
          </ContentCard>
        </GridItem>

        {/* Courses */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>
              <FiBook />
              <span>My Courses</span>
            </SectionTitle>
            <ViewAllButton as={Link} to="/student/courses">View All</ViewAllButton>
          </SectionHeader>
          <ContentCard>
            {enrolledCourses.map((course, index) => (
              <CourseItem 
                key={course.id}
                as={motion.div}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <CourseContent>
                  <CourseHeader>
                    <CourseName>{course.name}</CourseName>
                    <CourseProgress>{course.progress}%</CourseProgress>
                  </CourseHeader>
                  <CourseTeacher>{course.teacher}</CourseTeacher>
                  <ProgressBarContainer>
                    <ProgressBar $progress={course.progress} />
                  </ProgressBarContainer>
                  <CourseNextClass>
                    <FiCalendar size={12} />
                    <span>{course.nextClass}</span>
                  </CourseNextClass>
                </CourseContent>
              </CourseItem>
            ))}
          </ContentCard>
        </GridItem>
      </DashboardGrid>
    </DashboardContainer>
  );
};

interface TimePeriodButtonProps {
  $isActive: boolean;
}

interface SubjectBadgeProps {
  $subject: string;
}

interface StatusProps {
  $status: string;
}

interface ProgressBarProps {
  $progress: number;
}

interface GradeValueProps {
  $grade: number;
}

interface StatIconProps {
  $color: string;
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const WelcomeMessage = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.primary};
    margin: 0;
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.text.secondary};
    margin: 4px 0 0 0;
  }
`;

const TimePeriodSelector = styled.div`
  display: flex;
  gap: 8px;
`;

const TimePeriodButton = styled.button<TimePeriodButtonProps>`
  background-color: ${props => props.$isActive ? props.theme.colors.primary[500] : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: 1px solid ${props => props.$isActive ? props.theme.colors.primary[500] : props.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => {
      if (props.$isActive) {
        return props.theme.colors.primary[600];
      }
      return props.theme.colors.background.hover;
    }};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme.colors.border.light};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StatIconContainer = styled.div<StatIconProps>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  
  ${props => {
    switch(props.$color) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
      case 'green':
        return `
          background-color: ${props.theme.colors.success[50]};
          color: ${props.theme.colors.success[500]};
        `;
      case 'yellow':
        return `
          background-color: ${props.theme.colors.warning[50]};
          color: ${props.theme.colors.warning[500]};
        `;
      case 'purple':
        return `
          background-color: #f0e7ff;
          color: #6941c6;
        `;
      default:
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
    }
  }}
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
`;

const StatTitle = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${props => props.theme.colors.primary[500]};
  }
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.primary[500]};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContentCard = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid ${props => props.theme.colors.border.light};
  height: 100%;
`;

const AssignmentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.secondary};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const AssignmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubjectBadge = styled.div<SubjectBadgeProps>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  
  ${props => {
    switch(props.$subject) {
      case 'Mathematics':
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
      case 'Physics':
        return `
          background-color: ${props.theme.colors.warning[50]};
          color: ${props.theme.colors.warning[500]};
        `;
      case 'English':
        return `
          background-color: ${props.theme.colors.success[50]};
          color: ${props.theme.colors.success[500]};
        `;
      case 'Chemistry':
        return `
          background-color: #e9f9fd;
          color: #0ea5e9;
        `;
      case 'Biology':
        return `
          background-color: #edf7ed;
          color: #16a34a;
        `;
      case 'History':
        return `
          background-color: #f0e7ff;
          color: #6941c6;
        `;
      default:
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
    }
  }}
`;

const AssignmentStatus = styled.div<StatusProps>`
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  
  ${props => {
    switch(props.$status) {
      case 'pending':
        return `
          background-color: ${props.theme.colors.warning[50]};
          color: ${props.theme.colors.warning[500]};
        `;
      case 'in-progress':
        return `
          background-color: ${props.theme.colors.primary[50]};
          color: ${props.theme.colors.primary[500]};
        `;
      case 'completed':
        return `
          background-color: ${props.theme.colors.success[50]};
          color: ${props.theme.colors.success[500]};
        `;
      default:
        return `
          background-color: ${props.theme.colors.warning[50]};
          color: ${props.theme.colors.warning[500]};
        `;
    }
  }}
`;

const AssignmentTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const AssignmentDueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const GradeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.secondary};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const GradeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GradeTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const GradeSubject = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const GradeValue = styled.div<GradeValueProps>`
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  
  ${props => {
    if (props.$grade >= 90) {
      return `
        background-color: ${props.theme.colors.success[50]};
        color: ${props.theme.colors.success[500]};
      `;
    } else if (props.$grade >= 80) {
      return `
        background-color: ${props.theme.colors.primary[50]};
        color: ${props.theme.colors.primary[500]};
      `;
    } else if (props.$grade >= 70) {
      return `
        background-color: ${props.theme.colors.warning[50]};
        color: ${props.theme.colors.warning[500]};
      `;
    } else {
      return `
        background-color: ${props.theme.colors.danger[50]};
        color: ${props.theme.colors.danger[500]};
      `;
    }
  }}
`;

const CourseItem = styled.div`
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.secondary};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CourseName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const CourseProgress = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
`;

const CourseTeacher = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${props => props.theme.colors.background.light};
  border-radius: 3px;
  overflow: hidden;
  margin: 4px 0;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => {
    if (props.$progress >= 80) return props.theme.colors.success[500];
    if (props.$progress >= 60) return props.theme.colors.primary[500];
    if (props.$progress >= 40) return props.theme.colors.warning[500];
    return props.theme.colors.danger[500];
  }};
  border-radius: 3px;
  transition: width 1s ease-in-out;
`;

const CourseNextClass = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ScheduleItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.secondary};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const ScheduleTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

const TimeIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary[50]};
  color: ${props => props.theme.colors.primary[500]};
  margin-bottom: 4px;
`;

const TimeText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const Duration = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ScheduleDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LessonTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const LessonDetails = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

export default StudentDashboard; 