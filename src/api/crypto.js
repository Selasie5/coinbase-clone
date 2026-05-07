import API from './axios';

export const getCryptos = () => API.get('/crypto');
export const getGainers = () => API.get('/crypto/gainers');
export const getNewListings = () => API.get('/crypto/new');

export const addCrypto = (data) => API.post('/crypto', data);

export const seedCryptos = async () => {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '65000', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', change24h: '+1.2' },
    { name: 'Ethereum', symbol: 'ETH', price: '3500', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', change24h: '+2.5' },
    { name: 'Solana', symbol: 'SOL', price: '145', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', change24h: '+5.8' },
    { name: 'Cardano', symbol: 'ADA', price: '0.45', image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png', change24h: '-0.5' },
    { name: 'Polkadot', symbol: 'DOT', price: '7.2', image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png', change24h: '+3.1' },
  ];

  for (const coin of coins) {
    try {
      await addCrypto(coin);
      console.log(`Added ${coin.name}`);
    } catch (err) {
      console.error(`Failed to add ${coin.name}`, err);
    }
  }
};
