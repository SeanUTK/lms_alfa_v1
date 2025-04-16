import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiMapPin, FiPlus, FiChevronLeft, FiChevronRight, FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';
import { TimeSlot } from '../../types/Timetable';

// Time slots from 8:00 to 18:00 with 1-hour intervals
const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

// Days of the week
const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
] as const;

// Mock data for timetable classes
const mockClasses: TimeSlot[] = [
  {
    id: '1',
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:30',
    classId: '101',
    className: 'Mathematics',
    teacher: 'John Smith',
    room: 'A101',
    color: '#4F46E5'
  },
  {
    id: '2',
    day: 'Monday',
    startTime: '11:00',
    endTime: '12:30',
    classId: '102',
    className: 'Physics',
    teacher: 'Emily Davis',
    room: 'B202',
    color: '#10B981'
  },
  {
    id: '3',
    day: 'Tuesday',
    startTime: '09:00',
    endTime: '10:30',
    classId: '103',
    className: 'English',
    teacher: 'Sarah Wilson',
    room: 'C303',
    color: '#F59E0B'
  },
  {
    id: '4',
    day: 'Tuesday',
    startTime: '13:00',
    endTime: '14:30',
    classId: '104',
    className: 'History',
    teacher: 'Michael Brown',
    room: 'D404',
    color: '#EC4899'
  },
  {
    id: '5',
    day: 'Wednesday',
    startTime: '10:00',
    endTime: '11:30',
    classId: '105',
    className: 'Computer Science',
    teacher: 'Robert Johnson',
    room: 'Lab 1',
    color: '#8B5CF6'
  },
  {
    id: '6',
    day: 'Wednesday',
    startTime: '14:00',
    endTime: '15:30',
    classId: '106',
    className: 'Biology',
    teacher: 'Jennifer Lee',
    room: 'Lab 2',
    color: '#06B6D4'
  },
  {
    id: '7',
    day: 'Thursday',
    startTime: '11:00',
    endTime: '12:30',
    classId: '107',
    className: 'Chemistry',
    teacher: 'David Miller',
    room: 'Lab 3',
    color: '#F97316'
  },
  {
    id: '8',
    day: 'Friday',
    startTime: '09:00',
    endTime: '10:30',
    classId: '108',
    className: 'Art',
    teacher: 'Sophia Chen',
    room: 'Art Studio',
    color: '#0EA5E9'
  },
  {
    id: '9',
    day: 'Friday',
    startTime: '13:00',
    endTime: '16:00',
    classId: '109',
    className: 'Physical Education',
    teacher: 'James Wilson',
    room: 'Gym',
    color: '#14B8A6'
  }
];

// Group classes by day
const groupClassesByDay = (classes: TimeSlot[]): Record<string, TimeSlot[]> => {
  return classes.reduce((acc, cls) => {
    const day = cls.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(cls);
    return acc;
  }, {} as Record<string, TimeSlot[]>);
};

