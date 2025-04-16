import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiVideo, FiFile, FiClock, FiSearch,  FiChevronDown, FiBook, FiCheckCircle, FiPlay, FiFileText, FiDownload } from 'react-icons/fi';
import Card from '../../components/common/Card';

const Lessons: React.FC = () => {
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
  
  const lessons = [
    {
      id: 1,
      title: 'Introduction to Algebra',
      courseId: 1,
      courseName: 'Mathematics',
      type: 'video',
      duration: '45 min',
      thumbnail: 'https://img.youtube.com/vi/NybHckSEQBI/hqdefault.jpg',
      description: 'Learn the fundamentals of algebraic expressions and equations.',
      dateAdded: '2023-04-05',
      completed: true,
      materials: [
        { id: 1, name: 'Algebra Cheat Sheet', type: 'pdf', size: '2.3 MB' },
        { id: 2, name: 'Practice Problems', type: 'doc', size: '1.5 MB' }
      ]
    },
    {
      id: 2,
      title: 'Quadratic Functions',
      courseId: 1,
      courseName: 'Mathematics',
      type: 'video',
      duration: '52 min',
      thumbnail: 'https://img.youtube.com/vi/2ZzuZvz33X0/hqdefault.jpg',
      description: 'Understanding quadratic functions and their graphs.',
      dateAdded: '2023-04-10',
      completed: true,
      materials: [
        { id: 3, name: 'Quadratic Functions Slides', type: 'ppt', size: '3.1 MB' },
        { id: 4, name: 'Example Problems', type: 'pdf', size: '1.8 MB' }
      ]
    },
    {
      id: 3,
      title: 'Newton\'s Laws of Motion',
      courseId: 2,
      courseName: 'Physics',
      type: 'video',
      duration: '63 min',
      thumbnail: 'https://img.youtube.com/vi/kKKM8Y-u7ds/hqdefault.jpg',
      description: 'Comprehensive explanation of Newton\'s three laws of motion.',
      dateAdded: '2023-04-12',
      completed: false,
      materials: [
        { id: 5, name: 'Newton\'s Laws Summary', type: 'pdf', size: '1.2 MB' },
        { id: 6, name: 'Physics Lab Instructions', type: 'docx', size: '1.7 MB' }
      ]
    },
    {
      id: 4,
      title: 'Shakespeare\'s Macbeth: Analysis',
      courseId: 3,
      courseName: 'English Literature',
      type: 'reading',
      duration: '30 min',
      thumbnail: 'https://www.folger.edu/sites/default/files/styles/hero_tablet_modern_1x/public/2022-12/Macbeth-FC-header.jpg',
      description: 'Critical analysis of themes and motifs in Macbeth.',
      dateAdded: '2023-04-15',
      completed: false,
      materials: [
        { id: 7, name: 'Macbeth Full Text', type: 'pdf', size: '4.5 MB' },
        { id: 8, name: 'Character Analysis Guide', type: 'pdf', size: '2.2 MB' }
      ]
    },
    {
      id: 5,
      title: 'Periodic Table Overview',
      courseId: 4,
      courseName: 'Chemistry',
      type: 'interactive',
      duration: '40 min',
      thumbnail: 'https://sciencenotes.org/wp-content/uploads/2023/01/Colorful-Periodic-Table-Trends.png',
      description: 'Interactive exploration of the periodic table elements.',
      dateAdded: '2023-04-18',
      completed: false,
      materials: [
        { id: 9, name: 'Periodic Table Guide', type: 'pdf', size: '3.5 MB' },
        { id: 10, name: 'Element Properties Worksheet', type: 'docx', size: '1.3 MB' }
      ]
    },
    {
      id: 6,
      title: 'World War II: Causes and Effects',
      courseId: 5,
      courseName: 'World History',
      type: 'video',
      duration: '55 min',
      thumbnail: 'https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/battle%20of%20midway.jpg',
      description: 'Detailed analysis of the causes and global impact of World War II.',
      dateAdded: '2023-04-20',
      completed: false,
      materials: [
        { id: 11, name: 'WWII Timeline', type: 'pdf', size: '2.8 MB' },
        { id: 12, name: 'Historical Documents', type: 'zip', size: '5.2 MB' }
      ]
    },
    {
      id: 7,
      title: 'Introduction to Python Programming',
      courseId: 6,
      courseName: 'Computer Science',
      type: 'interactive',
      duration: '50 min',
      thumbnail: 'https://www.python.org/static/community_logos/python-logo.png',
      description: 'Learn the basics of Python programming with interactive exercises.',
      dateAdded: '2023-04-22',
      completed: false,
      materials: [
        { id: 13, name: 'Python Basics Handbook', type: 'pdf', size: '4.1 MB' },
        { id: 14, name: 'Sample Code Files', type: 'zip', size: '3.7 MB' }
      ]
    },
  ];

  // Filter lessons based on search term, selected course, and active tab
  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = selectedCourse ? lesson.courseId === parseInt(selectedCourse) : true;
    
    const matchesTab = activeTab === 'all' ? true : 
                      (activeTab === 'completed' ? lesson.completed : !lesson.completed);
    
    return matchesSearch && matchesCourse && matchesTab;
  });

  // Handle course selection
  const handleCourseSelect = (courseId: string | null) => {
    setSelectedCourse(courseId);
    setShowCourseDropdown(false);
  };

  // Show the appropriate icon based on lesson type
  const getLessonTypeIcon = (type: string) => {
    switch(type) {
      case 'video':
        return <FiPlay size={16} />;
      case 'reading':
        return <FiFileText size={16} />;
      case 'interactive':
        return <FiBook size={16} />;
      default:
        return <FiFile size={16} />;
    }
  };

  // Format course name for dropdown display
  const getCourseName = (courseId: string | null) => {
    if (!courseId) return 'All Courses';
    const course = courses.find(c => c.id === parseInt(courseId));
    return course ? course.name : 'All Courses';
  };

  return (
    <LessonsContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Lessons</PageTitle>
          <PageDescription>Access your course lessons and materials</PageDescription>
        </HeaderContent>
      </PageHeader>

      <FilterSection>
        <SearchBar>
          <SearchIcon>
            <FiSearch size={18} />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search lessons..." 
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
              $isActive={activeTab === 'completed'} 
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </TabButton>
          </TabsContainer>
        </FilterControls>
      </FilterSection>

      <LessonsGrid>
        {filteredLessons.map(lesson => (
          <LessonCard key={lesson.id} as={motion.div} whileHover={{ y: -5 }}>
            <LessonThumbnail $completed={lesson.completed}>
              <LessonType>
                {getLessonTypeIcon(lesson.type)}
                <span>{lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}</span>
              </LessonType>
              
              <ThumbnailImage src={lesson.thumbnail} alt={lesson.title} />
              
              <LessonDuration>
                <FiClock size={14} />
                <span>{lesson.duration}</span>
              </LessonDuration>
              
              {lesson.completed && (
                <CompletedBadge>
                  <FiCheckCircle size={16} />
                  <span>Completed</span>
                </CompletedBadge>
              )}
              
              <PlayOverlay className="play-overlay">
                <PlayButton>
                  <FiPlay size={24} />
                </PlayButton>
              </PlayOverlay>
            </LessonThumbnail>
            
            <LessonBody>
              <LessonInfo>
                <CourseName>{lesson.courseName}</CourseName>
                <LessonTitle>{lesson.title}</LessonTitle>
                <LessonDescription>{lesson.description}</LessonDescription>
              </LessonInfo>
              
              <LessonMaterials>
                <MaterialsTitle>Materials</MaterialsTitle>
                <MaterialsList>
                  {lesson.materials.map(material => (
                    <MaterialItem key={material.id}>
                      <MaterialInfo>
                        <MaterialIcon>
                          <FiFile size={14} />
                        </MaterialIcon>
                        <MaterialName>{material.name}</MaterialName>
                      </MaterialInfo>
                      <MaterialMeta>
                        <MaterialSize>{material.size}</MaterialSize>
                        <DownloadButton>
                          <FiDownload size={14} />
                        </DownloadButton>
                      </MaterialMeta>
                    </MaterialItem>
                  ))}
                </MaterialsList>
              </LessonMaterials>
            </LessonBody>
            
            <LessonFooter>
              <LessonDate>Added {new Date(lesson.dateAdded).toLocaleDateString()}</LessonDate>
              <ViewLessonButton>
                {lesson.completed ? 'Review Again' : 'Start Lesson'}
              </ViewLessonButton>
            </LessonFooter>
          </LessonCard>
        ))}
      </LessonsGrid>
      
      {filteredLessons.length === 0 && (
        <NoLessonsMessage>
          <FiVideo size={40} />
          <h3>No lessons found</h3>
          <p>Try adjusting your search or filters to find lessons</p>
        </NoLessonsMessage>
      )}
    </LessonsContainer>
  );
};

const LessonsContainer = styled.div`
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

const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const LessonCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
    
    .play-overlay {
      opacity: 1;
    }
  }
`;

interface ThumbnailProps {
  $completed: boolean;
}

const LessonThumbnail = styled.div<ThumbnailProps>`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
    pointer-events: none;
  }
  
  ${props => props.$completed && `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  `}
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const LessonType = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`;

const LessonDuration = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`;

const CompletedBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(46, 125, 50, 0.9);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 3;
`;

const PlayButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  color: #4F46E5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const LessonBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex: 1;
  background-color: ${props => props.theme.colors.background.secondary};
`;

const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CourseName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`;

const LessonTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const LessonDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.5;
`;

const LessonMaterials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const MaterialsTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const MaterialsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MaterialItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.background.hover};
  
  &:hover {
    background-color: ${props => `${props.theme.colors.primary}10`};
  }
`;

const MaterialInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MaterialIcon = styled.div`
  color: ${props => props.theme.colors.text.secondary};
`;

const MaterialName = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const MaterialMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MaterialSize = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const DownloadButton = styled.button`
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
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const LessonFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.primary};
`;

const LessonDate = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const ViewLessonButton = styled.button`
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

const NoLessonsMessage = styled.div`
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

export default Lessons; 