import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch, MessageSquare, Brain, FileText, BarChart, HelpCircle, Mic, FileSignature, FileQuestion, Clock, VolumeIcon as VolumeUp, Notebook, PenLine, SpeakerIcon, MessageSquareDot, SquareChartGantt } from 'lucide-react'

const aiFeatures = [
  { title: 'OCR', description: 'Convert images to editable text', icon: FileSearch },
  { title: 'Doc Chat', description: 'Interact with documents using AI', icon: MessageSquare },
  { title: 'Study Plan', description: 'AI-generated personalized study plans', icon: SquareChartGantt },
  { title: 'Note Creation', description: 'AI-assisted note-taking and organization', icon: PenLine },
  { title: 'Performance Analytics', description: 'In-depth AI-powered performance insights', icon: BarChart },
  { title: 'Quiz Generation', description: 'Automatically generate quizzes from content', icon: HelpCircle },
  { title: 'AI LearnMate', description: 'Your personal AI learning assistant', icon: Brain },
  { title: 'Voice-to-Text Notes', description: 'Convert spoken words to written notes', icon: Mic },
  { title: 'Note Simplification', description: 'Simplify complex notes for better understanding', icon: Notebook },
  { title: 'Resume Builder', description: 'AI-powered resume creation and optimization', icon: FileSignature },
  { title: 'Paper Summarization', description: 'Quickly summarize academic papers', icon: FileText },
  { title: 'Mock Interview & Feedback', description: 'Practice interviews with AI feedback', icon: MessageSquareDot },
  { title: 'Timely Feedback', description: 'Receive instant AI-generated feedback', icon: Clock },
  { title: 'Text-to-Voice', description: 'Convert text to natural-sounding speech', icon: VolumeUp },
]

export default function AIFeatures() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-foreground">
          AI-Powered Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <Card key={index} className="bg-card text-card-foreground">
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

