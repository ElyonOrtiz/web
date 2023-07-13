import Link from 'next/link'
import nlwLogo from '../assets/nlw-spacingtime-logo.svg'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="nlwLogo" />
      <div>
        <h1 className="space-y-5">Sua cápsula do tempo</h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
        href="/memories/news"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
