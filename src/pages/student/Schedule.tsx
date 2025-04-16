import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiClock,  FiMapPin, FiUser, FiChevronLeft, FiChevronRight, FiSearch, FiBook } from 'react-icons/fi';
import Card from '../../components/common/Card';

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week'>('week');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Generate dates for the current week
  const getDatesForCurrentWeek = () => {
    const dates = [];
    const currentDate = new Date(selectedDate);
    
    // Find the first day of the week (Sunday)
    const firstDayOfWeek = new Date(currentDate);
    const dayOfWeek = currentDate.getDay();
    firstDayOfWeek.setDate(currentDate.getDate() - dayOfWeek);
    
    // Generate 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  // Get the week dates
  const weekDates = getDatesForCurrentWeek();
  
  // Get day name
  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  // Format the date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Format time
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hourInt = parseInt(hours);
    const suffix = hourInt >= 12 ? 'PM' : 'AM';
    const hour12 = hourInt > 12 ? hourInt - 12 : hourInt === 0 ? 12 : hourInt;
    return `${hour12}:${minutes} ${suffix}`;
  };
  
  // Navigate to previous week
  const goToPreviousWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 7);
    setSelectedDate(newDate);
  };
  
  // Navigate to next week
  const goToNextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 7);
    setSelectedDate(newDate);
  };
  
  // Select a specific date
  const selectDate = (date: Date) => {
    setSelectedDate(date);
    setViewMode('day');
  };
  
  // Get today's date
  const today = new Date();
  
  // Check if a date is today
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };
  
  // Check if a date is selected
  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };
  
  // Get month and year for header
  const getMonthYear = () => {
    const startMonth = weekDates[0].toLocaleDateString('en-US', { month: 'long' });
    const endMonth = weekDates[6].toLocaleDateString('en-US', { month: 'long' });
    const year = weekDates[0].getFullYear();
    
    if (startMonth === endMonth) {
      return `${startMonth} ${year}`;
    }
    
    return `${startMonth} - ${endMonth} ${year}`;
  };
  
  // Mock data for class schedule
  const classes = [
    {
      id: 1,
      courseId: 1,
      courseName: 'Mathematics',
      teacher: 'Dr. Smith',
      day: 'Monday',
      startTime: '09:00',
      endTime: '10:30',
      location: 'Room 101',
      color: '#4F46E5'
    },
    {
      id: 2,
      courseId: 2,
      courseName: 'Physics',
      teacher: 'Prof. Johnson',
      day: 'Monday',
      startTime: '11:00',
      endTime: '12:30',
      location: 'Lab 3',
      color: '#2563EB'
    },
    {
      id: 3,
      courseId: 3,
      courseName: 'English Literature',
      teacher: 'Mrs. Davis',
      day: 'Tuesday',
      startTime: '13:00',
      endTime: '14:30',
      location: 'Room 205',
      color: '#9333EA'
    },
    {
      id: 4,
      courseId: 4,
      courseName: 'Chemistry',
      teacher: 'Dr. Wilson',
      day: 'Wednesday',
      startTime: '10:15',
      endTime: '11:45',
      location: 'Lab 2',
      color: '#16A34A'
    },
    {
      id: 5,
      courseId: 5,
      courseName: 'World History',
      teacher: 'Prof. Anderson',
      day: 'Thursday',
      startTime: '14:00',
      endTime: '15:30',
      location: 'Room 304',
      color: '#EA580C'
    },
    {
      id: 6,
      courseId: 6,
      courseName: 'Computer Science',
      teacher: 'Dr. Roberts',
      day: 'Friday',
      startTime: '15:30',
      endTime: '17:00',
      location: 'Computer Lab',
      color: '#DC2626'
    },
    {
      id: 7,
      courseId: 1,
      courseName: 'Mathematics',
      teacher: 'Dr. Smith',
      day: 'Wednesday',
      startTime: '09:00',
      endTime: '10:30',
      location: 'Room 101',
      color: '#4F46E5'
    },
    {
      id: 8,
      courseId: 3,
      courseName: 'English Literature',
      teacher: 'Mrs. Davis',
      day: 'Friday',
      startTime: '09:00',
      endTime: '10:30',
      location: 'Room 205',
      color: '#9333EA'
    }
  ];
  
  // Map day names to day indices
  const dayIndices: Record<string, number> = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6
  };
  
  // Get classes for a specific date
  const getClassesForDate = (date: Date) => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    
    return classes.filter(cls => cls.day === dayName && (
      searchTerm === '' || 
      cls.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.location.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };
  
  // Get classes for today
  const todayClasses = getClassesForDate(today);
  
  // Get upcoming classes (today and future)
  const upcomingClasses = classes.filter(cls => {
    const dayIndex = dayIndices[cls.day];
    const todayIndex = today.getDay();
    return dayIndex >= todayIndex;
  }).sort((a, b) => {
    // Sort by day first
    const dayDiff = dayIndices[a.day] - dayIndices[b.day];
    if (dayDiff !== 0) return dayDiff;
    
    // Then by start time
    return a.startTime.localeCompare(b.startTime);
  }).slice(0, 3); // Get only the next 3 upcoming classes
  
  // Get selected date classes
  const selectedDateClasses = getClassesForDate(selectedDate);
  
  // Get all week classes
  // const weekClasses = weekDates.flatMap(date => {
  //   const dayClasses = getClassesForDate(date);
  //   return dayClasses.map(cls => ({
  //     ...cls,
  //     date
  //   }));
  // });
  
  return (
    <ScheduleContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Class Schedule</PageTitle>
          <PageDescription>View and manage your weekly class timetable</PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <ScheduleControls>
        <SearchBar>
          <FiSearch size={18} />
          <SearchInput 
            type="text" 
            placeholder="Search classes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <ViewControls>
          <ViewButton 
            $isActive={viewMode === 'day'} 
            onClick={() => setViewMode('day')}
          >
            Day
          </ViewButton>
          <ViewButton 
            $isActive={viewMode === 'week'} 
            onClick={() => setViewMode('week')}
          >
            Week
          </ViewButton>
        </ViewControls>
      </ScheduleControls>
      
      <DateNavigation>
        <NavButton onClick={goToPreviousWeek}>
          <FiChevronLeft size={20} />
        </NavButton>
        <DateDisplay>
          <CurrentMonth>{getMonthYear()}</CurrentMonth>
          {viewMode === 'day' && (
            <CurrentDate>
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric'
              })}
            </CurrentDate>
          )}
        </DateDisplay>
        <NavButton onClick={goToNextWeek}>
          <FiChevronRight size={20} />
        </NavButton>
      </DateNavigation>
      
      <DatePicker>
        {weekDates.map(date => (
          <DateCell 
            key={date.toISOString()} 
            onClick={() => selectDate(date)}
            $isToday={isToday(date)}
            $isSelected={isSelected(date)}
          >
            <DayName>{getDayName(date)}</DayName>
            <DayNumber>{date.getDate()}</DayNumber>
            <ClassDots>
              {getClassesForDate(date).slice(0, 3).map((_, index) => (
                <ClassDot key={index} />
              ))}
            </ClassDots>
          </DateCell>
        ))}
      </DatePicker>
      
      <ContentContainer>
        <LeftColumn>
          {viewMode === 'day' ? (
            <>
              <SectionHeader>
                <SectionTitle>
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })} Classes
                </SectionTitle>
                {selectedDateClasses.length === 0 && (
                  <NoClassesMessage>No classes scheduled</NoClassesMessage>
                )}
              </SectionHeader>
              <DayClasses>
                {selectedDateClasses.map(cls => (
                  <ClassCard key={cls.id} as={motion.div} whileHover={{ y: -4 }}>
                    <ColorBar $color={cls.color} />
                    <ClassCardContent>
                      <ClassTime>
                        <FiClock size={14} />
                        <span>{formatTime(cls.startTime)} - {formatTime(cls.endTime)}</span>
                      </ClassTime>
                      <ClassName>{cls.courseName}</ClassName>
                      <ClassDetails>
                        <ClassDetail>
                          <FiUser size={14} />
                          <span>{cls.teacher}</span>
                        </ClassDetail>
                        <ClassDetail>
                          <FiMapPin size={14} />
                          <span>{cls.location}</span>
                        </ClassDetail>
                      </ClassDetails>
                      <ClassActions>
                        <ClassAction>Course Materials</ClassAction>
                        <ClassAction>Assignments</ClassAction>
                      </ClassActions>
                    </ClassCardContent>
                  </ClassCard>
                ))}
              </DayClasses>
            </>
          ) : (
            <>
              <SectionHeader>
                <SectionTitle>Weekly Schedule</SectionTitle>
              </SectionHeader>
              <WeekSchedule>
                <TimeAxis>
                  {Array.from({ length: 12 }).map((_, index) => {
                    const hour = index + 8; // Start at 8 AM
                    return (
                      <TimeSlot key={hour}>
                        {hour > 12 ? hour - 12 : hour} {hour >= 12 ? 'PM' : 'AM'}
                      </TimeSlot>
                    );
                  })}
                </TimeAxis>
                <DaysContainer>
                  {weekDates.map((date) => {
                    const dayClasses = getClassesForDate(date);
                    return (
                      <DayColumn key={date.toISOString()} $isToday={isToday(date)}>
                        <DayHeader>
                          {getDayName(date)}, {formatDate(date)}
                        </DayHeader>
                        <DaySchedule>
                          {dayClasses.map(cls => {
                            const startHour = parseInt(cls.startTime.split(':')[0]);
                            const startMinute = parseInt(cls.startTime.split(':')[1]);
                            const endHour = parseInt(cls.endTime.split(':')[0]);
                            const endMinute = parseInt(cls.endTime.split(':')[1]);
                            
                            const top = (startHour - 8) * 60 + startMinute;
                            const height = (endHour - startHour) * 60 + (endMinute - startMinute);
                            
                            return (
                              <ClassEvent 
                                key={cls.id} 
                                $top={top} 
                                $height={height} 
                                $color={cls.color}
                                onClick={() => selectDate(date)}
                              >
                                <ClassEventContent>
                                  <ClassEventName>{cls.courseName}</ClassEventName>
                                  <ClassEventTime>{formatTime(cls.startTime)} - {formatTime(cls.endTime)}</ClassEventTime>
                                  <ClassEventLocation>{cls.location}</ClassEventLocation>
                                </ClassEventContent>
                              </ClassEvent>
                            );
                          })}
                        </DaySchedule>
                      </DayColumn>
                    );
                  })}
                </DaysContainer>
              </WeekSchedule>
            </>
          )}
        </LeftColumn>
        
        <RightColumn>
          <Card>
            <TodaySchedule>
              <SectionHeader>
                <SectionTitle>Today's Classes</SectionTitle>
                <TodayDate>{today.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</TodayDate>
              </SectionHeader>
              
              {todayClasses.length === 0 ? (
                <NoClassesMessage>No classes scheduled for today</NoClassesMessage>
              ) : (
                <TodayClassesList>
                  {todayClasses.map(cls => (
                    <TodayClassItem key={cls.id}>
                      <TodayClassColor $color={cls.color} />
                      <TodayClassContent>
                        <TodayClassName>{cls.courseName}</TodayClassName>
                        <TodayClassTime>
                          <FiClock size={12} />
                          <span>{formatTime(cls.startTime)} - {formatTime(cls.endTime)}</span>
                        </TodayClassTime>
                        <TodayClassLocation>
                          <FiMapPin size={12} />
                          <span>{cls.location}</span>
                        </TodayClassLocation>
                      </TodayClassContent>
                    </TodayClassItem>
                  ))}
                </TodayClassesList>
              )}
            </TodaySchedule>
          </Card>
          
          <Card>
            <UpcomingClasses>
              <SectionTitle>Upcoming Classes</SectionTitle>
              
              <UpcomingClassesList>
                {upcomingClasses.map(cls => (
                  <UpcomingClassItem key={cls.id}>
                    <UpcomingClassDay>{cls.day}</UpcomingClassDay>
                    <UpcomingClassContent>
                      <UpcomingClassName>
                        <FiBook size={14} />
                        <span>{cls.courseName}</span>
                      </UpcomingClassName>
                      <UpcomingClassTime>
                        <FiClock size={12} />
                        <span>{formatTime(cls.startTime)} - {formatTime(cls.endTime)}</span>
                      </UpcomingClassTime>
                      <UpcomingClassLocation>
                        <FiMapPin size={12} />
                        <span>{cls.location}</span>
                      </UpcomingClassLocation>
                    </UpcomingClassContent>
                    <NextIcon>
                      <FiChevronRight size={18} />
                    </NextIcon>
                  </UpcomingClassItem>
                ))}
              </UpcomingClassesList>
              
              <ViewAllLink>View All Classes</ViewAllLink>
            </UpcomingClasses>
          </Card>
        </RightColumn>
      </ContentContainer>
    </ScheduleContainer>
  );
};

