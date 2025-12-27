import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[40vh] min-h-[300px]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/61d762a102f1d858b22d0d22/1641517637473-B7RPWILFH0MUAGYRUBLV/unsplash-image-o6fn1CX4LeM.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <h1 className="text-4xl font-light text-center mb-12 uppercase tracking-wide">Contact</h1>

          <div className="text-center mb-12">
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              For inquiries please fill out the contact form or send an email to:
            </p>
            <a
              href="mailto:kendra@reflecttherapy.ca"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              kendra@reflecttherapy.ca
            </a>
          </div>

          {/* Contact Form */}
          <form action="https://formsubmit.co/kendra@reflecttherapy.ca" method="POST" className="space-y-6">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New contact form submission from Reflect Therapy" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-input bg-background rounded focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-input bg-background rounded focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-input bg-background rounded focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-input bg-background rounded focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-input bg-background rounded focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors font-medium uppercase tracking-wide"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
