import { coaches } from '@/lib/data';
import { Star, Award, Clock, MessageSquare } from 'lucide-react';

export default function CoachesPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Coaches</h1>
                    <p className="text-slate-400 mt-1">Find the perfect coach to improve your game.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coaches.map((coach) => (
                    <div key={coach.id} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all group">
                        <div className="p-6 flex flex-col items-center text-center border-b border-slate-800 bg-gradient-to-b from-slate-800/50 to-transparent">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                                {coach.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                            <p className="text-blue-400 text-sm font-medium">{coach.specialization}</p>

                            <div className="flex items-center gap-1 mt-3 bg-slate-950/50 px-3 py-1 rounded-full border border-slate-800">
                                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-white font-bold text-sm">{coach.rating}</span>
                                <span className="text-slate-500 text-xs">(120 reviews)</span>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase">Experience</p>
                                    <p className="font-medium">{coach.experience}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                                    <Award size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase">Certification</p>
                                    <p className="font-medium">BWF Level 2</p>
                                </div>
                            </div>

                            <button className="w-full py-2.5 mt-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center justify-center gap-2">
                                <MessageSquare size={18} />
                                <span>Contact Coach</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
