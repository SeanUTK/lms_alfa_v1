import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBell, FiCalendar, FiFilter, FiChevronDown, FiX, FiSearch, FiExternalLink } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  category: 'general' | 'course' | 'event' | 'administrative';
  priority: 'normal' | 'important' | 'urgent';
  read: boolean;
  link?: string;
  linkText?: string;
}

interface FilterOptions {
  category: string[];
  priority: string[];
  readStatus: string[];
}

const Announcements: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    priority: [],
    readStatus: []
  });
  const { user } = useAuth();

  // Mock announcements data
  const announcements: Announcement[] = [
    {
      id: 1,
      title: 'Spring Break Schedule Changes',
      content: `
        Dear Students,
        
        We want to inform you about important schedule changes for the upcoming Spring Break:
        
        • Spring Break will run from April 3rd to April 10th
        • All campus facilities will have reduced hours
        • Online learning platforms will undergo maintenance on April 5th (12:00 AM - 6:00 AM)
        • Faculty office hours will resume on April 11th
        
        Please plan accordingly and enjoy your break!
      `,
      date: '2023-03-28',
      category: 'general',
      priority: 'important',
      read: false,
      link: '/student/schedule/spring-break',
      linkText: 'View Schedule Details'
    },
    {
      id: 2,
      title: 'Midterm Examination Guidelines',
      content: `
        Dear Students,
        
        As we approach midterm examinations, please review the following guidelines:
        
        • Bring student ID to all exams
        • Electronic devices are prohibited unless specified by your instructor
        • Arrive 15 minutes before your scheduled exam time
        • Check your exam location on the student portal
        
        For any accommodations, please contact the academic office at least 48 hours before your exam.
        
        Best of luck with your exams!
      `,
      date: '2023-03-25',
      category: 'administrative',
      priority: 'urgent',
      read: false
    },
    {
      id: 3,
      title: 'New Library Resources Available',
      content: `
        The university library has added several new digital resources to support your studies:
        
        • Expanded academic journal access through JSTOR
        • New e-book collection for Engineering and Computer Science
        • Extended hours for online librarian assistance
        • Virtual study rooms now available for reservation
        
        Visit the library website to explore these new resources.
      `,
      date: '2023-03-22',
      category: 'general',
      priority: 'normal',
      read: true,
      link: 'https://library.university.edu',
      linkText: 'Visit Library Website'
    },
    {
      id: 4,
      title: 'Introduction to Machine Learning - Assignment Deadline Extended',
      content: `
        For students enrolled in Introduction to Machine Learning (CS301):
        
        The deadline for Assignment #3 has been extended from March 24th to March 28th due to the complexity of the tasks involved. Please use this additional time to refine your models and improve your submissions.
        
        If you have already submitted your assignment, you are welcome to make revisions and resubmit before the new deadline.
        
        Contact Dr. Rahman if you have any questions.
      `,
      date: '2023-03-20',
      category: 'course',
      priority: 'important',
      read: true,
      link: '/student/assignments/cs301',
      linkText: 'View Assignment'
    },
    {
      id: 5,
      title: 'Campus Career Fair Next Month',
      content: `
        Mark your calendars for the annual Campus Career Fair happening on April 15th from 10:00 AM to 4:00 PM in the Student Union Building.
        
        Over 50 companies will be in attendance, offering internships and full-time positions for graduating students.
        
        Preparation workshops will be held in the weeks leading up to the event, covering resume writing, interview skills, and networking strategies.
        
        This is an excellent opportunity to connect with potential employers!
      `,
      date: '2023-03-18',
      category: 'event',
      priority: 'normal',
      read: true,
      link: '/student/events/career-fair',
      linkText: 'Register for Career Fair'
    }
  ];

  const filteredAnnouncements = announcements
    .filter(announcement => {
      // Apply search term filter
      if (searchTerm && !announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !announcement.content.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Apply category filter
      if (filters.category.length > 0 && !filters.category.includes(announcement.category)) {
        return false;
      }
      
      // Apply priority filter
      if (filters.priority.length > 0 && !filters.priority.includes(announcement.priority)) {
        return false;
      }
      
      // Apply read status filter
      if (filters.readStatus.length > 0) {
        if (filters.readStatus.includes('read') && !announcement.read) return false;
        if (filters.readStatus.includes('unread') && announcement.read) return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sort by date (newest first) and then by priority
      const dateComparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateComparison !== 0) return dateComparison;
      
      const priorityWeight = { urgent: 3, important: 2, normal: 1 };
      return priorityWeight[b.priority] - priorityWeight[a.priority];
    });

  const toggleFilter = (type: keyof FilterOptions, value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[type]];
      const index = currentFilters.indexOf(value);
      
      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }
      
      return {
        ...prev,
        [type]: currentFilters
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      priority: [],
      readStatus: []
    });
    setSearchTerm('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const markAsRead = (id: number) => {
    // In a real app, this would call an API to mark the announcement as read
    console.log(`Marking announcement ${id} as read`);
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
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Announcements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Stay updated with important information
          </motion.p>
        </HeaderContent>
        <SearchAndFilterContainer>
          <SearchBar>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ClearButton onClick={() => setSearchTerm('')}>
                <FiX />
              </ClearButton>
            )}
          </SearchBar>
          <FilterButton onClick={() => setShowFilters(!showFilters)}>
            <FiFilter />
            <span>Filter</span>
            <FiChevronDown style={{ 
              transform: showFilters ? 'rotate(180deg)' : 'rotate(0)', 
              transition: 'transform 0.3s' 
            }}/>
          </FilterButton>
        </SearchAndFilterContainer>
      </PageHeader>

      <AnimatePresence>
        {showFilters && (
          <FiltersContainer
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FilterSection>
              <FilterTitle>Category</FilterTitle>
              <FilterOptions>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="general"
                    checked={filters.category.includes('general')}
                    onChange={() => toggleFilter('category', 'general')}
                  />
                  <label htmlFor="general">General</label>
                </FilterCheckbox>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="course"
                    checked={filters.category.includes('course')}
                    onChange={() => toggleFilter('category', 'course')}
                  />
                  <label htmlFor="course">Course</label>
                </FilterCheckbox>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="event"
                    checked={filters.category.includes('event')}
                    onChange={() => toggleFilter('category', 'event')}
                  />
                  <label htmlFor="event">Events</label>
                </FilterCheckbox>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="administrative"
                    checked={filters.category.includes('administrative')}
                    onChange={() => toggleFilter('category', 'administrative')}
                  />
                  <label htmlFor="administrative">Administrative</label>
                </FilterCheckbox>
              </FilterOptions>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Priority</FilterTitle>
              <FilterOptions>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="urgent"
                    checked={filters.priority.includes('urgent')}
                    onChange={() => toggleFilter('priority', 'urgent')}
                  />
                  <label htmlFor="urgent">Urgent</label>
                </FilterCheckbox>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="important"
                    checked={filters.priority.includes('important')}
                    onChange={() => toggleFilter('priority', 'important')}
                  />
                  <label htmlFor="important">Important</label>
                </FilterCheckbox>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="normal"
                    checked={filters.priority.includes('normal')}
                    onChange={() => toggleFilter('priority', 'normal')}
                  />
                  <label htmlFor="normal">Normal</label>
                </FilterCheckbox>
              </FilterOptions>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Status</FilterTitle>
              <FilterOptions>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="read"
                    checked={filters.readStatus.includes('read')}
                    onChange={() => toggleFilter('readStatus', 'read')}
                  />
                  <label htmlFor="read">Read</label>
                </FilterCheckbox>
                <FilterCheckbox>
                  <input 
                    type="checkbox" 
                    id="unread"
                    checked={filters.readStatus.includes('unread')}
                    onChange={() => toggleFilter('readStatus', 'unread')}
                  />
                  <label htmlFor="unread">Unread</label>
                </FilterCheckbox>
              </FilterOptions>
            </FilterSection>

            <ClearFiltersButton onClick={clearFilters}>
              Clear All Filters
            </ClearFiltersButton>
          </FiltersContainer>
        )}
      </AnimatePresence>

      <ContentContainer>
        <AnnouncementsList>
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement, index) => (
              <AnnouncementItem
                key={announcement.id}
                $read={announcement.read}
                $priority={announcement.priority}
                as={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => {
                  setSelectedAnnouncement(announcement);
                  if (!announcement.read) {
                    markAsRead(announcement.id);
                  }
                }}
                $isSelected={selectedAnnouncement?.id === announcement.id}
              >
                <AnnouncementHeader>
                  <CategoryBadge $category={announcement.category}>
                    {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                  </CategoryBadge>
                  <AnnouncementDate>
                    <FiCalendar size={14} />
                    <span>{formatDate(announcement.date)}</span>
                  </AnnouncementDate>
                </AnnouncementHeader>
                <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                <AnnouncementPreview>
                  {announcement.content.substring(0, 100)}
                  {announcement.content.length > 100 ? '...' : ''}
                </AnnouncementPreview>
                {!announcement.read && <UnreadIndicator />}
              </AnnouncementItem>
            ))
          ) : (
            <NoAnnouncements>
              <FiBell size={40} />
              <p>No announcements found matching your filters</p>
              <ClearFiltersButton onClick={clearFilters}>
                Clear Filters
              </ClearFiltersButton>
            </NoAnnouncements>
          )}
        </AnnouncementsList>

        <DetailPanel>
          <AnimatePresence mode="wait">
            {selectedAnnouncement ? (
              <AnnouncementDetail
                key={selectedAnnouncement.id}
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <DetailHeader>
                  <DetailHeaderContent>
                    <DetailTitle>{selectedAnnouncement.title}</DetailTitle>
                    <DetailMeta>
                      <CategoryBadge $category={selectedAnnouncement.category}>
                        {selectedAnnouncement.category.charAt(0).toUpperCase() + selectedAnnouncement.category.slice(1)}
                      </CategoryBadge>
                      <PriorityBadge $priority={selectedAnnouncement.priority}>
                        {selectedAnnouncement.priority.charAt(0).toUpperCase() + selectedAnnouncement.priority.slice(1)}
                      </PriorityBadge>
                      <DetailDate>
                        <FiCalendar size={14} />
                        <span>{formatDate(selectedAnnouncement.date)}</span>
                      </DetailDate>
                    </DetailMeta>
                  </DetailHeaderContent>
                </DetailHeader>
                <DetailContent>
                  {selectedAnnouncement.content.split('\n').map((paragraph, i) => (
                    paragraph.trim() ? <p key={i}>{paragraph.trim()}</p> : <br key={i} />
                  ))}
                  
                  {selectedAnnouncement.link && (
                    <DetailLink href={selectedAnnouncement.link}>
                      {selectedAnnouncement.linkText || 'Learn More'}
                      <FiExternalLink size={14} />
                    </DetailLink>
                  )}
                </DetailContent>
              </AnnouncementDetail>
            ) : (
              <NoAnnouncementSelected
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiBell size={50} />
                <p>Select an announcement to view details</p>
              </NoAnnouncementSelected>
            )}
          </AnimatePresence>
        </DetailPanel>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: ${props => props.theme.spacing[5]};
  background-color: ${props => props.theme.colors.background.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[4]};
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[5]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${props => props.theme.spacing[3]};
  }
