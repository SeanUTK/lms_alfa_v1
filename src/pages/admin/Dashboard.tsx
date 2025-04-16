import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUsers, FiBook, FiBriefcase, FiCalendar, 
  FiAward, FiPieChart, FiRefreshCw, FiClock, 
  FiBarChart2, FiCheckCircle, FiAlertCircle, 
  FiHelpCircle, FiCpu, FiDatabase,
  FiBell, FiClipboard, FiStar, FiUserCheck, FiUserX, FiInfo
} from 'react-icons/fi';
import { DefaultTheme } from 'styled-components';
import StatCard from '../../components/admin/StatCard';

const Dashboard: React.FC = () => {
  // State for time period selector
  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month'>('week');
  // State for refresh animation
  const [isRefreshing, setIsRefreshing] = useState(false);
  // State for selected statistics view
  const [statsView, setStatsView] = useState<'overview' | 'students' | 'courses' | 'system'>('overview');

  // Sample data - this would come from an API in a real application
  const overviewStats = [
    { id: 1, title: 'Total Users', value: 356, change: '+12%', icon: <FiUsers />, color: 'primary' },
    { id: 2, title: 'Active Classes', value: 24, change: '+5%', icon: <FiBriefcase />, color: 'green' },
    { id: 3, title: 'Subjects', value: 48, change: '+3%', icon: <FiBook />, color: 'yellow' },
    { id: 4, title: 'Upcoming Events', value: 12, change: '+7%', icon: <FiCalendar />, color: 'purple' },
  ];
  
  const studentStats = [
    { id: 5, title: 'Active Students', value: 256, change: '+8%', icon: <FiUserCheck />, color: 'primary' },
    { id: 6, title: 'Inactive Students', value: 32, change: '-5%', icon: <FiUserX />, color: 'red' },
    { id: 7, title: 'Avg. Attendance', value: '87%', change: '+2%', icon: <FiCheckCircle />, color: 'green' },
    { id: 8, title: 'Top Performers', value: 42, change: '+15%', icon: <FiStar />, color: 'yellow' },
  ];

  const courseStats = [
    { id: 9, title: 'Course Completion', value: '76%', change: '+4%', icon: <FiBarChart2 />, color: 'primary' },
    { id: 10, title: 'Assignments', value: 128, change: '+12%', icon: <FiClipboard />, color: 'yellow' },
    { id: 11, title: 'Avg. Score', value: '82%', change: '+3%', icon: <FiAward />, color: 'green' },
    { id: 12, title: 'Learning Hours', value: '1,240', change: '+18%', icon: <FiClock />, color: 'purple' },
  ];

  const systemStats = [
    { id: 13, title: 'System Health', value: '98%', change: '+1%', icon: <FiCpu />, color: 'green' },
    { id: 14, title: 'Storage Used', value: '68%', change: '+7%', icon: <FiDatabase />, color: 'yellow' },
    { id: 15, title: 'Notifications', value: 18, change: '+5%', icon: <FiBell />, color: 'primary' },
    { id: 16, title: 'Support Tickets', value: 7, change: '-2%', icon: <FiHelpCircle />, color: 'purple' },
  ];

  // Choose which stats to display based on the selected view
  const getActiveStats = () => {
    switch(statsView) {
      case 'students': return studentStats;
      case 'courses': return courseStats;
      case 'system': return systemStats;
      default: return overviewStats;
    }
  };

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'created a new class', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'added 5 new students', time: '3 hours ago' },
    { id: 3, user: 'Robert Johnson', action: 'updated Biology curriculum', time: '5 hours ago' },
    { id: 4, user: 'Emily Davis', action: 'scheduled a new event', time: '1 day ago' },
    { id: 5, user: 'Michael Wilson', action: 'created a new assessment', time: '1 day ago' },
  ];

  // Sample performance data
  const performanceData = [
    { subject: 'Mathematics', completion: 78 },
    { subject: 'Science', completion: 92 },
    { subject: 'Language', completion: 64 },
    { subject: 'History', completion: 85 },
  ];

  // New: Top performing students
  const topStudents = [
    { id: 1, name: 'Emma Johnson', grade: 'A+', performance: 98, subject: 'Mathematics' },
    { id: 2, name: 'Noah Williams', grade: 'A', performance: 95, subject: 'Science' },
    { id: 3, name: 'Olivia Brown', grade: 'A', performance: 93, subject: 'Literature' },
    { id: 4, name: 'Liam Davis', grade: 'A-', performance: 91, subject: 'History' },
  ];

  // New: Recent assessments
  const recentAssessments = [
    { id: 1, title: 'Mid-term Examination', date: '2023-06-15', participation: '95%', avgScore: '76%' },
    { id: 2, title: 'Biology Quiz', date: '2023-06-10', participation: '98%', avgScore: '82%' },
    { id: 3, title: 'Mathematics Test', date: '2023-06-08', participation: '92%', avgScore: '74%' },
    { id: 4, title: 'Literature Essay', date: '2023-06-05', participation: '88%', avgScore: '81%' },
  ];

  // New: Class attendance data
  const attendanceData = [
    { day: 'Monday', attendance: 94 },
    { day: 'Tuesday', attendance: 92 },
    { day: 'Wednesday', attendance: 88 },
    { day: 'Thursday', attendance: 91 },
    { day: 'Friday', attendance: 85 },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate data refresh with a timeout
    setTimeout(() => {
      setIsRefreshing(false);
      // Here you would typically fetch new data
    }, 1000);
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <div>
          <PageTitle>Dashboard</PageTitle>
          <WelcomeMessage>Welcome back, Admin User!</WelcomeMessage>
        </div>

        <HeaderControls>
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

          <RefreshButton onClick={handleRefresh} disabled={isRefreshing}>
            <AnimatePresence mode="wait">
              {isRefreshing ? (
                <motion.div
                  key="refreshing"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  exit={{ rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <FiRefreshCw />
                </motion.div>
              ) : (
                <motion.div key="refresh">
                  <FiRefreshCw />
                </motion.div>
              )}
            </AnimatePresence>
            <span>Refresh</span>
          </RefreshButton>
        </HeaderControls>
      </DashboardHeader>

      {/* New: Stats View Selector */}
      <StatsViewSelector>
        <StatsViewButton 
          $isActive={statsView === 'overview'} 
          onClick={() => setStatsView('overview')}
        >
          Overview
        </StatsViewButton>
        <StatsViewButton 
          $isActive={statsView === 'students'} 
          onClick={() => setStatsView('students')}
        >
          Students
        </StatsViewButton>
        <StatsViewButton 
          $isActive={statsView === 'courses'} 
          onClick={() => setStatsView('courses')}
        >
          Courses
        </StatsViewButton>
        <StatsViewButton 
          $isActive={statsView === 'system'} 
          onClick={() => setStatsView('system')}
        >
          System
        </StatsViewButton>
      </StatsViewSelector>

      <StatsGrid>
        {getActiveStats().map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <StatCard
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              color={stat.color as ColorType}
            />
          </motion.div>
        ))}
      </StatsGrid>

      <DashboardGrid>
        {/* Recent Activities */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <SectionHeader>
            <SectionTitle>Recent Activities</SectionTitle>
            <ViewAllButton>View All <FiClock /></ViewAllButton>
          </SectionHeader>
          <ActivitiesCard>
            {recentActivities.map((activity, index) => (
              <ActivityItem 
                key={activity.id}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <ActivityDot />
                <ActivityContent>
                  <strong>{activity.user}</strong> {activity.action}
                  <ActivityTime>{activity.time}</ActivityTime>
                </ActivityContent>
              </ActivityItem>
            ))}
          </ActivitiesCard>
        </GridItem>

        {/* Performance Overview */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <SectionHeader>
            <SectionTitle>Course Performance</SectionTitle>
            <ViewAllButton>Details <FiPieChart /></ViewAllButton>
          </SectionHeader>
          <PerformanceCard>
            {performanceData.map((item, index) => (
              <PerformanceItem key={index}>
                <PerformanceLabel>{item.subject}</PerformanceLabel>
                <PerformanceBar>
                  <PerformanceProgress $percentage={item.completion} />
                </PerformanceBar>
                <PerformanceValue>{item.completion}%</PerformanceValue>
              </PerformanceItem>
            ))}
          </PerformanceCard>
        </GridItem>
      </DashboardGrid>

      {/* New: Additional Statistics Sections */}
      <DashboardGrid>
        {/* Top Students */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>Top Performing Students</SectionTitle>
            <ViewAllButton>View All <FiStar /></ViewAllButton>
          </SectionHeader>
          <TopStudentsCard>
            <StudentsTable>
              <thead>
                <tr>
                  <StudentTableHeader>Student</StudentTableHeader>
                  <StudentTableHeader>Subject</StudentTableHeader>
                  <StudentTableHeader>Grade</StudentTableHeader>
                  <StudentTableHeader>Performance</StudentTableHeader>
                </tr>
              </thead>
              <tbody>
                {topStudents.map((student) => (
                  <tr key={student.id}>
                    <StudentTableCell>{student.name}</StudentTableCell>
                    <StudentTableCell>{student.subject}</StudentTableCell>
                    <StudentTableCell>
                      <GradeBadge $grade={student.grade}>{student.grade}</GradeBadge>
                    </StudentTableCell>
                    <StudentTableCell>
                      <PerformanceBar small>
                        <PerformanceProgress $percentage={student.performance} />
                      </PerformanceBar>
                      <SmallPerformanceValue>{student.performance}%</SmallPerformanceValue>
                    </StudentTableCell>
                  </tr>
                ))}
              </tbody>
            </StudentsTable>
          </TopStudentsCard>
        </GridItem>

        {/* Recent Assessments */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <SectionHeader>
            <SectionTitle>Recent Assessments</SectionTitle>
            <ViewAllButton>View All <FiClipboard /></ViewAllButton>
          </SectionHeader>
          <AssessmentsCard>
            {recentAssessments.map((assessment) => (
              <AssessmentItem key={assessment.id}>
                <AssessmentHeader>
                  <AssessmentTitle>{assessment.title}</AssessmentTitle>
                  <AssessmentDate>{assessment.date}</AssessmentDate>
                </AssessmentHeader>
                <AssessmentStats>
                  <AssessmentStat>
                    <AssessmentStatLabel>Participation</AssessmentStatLabel>
                    <AssessmentStatValue>{assessment.participation}</AssessmentStatValue>
                  </AssessmentStat>
                  <AssessmentStat>
                    <AssessmentStatLabel>Average Score</AssessmentStatLabel>
                    <AssessmentStatValue>{assessment.avgScore}</AssessmentStatValue>
                  </AssessmentStat>
                </AssessmentStats>
              </AssessmentItem>
            ))}
          </AssessmentsCard>
        </GridItem>
      </DashboardGrid>

      <DashboardGrid>
        {/* Attendance Chart */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>Weekly Attendance</SectionTitle>
          </SectionHeader>
          <AttendanceCard>
            <AttendanceChartContainer>
              {attendanceData.map((day) => (
                <AttendanceBar key={day.day}>
                  <AttendanceBarFill $percentage={day.attendance} />
                  <AttendanceValue>{day.attendance}%</AttendanceValue>
                  <AttendanceDay>{day.day}</AttendanceDay>
                </AttendanceBar>
              ))}
            </AttendanceChartContainer>
            <AttendanceAverage>
              Weekly Average: 90%
            </AttendanceAverage>
          </AttendanceCard>
        </GridItem>

        {/* Quick Actions */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>Quick Actions</SectionTitle>
          </SectionHeader>
          <QuickActionsCard>
            <ActionButton $color="primary">
              <IconWrapper $color="primary">
                <UserIcon />
              </IconWrapper>
              <span>Add New User</span>
            </ActionButton>
            <ActionButton $color="green">
              <IconWrapper $color="green">
                <ClassIcon />
              </IconWrapper>
              <span>Create Class</span>
            </ActionButton>
            <ActionButton $color="yellow">
              <IconWrapper $color="yellow">
                <SubjectIcon />
              </IconWrapper>
              <span>Add Subject</span>
            </ActionButton>
            <ActionButton $color="purple">
              <IconWrapper $color="purple">
                <EventIcon />
              </IconWrapper>
              <span>Schedule Event</span>
            </ActionButton>
          </QuickActionsCard>
        </GridItem>
      </DashboardGrid>

      <DashboardGrid>
        {/* System Status */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <SectionHeader>
            <SectionTitle>System Status</SectionTitle>
            <LastUpdatedText>Last updated: 5 min ago</LastUpdatedText>
          </SectionHeader>
          <StatusCard>
            <StatusItem>
              <StatusLabel>System Version</StatusLabel>
              <StatusValue>v1.0.0</StatusValue>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Last Backup</StatusLabel>
              <StatusValue>Today at 03:00 AM</StatusValue>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Storage Used</StatusLabel>
              <StatusProgressWrapper>
                <StatusProgress $percentage={65} />
              </StatusProgressWrapper>
              <StatusValue>65% of 10GB</StatusValue>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Server Status</StatusLabel>
              <StatusBadge>
                <StatusDot $active={true} />
                <span>Operational</span>
              </StatusBadge>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Database Status</StatusLabel>
              <StatusBadge>
                <StatusDot $active={true} />
                <span>Connected</span>
              </StatusBadge>
            </StatusItem>
            <StatusItem>
              <StatusLabel>API Response Time</StatusLabel>
              <StatusValue>124ms</StatusValue>
            </StatusItem>
          </StatusCard>
        </GridItem>

        {/* Notifications Summary */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <SectionHeader>
            <SectionTitle>Notifications</SectionTitle>
            <ViewAllButton>View All <FiBell /></ViewAllButton>
          </SectionHeader>
          <NotificationsCard>
            <NotificationItem $type="info">
              <NotificationIcon $type="info">
                <FiInfo />
              </NotificationIcon>
              <NotificationContent>
                <NotificationMessage>System maintenance scheduled for Sunday, 2:00 AM</NotificationMessage>
                <NotificationTime>2 hours ago</NotificationTime>
              </NotificationContent>
            </NotificationItem>
            <NotificationItem $type="success">
              <NotificationIcon $type="success">
                <FiCheckCircle />
              </NotificationIcon>
              <NotificationContent>
                <NotificationMessage>Database backup completed successfully</NotificationMessage>
                <NotificationTime>6 hours ago</NotificationTime>
              </NotificationContent>
            </NotificationItem>
            <NotificationItem $type="warning">
              <NotificationIcon $type="warning">
                <FiAlertCircle />
              </NotificationIcon>
              <NotificationContent>
                <NotificationMessage>Storage space running low (25% remaining)</NotificationMessage>
                <NotificationTime>1 day ago</NotificationTime>
              </NotificationContent>
            </NotificationItem>
            <NotificationItem $type="info">
              <NotificationIcon $type="info">
                <FiInfo />
              </NotificationIcon>
              <NotificationContent>
                <NotificationMessage>5 new users registered this week</NotificationMessage>
                <NotificationTime>2 days ago</NotificationTime>
              </NotificationContent>
            </NotificationItem>
          </NotificationsCard>
        </GridItem>
      </DashboardGrid>
    </DashboardContainer>
  );
};

type ColorType = 'primary' | 'green' | 'yellow' | 'purple' | 'red';

const getColorValue = (color: ColorType, theme: DefaultTheme) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[600];
    case 'green':
      return theme.colors.success[500];
    case 'yellow':
      return theme.colors.warning[500];
    case 'purple':
      return theme.colors.purple[500];
    case 'red':
      return theme.colors.danger[500];
    default:
      return theme.colors.primary[600];
  }
};

const getColorLight = (color: ColorType, theme: DefaultTheme) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[50];
    case 'green':
      return theme.colors.success[50];
    case 'yellow':
      return theme.colors.warning[50];
    case 'purple':
      return theme.colors.purple[50];
    case 'red':
      return theme.colors.danger[50];
    default:
      return theme.colors.primary[50];
  }
};

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[6]};
  padding: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: ${props => props.theme.spacing[4]};
  }
`;

const DashboardHeader = styled.div`
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

const WelcomeMessage = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const TimePeriodSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
`;

interface ActiveButtonProps {
  $isActive: boolean;
}

const TimePeriodButton = styled.button<ActiveButtonProps>`
  background-color: ${props => props.$isActive ? props.theme.colors.primary[600] : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: none;
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.$isActive ? props.theme.colors.primary[700] : props.theme.colors.background.lighter};
    color: ${props => props.$isActive ? 'white' : props.theme.colors.text.primary};
  }
