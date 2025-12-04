export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  price: number;
  description: string;
  category: string;
  isStaffPick?: boolean;
}

export interface Event {
  id: string;
  title: string;
  author: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
  ticketRequired: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  recommendedBooks?: Book[]; // AI might return books to display
}

export enum GeminiModel {
  FLASH = 'gemini-2.5-flash',
}
