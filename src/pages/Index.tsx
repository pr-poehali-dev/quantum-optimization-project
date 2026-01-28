import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { AdvantagesSection } from "@/components/AdvantagesSection"
import { ReviewsSection } from "@/components/ReviewsSection"
import { GallerySection } from "@/components/GallerySection"
import { ContactsSection } from "@/components/ContactsSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ReviewsSection />
      <GallerySection />
      <ContactsSection />
      <footer className="py-12 text-center text-sm text-gray-500 border-t border-gray-800">
        <p className="mb-2">
          © 2024 <span className="font-medium text-purple-400">Cube Games</span> — Компьютерный клуб нового уровня
        </p>
        <p className="text-xs">
          Работаем круглосуточно для вашего комфорта 🎮
        </p>
      </footer>
    </main>
  )
}