import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 pb-12 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] border border-purple-500/20 py-2 text-sm px-4">
        <span className="rounded-full bg-purple-500/20 px-3 py-0.5 text-xs font-medium text-purple-400">РАБОТАЕМ 24/7</span>
        <span className="text-gray-300">Круглосуточный доступ к игровым ПК</span>
      </div>

      <h1 className="mb-6 max-w-4xl text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white text-balance">
        Cube Games — компьютерный клуб нового уровня
      </h1>

      <p className="mb-10 max-w-2xl text-xl text-gray-400">Мощные ПК, быстрый интернет и уютная атмосфера 24/7</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-lg hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/50">
          Забронировать ПК <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 px-8 py-6 text-lg">
          Посмотреть цены
        </Button>
      </div>
    </section>
  )
}