`;

// New styled component for stats view selector
const StatsViewSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing[4]};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.lg};
  background-color: ${props => props.theme.colors.background.lighter};
  overflow: hidden;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

const StatsViewButton = styled.button<ActiveButtonProps>`
  flex: 1;
  background-color: ${props => props.$isActive ? props.theme.colors.primary[600] : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: none;
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.$isActive ? props.theme.colors.primary[700] : props.theme.colors.background.light};
    color: ${props => props.$isActive ? 'white' : props.theme.colors.text.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-basis: 50%;
  }
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  background-color: ${props => props.theme.colors.background.light};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.lighter};
    color: ${props => props.theme.colors.text.primary};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

interface ColorProps {
  $color: ColorType;
}

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  border: 1px solid ${props => props.theme.colors.border.light};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => `${props.theme.spacing[4]} ${props.theme.spacing[5]}`};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  background: none;
  border: none;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primary[600]};
  cursor: pointer;
  transition: color ${props => props.theme.transition.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary[800]};
  }
`;

const LastUpdatedText = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const ActivitiesCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing[3]};
`;

const ActivityDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary[500]};
  margin-top: 6px;
`;

const ActivityContent = styled.div`
  flex: 1;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text.primary};
`;

const ActivityTime = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-top: ${props => props.theme.spacing[1]};
`;

const PerformanceCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
`;

const PerformanceItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[4]};
`;

const PerformanceLabel = styled.div`
  width: 100px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.primary};
`;

interface ProgressProps {
  $percentage: number;
  small?: boolean;
}

const PerformanceBar = styled.div<{ small?: boolean }>`
  flex: 1;
  height: ${props => props.small ? '8px' : '12px'};
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

const PerformanceProgress = styled.div<ProgressProps>`
  height: 100%;
  width: ${props => `${props.$percentage}%`};
  background-color: ${props => 
    props.$percentage > 80 ? props.theme.colors.success[500] :
    props.$percentage > 50 ? props.theme.colors.warning[500] :
    props.theme.colors.danger[500]
  };
  border-radius: ${props => props.theme.borderRadius.full};
`;

const PerformanceValue = styled.div`
  width: 50px;
  text-align: right;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const SmallPerformanceValue = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  margin-left: ${props => props.theme.spacing[2]};
`;

// New styled components for top students
const TopStudentsCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
`;

const StudentsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StudentTableHeader = styled.th`
  text-align: left;
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const StudentTableCell = styled.td`
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[3]}`};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.primary};
  border-bottom: 1px solid ${props => props.theme.colors.border.lighter};
`;

const GradeBadge = styled.span<{ $grade: string }>`
  display: inline-block;
  padding: ${props => `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => 
    props.$grade.startsWith('A') ? props.theme.colors.success[50] :
    props.$grade.startsWith('B') ? props.theme.colors.primary[50] :
    props.$grade.startsWith('C') ? props.theme.colors.warning[50] :
    props.theme.colors.danger[50]
  };
  color: ${props => 
    props.$grade.startsWith('A') ? props.theme.colors.success[700] :
    props.$grade.startsWith('B') ? props.theme.colors.primary[700] :
    props.$grade.startsWith('C') ? props.theme.colors.warning[700] :
    props.theme.colors.danger[700]
  };
