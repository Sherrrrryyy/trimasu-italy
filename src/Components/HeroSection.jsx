import './HeroSection.css';


export default function HeroSection() {
    return (
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundPosition: "center 30%",
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-pink-800/60 to-transparent"></div>
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-4 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              Authentic Italian Gelato
            </div>
  
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-150">
              Tiramisu Perfection – A Taste of Italy in Every Bite!
            </h1>
  
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up animation-delay-300">
              Experience the authentic taste of Italian gelato, crafted with traditional recipes and premium ingredients.
              Our signature Tiramisu flavor combines the richness of mascarpone, the boldness of espresso, and the
              delicate sweetness of cocoa for an unforgettable dessert experience.
            </p>
  
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-450">
              <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
              </button>
            
            </div>
  
            {/* Floating ice cream scoop decorations */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 opacity-70 blur-2xl"></div>
            <div className="absolute -bottom-16 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 opacity-60 blur-xl"></div>
          </div>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>
    )
  }
  
  