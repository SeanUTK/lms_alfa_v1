import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiPlus, FiMoreVertical, FiSend, FiPaperclip, FiSmile, FiChevronLeft, FiFilter, FiInfo } from 'react-icons/fi';
// import Card from '../../components/common/Card';
import { useAuth } from '../../contexts/AuthContext';

interface Message {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamp: Date;
  read: boolean;
  isIncoming: boolean;
}

interface Conversation {
  id: string;
  recipient: {
    id: string;
    name: string;
    role: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away';
    lastSeen?: Date;
  };
  lastMessage?: {
    content: string;
    timestamp: Date;
    read: boolean;
  };
  unreadCount: number;
}

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();

  // Mock conversations data
  const conversations: Conversation[] = [
    {
      id: '1',
      recipient: {
        id: 'teacher1',
        name: 'Dr. Smith',
        role: 'Math Teacher',
        status: 'online',
      },
      lastMessage: {
        content: 'Don\'t forget about the quiz tomorrow!',
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        read: false,
      },
      unreadCount: 1,
    },
    {
      id: '2',
      recipient: {
        id: 'teacher2',
        name: 'Mrs. Johnson',
        role: 'English Professor',
        status: 'away',
        lastSeen: new Date(Date.now() - 45 * 60 * 1000),
      },
      lastMessage: {
        content: 'The essay deadline has been extended by three days.',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        read: true,
      },
      unreadCount: 0,
    },
    {
      id: '3',
      recipient: {
        id: 'admin1',
        name: 'Admin Office',
        role: 'Administrative Staff',
        status: 'online',
      },
      lastMessage: {
        content: 'Your student ID card is ready for pickup.',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        read: false,
      },
      unreadCount: 1,
    },
    {
      id: '4',
      recipient: {
        id: 'student1',
        name: 'Alex Barnes',
        role: 'Classmate',
        status: 'offline',
        lastSeen: new Date(Date.now() - 12 * 60 * 60 * 1000),
      },
      lastMessage: {
        content: 'Did you understand the homework for today?',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        read: true,
      },
      unreadCount: 0,
    },
    {
      id: '5',
      recipient: {
        id: 'teacher3',
        name: 'Prof. Wilson',
        role: 'Chemistry Department',
        status: 'offline',
        lastSeen: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
      lastMessage: {
        content: 'Please bring your lab coat for tomorrow\'s experiment.',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        read: true,
      },
      unreadCount: 0,
    },
  ];

  // Mock messages for selected conversation
  const getConversationMessages = (conversationId: string): Message[] => {
    const conversation = conversations.find(c => c.id === conversationId);
    if (!conversation) return [];

    const recipient = conversation.recipient;
    
    // Generate a series of messages for this conversation
    return [
      {
        id: `${conversationId}-1`,
        content: `Hello! How can I help you with your studies?`,
        sender: {
          id: recipient.id,
          name: recipient.name,
        },
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        read: true,
        isIncoming: true,
      },
      {
        id: `${conversationId}-2`,
        content: `Hi ${recipient.name}, I have a question about the recent assignment.`,
        sender: {
          id: user?.username || 'current-user',
          name: user?.fullName || 'You',
        },
        timestamp: new Date(Date.now() - 2.9 * 60 * 60 * 1000),
        read: true,
        isIncoming: false,
      },
      {
        id: `${conversationId}-3`,
        content: `Sure, what do you need help with?`,
        sender: {
          id: recipient.id,
          name: recipient.name,
        },
        timestamp: new Date(Date.now() - 2.8 * 60 * 60 * 1000),
        read: true,
        isIncoming: true,
      },
      {
        id: `${conversationId}-4`,
        content: `I'm not sure how to approach problem number 5.`,
        sender: {
          id: user?.username || 'current-user',
          name: user?.fullName || 'You',
        },
        timestamp: new Date(Date.now() - 2.7 * 60 * 60 * 1000),
        read: true,
        isIncoming: false,
      },
      {
        id: `${conversationId}-5`,
        content: conversation.lastMessage?.content || "Let me know if you need any other assistance.",
        sender: {
          id: recipient.id,
          name: recipient.name,
        },
        timestamp: conversation.lastMessage?.timestamp || new Date(),
        read: conversation.lastMessage?.read || false,
        isIncoming: true,
      },
    ];
  };

  // Handle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedConversation]);

  // Filter conversations based on search term
  const filteredConversations = conversations.filter(conversation => 
    conversation.recipient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (conversation.lastMessage?.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // In a real app, you would send this to an API
    console.log('Sending message:', newMessage);
    
    // Clear the input
    setNewMessage('');
    
    // Focus back on the input
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };

  // Format timestamp
  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Format last seen
  const formatLastSeen = (date?: Date) => {
    if (!date) return 'Unknown';
    
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  // Get current conversation
  const currentConversation = conversations.find(c => c.id === selectedConversation);
  const messages = selectedConversation ? getConversationMessages(selectedConversation) : [];

  return (
    <MessagesContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Messages</PageTitle>
          <PageDescription>Chat with teachers, classmates, and staff</PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <ContentWrapper>
        <AnimatePresence mode="wait">
          {(isMobileView && selectedConversation) ? null : (
            <ConversationsPanel
              key="conversations"
              as={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ConversationsHeader>
                <SearchContainer>
                  <SearchIcon><FiSearch /></SearchIcon>
                  <SearchInput 
                    type="text" 
                    placeholder="Search messages..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </SearchContainer>
                <FilterButton aria-label="Filter messages">
                  <FiFilter />
                </FilterButton>
                <NewMessageButton aria-label="New message">
                  <FiPlus />
                </NewMessageButton>
              </ConversationsHeader>
              
              <ConversationsList>
                {filteredConversations.map(conversation => (
                  <ConversationItem 
                    key={conversation.id}
                    $hasUnread={conversation.unreadCount > 0}
                    $isActive={selectedConversation === conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    as={motion.div}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AvatarContainer>
                      {conversation.recipient.avatar ? (
                        <Avatar src={conversation.recipient.avatar} alt={conversation.recipient.name} />
                      ) : (
                        <AvatarPlaceholder>
                          {conversation.recipient.name.charAt(0)}
                        </AvatarPlaceholder>
                      )}
                      <StatusIndicator $status={conversation.recipient.status || 'offline'} />
                    </AvatarContainer>
                    
                    <ConversationContent>
                      <ConversationHeader>
                        <RecipientName>{conversation.recipient.name}</RecipientName>
                        {conversation.lastMessage && (
                          <LastMessageTime>
                            {formatLastSeen(conversation.lastMessage.timestamp)}
                          </LastMessageTime>
                        )}
                      </ConversationHeader>
                      
                      <RecipientRole>{conversation.recipient.role}</RecipientRole>
                      
                      {conversation.lastMessage && (
                        <LastMessagePreview $read={conversation.lastMessage.read}>
                          {conversation.lastMessage.content}
                        </LastMessagePreview>
                      )}
                    </ConversationContent>
                    
                    {conversation.unreadCount > 0 && (
                      <UnreadBadge>
                        {conversation.unreadCount}
                      </UnreadBadge>
                    )}
                  </ConversationItem>
                ))}
              </ConversationsList>
            </ConversationsPanel>
          )}
          
          {selectedConversation ? (
            <ChatPanel
              key="chat"
              as={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              {currentConversation && (
                <>
                  <ChatHeader>
                    {isMobileView && (
                      <BackButton onClick={() => setSelectedConversation(null)}>
                        <FiChevronLeft />
                      </BackButton>
                    )}
                    
                    <AvatarContainer>
                      {currentConversation.recipient.avatar ? (
                        <Avatar src={currentConversation.recipient.avatar} alt={currentConversation.recipient.name} />
                      ) : (
                        <AvatarPlaceholder>
                          {currentConversation.recipient.name.charAt(0)}
                        </AvatarPlaceholder>
                      )}
                      <StatusIndicator $status={currentConversation.recipient.status || 'offline'} />
                    </AvatarContainer>
                    
                    <ChatHeaderInfo>
                      <RecipientName>{currentConversation.recipient.name}</RecipientName>
                      <RecipientStatus>
                        {currentConversation.recipient.status === 'online' 
                          ? 'Online' 
                          : `Last seen ${formatLastSeen(currentConversation.recipient.lastSeen)}`
                        }
                      </RecipientStatus>
                    </ChatHeaderInfo>
                    
                    <ChatHeaderActions>
                      <InfoButton>
                        <FiInfo />
                      </InfoButton>
                      <MoreButton>
                        <FiMoreVertical />
                      </MoreButton>
                    </ChatHeaderActions>
                  </ChatHeader>
                  
                  <MessagesArea>
                    {messages.map((message, index) => (
                      <MessageBubble 
                        key={message.id}
                        $isMine={!message.isIncoming}
                        as={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <MessageContent $isMine={!message.isIncoming}>
                          {message.content}
                        </MessageContent>
                        <MessageTime>
                          {formatMessageTime(message.timestamp)}
                          {!message.isIncoming && (
                            <ReadStatus>
                              {message.read ? 'Read' : 'Sent'}
                            </ReadStatus>
                          )}
                        </MessageTime>
                      </MessageBubble>
                    ))}
                    <div ref={messagesEndRef} />
                  </MessagesArea>
                  
                  <MessageInputArea>
                    <AttachButton>
                      <FiPaperclip />
                    </AttachButton>
                    <MessageInput 
                      ref={messageInputRef}
                      type="text" 
                      placeholder="Type a message..." 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <EmojiButton>
                      <FiSmile />
                    </EmojiButton>
                    <SendButton
                      onClick={handleSendMessage}
                      disabled={newMessage.trim() === ''}
                      $hasContent={newMessage.trim() !== ''}
                      as={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiSend />
                    </SendButton>
                  </MessageInputArea>
                </>
              )}
            </ChatPanel>
          ) : !isMobileView && (
            <EmptyStatePanel
              key="empty-state"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EmptyStateIcon>
                <FiMessageSquare size={60} />
              </EmptyStateIcon>
              <EmptyStateTitle>No Conversation Selected</EmptyStateTitle>
              <EmptyStateMessage>
                Select a conversation from the list to start chatting
              </EmptyStateMessage>
            </EmptyStatePanel>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  height: calc(100vh - 180px);
  min-height: 500px;
  background: ${props => props.theme.colors.background.primary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  border: 1px solid ${props => props.theme.colors.border.light};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

// Conversations Panel
const ConversationsPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.border.light};
  height: 100%;
`;

const ConversationsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 8px;
  padding: 0 12px;
  flex: 1;
`;

const SearchIcon = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  margin-right: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${props => props.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const FilterButton = styled.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const NewMessageButton = styled(FilterButton)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}e0;
    color: white;
  }
`;

const ConversationsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`;

interface ConversationItemProps {
  $hasUnread: boolean;
  $isActive: boolean;
}

const ConversationItem = styled(motion.div)<ConversationItemProps>`
  display: flex;
  padding: 12px;
  margin-bottom: 4px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  
  background-color: ${props => props.$isActive 
    ? props.theme.colors.background.hover 
    : 'transparent'
  };
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

interface StatusProps {
  $status: 'online' | 'offline' | 'away';
}

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 12px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AvatarPlaceholder = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary[100]};
  color: ${props => props.theme.colors.primary[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`;

const StatusIndicator = styled.div<StatusProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.background.primary};
  
  background-color: ${props => {
    switch (props.$status) {
      case 'online': return props.theme.colors.success;
      case 'away': return props.theme.colors.warning;
      default: return props.theme.colors.text.tertiary;
    }
  }};
`;

const ConversationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ConversationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

const RecipientName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastMessageTime = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.tertiary};
  white-space: nowrap;
`;

const RecipientRole = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.tertiary};
  margin-bottom: 4px;
`;

interface LastMessageProps {
  $read: boolean;
}

const LastMessagePreview = styled.div<LastMessageProps>`
  font-size: 13px;
  color: ${props => props.$read 
    ? props.theme.colors.text.secondary
    : props.theme.colors.text.primary
  };
  font-weight: ${props => props.$read ? '400' : '500'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
`;

const UnreadBadge = styled.div`
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 4px;
`;

// Chat Panel
const ChatPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const BackButton = styled.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const ChatHeaderInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const RecipientStatus = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.tertiary};
`;

const ChatHeaderActions = styled.div`
  display: flex;
  gap: 8px;
`;

const InfoButton = styled(FilterButton)``;
const MoreButton = styled(FilterButton)``;

const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface MessageProps {
  $isMine: boolean;
}

const MessageBubble = styled(motion.div)<MessageProps>`
  display: flex;
  flex-direction: column;
  align-self: ${props => props.$isMine ? 'flex-end' : 'flex-start'};
  max-width: 70%;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 85%;
  }
`;

const MessageContent = styled.div<MessageProps>`
  padding: 12px 16px;
  border-radius: 16px;
  border-bottom-right-radius: ${props => props.$isMine ? '4px' : '16px'};
  border-bottom-left-radius: ${props => props.$isMine ? '16px' : '4px'};
  color: ${props => props.$isMine ? '#000' : props.theme.colors.text.primary};
  font-weight: ${props => props.$isMine ? '500' : '400'};
  background-color: ${props => props.$isMine 
    ? props.theme.colors.primary 
    : props.theme.colors.background.secondary
  };
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MessageTime = styled.div`
  font-size: 11px;
  color: ${props => props.theme.colors.text.tertiary};
  margin-top: 4px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ReadStatus = styled.span`
  font-size: 11px;
  color: ${props => props.theme.colors.text.tertiary};
`;

const MessageInputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
`;

const AttachButton = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text.secondary};
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const MessageInput = styled.input`
  flex: 1;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: 20px;
  padding: 0 16px;
  background-color: ${props => props.theme.colors.background.secondary};
  font-size: 14px;
  color: #000000;
  outline: none;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const EmojiButton = styled(AttachButton)``;

interface SendButtonProps {
  $hasContent: boolean;
}

const SendButton = styled.button<SendButtonProps>`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${props => props.$hasContent 
    ? props.theme.colors.primary 
    : props.theme.colors.background.secondary
  };
  color: ${props => props.$hasContent 
    ? 'white' 
    : props.theme.colors.text.secondary
  };
  border-radius: 50%;
  cursor: ${props => props.$hasContent ? 'pointer' : 'default'};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.$hasContent 
      ? `${props.theme.colors.primary}e0`
      : props.theme.colors.background.secondary
    };
  }
`;

// Empty State
const EmptyStatePanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  text-align: center;
`;

const EmptyStateIcon = styled.div`
  color: ${props => props.theme.colors.text.tertiary};
  margin-bottom: 16px;
`;

const EmptyStateTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 8px 0;
`;

const EmptyStateMessage = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  max-width: 300px;
  margin: 0;
`;

const FiMessageSquare = styled(FiSearch)`
  /* This is just to use the correct import */
`;

export default Messages; 