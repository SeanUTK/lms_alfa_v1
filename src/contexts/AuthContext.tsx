import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type UserRole = 'admin' | 'teacher' | 'student';

interface User {
  username: string;
  role: UserRole;
  fullName?: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string, role: UserRole) => boolean;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  updatePassword: (currentPassword: string, newPassword: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Check for saved auth on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('lms_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        console.log("Loaded user from localStorage:", parsedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error('Failed to parse saved user', e);
        localStorage.removeItem('lms_user');
      }
    }
  }, []);

  // Demo account validation
  const validateCredentials = (username: string, password: string, role: UserRole): boolean => {
    // In a real app, this would be an API call
    return username === role && password === '123456';
  };

  const login = (username: string, password: string, role: UserRole): boolean => {
    console.log("Attempting login:", { username, role });
    if (validateCredentials(username, password, role)) {
      // For demo purposes, set default values for fullName and email
      const fullName = role === 'admin' ? 'Admin User' : 
                      role === 'teacher' ? 'Teacher User' : 
                      'Student User';
      
      const email = `${role}@example.com`;
      
      const newUser = { username, role, fullName, email };
      setUser(newUser);
      localStorage.setItem('lms_user', JSON.stringify(newUser));
      console.log("Login successful, user set:", newUser);
      return true;
    }
    console.log("Login failed: Invalid credentials");
    return false;
  };

  const logout = () => {
    console.log("Logout function called in AuthContext");
    try {
      // Clear user state
      setUser(null);
      console.log("User state cleared");
      
      // Remove from localStorage
      localStorage.removeItem('lms_user');
      console.log("User removed from localStorage");
      
      // Navigate to login page
      console.log("Navigating to login page");
      navigate('/login');
      console.log("Navigation completed");
    } catch (error) {
      console.error("Error during logout process:", error);
    }
  };

  // Update user profile information
  const updateProfile = (userData: Partial<User>) => {
    if (!user) return;
    
    // In a real app, this would be an API call
    // For now, just update the local state and localStorage
    const updatedUser = { ...user, ...userData };
    
    // Don't allow role updates through this method
    updatedUser.role = user.role;
    
    setUser(updatedUser);
    localStorage.setItem('lms_user', JSON.stringify(updatedUser));
    
    console.log("Profile updated:", updatedUser);
    return true;
  };

  // Update user password
  const updatePassword = (currentPassword: string, _newPassword: string): boolean => {
    // In a real app, this would verify the current password and update to the new one
    // For this demo, we'll just check if the current password matches the demo password
    if (currentPassword === '123456') {
      console.log("Password updated successfully");
      return true;
    }
    
    console.log("Password update failed: incorrect current password");
    return false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout,
      updateProfile,
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 