import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Card } from "@/components/ui/card"

export function ContactsSection() {
  return (
    <section id="contacts" className="px-4 py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Как нас найти
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Icon name="MapPin" className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Адрес</h3>
                  <p className="text-gray-300">ул. Отрадная, 11</p>
                  <p className="text-sm text-gray-400 mt-1">Рядом со Школой №70 (440 м)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Icon name="Phone" className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Телефон</h3>
                  <a href="tel:+79084855757" className="text-green-400 hover:text-green-300 transition-colors text-xl font-semibold">
                    +7 (908) 485-57-57
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Icon name="Clock" className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Время работы</h3>
                  <p className="text-blue-400 font-semibold text-xl">Круглосуточно 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg shadow-lg shadow-purple-500/50">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Забронировать ПК
              </Button>
              <Button variant="outline" className="w-full rounded-full border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent py-6 text-lg">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-full border-gray-700 text-white hover:bg-gray-800 bg-transparent py-6">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="rounded-full border-gray-700 text-white hover:bg-gray-800 bg-transparent py-6">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Telegram
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-2 overflow-hidden">
            <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.620070,55.753220&z=15&l=map"
                className="w-full h-full border-0"
                allowFullScreen
                title="Карта местоположения Cube Games"
              ></iframe>
            </div>
            <Button className="w-full mt-4 rounded-full bg-gray-800 hover:bg-gray-700 text-white py-4">
              <Icon name="Navigation" className="mr-2 h-5 w-5" />
              Построить маршрут
            </Button>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-purple-900/30 to-green-900/30 border-purple-500/30 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Забронируй ПК прямо сейчас и погрузись в мир киберспорта вместе с Cube Games
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/50">
              Забронировать сейчас
            </Button>
            <Button variant="outline" className="rounded-full border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent px-8 py-6 text-lg">
              Узнать цены
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
