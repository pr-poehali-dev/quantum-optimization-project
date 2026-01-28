import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <CubeGamesLogo />
        <span className="text-xl font-bold text-white">
          Cube Games
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
          О клубе
        </a>
        <a href="#advantages" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
          Преимущества
        </a>
        <a href="#reviews" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
          Отзывы
        </a>
        <a href="#gallery" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
          Галерея
        </a>
        <a href="#contacts" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 bg-transparent"
      >
        Забронировать ПК
      </Button>
    </header>
  )
}

function CubeGamesLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" fill="#A855F7" />
      <rect x="13" y="3" width="8" height="8" fill="#A855F7" opacity="0.7" />
      <rect x="3" y="13" width="8" height="8" fill="#A855F7" opacity="0.7" />
      <rect x="13" y="13" width="8" height="8" fill="#A855F7" opacity="0.5" />
    </svg>
  )
}