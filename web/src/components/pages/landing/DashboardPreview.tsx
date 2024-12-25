import Image from 'next/image'

export default function DashboardPreview() {
  return (
    <div className="relative -mt-20 mb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/200/300"
            width={1200}
            height={600}
            alt="ShikhonHub Dashboard Preview"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