const ScheduleContainer = styled.div`
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

const ScheduleControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const SearchInput = styled.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${props => props.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const ViewControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface ViewButtonProps {
  $isActive: boolean;
}

const ViewButton = styled.button<ViewButtonProps>`
  background-color: ${props => props.$isActive ? '#4F46E5' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: 1px solid ${props => props.$isActive ? '#4F46E5' : props.theme.colors.border.light};
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.$isActive ? '#4338CA' : props.theme.colors.background.hover};
  }
`;

const DateNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
`;

const NavButton = styled.button`
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    transform: translateY(-2px);
  }
`;

const DateDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const CurrentMonth = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const CurrentDate = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

const DatePicker = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface DateCellProps {
  $isToday: boolean;
  $isSelected: boolean;
}

const DateCell = styled.div<DateCellProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => {
    if (props.$isSelected) return '#4F46E5';
    if (props.$isToday) return `${props.theme.colors.primary}15`;
    return props.theme.colors.background.primary;
  }};
  border: 1px solid ${props => {
    if (props.$isSelected) return '#4F46E5';
    if (props.$isToday) return props.theme.colors.primary;
    return props.theme.colors.border.light;
  }};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

const DayName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
`;

const DayNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 4px 0;
  color: ${props => props.theme.colors.text.primary};
  
  ${DateCell}:hover & {
    color: #4F46E5;
  }
  
  ${DateCell}[data-is-selected="true"] & {
    color: white;
  }
`;

