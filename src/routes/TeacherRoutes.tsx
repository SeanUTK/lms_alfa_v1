import { Routes, Route, Navigate } from 'react-router-dom';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
// import TeacherProfile from '../pages/teacher/TeacherProfile'; // Commented out since module not found
import TeacherStudents from '../pages/teacher/TeacherStudents';
import TeacherSchedule from '../pages/teacher/TeacherSchedule';

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/teacher/dashboard" replace />} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      {/* <Route path="/profile" element={<TeacherProfile />} /> */}
      <Route path="/students" element={<TeacherStudents />} />
      <Route path="/schedule" element={<TeacherSchedule />} />
    </Routes>
  );
};

export default TeacherRoutes; 