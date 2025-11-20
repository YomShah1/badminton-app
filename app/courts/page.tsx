import { courts } from '@/lib/data';
import { MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function CourtsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Court Booking</h1>
                    <p className="text-slate-400 mt-1">Check availability and book your court.</p>
                </div>
                <div className="flex gap-3">
                    <input
                        type="date"
                        className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courts.map((court) => (
                    <div key={court.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    {court.name}
                                    <span className="text-xs font-normal px-2 py-1 rounded bg-slate-800 text-slate-400">{court.type}</span>
                                </h3>
                                <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                                    <MapPin size={14} />
                                    <span>Indoor Arena A</span>
                                </div>
                            </div>
                            <div className={`
                px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1
                ${court.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400' :
                                    court.status === 'Occupied' ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'}
              `}>
                                {court.status === 'Available' ? <CheckCircle size={14} /> :
                                    court.status === 'Occupied' ? <XCircle size={14} /> : <AlertCircle size={14} />}
                                {court.status}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Clock size={20} className="text-blue-400" />
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase">Next Available</p>
                                        <p className="font-medium">{court.nextSlot}</p>
                                    </div>
                                </div>
                                <button
                                    disabled={court.status === 'Maintenance'}
                                    className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    ${court.status === 'Maintenance'
                                            ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-500 text-white'}
                  `}
                                >
                                    Book Now
                                </button>
                            </div>

                            <div className="grid grid-cols-4 gap-2">
                                {['09:00', '10:00', '11:00', '12:00'].map((time) => (
                                    <div key={time} className="text-center py-2 rounded bg-slate-800/50 text-xs text-slate-400 hover:bg-slate-800 cursor-pointer transition-colors">
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
