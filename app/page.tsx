import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen pt-[180px]">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
