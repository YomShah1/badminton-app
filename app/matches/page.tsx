import { recentMatches } from '@/lib/data';
import { Swords, Calendar, Filter } from 'lucide-react';

export default function MatchesPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Matches</h1>
                    <p className="text-slate-400 mt-1">Manage and view all badminton matches.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                        <Swords size={18} />
                        <span>New Match</span>
                    </button>
                </div>
            </div>

            <div className="grid gap-4">
                {recentMatches.map((match) => (
                    <div key={match.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all group">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                            {/* Match Info */}
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                                    <Swords size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{match.type}</span>
                                        <span className={`
                      px-2 py-0.5 rounded-full text-[10px] font-bold uppercase
                      ${match.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                                                match.status === 'Scheduled' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-700 text-slate-300'}
                    `}>
                                            {match.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        {match.p1} <span className="text-slate-500 mx-2">vs</span> {match.p2}
                                    </h3>
                                </div>
                            </div>

                            {/* Score & Details */}
                            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-center">
                                    <p className="text-xs text-slate-500 uppercase mb-1">Score</p>
                                    <p className="font-mono text-lg text-white font-bold">{match.score}</p>
                                </div>

                                <div className="h-8 w-px bg-slate-800 hidden md:block"></div>

                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <Calendar size={16} />
                                    <span>{match.date}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
