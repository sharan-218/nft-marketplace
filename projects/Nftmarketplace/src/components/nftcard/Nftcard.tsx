import { Card, CardContent } from '../../components/ui/card'

interface NFTProps {
  image: string
  name: string
  price: number
}

export default function NFTCard({ image, name, price }: NFTProps) {
  return (
    <Card className="w-72 p-2 hover:shadow-lg transition">
      <img src={image} alt={name} className="rounded-lg object-cover w-full h-48" />
      <CardContent className="mt-3 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{price} ALGO</p>
      </CardContent>
    </Card>
  )
}
