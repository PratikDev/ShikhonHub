import { Users, MessageSquare, Key, BarChart, FileText, Bell, Calendar, LucideProps, LayoutDashboard } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from "react";

import { cn } from "@/lib/utils";

const features = [
  { title: 'StudyPal', description: 'Find like-minded study partners', Icon: Users },
  { title: 'Chat Room', description: 'Collaborate in real-time', Icon: MessageSquare },
  { title: 'Authentication', description: 'QR/Magic-Link/SSO based secure login', Icon: Key },
  { title: 'Result Analysis', description: 'Comprehensive result analysis tools', Icon: BarChart },
  { title: 'Result Publication', description: 'Easily publish and distribute results', Icon: FileText },
  { title: 'Notice Board', description: 'Keep everyone informed with digital notices', Icon: Bell },
  { title: 'Attendance Management', description: 'Effortless attendance tracking', Icon: Calendar },
  { title: 'Dashboard', description: 'Comprehensive dashboard for all users', Icon: LayoutDashboard },
]

export default function CoreFeatures() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-card">
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary-foreground">
          Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


const Feature = ({
  title,
  description,
  Icon,
  index,
}: {
  title: string;
  description: string;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        <Icon />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};