import { Swords, Trophy, Users, MapPin } from 'lucide-react';

export const stats = [
    { title: 'Active Matches', value: '12', icon: Swords, trend: '15%', trendUp: true, color: 'blue' },
    { title: 'Tournaments', value: '3', icon: Trophy, trend: '2', trendUp: true, color: 'amber' },
    { title: 'Registered Players', value: '145', icon: Users, trend: '12%', trendUp: true, color: 'emerald' },
    { title: 'Court Bookings', value: '28', icon: MapPin, trend: '5%', trendUp: false, color: 'rose' },
];

export const recentMatches = [
    { id: 1, p1: 'John Doe', p2: 'Jane Smith', score: '21-19, 18-21, 21-15', date: '2024-03-10', status: 'Completed', type: 'Singles' },
    { id: 2, p1: 'Mike Ross', p2: 'Harvey Specter', score: '21-15, 21-10', date: '2024-03-11', status: 'Completed', type: 'Singles' },
    { id: 3, p1: 'Team Alpha', p2: 'Team Beta', score: '15-21, 12-21', date: '2024-03-12', status: 'Completed', type: 'Doubles' },
    { id: 4, p1: 'Sarah Connor', p2: 'Kyle Reese', score: '-', date: '2024-03-14', status: 'Scheduled', type: 'Singles' },
];

export const upcomingTournaments = [
    { id: 1, name: 'Summer Smash 2024', date: '2024-06-15', prize: '$5,000', participants: 32, status: 'Registration Open' },
    { id: 2, name: 'City Championship', date: '2024-07-20', prize: '$10,000', participants: 64, status: 'Upcoming' },
    { id: 3, name: 'Junior League', date: '2024-05-01', prize: '$1,000', participants: 16, status: 'Ongoing' },
];

export const players = [
    { id: 1, name: 'John Doe', rank: 1, matches: 45, winRate: '78%', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', rank: 2, matches: 42, winRate: '75%', avatar: 'JS' },
    { id: 3, name: 'Mike Ross', rank: 3, matches: 38, winRate: '70%', avatar: 'MR' },
    { id: 4, name: 'Harvey Specter', rank: 4, matches: 35, winRate: '68%', avatar: 'HS' },
    { id: 5, name: 'Sarah Connor', rank: 5, matches: 30, winRate: '65%', avatar: 'SC' },
];

export const courts = [
    { id: 1, name: 'Court A', type: 'Synthetic', status: 'Available', nextSlot: '14:00' },
    { id: 2, name: 'Court B', type: 'Wooden', status: 'Occupied', nextSlot: '15:00' },
    { id: 3, name: 'Court C', type: 'Synthetic', status: 'Maintenance', nextSlot: 'Tomorrow' },
    { id: 4, name: 'Court D', type: 'Wooden', status: 'Available', nextSlot: '14:30' },
];

export const coaches = [
    { id: 1, name: 'Coach Carter', specialization: 'Advanced Tactics', experience: '15 years', rating: 4.9 },
    { id: 2, name: 'Coach Ted', specialization: 'Beginner Basics', experience: '8 years', rating: 4.7 },
];

export const products = [
    { id: 1, name: 'Yonex Astrox 99', category: 'Rackets', price: '$220', stock: 15, image: '🏸' },
    { id: 2, name: 'Li-Ning Shuttlecocks', category: 'Shuttles', price: '$35', stock: 50, image: '🏸' },
    { id: 3, name: 'Victor Court Shoes', category: 'Footwear', price: '$120', stock: 8, image: '👟' },
    { id: 4, name: 'Grip Tape Pack', category: 'Accessories', price: '$15', stock: 100, image: '⭕' },
];
