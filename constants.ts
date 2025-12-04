import { Book, Event } from './types';

export const FEATURED_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Tom Lake',
    author: 'Ann Patchett',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    price: 30.00,
    description: "In the spring of 2020, Lara's three daughters return to the family's orchard in Northern Michigan. While picking cherries, they beg their mother to tell them the story of Peter Duke, a famous actor with whom she shared both a stage and a romance years before at a theater company called Tom Lake.",
    category: 'Fiction',
    isStaffPick: true
  },
  {
    id: '2',
    title: 'The Heaven & Earth Grocery Store',
    author: 'James McBride',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    price: 28.00,
    description: "In 1972, when workers in Pottstown, Pennsylvania, were digging the foundations for a new development, the last thing they expected to find was a skeleton at the bottom of a well.",
    category: 'Fiction'
  },
  {
    id: '3',
    title: 'Demon Copperhead',
    author: 'Barbara Kingsolver',
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    price: 32.50,
    description: "Set in the mountains of southern Appalachia, Demon Copperhead is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father's good looks and copper-colored hair.",
    category: 'Fiction',
    isStaffPick: true
  },
  {
    id: '4',
    title: 'The Wager',
    author: 'David Grann',
    coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=800',
    price: 30.00,
    description: "A page-turning story of shipwreck, survival, and savagery, culminating in a court martial that reveals a shocking truth.",
    category: 'Non-Fiction'
  }
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'An Evening with Ann Patchett',
    author: 'Ann Patchett',
    date: '2023-11-15',
    time: '6:30 PM',
    description: 'Join us for a special evening celebrating the paperback release of Tom Lake.',
    imageUrl: 'https://images.unsplash.com/photo-1519671482502-9759101d4561?auto=format&fit=crop&q=80&w=800',
    ticketRequired: true
  },
  {
    id: 'e2',
    title: 'Storytime with The Shop Dogs',
    author: 'Sparky & Barnaby',
    date: '2023-11-18',
    time: '10:30 AM',
    description: 'Bring the little ones for stories read by our booksellers, featuring special guest appearances by the shop dogs.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    ticketRequired: false
  },
  {
    id: 'e3',
    title: 'Erik Larson: The Demon of Unrest',
    author: 'Erik Larson',
    date: '2023-11-22',
    time: '7:00 PM',
    description: 'The #1 New York Times bestselling author discusses his new book about the lead-up to the Civil War.',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
    ticketRequired: true
  }
];