const Timetables: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<string>('May 20 - May 24, 2023');
  const [_selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTeacher, setFilterTeacher] = useState('');
  const [_isAddModalOpen, setIsAddModalOpen] = useState(false);
  // const [viewMode, setViewMode] = useState<'week' | 'list'>('week');
  
  // Filter classes based on search and filters
  const filteredClasses = mockClasses.filter(cls => {
    const matchesSearch = 
      cls.className.toLowerCase().includes(searchTerm.toLowerCase()) || 
      cls.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.room.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTeacher = filterTeacher ? cls.teacher === filterTeacher : true;
    
    return matchesSearch && matchesTeacher;
  });
  
  // Group filtered classes by day
  const classesByDay = groupClassesByDay(filteredClasses);
  
  // Handle previous week
  const handlePreviousWeek = () => {
    // In a real app, you would calculate the previous week
    setCurrentWeek('May 13 - May 17, 2023');
  };
  
  // Handle next week
  const handleNextWeek = () => {
    // In a real app, you would calculate the next week
    setCurrentWeek('May 27 - May 31, 2023');
  };
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle teacher filter change
  const handleTeacherFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTeacher(e.target.value);
  };
  
  // Get unique teachers for filter
  const teachers = Array.from(new Set(mockClasses.map(cls => cls.teacher)));
  
  // Handle clicking on a time slot
  const handleTimeSlotClick = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot);
    // In a real app, you might open a modal for editing
  };
  
  // Calculate position and height for a class based on its time
  const calculateClassPosition = (startTime: string, endTime: string): { top: number, height: number } => {
    const startHour = parseInt(startTime.split(':')[0]);
    const startMinute = parseInt(startTime.split(':')[1]);
    const endHour = parseInt(endTime.split(':')[0]);
    const endMinute = parseInt(endTime.split(':')[1]);
    
    // Each hour is 60px tall
    const hourHeight = 60;
    
    // Calculate position from top (relative to 8:00 AM)
    const top = ((startHour - 8) * hourHeight) + (startMinute / 60 * hourHeight);
    
    // Calculate height based on duration
    const durationHours = endHour - startHour + (endMinute - startMinute) / 60;
    const height = durationHours * hourHeight;
    
    return { top, height };
  };
  
  // Open add class modal
  const handleAddClass = () => {
    setIsAddModalOpen(true);
    // In a real app, you would implement a modal for adding classes
  };
  
  return (
    <TimetableContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HeaderSection>
        <div>
          <PageTitle>Timetable Management</PageTitle>
          <PageDescription>Organize and schedule classes across the week</PageDescription>
        </div>
        
        <AddClassButton onClick={handleAddClass}>
          <FiPlus />
          <span>Add Class</span>
        </AddClassButton>
      </HeaderSection>
      
      <WeekNavigationBar>
        <WeekSelector>
          <WeekNavigationButton onClick={handlePreviousWeek}>
            <FiChevronLeft />
          </WeekNavigationButton>
          <CurrentWeek>{currentWeek}</CurrentWeek>
          <WeekNavigationButton onClick={handleNextWeek}>
            <FiChevronRight />
          </WeekNavigationButton>
        </WeekSelector>
        
        <SearchFilterSection>
          <SearchBox>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Search classes..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchBox>
          
          <FilterSelect value={filterTeacher} onChange={handleTeacherFilterChange}>
            <option value="">All Teachers</option>
            {teachers.map(teacher => (
              <option key={teacher} value={teacher}>{teacher}</option>
            ))}
          </FilterSelect>
        </SearchFilterSection>
      </WeekNavigationBar>
      
      <TimetableGrid>
        {/* Time column */}
        <TimeColumn>
          <DayHeader>Time</DayHeader>
          {timeSlots.map((time, _index) => (
            <TimeSlotCell key={time}>
              {time}
            </TimeSlotCell>
          ))}
        </TimeColumn>
        
        {/* Day columns */}
        {days.map(day => (
          <DayColumn key={day}>
            <DayHeader>{day}</DayHeader>
            <DayContent>
              {/* Render hour grid lines */}
              {timeSlots.map((time, _index) => (
                <HourGridLine key={time} />
              ))}
              
              {/* Render classes for this day */}
              {classesByDay[day]?.map(cls => {
                const { top, height } = calculateClassPosition(cls.startTime, cls.endTime);
                return (
                  <ClassCard 
                    key={cls.id}
                    $top={top}
                    $height={height}
                    $color={cls.color}
                    onClick={() => handleTimeSlotClick(cls)}
                    as={motion.div}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ClassTitle>{cls.className}</ClassTitle>
                    <ClassDetail>
                      <FiUser />
                      <span>{cls.teacher}</span>
                    </ClassDetail>
                    <ClassDetail>
                      <FiMapPin />
                      <span>{cls.room}</span>
                    </ClassDetail>
                    <ClassDetail>
                      <FiClock />
                      <span>{cls.startTime} - {cls.endTime}</span>
                    </ClassDetail>
                    <ClassActions>
                      <ActionButton>
                        <FiEdit />
                      </ActionButton>
                      <ActionButton>
                        <FiTrash2 />
                      </ActionButton>
                    </ClassActions>
                  </ClassCard>
                );
              })}
            </DayContent>
          </DayColumn>
        ))}
      </TimetableGrid>
      
      {/* If there are no classes to display */}
      {Object.keys(classesByDay).length === 0 && (
        <EmptyState>
          <EmptyStateIcon>
            <FiCalendar />
          </EmptyStateIcon>
          <EmptyStateMessage>No classes scheduled for this week.</EmptyStateMessage>
          <EmptyStateButton onClick={handleAddClass}>
            <FiPlus />
            <span>Add Class</span>
          </EmptyStateButton>
        </EmptyState>
      )}
    </TimetableContainer>
  );
};

// Styled Components
const TimetableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const PageDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`;

const AddClassButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

const WeekNavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 16px;
  }
`;

const WeekSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const WeekNavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.primary[600]};
  }
  
  svg {
    font-size: 20px;
  }
`;

const CurrentWeek = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const SearchFilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    flex-direction: column;
  }
`;

const SearchBox = styled.div`
  position: relative;
  width: 250px;
  
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
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
`;

const FilterSelect = styled.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  font-size: 14px;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const TimetableGrid = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    overflow-x: auto;
    min-width: 100%;
  }
`;

const TimeColumn = styled.div`
  background-color: ${props => props.theme.colors.background.tertiary};
`;

const DayColumn = styled.div`
  border-left: 1px solid ${props => props.theme.colors.border};
  min-width: 180px;
`;

const DayHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.text.primary};
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const TimeSlotCell = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const DayContent = styled.div`
  position: relative;
  min-height: 660px; /* 11 time slots * 60px */
`;

const HourGridLine = styled.div`
  position: relative;
  height: 60px;
  border-bottom: 1px dashed ${props => props.theme.colors.border};
`;

interface ClassCardProps {
  $top: number;
  $height: number;
  $color: string;
}

const ClassCard = styled.div<ClassCardProps>`
  position: absolute;
  top: ${props => props.$top}px;
  left: 4px;
  right: 4px;
  height: ${props => props.$height}px;
  background-color: ${props => `${props.$color}20`}; /* 20% opacity */
  border-left: 4px solid ${props => props.$color};
  border-radius: 6px;
  padding: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ClassTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClassDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  svg {
    flex-shrink: 0;
    font-size: 12px;
  }
`;

const ClassActions = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
  
  ${ClassCard}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: white;
  border: none;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary[600]};
    background-color: ${props => props.theme.colors.background.tertiary};
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  text-align: center;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  color: ${props => props.theme.colors.text.tertiary};
  margin-bottom: 16px;
`;

const EmptyStateMessage = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 24px;
`;

const EmptyStateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
  }
  
  svg {
    font-size: 18px;
  }
`;

export default Timetables; 