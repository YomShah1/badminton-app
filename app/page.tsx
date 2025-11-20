import DashboardCard from '@/components/DashboardCard';
import { stats, recentMatches, upcomingTournaments } from '@/lib/data';
import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back, here&apos;s what&apos;s happening today.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          + New Match
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Matches */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Recent Matches</h2>
            <Link href="/matches" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-400">
                <thead className="bg-slate-900 text-slate-200 uppercase font-medium">
                  <tr>
                    <th className="px-6 py-4">Players</th>
                    <th className="px-6 py-4">Score</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {recentMatches.map((match) => (
                    <tr key={match.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">
                        {match.p1} <span className="text-slate-500 mx-1">vs</span> {match.p2}
                      </td>
                      <td className="px-6 py-4 text-slate-300">{match.score}</td>
                      <td className="px-6 py-4">{match.date}</td>
                      <td className="px-6 py-4">
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-medium
                          ${match.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                            match.status === 'Scheduled' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-700 text-slate-300'}
                        `}>
                          {match.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Tournaments */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Tournaments</h2>
            <Link href="/tournaments" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Calendar size={20} />
                  </div>
                  <span className="text-xs font-medium bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {tournament.status}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-1">{tournament.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{tournament.date}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800 pt-3">
                  <span>Prize: <span className="text-emerald-400 font-medium">{tournament.prize}</span></span>
                  <span>{tournament.participants} Players</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
