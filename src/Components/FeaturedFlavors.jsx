export default function FeaturedFlavors() {
    // Featured ice cream data
    const featuredIceCream = [
      {
        id: 1,
        name: "Classic Tiramisu",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
        description: "Our signature flavor combines mascarpone, espresso, and cocoa for an authentic Italian experience.",
        badge: "Bestseller",
      },
      {
        id: 2,
        name: "Strawberry Dream",
        image:
          "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
        description: "Fresh strawberries blended into our creamy base, creating a perfect balance of sweetness and tang.",
        badge: "New",
      },
      {
        id: 3,
        name: "Chocolate Hazelnut",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80",
        description: "Rich chocolate gelato with roasted hazelnuts, inspired by Italy's favorite chocolate spread.",
        badge: "Popular",
      },
    ]
  
    return (
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Where every bite tells a story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Handcrafted with love and premium ingredients, our gelato brings the authentic taste of Italy to your
              doorstep.
            </p>
          </div>
  
          {/* Cards container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredIceCream.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </div>
                )}
  
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
  
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.name}</h3>
                  <p className="text-slate-600 mb-6">{item.description}</p>
  
                  <div className="flex items-center justify-between">
                    <span className="text-pink-500 font-bold">$5.99</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  