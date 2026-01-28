export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          О клубе Cube Games
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mx-auto mb-8"></div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Компьютерный клуб <span className="text-purple-400 font-semibold">Cube Games</span> — это идеальное место для тех, кто любит компьютерные игры. У нас мощные игровые компьютеры, удобные кресла, быстрый интернет и дружелюбная атмосфера. Подходит для одиночной игры, командных матчей и отдыха с друзьями.
        </p>
      </div>
    </section>
  )
}
