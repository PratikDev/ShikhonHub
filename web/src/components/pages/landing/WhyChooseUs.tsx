import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Users, Sparkles } from 'lucide-react'

const reasons = [
  {
    title: 'Multi-level Authentication',
    description: 'Ensure data security with our robust multi-level authentication system.',
    icon: Shield,
  },
  {
    title: 'AI-Powered Features',
    description: 'Leverage cutting-edge AI technology to enhance learning and teaching experiences.',
    icon: Sparkles,
  },
  {
    title: 'User-Friendly Dashboard',
    description: 'Intuitive and easy-to-use dashboard for students, teachers, and staff members.',
    icon: Zap,
  },
  {
    title: 'Comprehensive Management',
    description: 'Efficiently manage students, teachers, and staff all in one platform.',
    icon: Users,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[hsl(240,5%,16%)]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-foreground">
          Why Choose ShikhonHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-lg bg-card text-card-foreground">
              <CardHeader>
                <reason.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

