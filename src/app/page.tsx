import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "~/components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0"></div>
    </main>
  )
}
