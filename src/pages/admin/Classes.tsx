import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiGrid, FiList, FiPlus, FiCalendar, FiClock, FiUsers, FiBook, FiEdit, FiTrash2, FiMoreHorizontal } from 'react-icons/fi';
import { Class } from '../../types/Class';

// Mock data for development
const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    subject: 'Mathematics',
    teacher: 'John Smith',
    schedule: 'Mon, Wed, Fri',
    time: '09:00 - 10:30',
    room: 'A101',
    students: 28,
    status: 'active',
    color: '#4F46E5'
  },
  {
    id: '2',
    name: 'Physics Fundamentals',
    subject: 'Physics',
    teacher: 'Emily Davis',
    schedule: 'Tue, Thu',
    time: '11:00 - 12:30',
    room: 'B202',
    students: 24,
    status: 'active',
    color: '#10B981'
  },
  {
    id: '3',
    name: 'World Literature',
    subject: 'English',
    teacher: 'Sarah Wilson',
    schedule: 'Mon, Wed',
    time: '13:00 - 14:30',
    room: 'C303',
    students: 22,
    status: 'active',
    color: '#F59E0B'
  },
  {
    id: '4',
    name: 'Ancient History',
    subject: 'History',
    teacher: 'Michael Brown',
    schedule: 'Tue, Thu',
    time: '09:00 - 10:30',
    room: 'D404',
    students: 26,
    status: 'active',
    color: '#EC4899'
  },
  {
    id: '5',
    name: 'Programming 101',
    subject: 'Computer Science',
    teacher: 'Robert Johnson',
    schedule: 'Wed, Fri',
    time: '15:00 - 16:30',
    room: 'Lab 101',
    students: 20,
    status: 'active',
    color: '#8B5CF6'
  },
  {
    id: '6',
    name: 'Biology Lab',
    subject: 'Biology',
    teacher: 'Jennifer Lee',
    schedule: 'Mon, Thu',
    time: '14:00 - 15:30',
    room: 'Lab 202',
    students: 18,
    status: 'inactive',
    color: '#06B6D4'
  },
  {
    id: '7',
    name: 'Chemistry 101',
    subject: 'Chemistry',
    teacher: 'David Miller',
    schedule: 'Tue, Fri',
    time: '10:00 - 11:30',
    room: 'Lab 303',
    students: 22,
    status: 'active',
    color: '#F97316'
  },
  {
    id: '8',
    name: 'Economics Basics',
    subject: 'Economics',
    teacher: 'Sophia Chen',
    schedule: 'Mon, Wed',
    time: '11:00 - 12:30',
    room: 'E505',
    students: 30,
    status: 'active',
    color: '#0EA5E9'
  }
];

