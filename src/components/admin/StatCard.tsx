import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ColorType = 'primary' | 'green' | 'yellow' | 'purple' | 'red';

interface ColorProps {
  $color: ColorType;
}

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  change: string;
  color: ColorType;
}

const getColorValue = (color: ColorType, theme: any) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[600];
    case 'green':
      return theme.colors.success[500];
    case 'yellow':
      return theme.colors.warning[500];
    case 'purple':
      return theme.colors.purple[500];
    case 'red':
      return theme.colors.danger[500];
    default:
      return theme.colors.primary[600];
  }
};

const getColorLight = (color: ColorType, theme: any) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[50];
    case 'green':
      return theme.colors.success[50];
    case 'yellow':
      return theme.colors.warning[50];
    case 'purple':
      return theme.colors.purple[50];
    case 'red':
      return theme.colors.danger[50];
    default:
      return theme.colors.primary[50];
  }
};

const CardContainer = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[5]};
  box-shadow: ${props => props.theme.shadows.sm};
  border-left: 4px solid ${props => getColorValue(props.$color, props.theme)};
  border-top: 1px solid ${props => props.theme.colors.border.light};
  border-right: 1px solid ${props => props.theme.colors.border.light};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    border-color: ${props => getColorValue(props.$color, props.theme)};
  }
`;

const IconWrapper = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.lg};
  background-color: ${props => 
    props.theme.colors.background.primary === '#0f172a' 
      ? getColorValue(props.$color, props.theme) + '22' // More subtle in dark mode
      : getColorLight(props.$color, props.theme)
  };
  color: ${props => getColorValue(props.$color, props.theme)};
  font-size: 1.5rem;
  margin-right: ${props => props.theme.spacing[4]};
`;

const Content = styled.div`
  flex: 1;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

const Title = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing[2]};
`;

interface ChangeProps {
  $isPositive: boolean;
}

const Change = styled.div<ChangeProps>`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.$isPositive ? props.theme.colors.success[500] : props.theme.colors.danger[500]};
  
  svg {
    font-size: 1rem;
  }
`;

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, color }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <CardContainer $color={color}>
      <IconWrapper $color={color}>{icon}</IconWrapper>
      <Content>
        <Value>{value}</Value>
        <Title>{title}</Title>
        <Change $isPositive={isPositive}>
          {change}
        </Change>
      </Content>
    </CardContainer>
  );
};

export default StatCard; 