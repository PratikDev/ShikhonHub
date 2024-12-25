import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 pb-40 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
          Welcome to ShikhonHub
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground">
          The ultimate Student Management System for educational institutions
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </section>
  )
}

