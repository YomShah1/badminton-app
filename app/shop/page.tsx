import { products } from '@/lib/data';
import { ShoppingCart, Star } from 'lucide-react';

export default function ShopPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Pro Shop</h1>
                    <p className="text-slate-400 mt-1">Premium equipment for serious players.</p>
                </div>
                <button className="relative p-3 bg-slate-800 rounded-xl text-white hover:bg-slate-700 transition-colors">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-slate-900">
                        2
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all group">
                        {/* Product Image Area */}
                        <div className="h-48 bg-slate-800/50 flex items-center justify-center relative overflow-hidden">
                            <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                                {product.image}
                            </div>
                            <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 rounded-lg bg-slate-900/80 backdrop-blur text-xs font-bold text-slate-300 uppercase">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-1 truncate">{product.name}</h3>
                            <div className="flex items-center gap-1 mb-3">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-xs text-slate-500">(45)</span>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-bold text-white">{product.price}</span>
                                <span className={`text-xs font-medium ${product.stock > 10 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                                </span>
                            </div>

                            <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center justify-center gap-2">
                                <ShoppingCart size={16} />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