`;

const HeaderContent = styled.div`
  h1 {
    font-size: 1.7rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    margin: 0;
  }
  
  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.text.secondary};
    margin: ${props => props.theme.spacing[1]} 0 0 0;
  }
`;

const SearchAndFilterContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing[3]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 0 ${props => props.theme.spacing[3]};
  width: 280px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex: 1;
  }
`;

const SearchIcon = styled.div`
  color: ${props => props.theme.colors.text.tertiary};
  margin-right: ${props => props.theme.spacing[2]};
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  padding: ${props => props.theme.spacing[2]};
  width: 100%;
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text.tertiary};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  border-radius: ${props => props.theme.borderRadius.md};
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
  
  svg {
    font-size: 1rem;
  }
`;

const FiltersContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[4]};
  margin-bottom: ${props => props.theme.spacing[4]};
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[5]};
  overflow: hidden;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing[4]};
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    min-width: unset;
  }
`;

const FilterTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 ${props => props.theme.spacing[2]} 0;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

const FilterCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  
  input[type="checkbox"] {
    cursor: pointer;
  }
  
  label {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text.secondary};
    cursor: pointer;
  }
`;

const ClearFiltersButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}15;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${props => props.theme.spacing[4]};
  height: calc(100% - 150px);
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const AnnouncementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[3]};
  overflow-y: auto;
  padding-right: ${props => props.theme.spacing[2]};
  max-height: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-height: 600px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-height: 400px;
  }
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.background.hover};
    border-radius: 6px;
  }
