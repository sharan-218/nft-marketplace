import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const nftData = [
  {
    id: 1,
    name: 'Crypto Ape #001',
    image: '/images/nft1.jpg',
    price: '5 ALGO',
  },
  {
    id: 2,
    name: 'Pixel Punk #214',
    image: '/images/nft2.jpg',
    price: '3.2 ALGO',
  },
  {
    id: 3,
    name: 'Meta Space Art',
    image: '/images/nft3.jpg',
    price: '7.5 ALGO',
  },
]

const NFTGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {nftData.map((nft) => (
        <Card key={nft.id} className="rounded-xl shadow-lg overflow-hidden">
          <img src={nft.image} alt={nft.name} className="w-full h-56 object-cover" />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{nft.name}</h3>
            <p className="text-gray-500">{nft.price}</p>
            <Button className="mt-4 w-full">Buy Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default NFTGrid
