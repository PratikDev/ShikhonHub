"use client"

import { Brain, FileSearch, MessageSquare, Mic, Notebook, Volume2 } from "lucide-react";
import { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "grid place-content-center bg-accent p-3 z-10 size-12 rounded-full border-2 border-border shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

export default function AICapabilities() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <section className="container mx-auto gap-20 grid grid-cols-1 lg:grid-cols-2 py-20 px-4 md:px-6 lg:px-8">
            <div className="space-y-12">
                <h2 className="text-4xl font-bold">Cutting-Edge AI Capabilities</h2>
                <p className="text-lg">
                    <span>Discover the latest advancements in AI technology that enhance user experience and streamline operations. Our features are designed to provide intelligent solutions and drive innovation. From natural language processing to advanced data analytics, our AI capabilities are at the forefront of technological progress. On the </span>
                    <strong className="text-xl underline underline-offset-4">ShikhonHub</strong>
                    <span> platform, you can leverage these AI features to simplify and enhance your institutional life, making tasks more efficient and effective. Stay ahead in a rapidly evolving digital landscape with our state-of-the-art AI solutions.</span>
                </p>
            </div>

            <div
                className="relative w-full max-w-xl mx-auto lg:ml-auto flex items-center justify-center overflow-hidden"
                ref={containerRef}
            >
                <div className="flex size-full flex-col max-h-[320px] items-stretch justify-between gap-10">
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div1Ref}>
                            <FileSearch className="size-full text-primary" />
                        </Circle>

                        <Circle ref={div5Ref}>
                            <MessageSquare className="size-full text-primary" />
                        </Circle>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div2Ref}>
                            <Volume2 className="size-full text-primary" />
                        </Circle>

                        <div className="flex flex-col items-center justify-center bg-accent p-2 rounded z-10" ref={div4Ref}>
                            <strong className="text-4xl md:text-6xl">SH</strong>
                        </div>

                        <Circle ref={div6Ref}>
                            <Mic className="size-full text-primary" />
                        </Circle>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div3Ref}>
                            <Brain className="size-full text-primary" />
                        </Circle>

                        <Circle ref={div7Ref}>
                            <Notebook className="size-full text-primary" />
                        </Circle>
                    </div>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div4Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div4Ref}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div7Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                    reverse
                />
            </div>
        </section>
    )
}