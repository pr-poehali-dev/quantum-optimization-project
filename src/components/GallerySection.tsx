export function GallerySection() {
  const images = [
    {
      url: "https://cdn.poehali.dev/projects/1e063d9d-7768-45eb-8bb4-1ed82cd1e62f/files/0628238e-ca01-41e4-8754-767ee8dca9d4.jpg",
      alt: "Мощная игровая станция с RGB подсветкой"
    },
    {
      url: "https://cdn.poehali.dev/projects/1e063d9d-7768-45eb-8bb4-1ed82cd1e62f/files/11cefcce-05c2-43a2-b05a-bc50e770d465.jpg",
      alt: "Игровой зал с удобными креслами"
    },
    {
      url: "https://cdn.poehali.dev/projects/1e063d9d-7768-45eb-8bb4-1ed82cd1e62f/files/bac72d9e-6c98-4083-86c1-105c61cc6e2f.jpg",
      alt: "Команда играет вместе"
    }
  ]

  return (
    <section id="gallery" className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Галерея клуба
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Загляните внутрь Cube Games — посмотрите на наше оборудование и атмосферу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-video border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
