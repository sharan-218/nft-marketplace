import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { PeraWalletConnect } from '@perawallet/connect'

const peraWallet = new PeraWalletConnect()

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState('')
  async function connectWallet() {
    try {
      const accounts = await peraWallet.connect()
      setWalletAddress(accounts[0])
    } catch (error) {
      console.error('Wallet connection failed', error)
    }
  }

  return (
    <nav className="flex justify-between items-center p-4 border-b bg-white shadow-md">
      <h1 className="text-2xl font-bold">NFT Application</h1>
      <Button onClick={connectWallet}>
        {walletAddress ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4) : 'Connect Wallet'}
      </Button>
    </nav>
  )
}
