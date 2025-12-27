import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative pt-[180px]">
      {/* Full page background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/1641515462045-45F9HBAVENHG3796UNXS/unsplash-image-o6fn1CX4LeM.png?format=2500w"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/15" />
      </div>
      <Header />
      <main>
        {/* Individual Therapy */}
        <div className="py-8 animate-fade-in">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="bg-white/75 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-100/50 hover:shadow-purple-200/50 hover:border-purple-200/60 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2">
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-xl border-2 border-white/50 hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/1641516392684-B2ID9KDJUB88OQCD6281/unsplash-image-9KrLgnMc3OE.jpg?format=500w"
                      alt="Individual Therapy"
                      className="absolute inset-0 w-full h-full object-cover hover:brightness-105 transition-all duration-300"
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/60 to-purple-600/60"></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-light mb-6 uppercase tracking-wide text-purple-900 flex items-center gap-3">
                    <span className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
                    Individual Therapy
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    We combine approaches based on cognitive behavioural therapy, acceptance and commitment therapy, eye
                    movement desensitization & reprocessing (EMDR), exposure response and prevention, mindfulness
                    approaches, motivational interviewing and more to adapt to your unique needs. Our treatments are
                    grounded in a deep understanding and respect for energy within your life and truly learning about your
                    relationships and how those impact your current struggles. Through this understanding, we can guide
                    you toward a lightened, more fulfilled life.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    We offer 60 minute Individual Therapy sessions via Telehealth. Please reach out for a free
                    consultation to decide if therapy is right for you.
                  </p>
                  <p className="text-sm text-muted-foreground italic border-t border-border pt-4 mt-6">
                    The current hourly rate for Individual Therapy, reports or case conferences is $180.00/Hour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Couples/Family Therapy */}
        <div className="py-8 pb-24 animate-fade-in">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="bg-white/65 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-100/50 hover:shadow-purple-200/50 hover:border-purple-200/60 transition-all duration-500">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                <div className="lg:w-1/2">
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-xl border-2 border-white/50 hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/1641516924787-QOWP6P82IDWVC9AU7LGB/unsplash-image-FO18LpXMlvk.jpg?format=500w"
                      alt="Couples/Family Therapy"
                      className="absolute inset-0 w-full h-full object-cover hover:brightness-105 transition-all duration-300"
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/60 to-purple-600/60"></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-light mb-6 uppercase tracking-wide text-purple-900 flex items-center gap-3">
                    <span className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
                    Couples/Family Therapy
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Our approach depends upon the issues impacting relationships, but is derived from an assessment of
                    communication styles, patterns, perceptions and struggles in the life of both individuals and the
                    relational unit. We believe that our relationship with others is the most significant factor impacting
                    our mental well being and when attention is given to these factors, increased connections result.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    We offer 60 minute Couples/Family Therapy sessions via Telehealth.
                  </p>
                  <p className="text-sm text-muted-foreground italic border-t border-border pt-4 mt-6">
                    The current hourly rate for Couples/Family Therapy is $225.00/Hour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
