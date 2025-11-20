import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    color?: string;
}

export default function DashboardCard({
    title,
    value,
    icon: Icon,
    trend,
    trendUp,
    color = "blue"
}: DashboardCardProps) {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-white">{value}</h3>
                </div>
                <div className={`p-3 rounded-lg bg-${color}-500/10 text-${color}-400`}>
                    <Icon size={24} />
                </div>
            </div>

            {trend && (
                <div className="mt-4 flex items-center text-xs">
                    <span className={`font-medium ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {trendUp ? '+' : ''}{trend}
                    </span>
                    <span className="text-slate-500 ml-2">from last month</span>
                </div>
            )}
        </div>
    );
}