`;

interface AnnouncementItemProps {
  $read: boolean;
  $priority: 'normal' | 'important' | 'urgent';
  $isSelected: boolean;
}

const AnnouncementItem = styled.div<AnnouncementItemProps>`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[4]};
  cursor: pointer;
  position: relative;
  border-left: 4px solid transparent;
  transition: all ${props => props.theme.transition.fast};
  opacity: ${props => props.$read ? 0.85 : 1};
  
  ${({ $priority, theme }) => {
    if ($priority === 'urgent') {
      return `border-left-color: ${theme.colors.danger};`;
    } else if ($priority === 'important') {
      return `border-left-color: ${theme.colors.warning};`;
    } else {
      return `border-left-color: ${theme.colors.primary};`;
    }
  }}
  
  ${({ $isSelected, theme }) => $isSelected && `
    box-shadow: 0 0 0 2px ${theme.colors.primary}40;
  `}
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const AnnouncementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[2]};
`;

interface CategoryBadgeProps {
  $category: string;
}

const CategoryBadge = styled.div<CategoryBadgeProps>`
  font-size: 0.8rem;
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-weight: 500;
  
  ${({ $category, theme }) => {
    switch ($category) {
      case 'general':
        return `
          background-color: ${theme.colors.primary}20;
          color: ${theme.colors.primary};
        `;
      case 'course':
        return `
          background-color: ${theme.colors.success}20;
          color: ${theme.colors.success};
        `;
      case 'event':
        return `
          background-color: ${theme.colors.warning}20;
          color: ${theme.colors.warning};
        `;
      case 'administrative':
        return `
          background-color: ${theme.colors.purple}20;
          color: ${theme.colors.purple};
        `;
      default:
        return `
          background-color: ${theme.colors.primary}20;
          color: ${theme.colors.primary};
        `;
    }
  }}
