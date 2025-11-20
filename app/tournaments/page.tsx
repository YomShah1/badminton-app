import { upcomingTournaments } from '@/lib/data';
import { Trophy, Calendar, Users, DollarSign, Plus } from 'lucide-react';

export default function TournamentsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Tournaments</h1>
                    <p className="text-slate-400 mt-1">Browse and register for upcoming tournaments.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <Plus size={18} />
                    <span>Create Tournament</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingTournaments.map((tournament) => (
                    <div key={tournament.id} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all group">
                        {/* Card Header */}
                        <div className="p-6 border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800/50 relative">
                            <div className="absolute top-4 right-4">
                                <span className={`
                  px-2 py-1 rounded-lg text-xs font-bold uppercase
                  ${tournament.status === 'Registration Open' ? 'bg-emerald-500/10 text-emerald-400' :
                                        tournament.status === 'Ongoing' ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'}
                `}>
                                    {tournament.status}
                                </span>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Trophy size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{tournament.name}</h3>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Calendar size={14} />
                                <span>{tournament.date}</span>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <DollarSign size={18} className="text-emerald-400" />
                                    <span className="font-medium">{tournament.prize}</span>
                                    <span className="text-xs text-slate-500 uppercase">Prize Pool</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <Users size={18} className="text-blue-400" />
                                    <span className="font-medium">{tournament.participants}</span>
                                    <span className="text-xs text-slate-500 uppercase">Participants</span>
                                </div>
                            </div>

                            <button className="w-full py-2.5 mt-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
