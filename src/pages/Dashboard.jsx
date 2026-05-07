import React, { useEffect, useState, useCallback } from 'react';
import { getCryptos, getGainers } from '../api/crypto';
import { TrendingUp, Plus, LayoutGrid, List } from 'lucide-react';
import PriceChart from '../components/crypto/PriceChart';
import AddAssetModal from '../components/crypto/AddAssetModal';

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [graphData, setGraphData] = useState([
    { name: '12:00', price: 64200 },
    { name: '13:00', price: 64500 },
    { name: '14:00', price: 64100 },
    { name: '15:00', price: 64800 },
    { name: '16:00', price: 65200 },
    { name: '17:00', price: 64900 },
    { name: '18:00', price: 65000 },
  ]);

  const fetchData = useCallback(async () => {
    try {
      const [allRes, gainersRes] = await Promise.all([
        getCryptos(),
        getGainers()
      ]);
      setCryptos(allRes.data.cryptos || []);
      setGainers(gainersRes.data.cryptos || []);
    } catch (err) {
      console.error('Error fetching crypto data', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Simulate live price updates
  useEffect(() => {
    if (cryptos.length === 0) return;

    const interval = setInterval(() => {
      setCryptos(prev => prev.map(coin => ({
        ...coin,
        price: (parseFloat(coin.price) * (1 + (Math.random() * 0.002 - 0.001))).toFixed(2)
      })));

      // Update graph data with current BTC price (first item usually)
      setGraphData(prev => {
        const newData = [...prev.slice(1), { 
          name: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
          price: parseFloat(cryptos[0]?.price || 65000) 
        }];
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cryptos.length]);

  const displayData = activeTab === 'all' ? cryptos : gainers;

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Market Overview</h1>
          <p className="text-gray-500">Track and manage your crypto assets</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Add Asset
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">{cryptos[0]?.name || 'Bitcoin'} Price (Live)</h3>
            <span className={`text-sm font-semibold ${parseFloat(cryptos[0]?.change24h) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {parseFloat(cryptos[0]?.change24h) >= 0 ? '+' : ''}{cryptos[0]?.change24h}%
            </span>
          </div>
          <PriceChart data={graphData} />
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-bold text-gray-900">Portfolio Stats</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">$12,450.00</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">24h Profit</p>
              <p className="text-lg font-bold text-green-600">+$340.50 (2.8%)</p>
            </div>
            <button className="w-full rounded-lg bg-gray-900 py-3 font-semibold text-white transition hover:bg-black">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-6 py-3 text-sm font-semibold transition ${
            activeTab === 'all' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          All Assets
        </button>
        <button
          onClick={() => setActiveTab('gainers')}
          className={`px-6 py-3 text-sm font-semibold transition ${
            activeTab === 'gainers' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Top Gainers
        </button>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Change (24h)</th>
                <th className="px-6 py-4">Market Cap</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayData.map((coin) => (
                <tr key={coin._id} className="transition hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={coin.image} alt={coin.name} className="h-8 w-8 rounded-full" />
                      <div>
                        <div className="font-semibold text-gray-900">{coin.name}</div>
                        <div className="text-xs text-gray-500">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 transition-all duration-500">
                    ${parseFloat(coin.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className={`px-6 py-4 font-medium ${parseFloat(coin.change24h) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {parseFloat(coin.change24h) >= 0 ? '+' : ''}{coin.change24h}%
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    ${(Math.random() * 1000).toFixed(1)}B
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Buy</button>
                  </td>
                </tr>
              ))}
              {displayData.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    No cryptocurrencies found. Add some to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <AddAssetModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchData} 
      />
    </div>
  );
};

export default Dashboard;