const Classes: React.FC = () => {
  // State for search, filters, and view mode
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState<string | null>(null);

  // Filter classes based on search term and filters
  const filteredClasses = mockClasses.filter(cls => {
    const matchesSearch = 
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      cls.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = filterSubject ? cls.subject === filterSubject : true;
    const matchesStatus = filterStatus ? cls.status === filterStatus : true;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  // Get unique subjects for filter
  const subjects = Array.from(new Set(mockClasses.map(cls => cls.subject)));

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle subject filter change
  const handleSubjectFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSubject(e.target.value);
  };

  // Handle status filter change
  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Toggle view mode
  // const toggleViewMode = () => {
  //   setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  // };

  // Toggle actions menu
  const toggleActionsMenu = (classId: string) => {
    if (isActionsMenuOpen === classId) {
      setIsActionsMenuOpen(null);
    } else {
      setIsActionsMenuOpen(classId);
    }
  };

  // Handle edit class
  const handleEditClass = (cls: Class) => {
    setSelectedClass(cls);
    console.log('Edit class:', cls);
    // Implement edit class functionality here
  };

  // Handle delete class
  const handleDeleteClass = (classId: string) => {
    console.log(`Delete class with ID: ${classId}`);
    // Implement delete functionality here
  };

  // Close all action menus when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsActionsMenuOpen(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <ClassesContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <HeaderSection>
        <div>
          <PageTitle>Class Management</PageTitle>
          <PageDescription>Organize and manage your academic classes</PageDescription>
        </div>

        <AddClassButton
          as={motion.button}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FiPlus />
          <span>Create New Class</span>
        </AddClassButton>
      </HeaderSection>

      <ControlPanel>
        <SearchFilterSection>
          <SearchBox>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Search for classes..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchBox>

          <FiltersWrapper>
            <SelectFilter value={filterSubject} onChange={handleSubjectFilterChange}>
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </SelectFilter>

            <SelectFilter value={filterStatus} onChange={handleStatusFilterChange}>
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </SelectFilter>
          </FiltersWrapper>
        </SearchFilterSection>

        <ViewToggle>
          <ViewButton 
            $isActive={viewMode === 'grid'} 
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <FiGrid />
          </ViewButton>
          <ViewButton 
            $isActive={viewMode === 'list'} 
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <FiList />
          </ViewButton>
        </ViewToggle>
      </ControlPanel>

      {viewMode === 'grid' ? (
        <ClassesGrid>
          <AnimatePresence>
            {filteredClasses.map(cls => (
              <ClassCard 
                key={cls.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.2 }}
                $color={cls.color}
              >
                <CardHeader $color={cls.color}>
                  <CardTitle>{cls.name}</CardTitle>
                  <CardActions onClick={(e) => {
                    e.stopPropagation();
                    toggleActionsMenu(cls.id);
                  }}>
                    <FiMoreHorizontal />
                    {isActionsMenuOpen === cls.id && (
                      <ActionsDropdown
                        as={motion.div}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={e => e.stopPropagation()}
                      >
                        <DropdownItem onClick={() => handleEditClass(cls)}>
                          <FiEdit />
                          <span>Edit</span>
                        </DropdownItem>
                        <DropdownItem onClick={() => handleDeleteClass(cls.id)}>
                          <FiTrash2 />
                          <span>Delete</span>
                        </DropdownItem>
                      </ActionsDropdown>
                    )}
                  </CardActions>
                </CardHeader>
                <CardContentGrid>
                  <CardDetail>
                    <FiBook />
                    <span>{cls.subject}</span>
                  </CardDetail>
                  <CardDetail>
                    <FiUsers />
                    <span>{cls.teacher}</span>
                  </CardDetail>
                  <CardDetail>
                    <FiCalendar />
                    <span>{cls.schedule}</span>
                  </CardDetail>
                  <CardDetail>
                    <FiClock />
                    <span>{cls.time}</span>
                  </CardDetail>
                </CardContentGrid>
                <CardFooter>
                  <StatusBadge $status={cls.status}>
                    {cls.status === 'active' ? 'Active' : 'Inactive'}
                  </StatusBadge>
                  <StudentCount>
                    <FiUsers />
                    <span>{cls.students} students</span>
                  </StudentCount>
                </CardFooter>
              </ClassCard>
            ))}
          </AnimatePresence>
        </ClassesGrid>
      ) : (
        <ClassesList>
          <ListHeader>
            <ListHeaderCell width="25%">Class Name</ListHeaderCell>
            <ListHeaderCell width="15%">Subject</ListHeaderCell>
            <ListHeaderCell width="20%">Teacher</ListHeaderCell>
            <ListHeaderCell width="15%">Schedule</ListHeaderCell>
            <ListHeaderCell width="10%">Students</ListHeaderCell>
            <ListHeaderCell width="10%">Status</ListHeaderCell>
            <ListHeaderCell width="5%">Actions</ListHeaderCell>
          </ListHeader>
          
          <ListBody>
            <AnimatePresence>
              {filteredClasses.map(cls => (
                <ListRow 
                  key={cls.id}
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                >
                  <ListCell>
                    <ClassNameCell $color={cls.color}>
                      <div className="color-indicator" />
                      <span>{cls.name}</span>
                    </ClassNameCell>
                  </ListCell>
                  <ListCell>{cls.subject}</ListCell>
                  <ListCell>{cls.teacher}</ListCell>
                  <ListCell>
                    <ScheduleInfo>
                      <div>{cls.schedule}</div>
                      <div className="time">{cls.time}</div>
                    </ScheduleInfo>
                  </ListCell>
                  <ListCell>
                    <StudentCount>
                      <FiUsers />
                      <span>{cls.students}</span>
                    </StudentCount>
                  </ListCell>
                  <ListCell>
                    <StatusBadge $status={cls.status}>
                      {cls.status === 'active' ? 'Active' : 'Inactive'}
                    </StatusBadge>
                  </ListCell>
                  <ListCell>
                    <ActionButtons>
                      <ActionButton onClick={() => handleEditClass(cls)}>
                        <FiEdit />
                      </ActionButton>
                      <ActionButton onClick={() => handleDeleteClass(cls.id)}>
                        <FiTrash2 />
                      </ActionButton>
                    </ActionButtons>
                  </ListCell>
                </ListRow>
              ))}
            </AnimatePresence>
          </ListBody>
        </ClassesList>
      )}

      {filteredClasses.length === 0 && (
        <EmptyState
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <EmptyStateMessage>No classes found matching your search criteria.</EmptyStateMessage>
        </EmptyState>
      )}
    </ClassesContainer>
  );
};

