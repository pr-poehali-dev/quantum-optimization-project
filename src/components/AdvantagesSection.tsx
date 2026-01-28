import Icon from "@/components/ui/icon"
import { Card } from "@/components/ui/card"

const advantages = [
  {
    icon: "Star",
    title: "Рейтинг 5.0",
    description: "53 оценки от довольных клиентов"
  },
  {
    icon: "Monitor",
    title: "Мощные игровые ПК",
    description: "Последнее поколение железа для любых игр"
  },
  {
    icon: "Armchair",
    title: "Удобные кресла",
    description: "Комфорт для многочасовых игровых сессий"
  },
  {
    icon: "Zap",
    title: "Высокоскоростной интернет",
    description: "Без лагов и задержек в онлайн-играх"
  },
  {
    icon: "Clock",
    title: "Работаем круглосуточно",
    description: "Приходи в любое удобное время 24/7"
  },
  {
    icon: "Users",
    title: "Дружелюбные администраторы",
    description: "Всегда помогут и подскажут"
  },
  {
    icon: "DollarSign",
    title: "Низкие цены",
    description: "Доступные тарифы для всех"
  }
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="px-4 py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Почему Cube Games?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Icon name={advantage.icon} className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
