const Hero = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-b from-slate-900 to-gray-800 text-white">
      <h1 className="text-5xl font-extrabold">Discover, Collect & Sell NFTs</h1>
      <p className="text-gray-300 mt-4 max-w-lg mx-auto">
        Explore a decentralized marketplace where digital art meets the future. Secure, fast, and built on Algorand.
      </p>
      <div className="mt-8 flex justify-center">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background */}
          <rect width="300" height="300" rx="20" fill="url(#gradientBg)" />

          {/* Abstract NFT shape with animation */}
          <polygon points="150,50 200,150 100,150" fill="#4F46E5">
            <animate
              attributeName="points"
              values="150,50 200,150 100,150; 140,60 190,140 110,160; 150,50 200,150 100,150"
              dur="3s"
              repeatCount="indefinite"
            />
          </polygon>

          {/* Pulsating circle */}
          <circle cx="150" cy="160" r="30" fill="#FACC15">
            <animate attributeName="r" values="30; 35; 30" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Floating rectangle */}
          <rect x="120" y="200" width="60" height="30" rx="5" fill="#9333EA">
            <animate attributeName="y" values="200; 190; 200" dur="1.5s" repeatCount="indefinite" />
          </rect>

          {/* Shimmering shine effects */}
          <circle cx="220" cy="80" r="8" fill="white" opacity="0.8">
            <animate attributeName="opacity" values="0.8; 0.3; 0.8" dur="2s" repeatCount="indefinite" />
          </circle>

          <circle cx="60" cy="220" r="5" fill="white" opacity="0.5">
            <animate attributeName="opacity" values="0.5; 0.1; 0.5" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradientBg" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E293B" />
              <stop offset="1" stopColor="#334155" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Hero
