import { useState } from 'react'

const MyNFTs = () => {
  // Sample NFT Data (Replace with actual data from blockchain)
  const [nfts] = useState([
    {
      id: 1,
      name: 'CyberPunk #1021',
      image: 'https://via.placeholder.com/150',
      price: '0.8 ETH',
    },
    {
      id: 2,
      name: 'Astronaut Ape',
      image: 'https://via.placeholder.com/150',
      price: '1.2 ETH',
    },
    {
      id: 3,
      name: 'Galaxy Dragon',
      image: 'https://via.placeholder.com/150',
      price: '2.5 ETH',
    },
  ])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My NFTs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-slate-800 p-4 rounded-lg shadow-lg">
            <img src={nft.image} alt={nft.name} className="rounded-lg mb-4 w-full" />
            <h2 className="text-lg font-semibold">{nft.name}</h2>
            <p className="text-gray-400">{nft.price}</p>
            <button className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Sell NFT</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyNFTs
