import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const reviews = [
  {
    name: "Eddie",
    text: "Отличное, уютное место. Цены низкие, качество на высоте 🔥 Поиграть и отдохнуть — самое то.",
    rating: 5
  },
  {
    name: "Мария Г.",
    text: "Отличное место для отдыха с друзьями и семьёй. Хожу почти каждый день, всё работает идеально.",
    rating: 5
  },
  {
    name: "Инкогнито",
    text: "Дружелюбная атмосфера, мощное оборудование и удобные кресла. Всё на высоте.",
    rating: 5
  }
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Отзывы наших клиентов
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="Star" className="w-6 h-6 fill-yellow-400" />
            ))}
            <span className="text-white ml-2 text-lg">5.0 / 5</span>
            <span className="text-gray-400 ml-1">(53 оценки)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {review.text}
              </p>
              <p className="text-purple-400 font-semibold">
                — {review.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
