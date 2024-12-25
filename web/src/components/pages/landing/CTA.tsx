import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-popover">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-popover-foreground">
          Ready to Transform Your Institution?
        </h2>
        <p className="text-xl mb-8 text-popover-foreground">
          Join ShikhonHub today and experience the future of student management.
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Schedule a Demo
        </Button>
      </div>
    </section>
  )
}