const ClassDots = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

const ClassDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  
  ${DateCell}[data-is-selected="true"] & {
    background-color: white;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 12px 0;
  padding: 0 20px;
`;

const TodayDate = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

const DayClasses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ClassCard = styled(Card)`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: ${props => props.theme.shadows.sm};
  border: 1px solid ${props => props.theme.colors.border.light};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

interface ColorBarProps {
  $color: string;
}

const ColorBar = styled.div<ColorBarProps>`
  width: 6px;
  background-color: ${props => props.$color};
`;

const ClassCardContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ClassName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const ClassDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ClassDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ClassActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const ClassAction = styled.button`
  background-color: transparent;
  color: #4F46E5;
  border: none;
  font-size: 14px;
  padding: 4px 0;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const WeekSchedule = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.border.light};
`;

const TimeAxis = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  min-width: 60px;
  border-right: 1px solid ${props => props.theme.colors.border.light};
`;

const TimeSlot = styled.div`
  height: 60px;
  padding: 4px 8px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const DaysContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 500px;
`;

interface DayColumnProps {
  $isToday: boolean;
}

const DayColumn = styled.div<DayColumnProps>`
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.$isToday ? `${props.theme.colors.primary}05` : 'transparent'};
  
  &:last-child {
    border-right: none;
  }
