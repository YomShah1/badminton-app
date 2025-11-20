import { players } from '@/lib/data';
import { Search, Trophy, TrendingUp, Medal } from 'lucide-react';

export default function PlayersPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Players</h1>
                    <p className="text-slate-400 mt-1">Player rankings and statistics.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search players..."
                        className="bg-slate-900 border border-slate-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-64"
                    />
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-slate-900 text-slate-200 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Rank</th>
                                <th className="px-6 py-4">Player</th>
                                <th className="px-6 py-4 text-center">Matches</th>
                                <th className="px-6 py-4 text-center">Win Rate</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {players.map((player) => (
                                <tr key={player.id} className="hover:bg-slate-800/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className={`
                      w-8 h-8 rounded-lg flex items-center justify-center font-bold
                      ${player.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                                                player.rank === 2 ? 'bg-slate-400/20 text-slate-400' :
                                                    player.rank === 3 ? 'bg-amber-700/20 text-amber-700' : 'bg-slate-800 text-slate-500'}
                    `}>
                                            {player.rank <= 3 ? <Medal size={16} /> : player.rank}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                                {player.avatar}
                                            </div>
                                            <div>
                                                <p className="font-bold text-white">{player.name}</p>
                                                <p className="text-xs text-slate-500">ID: #{1000 + player.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <Trophy size={16} className="text-slate-600" />
                                            <span className="font-medium text-slate-300">{player.matches}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <TrendingUp size={16} className="text-emerald-500" />
                                            <span className="font-medium text-emerald-400">{player.winRate}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                                            View Profile
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
