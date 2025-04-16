import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiSliders, FiPlus, FiBook, FiUsers, FiCalendar, FiBarChart2, FiMoreVertical, FiEye, FiEdit, FiTrash2, FiCheckCircle, FiChevronRight, FiArrowLeft } from 'react-icons/fi';

// Student interface
interface Student {
  id: string;
  name: string;
  avatar: string;
  email: string;
  attendance: number;
  grade: number;
}

// Class interface
interface Class {
  id: string;
  name: string;
  grade: string;
  room: string;
  schedule: string;
  studentsCount: number;
  students: Student[];
  progress: number;
}

// Course interface
interface Course {
  id: string;
  name: string;
  subject: string;
  description: string;
  classesCount: number;
  classes: Class[];
  coverImage: string;
}

const TeacherCourses: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
  const [gridColumns, setGridColumns] = useState<number>(3);
  const [openMenuCourse, setOpenMenuCourse] = useState<string | null>(null);
  
  // State for navigation hierarchy
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [view, setView] = useState<'courses' | 'classes' | 'students'>('courses');

  // Mock data for courses, classes, and students
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      name: 'Mathematics',
      subject: 'STEM',
      description: 'Core mathematics curriculum covering algebra, geometry, and calculus concepts',
      classesCount: 3,
      coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      classes: [
        {
          id: '1-1',
          name: 'Algebra I',
          grade: '9',
          room: 'Room 101',
          schedule: 'Mon - Wed - Fri, 9:00 AM',
          studentsCount: 32,
          progress: 75,
          students: [
            { id: '1', name: 'Emma Thompson', avatar: 'https://i.pravatar.cc/150?img=1', email: 'emma.t@school.edu', attendance: 95, grade: 88 },
            { id: '2', name: 'Noah Garcia', avatar: 'https://i.pravatar.cc/150?img=2', email: 'noah.g@school.edu', attendance: 87, grade: 92 },
            { id: '3', name: 'Olivia Martinez', avatar: 'https://i.pravatar.cc/150?img=3', email: 'olivia.m@school.edu', attendance: 98, grade: 95 },
            { id: '4', name: 'Liam Johnson', avatar: 'https://i.pravatar.cc/150?img=4', email: 'liam.j@school.edu', attendance: 90, grade: 85 },
            { id: '5', name: 'Ava Wilson', avatar: 'https://i.pravatar.cc/150?img=5', email: 'ava.w@school.edu', attendance: 92, grade: 90 },
          ]
        },
        {
          id: '1-2',
          name: 'Geometry',
          grade: '10',
          room: 'Room 102',
          schedule: 'Tue - Thu, 10:30 AM',
          studentsCount: 28,
          progress: 68,
          students: [
            { id: '6', name: 'Lucas Brown', avatar: 'https://i.pravatar.cc/150?img=6', email: 'lucas.b@school.edu', attendance: 88, grade: 79 },
            { id: '7', name: 'Sophia Davis', avatar: 'https://i.pravatar.cc/150?img=7', email: 'sophia.d@school.edu', attendance: 94, grade: 88 },
            { id: '8', name: 'Jackson Lee', avatar: 'https://i.pravatar.cc/150?img=8', email: 'jackson.l@school.edu', attendance: 85, grade: 75 },
            { id: '9', name: 'Isabella Taylor', avatar: 'https://i.pravatar.cc/150?img=9', email: 'isabella.t@school.edu', attendance: 90, grade: 86 },
            { id: '10', name: 'Aiden Miller', avatar: 'https://i.pravatar.cc/150?img=10', email: 'aiden.m@school.edu', attendance: 93, grade: 91 },
          ]
        },
        {
          id: '1-3',
          name: 'Calculus',
          grade: '11',
          room: 'Room 103',
          schedule: 'Mon - Wed - Fri, 1:15 PM',
          studentsCount: 24,
          progress: 62,
          students: [
            { id: '11', name: 'Charlotte Anderson', avatar: 'https://i.pravatar.cc/150?img=11', email: 'charlotte.a@school.edu', attendance: 97, grade: 94 },
            { id: '12', name: 'Ethan Moore', avatar: 'https://i.pravatar.cc/150?img=12', email: 'ethan.m@school.edu', attendance: 89, grade: 83 },
            { id: '13', name: 'Mia Jackson', avatar: 'https://i.pravatar.cc/150?img=13', email: 'mia.j@school.edu', attendance: 92, grade: 88 },
            { id: '14', name: 'Mason White', avatar: 'https://i.pravatar.cc/150?img=14', email: 'mason.w@school.edu', attendance: 85, grade: 79 },
            { id: '15', name: 'Amelia Harris', avatar: 'https://i.pravatar.cc/150?img=15', email: 'amelia.h@school.edu', attendance: 94, grade: 91 },
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Science',
      subject: 'STEM',
      description: 'Science education covering biology, chemistry, and physics',
      classesCount: 3,
      coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      classes: [
        {
          id: '2-1',
          name: 'Biology',
          grade: '9',
          room: 'Lab 1',
          schedule: 'Mon - Wed, 11:00 AM',
          studentsCount: 30,
          progress: 72,
          students: [
            { id: '16', name: 'Elijah Clark', avatar: 'https://i.pravatar.cc/150?img=16', email: 'elijah.c@school.edu', attendance: 88, grade: 85 },
            { id: '17', name: 'Abigail Lewis', avatar: 'https://i.pravatar.cc/150?img=17', email: 'abigail.l@school.edu', attendance: 93, grade: 90 },
            { id: '18', name: 'Benjamin Young', avatar: 'https://i.pravatar.cc/150?img=18', email: 'benjamin.y@school.edu', attendance: 86, grade: 81 },
            { id: '19', name: 'Harper Scott', avatar: 'https://i.pravatar.cc/150?img=19', email: 'harper.s@school.edu', attendance: 91, grade: 87 },
            { id: '20', name: 'Daniel Hall', avatar: 'https://i.pravatar.cc/150?img=20', email: 'daniel.h@school.edu', attendance: 95, grade: 92 },
          ]
        },
        {
          id: '2-2',
          name: 'Chemistry',
          grade: '10',
          room: 'Lab 2',
          schedule: 'Tue - Thu, 1:30 PM',
          studentsCount: 26,
          progress: 65,
          students: [
            { id: '21', name: 'Joseph Green', avatar: 'https://i.pravatar.cc/150?img=21', email: 'joseph.g@school.edu', attendance: 90, grade: 85 },
            { id: '22', name: 'Victoria Allen', avatar: 'https://i.pravatar.cc/150?img=22', email: 'victoria.a@school.edu', attendance: 94, grade: 91 },
            { id: '23', name: 'Samuel Walker', avatar: 'https://i.pravatar.cc/150?img=23', email: 'samuel.w@school.edu', attendance: 87, grade: 79 },
            { id: '24', name: 'Grace Adams', avatar: 'https://i.pravatar.cc/150?img=24', email: 'grace.a@school.edu', attendance: 92, grade: 88 },
            { id: '25', name: 'David Nelson', avatar: 'https://i.pravatar.cc/150?img=25', email: 'david.n@school.edu', attendance: 89, grade: 84 },
          ]
        },
        {
          id: '2-3',
          name: 'Physics',
          grade: '11',
          room: 'Lab 3',
          schedule: 'Mon - Wed - Fri, 2:45 PM',
          studentsCount: 24,
          progress: 58,
          students: [
            { id: '26', name: 'Lily Robinson', avatar: 'https://i.pravatar.cc/150?img=26', email: 'lily.r@school.edu', attendance: 95, grade: 94 },
            { id: '27', name: 'Andrew King', avatar: 'https://i.pravatar.cc/150?img=27', email: 'andrew.k@school.edu', attendance: 88, grade: 86 },
            { id: '28', name: 'Sofia Wright', avatar: 'https://i.pravatar.cc/150?img=28', email: 'sofia.w@school.edu', attendance: 92, grade: 89 },
            { id: '29', name: 'Matthew Turner', avatar: 'https://i.pravatar.cc/150?img=29', email: 'matthew.t@school.edu', attendance: 86, grade: 82 },
            { id: '30', name: 'Chloe Phillips', avatar: 'https://i.pravatar.cc/150?img=30', email: 'chloe.p@school.edu', attendance: 90, grade: 85 },
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'English Literature',
      subject: 'Humanities',
      description: 'English literature curriculum covering classic and contemporary works',
      classesCount: 2,
      coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      classes: [
        {
          id: '3-1',
          name: 'American Literature',
          grade: '10',
          room: 'Room 201',
          schedule: 'Mon - Wed - Fri, 10:15 AM',
          studentsCount: 28,
          progress: 80,
          students: [
            { id: '31', name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=31', email: 'james.w@school.edu', attendance: 93, grade: 89 },
            { id: '32', name: 'Evelyn Thomas', avatar: 'https://i.pravatar.cc/150?img=32', email: 'evelyn.t@school.edu', attendance: 97, grade: 95 },
            { id: '33', name: 'Henry Carter', avatar: 'https://i.pravatar.cc/150?img=33', email: 'henry.c@school.edu', attendance: 89, grade: 82 },
            { id: '34', name: 'Elizabeth Mitchell', avatar: 'https://i.pravatar.cc/150?img=34', email: 'elizabeth.m@school.edu', attendance: 94, grade: 91 },
            { id: '35', name: 'Alexander Perez', avatar: 'https://i.pravatar.cc/150?img=35', email: 'alexander.p@school.edu', attendance: 90, grade: 87 },
          ]
        },
        {
          id: '3-2',
          name: 'British Literature',
          grade: '11',
          room: 'Room 202',
          schedule: 'Tue - Thu, 9:30 AM',
          studentsCount: 26,
          progress: 75,
          students: [
            { id: '36', name: 'Scarlett Roberts', avatar: 'https://i.pravatar.cc/150?img=36', email: 'scarlett.r@school.edu', attendance: 92, grade: 88 },
            { id: '37', name: 'Sebastian Cook', avatar: 'https://i.pravatar.cc/150?img=37', email: 'sebastian.c@school.edu', attendance: 85, grade: 79 },
            { id: '38', name: 'Penelope Reed', avatar: 'https://i.pravatar.cc/150?img=38', email: 'penelope.r@school.edu', attendance: 95, grade: 93 },
            { id: '39', name: 'Christian Bailey', avatar: 'https://i.pravatar.cc/150?img=39', email: 'christian.b@school.edu', attendance: 88, grade: 84 },
            { id: '40', name: 'Violet Cox', avatar: 'https://i.pravatar.cc/150?img=40', email: 'violet.c@school.edu', attendance: 93, grade: 90 },
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'History',
      subject: 'Humanities',
      description: 'History curriculum covering world, European, and American history',
      classesCount: 2,
      coverImage: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      classes: [
        {
          id: '4-1',
          name: 'World History',
          grade: '9',
          room: 'Room 301',
          schedule: 'Mon - Wed - Fri, 8:45 AM',
          studentsCount: 34,
          progress: 85,
          students: [
            { id: '41', name: 'Julian Howard', avatar: 'https://i.pravatar.cc/150?img=41', email: 'julian.h@school.edu', attendance: 91, grade: 87 },
            { id: '42', name: 'Madeline Ward', avatar: 'https://i.pravatar.cc/150?img=42', email: 'madeline.w@school.edu', attendance: 96, grade: 94 },
            { id: '43', name: 'Theodore Torres', avatar: 'https://i.pravatar.cc/150?img=43', email: 'theodore.t@school.edu', attendance: 88, grade: 83 },
            { id: '44', name: 'Audrey Powell', avatar: 'https://i.pravatar.cc/150?img=44', email: 'audrey.p@school.edu', attendance: 93, grade: 90 },
            { id: '45', name: 'Elias Long', avatar: 'https://i.pravatar.cc/150?img=45', email: 'elias.l@school.edu', attendance: 89, grade: 85 },
          ]
        },
        {
          id: '4-2',
          name: 'American History',
          grade: '10',
          room: 'Room 302',
          schedule: 'Tue - Thu, 1:00 PM',
          studentsCount: 30,
          progress: 78,
          students: [
            { id: '46', name: 'Skylar Gray', avatar: 'https://i.pravatar.cc/150?img=46', email: 'skylar.g@school.edu', attendance: 94, grade: 92 },
            { id: '47', name: 'Roman Wells', avatar: 'https://i.pravatar.cc/150?img=47', email: 'roman.w@school.edu', attendance: 87, grade: 81 },
            { id: '48', name: 'Claire Barnes', avatar: 'https://i.pravatar.cc/150?img=48', email: 'claire.b@school.edu', attendance: 92, grade: 89 },
            { id: '49', name: 'Miles Coleman', avatar: 'https://i.pravatar.cc/150?img=49', email: 'miles.c@school.edu', attendance: 85, grade: 78 },
            { id: '50', name: 'Willow Russell', avatar: 'https://i.pravatar.cc/150?img=50', email: 'willow.r@school.edu', attendance: 90, grade: 86 },
          ]
        }
      ]
    },
    {
      id: '5',
      name: 'Physical Education',
      subject: 'Athletics',
      description: 'Physical education program developing fitness, teamwork, and sports skills',
      classesCount: 1,
      coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      classes: [
        {
          id: '5-1',
          name: 'General PE',
          grade: 'All',
          room: 'Gymnasium',
          schedule: 'Mon - Fri, 2:00 PM',
          studentsCount: 40,
          progress: 90,
          students: [
            { id: '51', name: 'Nolan Kelly', avatar: 'https://i.pravatar.cc/150?img=51', email: 'nolan.k@school.edu', attendance: 97, grade: 96 },
            { id: '52', name: 'Naomi Griffin', avatar: 'https://i.pravatar.cc/150?img=52', email: 'naomi.g@school.edu', attendance: 94, grade: 92 },
            { id: '53', name: 'Caleb Dixon', avatar: 'https://i.pravatar.cc/150?img=53', email: 'caleb.d@school.edu', attendance: 90, grade: 89 },
            { id: '54', name: 'Hazel Warren', avatar: 'https://i.pravatar.cc/150?img=54', email: 'hazel.w@school.edu', attendance: 95, grade: 93 },
            { id: '55', name: 'Isaac Sullivan', avatar: 'https://i.pravatar.cc/150?img=55', email: 'isaac.s@school.edu', attendance: 93, grade: 91 },
          ]
        }
      ]
    },
    {
      id: '6',
      name: 'Fine Arts',
      subject: 'Arts',
      description: 'Fine arts education covering visual arts, music, and theater',
      classesCount: 2,
      coverImage: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      classes: [
        {
          id: '6-1',
          name: 'Visual Arts',
          grade: 'All',
          room: 'Art Studio',
          schedule: 'Mon - Wed, 1:45 PM',
          studentsCount: 24,
          progress: 88,
          students: [
            { id: '56', name: 'Lila Mason', avatar: 'https://i.pravatar.cc/150?img=56', email: 'lila.m@school.edu', attendance: 96, grade: 94 },
            { id: '57', name: 'Zane Spencer', avatar: 'https://i.pravatar.cc/150?img=57', email: 'zane.s@school.edu', attendance: 89, grade: 86 },
            { id: '58', name: 'Elise Crawford', avatar: 'https://i.pravatar.cc/150?img=58', email: 'elise.c@school.edu', attendance: 93, grade: 90 },
            { id: '59', name: 'Felix Ferguson', avatar: 'https://i.pravatar.cc/150?img=59', email: 'felix.f@school.edu', attendance: 88, grade: 84 },
            { id: '60', name: 'Gemma Holland', avatar: 'https://i.pravatar.cc/150?img=60', email: 'gemma.h@school.edu', attendance: 95, grade: 93 },
          ]
        },
        {
          id: '6-2',
          name: 'Music',
          grade: 'All',
          room: 'Music Hall',
          schedule: 'Tue - Thu, 3:30 PM',
          studentsCount: 22,
          progress: 82,
          students: [
            { id: '61', name: 'Oscar Kennedy', avatar: 'https://i.pravatar.cc/150?img=61', email: 'oscar.k@school.edu', attendance: 92, grade: 89 },
            { id: '62', name: 'Iris Parsons', avatar: 'https://i.pravatar.cc/150?img=62', email: 'iris.p@school.edu', attendance: 97, grade: 95 },
            { id: '63', name: 'Dean Lambert', avatar: 'https://i.pravatar.cc/150?img=63', email: 'dean.l@school.edu', attendance: 85, grade: 80 },
            { id: '64', name: 'Rosalie Lawson', avatar: 'https://i.pravatar.cc/150?img=64', email: 'rosalie.l@school.edu', attendance: 90, grade: 87 },
            { id: '65', name: 'Hugo Wade', avatar: 'https://i.pravatar.cc/150?img=65', email: 'hugo.w@school.edu', attendance: 94, grade: 91 },
          ]
        }
      ]
    }
  ]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuCourse(null);
      setShowFilterDropdown(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setShowFilterDropdown(false);
  };

  // Filter courses based on search term and selected filter
  const filteredCourses = courses.filter(course => {
    return course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           course.subject.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Navigation functions
  const navigateToCourse = (course: Course) => {
    setSelectedCourse(course);
    setView('classes');
  };

  const navigateToClass = (classItem: Class) => {
    setSelectedClass(classItem);
    setView('students');
  };

  const navigateBack = () => {
    if (view === 'students') {
      setView('classes');
      setSelectedClass(null);
    } else if (view === 'classes') {
      setView('courses');
      setSelectedCourse(null);
    }
  };
  
  // Function to render the appropriate view
  const renderView = () => {
    switch (view) {
      case 'courses':
        return renderCoursesView();
      case 'classes':
        return renderClassesView();
      case 'students':
        return renderStudentsView();
      default:
        return renderCoursesView();
    }
  };

  // Render courses view
  const renderCoursesView = () => {
    return (
      <>
        <PageHeader>
          <div>
            <PageTitle>My Courses</PageTitle>
            <PageDescription>Manage your teaching courses and subjects</PageDescription>
          </div>
          
          <HeaderActions>
            <ActionButton>
              <FiPlus />
              <span>Add New Course</span>
            </ActionButton>
          </HeaderActions>
        </PageHeader>
        
        <SearchFilterBar>
          <SearchBox>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Search courses by name or subject..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchBox>
          
          <FilterContainer>
            <FilterButton onClick={(e) => {
              e.stopPropagation();
              setShowFilterDropdown(!showFilterDropdown);
            }}>
              <FiFilter />
              <span>Filter</span>
            </FilterButton>
            
            {showFilterDropdown && (
              <AnimatePresence>
                <FilterDropdown
                  as={motion.div}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <FilterOption 
                    $isActive={selectedFilter === 'all'}
                    onClick={() => handleFilterChange('all')}
                  >
                    All Courses
                  </FilterOption>
                  <FilterOption 
                    $isActive={selectedFilter === 'stem'}
                    onClick={() => handleFilterChange('stem')}
                  >
                    STEM
                  </FilterOption>
                  <FilterOption 
                    $isActive={selectedFilter === 'humanities'}
                    onClick={() => handleFilterChange('humanities')}
                  >
                    Humanities
                  </FilterOption>
                  <FilterOption 
                    $isActive={selectedFilter === 'arts'}
                    onClick={() => handleFilterChange('arts')}
                  >
                    Arts
                  </FilterOption>
                </FilterDropdown>
              </AnimatePresence>
            )}
          </FilterContainer>
          
          <FilterContainer>
            <FilterButton onClick={() => {
              setGridColumns(gridColumns === 3 ? 2 : 3);
            }}>
              <FiSliders />
              <span>Layout</span>
            </FilterButton>
          </FilterContainer>
        </SearchFilterBar>
        
        {filteredCourses.length === 0 ? (
          <EmptyState>
            <EmptyIcon>
              <FiBook style={{ fontSize: '2rem' }} />
            </EmptyIcon>
            <EmptyTitle>No Courses Found</EmptyTitle>
            <EmptyDescription>
              We couldn't find any courses matching your search criteria. Try adjusting your filters or create a new course.
            </EmptyDescription>
          </EmptyState>
        ) : (
          <CoursesGrid $columns={gridColumns}>
            {filteredCourses.map(course => (
              <CourseCard 
                key={course.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => navigateToCourse(course)}
              >
                <CourseCardTop>
                  <CourseImage $imageUrl={course.coverImage} />
                  <CourseSubject>{course.subject}</CourseSubject>
                  <CourseMenu onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuCourse(openMenuCourse === course.id ? null : course.id);
                  }}>
                    <FiMoreVertical />
                    
                    {openMenuCourse === course.id && (
                      <CourseMenuDropdown
                        as={motion.div}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MenuOption onClick={(e) => {
                          e.stopPropagation();
                          navigateToCourse(course);
                        }}>
                          <FiEye />
                          <span>View Classes</span>
                        </MenuOption>
                        <MenuOption onClick={(e) => {
                          e.stopPropagation();
                        }}>
                          <FiEdit />
                          <span>Edit Course</span>
                        </MenuOption>
                        <MenuOption onClick={(e) => {
                          e.stopPropagation();
                        }}>
                          <FiTrash2 />
                          <span>Delete Course</span>
                        </MenuOption>
                      </CourseMenuDropdown>
                    )}
                  </CourseMenu>
                </CourseCardTop>
                
                <CourseCardContent>
                  <CourseTitle>{course.name}</CourseTitle>
                  <CourseDescription>{course.description}</CourseDescription>
                  
                  <CourseStats>
                    <StatItem>
                      <StatIcon $type="classes">
                        <FiBook />
                      </StatIcon>
                      <StatValue>{course.classesCount} Classes</StatValue>
                    </StatItem>
                    
                    <StatItem>
                      <StatIcon $type="students">
                        <FiUsers />
                      </StatIcon>
                      <StatValue>
                        {course.classes.reduce((total, cls) => total + cls.studentsCount, 0)} Students
                      </StatValue>
                    </StatItem>
                  </CourseStats>
                  
                  <ViewCourseButton onClick={() => navigateToCourse(course)}>
                    <span>View Classes</span>
                    <FiChevronRight />
                  </ViewCourseButton>
                </CourseCardContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        )}
      </>
    );
  };

  // Render classes view
  const renderClassesView = () => {
    if (!selectedCourse) return null;
    
    return (
      <>
        <PageHeader>
          <div>
            <BackButton onClick={navigateBack}>
              <FiArrowLeft />
              <span>Back to Courses</span>
            </BackButton>
            <PageTitle>{selectedCourse.name} Classes</PageTitle>
            <PageDescription>View and manage classes for {selectedCourse.name}</PageDescription>
          </div>
          
          <HeaderActions>
            <ActionButton>
              <FiPlus />
              <span>Add New Class</span>
            </ActionButton>
          </HeaderActions>
        </PageHeader>
        
        <ClassesGrid>
          {selectedCourse.classes.map(classItem => (
            <ClassCard 
              key={classItem.id}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => navigateToClass(classItem)}
            >
              <ClassCardHeader>
                <ClassTitle>{classItem.name}</ClassTitle>
                <ClassGrade>Grade {classItem.grade}</ClassGrade>
              </ClassCardHeader>
              
              <ClassCardContent>
                <ClassInfo>
                  <InfoItem>
                    <InfoIcon>
                      <FiUsers />
                    </InfoIcon>
                    <InfoText>{classItem.studentsCount} Students</InfoText>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoIcon>
                      <FiCalendar />
                    </InfoIcon>
                    <InfoText>{classItem.schedule.split(',')[0]}</InfoText>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoIcon>
                      <FiBook />
                    </InfoIcon>
                    <InfoText>{classItem.room}</InfoText>
                  </InfoItem>
                </ClassInfo>
                
                <ClassProgress>
                  <ProgressLabel>Class Progress</ProgressLabel>
                  <ProgressBar>
                    <ProgressFill $percentage={classItem.progress} />
                  </ProgressBar>
                  <ProgressValue>{classItem.progress}%</ProgressValue>
                </ClassProgress>
                
                <ViewClassButton onClick={() => navigateToClass(classItem)}>
                  <span>View Students</span>
                  <FiChevronRight />
                </ViewClassButton>
              </ClassCardContent>
            </ClassCard>
          ))}
        </ClassesGrid>
      </>
    );
  };

  // Render students view
  const renderStudentsView = () => {
    if (!selectedClass) return null;
    
    return (
      <>
        <PageHeader>
          <div>
            <BackButton onClick={navigateBack}>
              <FiArrowLeft />
              <span>Back to Classes</span>
            </BackButton>
            <PageTitle>{selectedClass.name} Students</PageTitle>
            <PageDescription>{selectedClass.studentsCount} students enrolled in {selectedClass.name}</PageDescription>
          </div>
          
          <HeaderActions>
            <ActionButton>
              <FiPlus />
              <span>Add Student</span>
            </ActionButton>
          </HeaderActions>
        </PageHeader>
        
        <StudentsContainer>
          <StudentsTable>
            <thead>
              <TableRow>
                <TableHeader>Student</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Attendance</TableHeader>
                <TableHeader>Grade</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {selectedClass.students.map(student => (
                <TableRow 
                  key={student.id}
                  as={motion.tr}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <TableCell>
                    <StudentProfileCell>
                      <StudentAvatar src={student.avatar} alt={student.name} />
                      <StudentName>{student.name}</StudentName>
                    </StudentProfileCell>
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <AttendanceCell $value={student.attendance}>
                      {student.attendance}%
                    </AttendanceCell>
                  </TableCell>
                  <TableCell>
                    <GradeCell $value={student.grade}>
                      {student.grade}%
                    </GradeCell>
                  </TableCell>
                  <TableCell>
                    <ActionButtons>
                      <ActionIconButton title="View Details">
                        <FiEye />
                      </ActionIconButton>
                      <ActionIconButton title="Edit Student">
                        <FiEdit />
                      </ActionIconButton>
                    </ActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </StudentsTable>
        </StudentsContainer>
      </>
    );
  };

  return (
    <CoursesContainer>
      {renderView()}
    </CoursesContainer>
  );
};

const CoursesContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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
  margin: 0.5rem 0 0;
  color: ${props => props.theme.colors.text.secondary};
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary[500]};
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0;
  margin-bottom: 1rem;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary[600]};
    text-decoration: underline;
  }
`;

interface ActionButtonProps {
  $small?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${props => props.$small ? '0.5rem 0.75rem' : '0.75rem 1rem'};
  background-color: ${props => props.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.$small ? '0.75rem' : '0.875rem'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.theme.shadows.sm};
  
  svg {
    font-size: ${props => props.$small ? '0.875rem' : '1rem'};
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }
`;

const SearchFilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.tertiary};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[300]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
`;

const FilterContainer = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
`;

const FilterDropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 200px;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 10;
  overflow: hidden;
`;

interface FilterOptionProps {
  $isActive: boolean;
}

const FilterOption = styled.div<FilterOptionProps>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${props => props.$isActive ? props.theme.colors.background.tertiary : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors.primary[500] : props.theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? '500' : 'normal'};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
`;

interface CoursesGridProps {
  $columns: number;
}

const CoursesGrid = styled.div<CoursesGridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.border.light};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const CourseCardTop = styled.div`
  position: relative;
  height: 140px;
`;

interface CourseImageProps {
  $imageUrl: string;
}

const CourseImage = styled.div<CourseImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

const CourseSubject = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.md};
`;

const CourseMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CourseMenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 20;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const MenuOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.primary};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const CourseCardContent = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const CourseDescription = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0 0 1.5rem;
  line-height: 1.5;
`;

const CourseStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface StatIconProps {
  $type: 'students' | 'schedule' | 'classes';
}

const StatIcon = styled.div<StatIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.$type === 'students') return props.theme.mode === 'dark' ? props.theme.colors.primary[800] : props.theme.colors.primary[100];
    if (props.$type === 'classes') return props.theme.mode === 'dark' ? props.theme.colors.warning[800] : props.theme.colors.warning[100];
    return props.theme.mode === 'dark' ? props.theme.colors.success[800] : props.theme.colors.success[100];
  }};
  color: ${props => {
    if (props.$type === 'students') return props.theme.colors.primary[500];
    if (props.$type === 'classes') return props.theme.colors.warning[500];
    return props.theme.colors.success[500];
  }};
`;

const StatValue = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const ViewCourseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.primary[800] : props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.primary[500]};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.primary[700] : props.theme.colors.primary[50]};
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ClassCard = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${props => props.theme.colors.border.light};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const ClassCardHeader = styled.div`
  padding: 1.25rem;
  background-color: ${props => props.theme.colors.primary[600]};
  color: ${props => props.theme.mode === 'dark' ? props.theme.colors.text.white : 'white'};
`;

const ClassTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
`;

const ClassGrade = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const ClassCardContent = styled.div`
  padding: 1.25rem;
`;

const ClassInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.background.secondary : props.theme.colors.background.tertiary};
  color: ${props => props.theme.mode === 'dark' ? props.theme.colors.text.secondary : props.theme.colors.text.secondary};
`;

const InfoText = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.primary};
`;

const ClassProgress = styled.div`
  margin-bottom: 1.5rem;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.background.secondary : props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

interface ProgressFillProps {
  $percentage: number;
}

const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  width: ${props => props.$percentage}%;
  background-color: ${props => {
    if (props.$percentage >= 80) return props.theme.mode === 'dark' ? props.theme.colors.success[400] : props.theme.colors.success[500];
    if (props.$percentage >= 40) return props.theme.mode === 'dark' ? props.theme.colors.warning[400] : props.theme.colors.warning[500];
    return props.theme.mode === 'dark' ? props.theme.colors.danger[400] : props.theme.colors.danger[500];
  }};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: width 0.3s ease;
`;

const ProgressValue = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  text-align: right;
`;

const ViewClassButton = styled(ViewCourseButton)``;

const StudentsContainer = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
  border: 1px solid ${props => props.theme.colors.border.light};
`;

const StudentsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const TableRow = styled.tr`
  &:hover td {
    background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.background.secondary : props.theme.colors.background.tertiary};
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.background.secondary : props.theme.colors.background.tertiary};
`;

const TableCell = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.primary};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const StudentProfileCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StudentAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.primary[100]};
`;

const StudentName = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

interface MetricCellProps {
  $value: number;
}

const AttendanceCell = styled.div<MetricCellProps>`
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  font-weight: 500;
  font-size: 0.75rem;
  display: inline-block;
  background-color: ${props => {
    if (props.$value >= 90) return props.theme.mode === 'dark' ? props.theme.colors.success[900] : props.theme.colors.success[100];
    if (props.$value >= 75) return props.theme.mode === 'dark' ? props.theme.colors.warning[900] : props.theme.colors.warning[100];
    return props.theme.mode === 'dark' ? props.theme.colors.danger[900] : props.theme.colors.danger[100];
  }};
  color: ${props => {
    if (props.$value >= 90) return props.theme.mode === 'dark' ? props.theme.colors.success[300] : props.theme.colors.success[700];
    if (props.$value >= 75) return props.theme.mode === 'dark' ? props.theme.colors.warning[300] : props.theme.colors.warning[700];
    return props.theme.mode === 'dark' ? props.theme.colors.danger[300] : props.theme.colors.danger[700];
  }};
`;

const GradeCell = styled(AttendanceCell)``;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.background.secondary : props.theme.colors.background.tertiary};
  color: ${props => props.theme.mode === 'dark' ? props.theme.colors.text.primary : props.theme.colors.text.secondary};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[100]};
    color: ${props => props.theme.colors.primary[500]};
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  border: 1px solid ${props => props.theme.colors.border.light};
`;

const EmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.primary[500]};
  margin-bottom: 1.5rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const EmptyDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.secondary};
  max-width: 400px;
  margin: 0;
`;

export default TeacherCourses; 