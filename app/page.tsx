import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/contact-form';
import { Navbar } from '@/components/navbar';
import { ScrollIndicator } from '@/components/scroll-indicator';
import { SmoothScroll } from '@/components/smooth-scroll';
import { HeroSection } from '@/components/hero-section';
import { AnimatedSection, AnimatedCard, ParticleBackground, AnimatedGradientBackground } from '@/components/client-animations';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            {/* Background Effects */}
            <AnimatedGradientBackground />
            <ParticleBackground />
            <ScrollIndicator />
            <SmoothScroll />

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    I'm a passionate MERN Stack Developer with expertise in building scalable, modern web applications. My
                                    focus is on creating seamless user experiences through clean, efficient code and innovative solutions.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    With comprehensive experience in MongoDB, Express.js, React, and Node.js, I specialize in developing
                                    full-stack applications that deliver exceptional performance and user engagement.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    I'm proficient in modern JavaScript frameworks and libraries, RESTful API development, database design,
                                    and cloud deployment. I also have experience with TypeScript, Next.js, and various development tools
                                    that enhance productivity and code quality.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.4}>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start group">
                                        <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className="text-gray-700 dark:text-gray-300">Full-Stack Web Application Development</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className="text-gray-700 dark:text-gray-300">RESTful API Design & Development</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className="text-gray-700 dark:text-gray-300">Database Design & Management</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className="text-gray-700 dark:text-gray-300">Responsive UI/UX Implementation</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        <span className="text-gray-700 dark:text-gray-300">Cloud Deployment & DevOps Integration</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
                    </AnimatedSection>

                    <div className="space-y-8">
                        <AnimatedSection delay={0.2}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Full Stack Developer</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">TechSolutions Inc</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Dec 2024 - Present</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>
                                        Developed and maintained full-stack web applications using React, Node.js, Express.js, and MongoDB,
                                        serving over 10,000+ active users with 99.9% uptime.
                                    </li>
                                    <li>
                                        Collaborated with cross-functional teams to implement responsive UI/UX designs and optimize
                                        application performance, resulting in 40% faster load times.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">MERN Stack Developer</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">WebCraft Solutions</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jun 2023 - Nov 2024</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>
                                        Built scalable e-commerce platforms using MERN stack, handling 50,000+ daily transactions with
                                        seamless user experience.
                                    </li>
                                    <li>
                                        Implemented RESTful APIs and integrated third-party services including payment gateways,
                                        authentication systems, and real-time notifications.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Frontend Developer</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">DigitalCraft Agency</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jan 2023 - May 2023</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>
                                        Developed responsive and interactive user interfaces using React.js, improving user engagement by
                                        35%.
                                    </li>
                                    <li>
                                        Collaborated with design teams to implement pixel-perfect UI components and ensure cross-browser
                                        compatibility.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.5}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Junior Web Developer</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">StartupHub Technologies</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Aug 2022 - Dec 2022</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>
                                        Contributed to full-stack development projects using JavaScript, Node.js, and Express.js for backend
                                        services.
                                    </li>
                                    <li>
                                        Assisted in database design and implementation using MongoDB, ensuring efficient data storage and
                                        retrieval.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedCard delay={0.2}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle>E-Commerce Platform</CardTitle>
                                    <CardDescription>Full-stack online shopping solution</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                                        <Image
                                            src="/placeholder.svg?height=240&width=400"
                                            alt="E-Commerce Platform"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Developed a comprehensive e-commerce platform with user authentication, product management, shopping
                                        cart, payment integration, and order tracking using the MERN stack.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            React
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Node.js
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Express.js
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            MongoDB
                                        </Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full relative overflow-hidden group" disabled>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        <span className="relative z-10">View Project</span>
                                        <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </AnimatedCard>

                        <AnimatedCard delay={0.3}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle>Social Media Dashboard</CardTitle>
                                    <CardDescription>Real-time analytics and management platform</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                                        <Image
                                            src="/placeholder.svg?height=240&width=400"
                                            alt="Social Media Dashboard"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Built a comprehensive social media management platform with real-time analytics, post scheduling,
                                        user engagement tracking, and multi-platform integration using MERN stack and Socket.io.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            React
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Socket.io
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Chart.js
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            JWT Auth
                                        </Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full relative overflow-hidden group" disabled>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        <span className="relative z-10">View Project</span>
                                        <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </AnimatedCard>

                        <AnimatedCard delay={0.4}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle>Task Management App</CardTitle>
                                    <CardDescription>Collaborative project management solution</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                                        <Image
                                            src="/placeholder.svg?height=240&width=400"
                                            alt="Task Management App"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Created a full-stack task management application with team collaboration features, real-time
                                        updates, drag-and-drop functionality, and role-based access control using MERN stack.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            React DnD
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Redux
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Express.js
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            MongoDB
                                        </Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full relative overflow-hidden group" disabled>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        <span className="relative z-10">View Project</span>
                                        <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </AnimatedCard>

                        <AnimatedCard delay={0.5}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle>Real Estate Platform</CardTitle>
                                    <CardDescription>Property listing and management system</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                                        <Image
                                            src="/placeholder.svg?height=240&width=400"
                                            alt="Real Estate Platform"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Developed a comprehensive real estate platform with property listings, advanced search filters,
                                        virtual tours, agent profiles, and booking system using MERN stack and Cloudinary for media
                                        management.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Next.js
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Cloudinary
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Stripe
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            Maps API
                                        </Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full relative overflow-hidden group" disabled>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        <span className="relative z-10">View Project</span>
                                        <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </AnimatedCard>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <AnimatedSection direction="up" delay={0.2}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                                            <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">FE</span>
                                        </span>
                                        Frontend Development
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            React.js
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            Next.js
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            TypeScript
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            Tailwind CSS
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            Redux
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            Material-UI
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            Responsive Design
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                                        >
                                            CSS3 & SASS
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        <AnimatedSection direction="up" delay={0.3}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                                            <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">BE</span>
                                        </span>
                                        Backend Development
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            Node.js
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            Express.js
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            RESTful APIs
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            GraphQL
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            JWT Authentication
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            Socket.io
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            Middleware
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            API Security
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <AnimatedSection direction="up" delay={0.4}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                                            <span className="text-green-600 dark:text-green-300 text-sm font-bold">DB</span>
                                        </span>
                                        Database & Storage
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            MongoDB
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            Mongoose ODM
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            PostgreSQL
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            Redis
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            Database Design
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            Data Modeling
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            Aggregation
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                                        >
                                            Indexing
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        <AnimatedSection direction="up" delay={0.5}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                                            <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">OPS</span>
                                        </span>
                                        DevOps & Deployment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            Docker
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            AWS/Heroku
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            Vercel/Netlify
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            CI/CD Pipelines
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            GitHub Actions
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            Environment Config
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            Git/GitHub
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                                        >
                                            Load Balancing
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>

                    {/* Additional Skills Tags */}
                    <AnimatedSection delay={0.6}>
                        <div className="mt-12 text-center">
                            <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                                >
                                    Stripe API
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                                >
                                    Cloudinary
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                                >
                                    Axios
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                                >
                                    Bcrypt.js
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                                >
                                    Nodemailer
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                                >
                                    Multer
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                                >
                                    Framer Motion
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                                >
                                    React Router
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
                                >
                                    React Hook Form
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
                                >
                                    Formik & Yup
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
                                >
                                    REST APIs
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
                                >
                                    Postman
                                </Badge>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Education & Certifications */}
            <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
                    </AnimatedSection>

                    <div className="mb-12">
                        <AnimatedSection direction="left" delay={0.2}>
                            <h3 className="text-2xl font-bold mb-6">Education</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold">BS, Artificial Intelligence</h4>
                                        <p className="text-purple-600 dark:text-purple-400">
                                            National University of Computer and Emerging Sciences FAST Karachi
                                        </p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2025</p>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-2">Relevant Courses:</h5>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="animate-pulse">
                                            Algorithms Design and Analysis
                                        </Badge>
                                        <Badge variant="secondary">Object-Oriented Programming</Badge>
                                        <Badge variant="secondary" className="animate-pulse">
                                            Linear Algebra
                                        </Badge>
                                        <Badge variant="secondary">Probability and Statistics</Badge>
                                        <Badge variant="secondary" className="animate-pulse">
                                            Machine Learning
                                        </Badge>
                                        <Badge variant="secondary">Artificial Neural Networks</Badge>
                                        <Badge variant="secondary" className="animate-pulse">
                                            Database Systems
                                        </Badge>
                                        <Badge variant="secondary">Information Retrieval</Badge>
                                        <Badge variant="secondary">Fundamentals of Software Engineering</Badge>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div>
                        <AnimatedSection direction="right" delay={0.3}>
                            <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="font-semibold">Large Language Models Concept - DataCamp</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Basics of LLMs, Zero, Few, Multiple Shots Learning</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="font-semibold">Supervised Machine Learning - DataCamp</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Classification, regression, types of error, evaluation metrics
                                    </p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="font-semibold">Data Science - DataCamp</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Pandas, numpy, machine learning, Python libraries</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="font-semibold">Exploratory Data Analysis - GoodLearnings</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Insightful visualization, stats, statistical queries</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="font-semibold">Winner ML Competition - ACM-AI</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Secured victory in a machine learning competition</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                                        <Mail className="w-5 h-5 text-purple-600 mr-3" />
                                        <a
                                            href="mailto:rajibahamed123@gmail.com"
                                            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                        >
                                            rajibahamed123@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                                        <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                                        <a
                                            href="https://linkedin.com/in/rajib-ahamed"
                                            target="_blank"
                                            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                            rel="noreferrer"
                                        >
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                                        <Github className="w-5 h-5 text-purple-600 mr-3" />
                                        <a
                                            href="https://github.com/rajib-ahamed"
                                            target="_blank"
                                            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                            rel="noreferrer"
                                        >
                                            GitHub Profile
                                        </a>
                                    </div>
                                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                                        <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                                        <a
                                            href="https://kaggle.com/rajibahamed"
                                            target="_blank"
                                            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                            rel="noreferrer"
                                        >
                                            Kaggle Profile
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <p className="text-gray-700 dark:text-gray-300">
                                        I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.3}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <ContactForm />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">Rajib Ahamed</h2>
                            <p className="text-gray-400">MERN Stack Developer</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link
                                href="https://linkedin.com/in/rajib-ahamed"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://github.com/rajib-ahamed"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://kaggle.com/rajibahamed"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:rajibahamed123@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6 text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} Rajib Ahamed. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
