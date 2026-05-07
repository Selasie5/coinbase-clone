import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { addCrypto } from '../../api/crypto';

const AddAssetModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price: '',
    image: '',
    change24h: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await addCrypto(formData);
      onSuccess();
      onClose();
      setFormData({ name: '', symbol: '', price: '', image: '', change24h: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add asset. Check all fields.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Add New Asset</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              placeholder="e.g. Bitcoin"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Symbol</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                placeholder="BTC"
                value={formData.symbol}
                onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
              <input
                type="number"
                step="any"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                placeholder="65000"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              placeholder="https://..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">24h Change (%)</label>
            <input
              type="number"
              step="any"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              placeholder="1.5"
              value={formData.change24h}
              onChange={(e) => setFormData({ ...formData, change24h: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-400"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Add Asset'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAssetModal;
