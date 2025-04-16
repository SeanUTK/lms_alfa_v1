import { useState, createContext, useContext } from 'react'
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { createTheme } from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import AdminLayout from './layouts/AdminLayout'
import TeacherLayout from './layouts/TeacherLayout'
import StudentLayout from './layouts/StudentLayout'
import Dashboard from './pages/admin/Dashboard'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import StudentDashboard from './pages/student/StudentDashboard'
import TeacherCourses from './pages/teacher/TeacherCourses'
import TeacherStudents from './pages/teacher/TeacherStudents'
import TeacherAssignments from './pages/teacher/TeacherAssignments'
import TeacherGrades from './pages/teacher/TeacherGrades'
import Users from './pages/admin/Users'
import Subjects from './pages/admin/Subjects'
import Classes from './pages/admin/Classes'
import Timetables from './pages/admin/Timetables'
import Roles from './pages/admin/Roles'
import Settings from './pages/admin/Settings'
import ProfilePage from './pages/admin/ProfilePage'
import Login from './pages/auth/Login'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import TeacherSchedule from './pages/teacher/TeacherSchedule'
import TeacherMessages from './pages/teacher/TeacherMessages'
import MyCourses from './pages/student/MyCourses'
import Lessons from './pages/student/Lessons'
import Assignments from './pages/student/Assignments'
import Schedule from './pages/student/Schedule'
import Messages from './pages/student/Messages'
import Tests from './pages/student/Tests'
import Flashcards from './pages/student/Flashcards'
import Announcements from './pages/student/Announcements'

// Create a context for theme settings
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setPrimaryColor: (color: string) => void;
  primaryColor: string;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

// Hook to use theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// Protected route component
interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole?: 'admin' | 'teacher' | 'student';
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the login page but save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role if specified
  if (requiredRole && user?.role !== requiredRole) {
    // Redirect to their dashboard if logged in but wrong role
    return <Navigate to={`/${user?.role}/dashboard`} replace />;
  }

  return children;
};

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [primaryColor, setPrimaryColor] = useState('#0ea5e9')
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Create theme based on current settings
  const theme = createTheme(isDarkMode ? 'dark' : 'light', primaryColor);

  // Theme context value
  const themeContextValue: ThemeContextType = {
    isDarkMode,
    toggleTheme,
    primaryColor,
    setPrimaryColor
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme as unknown as DefaultTheme}>
        <GlobalStyle />
        <Routes>
          {/* Redirect root to login page */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="roles" element={<Roles />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="classes" element={<Classes />} />
            <Route path="timetables" element={<Timetables />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          
          {/* Teacher routes */}
          <Route path="/teacher" element={
            <ProtectedRoute requiredRole="teacher">
              <TeacherLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="courses" element={<TeacherCourses />} />
            <Route path="courses/:courseId" element={<div>Course Details (Coming Soon)</div>} />
            <Route path="students" element={<TeacherStudents />} />
            <Route path="assignments" element={<TeacherAssignments />} />
            <Route path="grades" element={<TeacherGrades />} />
            <Route path="schedule" element={<TeacherSchedule />} />
            <Route path="messages" element={<TeacherMessages />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Student routes */}
          <Route path="/student" element={
            <ProtectedRoute requiredRole="student">
              <StudentLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/student/dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="messages" element={<Messages />} />
            <Route path="tests" element={<Tests />} />
            <Route path="flashcards" element={<Flashcards />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App
