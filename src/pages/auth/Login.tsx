import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser,  FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

// Define user roles
type UserRole = 'admin' | 'teacher' | 'student';

// Demo account data for quick access
const demoAccounts: Record<UserRole, { username: string; password: string }> = {
  admin: { username: 'admin', password: '123456' },
  teacher: { username: 'teacher', password: '123456' },
  student: { username: 'student', password: '123456' },
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Handle role selection
  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setError('');
  };

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRole) return;
    
    // Use the AuthContext login function
    const isSuccess = login(username, password, selectedRole);
    
    if (isSuccess) {
      // Navigate to the appropriate dashboard
      navigate(`/${selectedRole}/dashboard`);
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle demo account login
  const handleDemoLogin = () => {
    if (!selectedRole) return;
    
    const account = demoAccounts[selectedRole];
    setUsername(account.username);
    setPassword(account.password);
  };

  // Render role selection screen if no role is selected
  if (!selectedRole) {
    return (
      <LoginContainer>
        <FormSection>
          <LogoSection>
            <h1>Learning Management System</h1>
            <p>Select your role to continue</p>
          </LogoSection>

          <RoleContainer>
            <RoleCard onClick={() => handleRoleSelect('admin')}>
              <RoleIcon className="admin">
                <FiUser />
              </RoleIcon>
              <RoleInfo>
                <RoleTitle>Administrator</RoleTitle>
                <RoleDescription>Manage user accounts, classes, and system settings</RoleDescription>
              </RoleInfo>
              <RoleArrow><FiChevronRight /></RoleArrow>
            </RoleCard>

            <RoleCard onClick={() => handleRoleSelect('teacher')}>
              <RoleIcon className="teacher">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </RoleIcon>
              <RoleInfo>
                <RoleTitle>Teacher</RoleTitle>
                <RoleDescription>Create and manage curriculum, materials, and assessments</RoleDescription>
              </RoleInfo>
              <RoleArrow><FiChevronRight /></RoleArrow>
            </RoleCard>

            <RoleCard onClick={() => handleRoleSelect('student')}>
              <RoleIcon className="student">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </RoleIcon>
              <RoleInfo>
                <RoleTitle>Student</RoleTitle>
                <RoleDescription>Access classes, learning materials, and track progress</RoleDescription>
              </RoleInfo>
              <RoleArrow><FiChevronRight /></RoleArrow>
            </RoleCard>
          </RoleContainer>
        </FormSection>

        <InfoSection>
          <InfoContent>
            <h2>Welcome to the Learning Management System</h2>
            <p>A comprehensive platform for educational institutions to manage learning processes and content.</p>

            <InfoFeatures>
              <FeatureItem>
                <FeatureIcon className="admin">
                  <FiUser />
                </FeatureIcon>
                <FeatureText>
                  <h3>Admin Panel</h3>
                  <p>Manage users, roles, and system settings</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon className="teacher">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h3>Teacher Panel</h3>
                  <p>Create curriculum, upload materials, and grade students</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon className="student">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h3>Student Panel</h3>
                  <p>Access learning materials, assignments, and track progress</p>
                </FeatureText>
              </FeatureItem>
            </InfoFeatures>
          </InfoContent>
        </InfoSection>
      </LoginContainer>
    );
  }

  // Render login form when role is selected
  return (
    <LoginContainer>
      <FormSection>
        <LogoSection>
          <h1>Learning Management System</h1>
          <p>Sign in as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</p>
        </LogoSection>

        <LoginForm onSubmit={handleLogin}>
          <BackButton onClick={() => setSelectedRole(null)}>
            <FiArrowLeft /> Back to Role Selection
          </BackButton>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <InputWrapper>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormOptions>
            <RememberMeOption>
              <Checkbox
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMeOption>
            <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>
          </FormOptions>

          <LoginButton type="submit">Sign in</LoginButton>
        </LoginForm>

        <DemoSection>
          <DemoNote>Note: All user accounts are created by administrators</DemoNote>
          <DemoCredentials>
            <p>Demo credentials:</p>
            <CredentialItem>
              <strong>Username:</strong> {demoAccounts[selectedRole].username}
            </CredentialItem>
            <CredentialItem>
              <strong>Password:</strong> {demoAccounts[selectedRole].password}
            </CredentialItem>
            <DemoButton onClick={handleDemoLogin}>Use demo account</DemoButton>
          </DemoCredentials>
        </DemoSection>
      </FormSection>

      <InfoSection>
        <InfoContent>
          <h2>Welcome to the Learning Management System</h2>
          <p>A comprehensive platform for educational institutions to manage learning processes and content.</p>

          <InfoFeatures>
            <FeatureItem>
              <FeatureIcon className="admin">
                <FiUser />
              </FeatureIcon>
              <FeatureText>
                <h3>Admin Panel</h3>
                <p>Manage users, roles, and system settings</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon className="teacher">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </FeatureIcon>
              <FeatureText>
                <h3>Teacher Panel</h3>
                <p>Create curriculum, upload materials, and grade students</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon className="student">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </FeatureIcon>
              <FeatureText>
                <h3>Student Panel</h3>
                <p>Access learning materials, assignments, and track progress</p>
              </FeatureText>
            </FeatureItem>
          </InfoFeatures>
        </InfoContent>
      </InfoSection>
    </LoginContainer>
  );
};

