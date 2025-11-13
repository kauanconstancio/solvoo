export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  providerName: string;
  providerAvatar?: string;
  rating: number;
  price: number;
  city: string;
  estado: string;
  verified: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  verified?: boolean;
  rating?: number;
  totalServices?: number;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string | Date;
  read?: boolean;
  isOwn?: boolean;
}

export interface Conversation {
  id: string;
  participantIds: string[];
  lastMessage?: string;
  lastMessageTimestamp?: string;
  unreadCount?: number;
  createdAt?: string;
}

export interface Announce {
  id: string;
  title: string;
  description: string;
  category: string;
  estado: string;
  cidade: string;
  price: number;
  userId: string;
  createdAt: string;
  updatedAt?: string;
  images?: string[];
}