// Styled Components
const ClassesContainer = styled.div`
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
  background: linear-gradient(135deg, ${props => props.theme.colors.primary[600]}, ${props => props.theme.colors.primary[700]});
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`;

const SearchFilterSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

const SearchBox = styled.div`
  position: relative;
  min-width: 300px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    min-width: unset;
    width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.tertiary};
  font-size: 18px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  background-color: ${props => props.theme.colors.background.primary};
  font-size: 15px;
  color: ${props => props.theme.colors.text.primary};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const SelectFilter = styled.select`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  background-color: ${props => props.theme.colors.background.primary};
  font-size: 15px;
  color: ${props => props.theme.colors.text.primary};
  min-width: 150px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: auto;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[100]};
  }
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    align-self: flex-end;
  }
`;

interface ViewButtonProps {
  $isActive: boolean;
}

const ViewButton = styled.button<ViewButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props => props.$isActive 
    ? props.theme.colors.primary[500] 
    : props.theme.colors.neutral[300]};
  background-color: ${props => props.$isActive 
    ? props.theme.colors.primary[50] 
    : props.theme.colors.background.primary};
  color: ${props => props.$isActive 
    ? props.theme.colors.primary[600] 
    : props.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$isActive 
      ? props.theme.colors.primary[100] 
      : props.theme.colors.background.secondary};
  }
  
  svg {
    font-size: 20px;
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

interface ClassCardProps {
  $color: string;
}

const ClassCard = styled.div<ClassCardProps>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background.primary};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
`;

const CardHeader = styled.div<ClassCardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${props => props.$color || props.theme.colors.primary[600]};
  color: white;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardActions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    font-size: 20px;
  }
`;

const ActionsDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  width: 150px;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-top: 8px;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.secondary};
  }
  
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const CardContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 20px;
  flex-grow: 1;
`;

const CardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 16px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

interface StatusBadgeProps {
  $status: string;
}

const StatusBadge = styled.div<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => props.$status === 'active' 
    ? 'rgba(16, 185, 129, 0.1)' 
    : 'rgba(107, 114, 128, 0.1)'};
  color: ${props => props.$status === 'active' 
    ? 'rgb(16, 185, 129)' 
    : 'rgb(107, 114, 128)'};
`;

const StudentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
`;

const ClassesList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
`;

const ListHeader = styled.div`
  display: flex;
  padding: 16px 20px;
  background-color: ${props => props.theme.colors.background.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

interface ListHeaderCellProps {
  width?: string;
}

const ListHeaderCell = styled.div<ListHeaderCellProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
  width: ${props => props.width || 'auto'};
`;

const ListBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListRow = styled.div`
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: 12px;
  }
`;

const ListCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${props => props.theme.colors.text.primary};
  
  &:nth-child(1) { width: 25%; }
  &:nth-child(2) { width: 15%; }
  &:nth-child(3) { width: 20%; }
  &:nth-child(4) { width: 15%; }
  &:nth-child(5) { width: 10%; }
  &:nth-child(6) { width: 10%; }
  &:nth-child(7) { width: 5%; }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    &:nth-child(1) { width: 100%; }
    &:nth-child(2) { width: 50%; }
    &:nth-child(3) { width: 50%; }
    &:nth-child(4) { width: 50%; }
    &:nth-child(5) { width: 50%; }
    &:nth-child(6) { width: 50%; }
    &:nth-child(7) { width: 50%; justify-content: flex-end; }
  }
`;

interface ClassNameCellProps {
  $color: string;
}

const ClassNameCell = styled.div<ClassNameCellProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  
  .color-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.$color};
  }
`;

const ScheduleInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  .time {
    font-size: 13px;
    color: ${props => props.theme.colors.text.tertiary};
    margin-top: 2px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 12px;
  border: 1px dashed ${props => props.theme.colors.border};
`;

const EmptyStateMessage = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text.tertiary};
`;

export default Classes; 