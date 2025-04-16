import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiSettings, FiHome, FiChevronLeft, FiChevronRight,   FiCalendar, FiMenu, FiX,  FiLayers,  FiUser, FiFileText, FiVideo,  FiMessageSquare, FiClipboard, FiBell } from 'react-icons/fi';
import LogoutButton from '../common/LogoutButton';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  onMobileToggle?: (isOpen: boolean) => void;
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, to, isCollapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <MenuItemContainer 
      to={to}
      $isActive={isActive}
      $isCollapsed={isCollapsed}
    >
      <IconWrapper>
        {icon}
      </IconWrapper>
      <AnimatePresence>
        {!isCollapsed && (
          <MenuLabel
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </MenuLabel>
        )}
      </AnimatePresence>
      {isActive && (
        <ActiveIndicator 
          layoutId="activeIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </MenuItemContainer>
  );
};

const StudentSidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar, onMobileToggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user } = useAuth();

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileToggle = () => {
    const newState = !isMobileOpen;
    setIsMobileOpen(newState);
    if (onMobileToggle) {
      onMobileToggle(newState);
    }
  };

  // Get user initials for profile display
  const getUserInitials = () => {
    if (!user || !user.username) return 'U';
    
    if (user.fullName) {
      const nameParts = user.fullName.split(' ');
      if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
      return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
    }
    
    return user.username.charAt(0).toUpperCase();
  };

  // Get full name display
  const getFullName = () => {
    return user?.fullName || user?.username || 'User';
  };

  // Student menu items
  const studentMenu = [
    { path: '/student/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/student/announcements', icon: <FiBell />, label: 'Announcements' },
    { path: '/student/courses', icon: <FiBook />, label: 'My Courses' },
    { path: '/student/lessons', icon: <FiVideo />, label: 'Lessons' },
    { path: '/student/assignments', icon: <FiFileText />, label: 'Assignments' },
    { path: '/student/schedule', icon: <FiCalendar />, label: 'Schedule' },
    { path: '/student/messages', icon: <FiMessageSquare />, label: 'Messages' },
    { path: '/student/tests', icon: <FiClipboard />, label: 'Tests' },
    { path: '/student/flashcards', icon: <FiLayers />, label: 'Flashcards' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <MobileMenuButton onClick={handleMobileToggle}>
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      )}
      
      <AnimatePresence>
        {(isMobile ? isMobileOpen : true) && (
          <SidebarContainer 
            $isCollapsed={isMobile ? false : isCollapsed}
            $isMobile={isMobile}
            as={motion.aside}
            initial={{ x: isMobile ? -300 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobile ? -300 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LogoContainer $isCollapsed={isMobile ? false : isCollapsed}>
              {isCollapsed && !isMobile ? (
                <SmallLogo>LMS</SmallLogo>
              ) : (
                <Logo>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Learning Management System
                  </motion.span>
                </Logo>
              )}
              
              {isMobile ? (
                <CloseButton onClick={handleMobileToggle}>
                  <FiX />
                </CloseButton>
              ) : (
                <ToggleButton onClick={toggleSidebar}>
                  {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </ToggleButton>
              )}
            </LogoContainer>

            <MenuContainer>
              <MenuSection>
                {studentMenu.map((item) => (
                  <MenuItem 
                    key={item.path}
                    icon={item.icon} 
                    label={item.label} 
                    to={item.path} 
                    isCollapsed={isMobile ? false : isCollapsed}
                  />
                ))}
              </MenuSection>

              <MenuSection>
                <AnimatePresence>
                  {(!isCollapsed || isMobile) && (
                    <SectionLabel
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      System
                    </SectionLabel>
                  )}
                </AnimatePresence>

                <MenuItem 
                  icon={<FiUser />} 
                  label="Profile" 
                  to="/student/profile"
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
                <MenuItem 
                  icon={<FiSettings />} 
                  label="Settings" 
                  to="/student/settings"
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
              </MenuSection>
            </MenuContainer>

            <ProfileSection $isCollapsed={isMobile ? false : isCollapsed}>
              <ProfileImage>
                {getUserInitials()}
              </ProfileImage>
              <AnimatePresence>
                {(!isCollapsed || isMobile) && (
                  <ProfileInfo
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProfileName>{getFullName()}</ProfileName>
                    <ProfileRole>Student</ProfileRole>
                  </ProfileInfo>
                )}
              </AnimatePresence>
              <SidebarLogoutButton 
                variant="secondary"
                size="small"
                showText={false}
              />
            </ProfileSection>
            
            {isMobile && <MobileOverlay onClick={handleMobileToggle} />}
          </SidebarContainer>
        )}
      </AnimatePresence>
      
      {/* Background Overlay for Mobile */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <Overlay 
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleMobileToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface CollapsibleProps {
  $isCollapsed: boolean;
  $isMobile?: boolean;
}

const SidebarContainer = styled(motion.aside)<CollapsibleProps>`
  height: 100%;
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.theme.zIndices.modal};
  
  width: ${({ $isCollapsed, $isMobile }) => {
    if ($isMobile) return '300px';
    return $isCollapsed ? '80px' : '280px';
  }};
  transition: width ${props => props.theme.transition.normal} ease;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    position: fixed;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${props => props.theme.zIndices.overlay};
`;

const MobileMenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${props => props.theme.spacing[5]};
  z-index: ${props => props.theme.zIndices.sticky};
  box-shadow: ${props => props.theme.shadows.md};
  
  &:hover {
    background: ${props => props.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const LogoContainer = styled.div<CollapsibleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.$isCollapsed ? '0 0.5rem' : '0 1rem'};
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary[600]};
  white-space: nowrap;
`;

const SmallLogo = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary[600]};
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const CloseButton = styled(ToggleButton)`
  color: ${props => props.theme.colors.text.secondary};
  
  &:hover {
    color: ${props => props.theme.colors.text.primary};
  }
`;

const MenuContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${props => props.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[1]};
`;

interface MenuItemContainerProps {
  $isActive: boolean;
  $isCollapsed: boolean;
}

const MenuItemContainer = styled(NavLink)<MenuItemContainerProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${props => props.$isActive 
    ? props.theme.colors.primary
    : props.theme.colors.text.secondary
  };
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 1rem;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.$isActive 
      ? props.theme.colors.primary
      : props.theme.colors.text.primary
    };
  }
  
  ${({ $isActive, theme }) => $isActive && css`
    background-color: ${theme.colors.background.hover};
  `}
  
  ${({ $isCollapsed }) => $isCollapsed && css`
    justify-content: center;
    padding: ${props => props.theme.spacing[3]} 0;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`;

const MenuLabel = styled(motion.span)`
  margin-left: ${props => props.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 0 ${props => props.theme.borderRadius.sm} ${props => props.theme.borderRadius.sm} 0;
  box-shadow: 0 0 4px ${props => props.theme.colors.primary}80;
`;

const ProfileSection = styled.div<CollapsibleProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing[4]};
  border-top: 1px solid ${props => props.theme.colors.border};
  gap: ${props => props.theme.spacing[3]};
  
  ${({ $isCollapsed }) => $isCollapsed && css`
    justify-content: center;
    padding: ${props => props.theme.spacing[3]} 0;
  `}
`;

const ProfileImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary[600]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const ProfileInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const ProfileName = styled.div`
  font-weight: 600;
  font-size: ${props => props.theme.spacing[3.5]};
  color: ${props => props.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileRole = styled.div`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.tertiary};
`;

const SidebarLogoutButton = styled(LogoutButton)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${props => props.theme.colors.danger};
    }
  }
`;

const SectionLabel = styled(motion.div)`
  font-size: ${props => props.theme.spacing[3]};
  font-weight: 600;
  color: ${props => props.theme.colors.text.tertiary};
  padding: 0 ${props => props.theme.spacing[4]};
  margin-top: ${props => props.theme.spacing[4]};
  margin-bottom: ${props => props.theme.spacing[2]};
`;

export default StudentSidebar; 