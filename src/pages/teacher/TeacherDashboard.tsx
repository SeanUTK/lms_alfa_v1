import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiBook, FiUsers, FiClipboard, FiCheckSquare, 
  FiCalendar, FiBarChart2, FiClock, FiMessageSquare 
} from 'react-icons/fi';
import StatCard from '../../components/admin/StatCard';
import { useAuth } from '../../contexts/AuthContext';

const TeacherDashboard: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month'>('week');
  const { user } = useAuth();

  // Sample data - in a real app this would come from an API
  const dashboardStats = [
    { id: 1, title: 'My Courses', value: 5, change: '+1', icon: <FiBook />, color: 'primary' },
    { id: 2, title: 'Students', value: 87, change: '+3', icon: <FiUsers />, color: 'green' },
    { id: 3, title: 'Assignments', value: 12, change: '+2', icon: <FiClipboard />, color: 'yellow' },
    { id: 4, title: 'Messages', value: 8, change: '+5', icon: <FiMessageSquare />, color: 'purple' },
  ];

  const upcomingClasses = [
    { id: 1, subject: 'Mathematics', class: '10-A', time: '09:00 AM', duration: '1 hour', room: 'Room 101' },
    { id: 2, subject: 'Physics', class: '11-B', time: '11:30 AM', duration: '1 hour', room: 'Lab 3' },
    { id: 3, subject: 'Chemistry', class: '12-C', time: '02:15 PM', duration: '1 hour', room: 'Lab 2' },
  ];

  const pendingAssignments = [
    { id: 1, title: 'Algebra Quiz', class: '10-A', dueDate: 'Tomorrow', submissions: '15/24' },
    { id: 2, title: 'Physics Lab Report', class: '11-B', dueDate: 'In 2 days', submissions: '8/20' },
    { id: 3, title: 'Chemistry Homework', class: '12-C', dueDate: 'In 3 days', submissions: '12/22' },
  ];

  const recentGrades = [
    { id: 1, title: 'Mathematics Mid-term', class: '10-A', avgScore: '78%', completed: '24/24' },
    { id: 2, title: 'Physics Quiz', class: '11-B', avgScore: '82%', completed: '18/20' },
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
          <h1>Welcome back, {user?.fullName || 'Teacher'}</h1>
          <p>Here's what's happening with your classes today</p>
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
            <StatCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              color={stat.color as any}
            />
          </motion.div>
        ))}
      </StatsGrid>

      {/* Main Content Grid */}
      <DashboardGrid>
        {/* Today's Schedule */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <SectionHeader>
            <SectionTitle>Today's Schedule</SectionTitle>
            <ViewAllButton as={Link} to="/teacher/schedule">View All <FiCalendar /></ViewAllButton>
          </SectionHeader>
          <ScheduleCard>
            {upcomingClasses.map((classItem) => (
              <ScheduleItem key={classItem.id}>
                <ScheduleTime>
                  <TimeIcon><FiClock /></TimeIcon>
                  <TimeText>{classItem.time}</TimeText>
                  <Duration>{classItem.duration}</Duration>
                </ScheduleTime>
                <ScheduleDetails>
                  <SubjectName>{classItem.subject}</SubjectName>
                  <ClassDetails>
                    Class {classItem.class} • {classItem.room}
                  </ClassDetails>
                </ScheduleDetails>
              </ScheduleItem>
            ))}
          </ScheduleCard>
        </GridItem>

        {/* Pending Assignments */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <SectionHeader>
            <SectionTitle>Pending Assignments</SectionTitle>
            <ViewAllButton>View All <FiClipboard /></ViewAllButton>
          </SectionHeader>
          <AssignmentsCard>
            {pendingAssignments.map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <div>
                  <AssignmentTitle>{assignment.title}</AssignmentTitle>
                  <AssignmentClass>Class {assignment.class}</AssignmentClass>
                </div>
                <AssignmentInfo>
                  <AssignmentDue>Due: {assignment.dueDate}</AssignmentDue>
                  <AssignmentSubmissions>Submissions: {assignment.submissions}</AssignmentSubmissions>
                </AssignmentInfo>
              </AssignmentItem>
            ))}
          </AssignmentsCard>
        </GridItem>

        {/* Recent Grades */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <SectionHeader>
            <SectionTitle>Recent Grades</SectionTitle>
            <ViewAllButton>View All <FiCheckSquare /></ViewAllButton>
          </SectionHeader>
          <GradesCard>
            {recentGrades.map((grade) => (
              <GradeItem key={grade.id}>
                <div>
                  <GradeTitle>{grade.title}</GradeTitle>
                  <GradeClass>Class {grade.class}</GradeClass>
                </div>
                <GradeInfo>
                  <GradeScore>Avg. Score: {grade.avgScore}</GradeScore>
                  <GradeCompletion>Completed: {grade.completed}</GradeCompletion>
                </GradeInfo>
              </GradeItem>
            ))}
          </GradesCard>
        </GridItem>

        {/* Performance Overview */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>Class Performance</SectionTitle>
            <ViewAllButton>Details <FiBarChart2 /></ViewAllButton>
          </SectionHeader>
          <PerformanceCard>
            <PerformanceItem>
              <PerformanceLabel>Class 10-A</PerformanceLabel>
              <PerformanceBar>
                <PerformanceProgress $percentage={78} />
              </PerformanceBar>
              <PerformanceValue>78%</PerformanceValue>
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceLabel>Class 11-B</PerformanceLabel>
              <PerformanceBar>
                <PerformanceProgress $percentage={82} />
              </PerformanceBar>
              <PerformanceValue>82%</PerformanceValue>
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceLabel>Class 12-C</PerformanceLabel>
              <PerformanceBar>
                <PerformanceProgress $percentage={75} />
              </PerformanceBar>
              <PerformanceValue>75%</PerformanceValue>
            </PerformanceItem>
          </PerformanceCard>
        </GridItem>
      </DashboardGrid>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 1rem 0;
`;

const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const WelcomeMessage = styled.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    color: ${props => props.theme.colors.text.primary};
  }
  
  p {
    margin: 0.5rem 0 0;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const TimePeriodSelector = styled.div`
  display: flex;
  background: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 0.25rem;
`;

interface TimePeriodButtonProps {
  $isActive: boolean;
}

const TimePeriodButton = styled.button<TimePeriodButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.$isActive 
    ? props.theme.colors.background.primary 
    : 'transparent'
  };
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.$isActive 
    ? props.theme.colors.text.primary 
    : props.theme.colors.text.secondary
  };
  font-weight: ${props => props.$isActive ? '500' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$isActive ? props.theme.shadows.sm : 'none'};
  
  &:hover {
    color: ${props => props.theme.colors.text.primary};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors.text.primary};
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.primary[500]};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
  svg {
    font-size: 1rem;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const ScheduleCard = styled.div`
  padding: 1rem 1.5rem;
`;

const ScheduleItem = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ScheduleTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  margin-right: 1rem;
`;

const TimeIcon = styled.div`
  color: ${props => props.theme.colors.primary[500]};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TimeText = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const Duration = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.tertiary};
`;

const ScheduleDetails = styled.div`
  flex: 1;
`;

const SubjectName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

const ClassDetails = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const AssignmentsCard = styled.div`
  padding: 1rem 1.5rem;
`;

const AssignmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const AssignmentTitle = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

const AssignmentClass = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const AssignmentInfo = styled.div`
  text-align: right;
`;

const AssignmentDue = styled.div`
  color: ${props => props.theme.colors.warning[500]};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const AssignmentSubmissions = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const GradesCard = styled.div`
  padding: 1rem 1.5rem;
`;

const GradeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const GradeTitle = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

const GradeClass = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const GradeInfo = styled.div`
  text-align: right;
`;

const GradeScore = styled.div`
  color: ${props => props.theme.colors.success[500]};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const GradeCompletion = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const PerformanceCard = styled.div`
  padding: 1.5rem;
`;

const PerformanceItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PerformanceLabel = styled.div`
  min-width: 80px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const PerformanceBar = styled.div`
  flex: 1;
  height: 8px;
  background-color: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.full};
  margin: 0 1rem;
  overflow: hidden;
`;

interface PerformanceProgressProps {
  $percentage: number;
}

const PerformanceProgress = styled.div<PerformanceProgressProps>`
  height: 100%;
  width: ${props => props.$percentage}%;
  background-color: ${props => {
    if (props.$percentage >= 80) return props.theme.colors.success[500];
    if (props.$percentage >= 70) return props.theme.colors.warning[500];
    return props.theme.colors.danger[500];
  }};
  border-radius: ${props => props.theme.borderRadius.full};
`;

const PerformanceValue = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  min-width: 40px;
  text-align: right;
`;

export default TeacherDashboard; 