`;

interface PriorityBadgeProps {
  $priority: string;
}

const PriorityBadge = styled.div<PriorityBadgeProps>`
  font-size: 0.8rem;
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-weight: 500;
  
  ${({ $priority, theme }) => {
    switch ($priority) {
      case 'urgent':
        return `
          background-color: ${theme.colors.danger}20;
          color: ${theme.colors.danger};
        `;
      case 'important':
        return `
          background-color: ${theme.colors.warning}20;
          color: ${theme.colors.warning};
        `;
      case 'normal':
        return `
          background-color: ${theme.colors.success}20;
          color: ${theme.colors.success};
        `;
      default:
        return `
          background-color: ${theme.colors.success}20;
          color: ${theme.colors.success};
        `;
    }
  }}
`;

const AnnouncementDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.tertiary};
  font-size: 0.85rem;
  
  svg {
    margin-top: -2px;
  }
`;

const AnnouncementTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 ${props => props.theme.spacing[2]} 0;
`;

const AnnouncementPreview = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UnreadIndicator = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
`;

const DetailPanel = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    height: auto;
    min-height: 400px;
  }
`;

const AnnouncementDetail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DetailHeader = styled.div`
  padding: ${props => props.theme.spacing[4]};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const DetailHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

const DetailTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const DetailMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[2]};
`;

const DetailDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.tertiary};
  font-size: 0.85rem;
  margin-left: ${props => props.theme.spacing[1]};
`;

const DetailContent = styled.div`
  padding: ${props => props.theme.spacing[4]};
  overflow-y: auto;
  flex: 1;
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.95rem;
  line-height: 1.5;
  
  p {
    margin: 0 0 ${props => props.theme.spacing[3]} 0;
  }
  
  ul, ol {
    margin: 0 0 ${props => props.theme.spacing[3]} 0;
    padding-left: ${props => props.theme.spacing[4]};
  }
`;

const DetailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  margin-top: ${props => props.theme.spacing[2]};
  
  &:hover {
    text-decoration: underline;
  }
`;

const NoAnnouncementSelected = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${props => props.theme.colors.text.tertiary};
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[4]};
  text-align: center;
  
  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const NoAnnouncements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing[6]} 0;
  color: ${props => props.theme.colors.text.tertiary};
  text-align: center;
  gap: ${props => props.theme.spacing[3]};
  
  p {
    font-size: 1rem;
    margin: 0;
  }
  
  button {
    margin-top: ${props => props.theme.spacing[2]};
  }
`;

export default Announcements; 