`;

const DayHeader = styled.div`
  padding: 8px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  color: ${props => props.theme.colors.text.primary};
`;

const DaySchedule = styled.div`
  flex: 1;
  position: relative;
  height: 720px; // 12 hours * 60px
`;

interface ClassEventProps {
  $top: number;
  $height: number;
  $color: string;
}

const ClassEvent = styled.div<ClassEventProps>`
  position: absolute;
  top: ${props => props.$top}px;
  left: 4px;
  right: 4px;
  height: ${props => props.$height}px;
  background-color: ${props => `${props.$color}15`};
  border-left: 3px solid ${props => props.$color};
  border-radius: 6px;
  padding: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateX(2px);
    box-shadow: ${props => props.theme.shadows.sm};
    z-index: 10;
  }
`;

const ClassEventContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ClassEventName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClassEventTime = styled.div`
  font-size: 11px;
  color: ${props => props.theme.colors.text.secondary};
  margin-top: 2px;
`;

const ClassEventLocation = styled.div`
  font-size: 11px;
  color: ${props => props.theme.colors.text.secondary};
  margin-top: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TodaySchedule = styled.div`
  padding: 16px;
`;

const TodayClassesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TodayClassItem = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 8px;
  overflow: hidden;
`;

interface TodayClassColorProps {
  $color: string;
}

const TodayClassColor = styled.div<TodayClassColorProps>`
  width: 6px;
  background-color: ${props => props.$color};
`;

const TodayClassContent = styled.div`
  padding: 12px;
  flex: 1;
`;

const TodayClassName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 6px;
`;

const TodayClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 4px;
`;

const TodayClassLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const UpcomingClasses = styled.div`
  padding: 0;
`;

const UpcomingClassesList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

const UpcomingClassItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const UpcomingClassDay = styled.div`
  width: 80px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary[600]};
`;

const UpcomingClassContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UpcomingClassName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const UpcomingClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${props => props.theme.colors.text.secondary};
`;

const UpcomingClassLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${props => props.theme.colors.text.secondary};
`;

const NextIcon = styled.div`
  color: ${props => props.theme.colors.primary[500]};
`;

const ViewAllLink = styled.a`
  display: block;
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.primary[600]};
  text-decoration: none;
  padding: 16px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NoClassesMessage = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  padding: 24px 0;
`;

export default Schedule; 