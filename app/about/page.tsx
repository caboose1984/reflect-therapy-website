import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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

        {/* About Kendra Section - White Background */}
        <div className="py-12 animate-fade-in">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="bg-white/75 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-100/50 hover:shadow-purple-200/50 hover:border-purple-200/60 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/3">
                <h2 className="text-xl font-normal mb-6 uppercase tracking-widest text-purple-900 flex items-center gap-3">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
                  About Kendra
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'var(--font-baskerville), serif' }}>
                  Hi! I’m Kendra. I’m a lifelong Nova Scotia resident with a passion for helping others. My clinical interest surrounds family relationships and trauma. I look forward to developing positive and effective relationships to help clients move toward a more peaceful place in their lives.
                </p>
              </div>
              <div className="lg:w-1/3">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-xl border-2 border-white/50 hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/39f58ba3-d2fe-4f64-bada-e10b9da98075/IMG_0677.jpg?format=1000w"
                    alt="Kendra"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center hover:brightness-105 transition-all duration-300"
                    style={{ objectPosition: '40% center' }}
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/60 to-purple-600/60"></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="py-12 animate-fade-in">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="bg-white/65 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-100/50 hover:shadow-purple-200/50 hover:border-purple-200/60 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-xl border-2 border-white/50 hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/23be432f-578f-4223-a25b-12277a989a84/31369117_10100444062314084_4339306292096008192_n.jpg?format=1000w"
                    alt="Education"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover hover:brightness-105 transition-all duration-300"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/60 to-purple-600/60"></div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-xl font-normal mb-6 uppercase tracking-widest text-purple-900 flex items-center gap-3">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
                  Education
                </h2>
                <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-baskerville), serif' }}>
                I completed my Bachelor of Arts (Honours) at St. Francis Xavier University in 2009. I went on to complete my Bachelor of Social Work and Master of Social Work at Dalhousie University, graduating in 2013. I also obtained my Doctor of Education in 2018 from St. Francis Xavier University. I have maintained my registration with the Nova Scotia College of Social Work since 2013. As part of my ongoing registration with the Nova Scotia College of Social Workers (NSASW) I have been engaged in various training programs throughout the years.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="py-12 pb-24 animate-fade-in">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="bg-white/75 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-100/50 hover:shadow-purple-200/50 hover:border-purple-200/60 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/3">
                <h2 className="text-xl font-normal mb-6 uppercase tracking-widest text-purple-900 flex items-center gap-3">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
                  Therapeutic Approaches
                </h2>
                <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-baskerville), serif' }}>
                I have been working with families, youth, young adults, couples, seniors and individuals in various capacities since 2011. My clinical experience varies from work with seniors to children as young as six. My approach blends methods based on Cognitive Behavior Therapy, Eye Movement Desensitization & Reprocessing (EMDR), Mindfulness-based practice, Acceptance and Commitment Therapy,  Motivational Interviewing and more. Most recently I have completed training related to Parenting Skills and Behavioral approaches, and this has had profound impact on my approach.
                </p>
              </div>
              <div className="lg:w-1/3">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-xl border-2 border-white/50 hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/26f5dca6-3432-4ab4-92df-add30c687d55/IMG_1264.jpg?format=1000w"
                    alt="Therapeutic Approaches"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover hover:brightness-105 transition-all duration-300"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/60 to-purple-600/60"></div>
                </div>
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
