import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCalendar, FiClock, FiFilter, FiChevronDown, 
  FiChevronLeft, FiChevronRight, FiInfo, FiBook,
  FiUsers, FiMapPin
} from 'react-icons/fi';
// import { useAuth } from '../../contexts/AuthContext';

// Helper functions
const getWeekDays = (date: Date): Date[] => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  
  const monday = new Date(date.setDate(diff));
  const days = [new Date(monday)];
  
  for (let i = 1; i < 7; i++) {
    const next = new Date(monday);
    next.setDate(monday.getDate() + i);
    days.push(next);
  }
  
  return days;
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const formatDay = (date: Date): string => {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

const formatTime = (hour: number): string => {
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:00 ${ampm}`;
};

// Type definitions
interface ClassEvent {
  id: number;
  title: string;
  course: string;
  startTime: number; // 24-hour format (e.g., 9 for 9:00 AM)
  endTime: number; // 24-hour format (e.g., 10 for 10:00 AM)
  day: number; // 0-6 for Monday-Sunday
  studentCount: number;
  location: string;
  color: string;
}

interface FilterOptionProps {
  $isActive: boolean;
}

const TeacherSchedule: React.FC = () => {
  // const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [showFilters, setShowFilters] = useState(false);
  const [filterCourse, setFilterCourse] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ClassEvent | null>(null);
  
  // Generate week days from current date
  const weekDays = getWeekDays(new Date(currentDate));
  
  // Hours range (8 AM to 5 PM)
  const hours = Array.from({ length: 10 }, (_, i) => i + 8);
  
  // Mock data for class events
  const classEvents: ClassEvent[] = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      course: "Algebra",
      startTime: 9,
      endTime: 11,
      day: 0, // Monday
      studentCount: 28,
      location: "Room 101",
      color: "#4F46E5" // Indigo
    },
    {
      id: 2,
      title: "Geometry Basics",
      course: "Geometry",
      startTime: 12,
      endTime: 13,
      day: 0, // Monday
      studentCount: 24,
      location: "Room 102",
      color: "#7C3AED" // Purple
    },
    {
      id: 3,
      title: "Physics Principles",
      course: "Physics",
      startTime: 9,
      endTime: 10,
      day: 1, // Tuesday
      studentCount: 20,
      location: "Lab 201",
      color: "#06B6D4" // Cyan
    },
    {
      id: 4,
      title: "Chemistry Lab",
      course: "Chemistry",
      startTime: 11,
      endTime: 13,
      day: 1, // Tuesday
      studentCount: 18,
      location: "Lab 202",
      color: "#10B981" // Emerald
    },
    {
      id: 5,
      title: "Biology 101",
      course: "Biology",
      startTime: 14,
      endTime: 16,
      day: 2, // Wednesday
      studentCount: 26,
      location: "Lab 203",
      color: "#F59E0B" // Amber
    },
    {
      id: 6,
      title: "Algebra Advanced",
      course: "Algebra",
      startTime: 10,
      endTime: 12,
      day: 3, // Thursday
      studentCount: 22,
      location: "Room 103",
      color: "#4F46E5" // Indigo
    },
    {
      id: 7,
      title: "Geometry Advanced",
      course: "Geometry",
      startTime: 14,
      endTime: 16,
      day: 4, // Friday
      studentCount: 20,
      location: "Room 102",
      color: "#7C3AED" // Purple
    }
  ];
  
  // Get all unique courses
  const uniqueCourses = [...new Set(classEvents.map(event => event.course))];
  
  // Filter class events by course if filter is applied
  const filteredEvents = filterCourse
    ? classEvents.filter(event => event.course === filterCourse)
    : classEvents;
  
  // Handle previous week/month
  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };
  
  // Handle next week/month
  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };
  
  // Handle event click
  const handleEventClick = (event: ClassEvent) => {
    setSelectedEvent(event);
  };
  
  // Handle filter change
  const handleFilterChange = (course: string | null) => {
    setFilterCourse(course);
    setShowFilters(false);
  };
  
  // Generate time slots for the calendar
  const renderTimeSlots = () => {
    return hours.map(hour => (
      <TimeRow key={hour}>
        <TimeLabel>{formatTime(hour)}</TimeLabel>
        {weekDays.map((_day, index) => {
          const dayEvents = filteredEvents.filter(
            event => event.day === index && event.startTime <= hour && event.endTime > hour
          );
          
          return (
            <TimeCell key={`${hour}-${index}`}>
              {dayEvents.map(event => {
                const isStart = event.startTime === hour;
                const duration = event.endTime - event.startTime;
                
                // Only render at the start hour
                if (!isStart) return null;
                
                return (
                  <ClassEvent 
                    key={event.id}
                    $color={event.color}
                    $duration={duration}
                    as={motion.div}
                    whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    onClick={() => handleEventClick(event)}
                  >
                    <ClassTitle>{event.title}</ClassTitle>
                    <ClassTime>
                      <FiClock size={12} />
                      <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                    </ClassTime>
                    <ClassLocation>
                      <FiMapPin size={12} />
                      <span>{event.location}</span>
                    </ClassLocation>
                  </ClassEvent>
                );
              })}
            </TimeCell>
          );
        })}
      </TimeRow>
    ));
  };
  
  return (
    <ScheduleContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>Schedule</PageTitle>
          <PageDescription>Manage your teaching schedule and classes</PageDescription>
        </div>
        
        <HeaderActions>
          <ViewToggle>
            <ViewButton 
              $isActive={viewMode === 'week'} 
              onClick={() => setViewMode('week')}
            >
              Week
            </ViewButton>
            <ViewButton 
              $isActive={viewMode === 'month'} 
              onClick={() => setViewMode('month')}
            >
              Month
            </ViewButton>
          </ViewToggle>
        </HeaderActions>
      </PageHeader>
      
      <ControlBar>
        <DateNavigator>
          <NavButton onClick={handlePrevious}>
            <FiChevronLeft />
          </NavButton>
          <CurrentPeriod>
            <FiCalendar />
            <span>
              {viewMode === 'week' 
                ? `${formatDate(weekDays[0])} - ${formatDate(weekDays[6])}` 
                : currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </CurrentPeriod>
          <NavButton onClick={handleNext}>
            <FiChevronRight />
          </NavButton>
        </DateNavigator>
        
        <FilterContainer>
          <FilterButton onClick={() => setShowFilters(!showFilters)}>
            <FiFilter />
            <span>{filterCourse || 'All Courses'}</span>
            <FiChevronDown style={{ 
              transform: showFilters ? "rotate(180deg)" : "rotate(0)", 
              transition: "transform 0.2s ease"
            }} />
          </FilterButton>
          
          {showFilters && (
            <FilterDropdown>
              <FilterOption 
                onClick={() => handleFilterChange(null)}
                $isActive={filterCourse === null}
              >
                All Courses
              </FilterOption>
              {uniqueCourses.map((course, index) => (
                <FilterOption 
                  key={index}
                  onClick={() => handleFilterChange(course)}
                  $isActive={filterCourse === course}
                >
                  {course}
                </FilterOption>
              ))}
            </FilterDropdown>
          )}
        </FilterContainer>
      </ControlBar>
      
      {viewMode === 'week' && (
        <WeekCalendar>
          <DayHeadersRow>
            <TimeHeaderCell></TimeHeaderCell>
            {weekDays.map((day, index) => (
              <DayHeaderCell key={index}>
                <DayName>{formatDay(day)}</DayName>
                <DayDate>{formatDate(day)}</DayDate>
              </DayHeaderCell>
            ))}
          </DayHeadersRow>
          
          {renderTimeSlots()}
        </WeekCalendar>
      )}
      
      {viewMode === 'month' && (
        <MonthViewMessage>
          <FiInfo size={24} />
          <p>Month view is currently under development. Please use the Week view for scheduling.</p>
        </MonthViewMessage>
      )}
      
      {selectedEvent && (
        <EventDetailsModal>
          <ModalContent>
            <ModalHeader $color={selectedEvent.color}>
              <h3>{selectedEvent.title}</h3>
              <CloseButton onClick={() => setSelectedEvent(null)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <EventDetail>
                <FiBook size={16} />
                <span>Course: {selectedEvent.course}</span>
              </EventDetail>
              <EventDetail>
                <FiClock size={16} />
                <span>Time: {formatTime(selectedEvent.startTime)} - {formatTime(selectedEvent.endTime)}</span>
              </EventDetail>
              <EventDetail>
                <FiCalendar size={16} />
                <span>Day: {formatDay(weekDays[selectedEvent.day])}</span>
              </EventDetail>
              <EventDetail>
                <FiUsers size={16} />
                <span>Students: {selectedEvent.studentCount}</span>
              </EventDetail>
              <EventDetail>
                <FiMapPin size={16} />
                <span>Location: {selectedEvent.location}</span>
              </EventDetail>
            </ModalBody>
            <ModalFooter>
              <ActionButton>View Class Details</ActionButton>
            </ModalFooter>
          </ModalContent>
          <ModalBackdrop onClick={() => setSelectedEvent(null)} />
        </EventDetailsModal>
      )}
    </ScheduleContainer>
  );
};

// Styled Components
const ScheduleContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors.text.primary};
`;

const PageDescription = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0.25rem 0 0;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ViewToggle = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ViewButton = styled.button<FilterOptionProps>`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${props => props.$isActive ? props.theme.colors.primary[500] : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? 600 : 400};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => 
      props.$isActive ? props.theme.colors.primary[600] : props.theme.colors.background.hover};
  }
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const DateNavigator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const CurrentPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const FilterContainer = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.background.secondary};
  border: none;
  border-radius: 0.375rem;
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const FilterDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 0.375rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 12rem;
  overflow: hidden;
`;

const FilterOption = styled.div<FilterOptionProps>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.$isActive ? props.theme.colors.background.hover : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors.primary[500] : props.theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? 500 : 400};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const WeekCalendar = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const DayHeadersRow = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const TimeHeaderCell = styled.div`
  padding: 0.75rem;
  border-right: 1px solid ${props => props.theme.colors.border.light};
  text-align: center;
`;

const DayHeaderCell = styled.div`
  padding: 0.75rem;
  text-align: center;
  border-right: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-right: none;
  }
`;

const DayName = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.primary};
`;

const DayDate = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const TimeRow = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  min-height: 5rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TimeLabel = styled.div`
  padding: 0.75rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
  border-right: 1px solid ${props => props.theme.colors.border.light};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const TimeCell = styled.div`
  padding: 0.25rem;
  border-right: 1px solid ${props => props.theme.colors.border.light};
  position: relative;
  
  &:last-child {
    border-right: none;
  }
`;

interface ClassEventProps {
  $color: string;
  $duration: number;
}

const ClassEvent = styled.div<ClassEventProps>`
  background-color: ${props => `${props.$color}15`}; /* 15% opacity */
  border-left: 3px solid ${props => props.$color};
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: ${props => `calc(${props.$duration * 5}rem - 0.75rem)`};
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  
  &:hover {
    background-color: ${props => `${props.$color}25`}; /* 25% opacity */
  }
`;

const ClassTitle = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.text.primary};
`;

const ClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;

const ClassLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const MonthViewMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  color: ${props => props.theme.colors.text.secondary};
  gap: 1rem;
  
  svg {
    color: ${props => props.theme.colors.primary[400]};
  }
  
  p {
    margin: 0;
    max-width: 30rem;
  }
`;

const EventDetailsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

interface ModalHeaderProps {
  $color: string;
}

const ModalHeader = styled.div<ModalHeaderProps>`
  background-color: ${props => props.$color};
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text.primary};
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.colors.background.secondary};
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  background-color: ${props => props.theme.colors.primary[500]};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }
`;

export default TeacherSchedule; 