export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/1641517327853-50981HB1R69XPNV4G07R/unsplash-image-o6fn1CX4LeM.png?format=2500w"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-6xl w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-8 leading-tight">
              Welcome to Reflect Therapy
            </h1>
            <blockquote className="text-white px-2 sm:px-0">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-2 leading-relaxed">
                "Trauma is not what happens to you but what happens inside you."
              </p>
              <footer className="text-xs sm:text-sm md:text-base">— Gabor Maté</footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-1 text-base sm:text-lg text-muted-foreground">
            <p className="font-medium">Dr. Kendra Gottschall</p>
            <p>Reflect Therapy</p>
            <p>27 Beech Hill Rd, Antigonish, NS</p>
            <div className="py-2">
              <p className="text-sm">—</p>
            </div>
            <p>902 600 5126</p>
            <p>kendra@reflecttherapy.ca</p>
            <div className="pt-3">
              <a href="https://www.psychologytoday.com/ca/therapists/ns/antigonish/929778?ref=1&sid=61f02cc987713" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Psychology Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