`;

// New styled components for assessments
const AssessmentsCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
`;

const AssessmentItem = styled.div`
  padding: ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.background.primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

const AssessmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[2]};
`;

const AssessmentTitle = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text.primary};
`;

const AssessmentDate = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const AssessmentStats = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing[4]};
`;

const AssessmentStat = styled.div`
  flex: 1;
`;

const AssessmentStatLabel = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

const AssessmentStatValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

// New styled components for attendance chart
const AttendanceCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
`;

const AttendanceChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  margin-bottom: ${props => props.theme.spacing[4]};
`;

const AttendanceBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
`;

const AttendanceBarFill = styled.div<{ $percentage: number }>`
  width: 40px;
  height: ${props => `${props.$percentage * 1.5}px`};
  background-color: ${props => props.theme.colors.primary[500]};
  border-radius: ${props => props.theme.borderRadius.md} ${props => props.theme.borderRadius.md} 0 0;
  margin-bottom: ${props => props.theme.spacing[2]};
`;

const AttendanceValue = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

const AttendanceDay = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const AttendanceAverage = styled.div`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  padding-top: ${props => props.theme.spacing[2]};
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const QuickActionsCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ActionButton = styled.button<ColorProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => getColorLight(props.$color, props.theme)};
    border-color: ${props => getColorValue(props.$color, props.theme)};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