// Styled components
const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.background.lighter};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    height: auto;
    min-height: 100vh;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing[8]};
  background-color: ${props => props.theme.colors.background.secondary};
  box-shadow: ${props => props.theme.shadows.md};
  max-width: 600px;
  overflow-y: auto;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 100%;
    padding: ${props => props.theme.spacing[6]};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing[4]};
  }
`;

const LogoSection = styled.div`
  margin-bottom: ${props => props.theme.spacing[8]};

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: ${props => props.theme.spacing[2]};
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: ${props => props.theme.spacing[6]};

    h1 {
      font-size: 1.5rem;
    }
  }
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
`;

const RoleCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing[5]};
  background-color: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${props => props.theme.transition.normal};
  box-shadow: ${props => props.theme.shadows.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    border-color: ${props => props.theme.colors.primary[400]};
  }
`;

const RoleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.full};
  margin-right: ${props => props.theme.spacing[4]};
  
  &.admin {
    background-color: ${props => props.theme.colors.purple[100]};
    color: ${props => props.theme.colors.purple[600]};
  }
  
  &.teacher {
    background-color: ${props => props.theme.colors.primary[100]};
    color: ${props => props.theme.colors.primary[600]};
  }
  
  &.student {
    background-color: ${props => props.theme.colors.success[100]};
    color: ${props => props.theme.colors.success[600]};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const RoleInfo = styled.div`
  flex: 1;
`;

const RoleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.primary};
`;

const RoleDescription = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const RoleArrow = styled.div`
  color: ${props => props.theme.colors.text.tertiary};
  transition: transform ${props => props.theme.transition.normal};
  
  ${RoleCard}:hover & {
    transform: translateX(4px);
    color: ${props => props.theme.colors.primary[500]};
  }
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  padding: ${props => props.theme.spacing[8]};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: ${props => props.theme.spacing[6]};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing[4]};
  }
`;

const InfoContent = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${props => props.theme.spacing[4]};
  }

  > p {
    font-size: 1.125rem;
    margin-bottom: ${props => props.theme.spacing[8]};
    opacity: 0.9;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    h2 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 1rem;
      margin-bottom: ${props => props.theme.spacing[6]};
    }
  }
`;

const InfoFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[6]};
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  margin-right: ${props => props.theme.spacing[4]};
  background-color: rgba(255, 255, 255, 0.2);
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const FeatureText = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing[1]};
  }

  p {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[5]};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  background: none;
  border: none;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.875rem;
  padding: ${props => props.theme.spacing[2]} 0;
  cursor: pointer;
  transition: color ${props => props.theme.transition.fast};
  width: fit-content;
  margin-bottom: ${props => props.theme.spacing[2]};

  &:hover {
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  transition: border-color ${props => props.theme.transition.fast};

  &:focus {
    border-color: ${props => props.theme.colors.primary[400]};
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RememberMeOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const Checkbox = styled.input`
  accent-color: ${props => props.theme.colors.primary[500]};
  cursor: pointer;
`;

const ForgotPassword = styled(Link)`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.primary[600]};
  text-decoration: none;
  transition: color ${props => props.theme.transition.fast};

  &:hover {
    color: ${props => props.theme.colors.primary[700]};
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${props => props.theme.transition.fast};

  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }

  &:active {
    background-color: ${props => props.theme.colors.primary[700]};
  }
`;

const ErrorMessage = styled.div`
  padding: ${props => props.theme.spacing[3]};
  background-color: ${props => props.theme.colors.danger[50]};
  color: ${props => props.theme.colors.danger[700]};
  border: 1px solid ${props => props.theme.colors.danger[100]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.875rem;
`;

const DemoSection = styled.div`
  margin-top: ${props => props.theme.spacing[6]};
  border-top: 1px solid ${props => props.theme.colors.border.light};
  padding-top: ${props => props.theme.spacing[6]};
`;

const DemoNote = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing[3]};
`;

const DemoCredentials = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[4]};
  font-size: 0.875rem;

  > p {
    margin-bottom: ${props => props.theme.spacing[2]};
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const CredentialItem = styled.div`
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.primary};

  strong {
    font-weight: 500;
    margin-right: ${props => props.theme.spacing[2]};
  }
`;

const DemoButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.primary[600]};
  border: 1px solid ${props => props.theme.colors.primary[200]};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  margin-top: ${props => props.theme.spacing[2]};

  &:hover {
    background-color: ${props => props.theme.colors.primary[50]};
    border-color: ${props => props.theme.colors.primary[300]};
  }
`;

export default Login; 