const IconWrapper = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => getColorLight(props.$color, props.theme)};
  color: ${props => getColorValue(props.$color, props.theme)};
  font-size: 1.2rem;
`;

const StatusCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[4]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

const StatusLabel = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const StatusValue = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const StatusProgressWrapper = styled.div`
  height: 6px;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
  margin: ${props => props.theme.spacing[1]} 0;
`;

const StatusProgress = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${props => `${props.$percentage}%`};
  background-color: ${props => 
    props.$percentage > 80 ? props.theme.colors.danger[500] :
    props.$percentage > 60 ? props.theme.colors.warning[500] :
    props.theme.colors.success[500]
  };
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.success[700]};
`;

interface StatusDotProps {
  $active: boolean;
}

const StatusDot = styled.div<StatusDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? props.theme.colors.success[500] : props.theme.colors.danger[500]};
`;

// New components for notifications
const NotificationsCard = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.background.secondary};
  height: 100%;
`;

const NotificationItem = styled.div<{ $type: 'info' | 'success' | 'warning' | 'error' }>`
  display: flex;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[3]};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => 
    props.$type === 'success' ? props.theme.colors.success[400] :
    props.$type === 'warning' ? props.theme.colors.warning[400] :
    props.$type === 'error' ? props.theme.colors.danger[400] :
    props.theme.colors.primary[400]
  };
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

const NotificationIcon = styled.div<{ $type: 'info' | 'success' | 'warning' | 'error' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => 
    props.$type === 'success' ? props.theme.colors.success[500] :
    props.$type === 'warning' ? props.theme.colors.warning[500] :
    props.$type === 'error' ? props.theme.colors.danger[500] :
    props.theme.colors.primary[500]
  };
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationMessage = styled.div`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

const NotificationTime = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
`;

// Icon components
const UserIcon = () => (
  <FiUsers />
);

const ClassIcon = () => (
  <FiBriefcase />
);

const SubjectIcon = () => (
  <FiBook />
);

const EventIcon = () => (
  <FiCalendar />
);

export default Dashboard; 