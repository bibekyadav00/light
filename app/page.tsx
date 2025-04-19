"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, PhoneIcon as WhatsApp } from "lucide-react"
import SocialButtons from "@/components/social-buttons"

export default function Home() {
  const animatedElementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      observer.observe(el)
      animatedElementsRef.current.push(el as HTMLElement)
    })

    return () => {
      animatedElementsRef.current.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nonstop-black/80 to-nonstop-black"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-nonstop-blue/20 animate-pulse-slow"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <Badge className="bg-nonstop-blue/20 text-nonstop-blue border-nonstop-blue/30 px-4 py-1 text-sm">
                JEE | NEET | CUET Preparation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter gradient-text">
                NONSTOP
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white">Where Learning Never Ends</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Empowering future engineers | BY NIT DURGAPUR Engineering undergrads. We offer personalized 1-to-1
                sessions to JEE Mains/Advanced, NEET, CUCET aspirants.
              </p>
              
            </div>
            <div className="mx-auto lg:ml-auto animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl animate-float">
                  <Image
                    src="/images/nonstop-flyer.png"
                    alt="Non-stop Flyer"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button asChild className="bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow text-white">
                  <Link href="#enroll">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-nonstop-blue text-nonstop-blue hover:bg-nonstop-blue/10"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black to-nonstop-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-on-scroll">
            <Badge className="bg-nonstop-blue/20 text-nonstop-blue border-nonstop-blue/30 px-4 py-1 mb-6">
              Why Choose Us
            </Badge>
            <h2 className="section-title">Empowering Your Success</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-xl/relaxed">
              At NONSTOP, we help JEE | NEET | CUET aspirants achieve their goals with expert guidance, interactive
              classes, and a structured learning approach.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personalized Learning",
                description: "One-on-one sessions tailored to your learning style and pace for maximum understanding.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.7 50.7 0 0 1 12 13.489a50.709 50.709 0 0 1 9.74-3.25m-18.715.75a60.33 60.33 0 0 1 4.342-2.607m18.715.75a60.29 60.29 0 0 0-4.342-2.607m-18.715.75a60.3 60.3 0 0 0 4.342 2.607m18.715-.75a60.29 60.29 0 0 1-4.342 2.607m-18.715-.75a60.29 60.29 0 0 1-4.342-2.607M6.75 15.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 12v1.5a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Expert Mentors",
                description:
                  "Learn from NIT Durgapur engineering graduates who have cracked JEE and other competitive exams.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.7 50.7 0 0 1 12 13.489a50.709 50.709 0 0 1 9.74-3.25m-18.715.75a60.33 60.33 0 0 1 4.342-2.607m18.715.75a60.29 60.29 0 0 0-4.342-2.607m-18.715.75a60.3 60.3 0 0 0 4.342 2.607m18.715-.75a60.29 60.29 0 0 1-4.342 2.607m-18.715-.75a60.29 60.29 0 0 1-4.342-2.607M6.75 15.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 12v1.5a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Doubt Solving",
                description: "Instant doubt resolution to ensure you never get stuck on a concept or problem.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-1.17 1.025-3.07 1.025-4.242 0-1.172-1.025-1.172-2.687 0-3.712Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-1.17 1.025-3.07 1.025-4.242 0-1.172-1.025-1.172-2.687 0-3.712ZM12 12.25v3.25m0 7.5V19.75m0 0h.008v.008H12V19.75Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Personalized Study Plans",
                description: "Customized study schedules based on your strengths, weaknesses, and target exams.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Regular Assessments",
                description:
                  "Periodic tests and evaluations to track your progress and identify areas for improvement.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                ),
              },
              {
                title: "24/7 Support",
                description: "Get your doubts cleared anytime with our round-the-clock support system.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="group animate-on-scroll">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute -right-12 -top-12 z-0 h-40 w-40 rounded-full bg-blue-900/20 blur-[50px] group-hover:bg-blue-800/30 group-hover:blur-[60px] transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-black/30 border border-white/5">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black/95 to-nonstop-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-on-scroll">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-1 mb-6">
              FIRST 3 SESSIONS FREE!
            </Badge>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Comprehensive coaching programs designed for JEE, NEET, and CUET aspirants
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="animate-on-scroll">
              <Card className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-20 rounded-xl"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-white">QAD Series</CardTitle>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                      Popular
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">Question and Answer Discussion</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-300">
                    LAST MINUTE Question Practice for JEE. Perfect for students looking to refine their problem-solving
                    skills.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Live problem-solving sessions",
                      "Bring your own questions to discuss",
                      "PDF of the session available",
                      "Personalized doubt clearing",
                      "Focus on exam-pattern questions",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="w-full bg-nonstop-green hover:bg-nonstop-green-dark btn-glow">
                      <a
                        href="https://wa.me/918945828056?text=I'm%20interested%20in%20the%20QAD%20Series"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp className="mr-2 h-4 w-4" />
                        Enroll via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-on-scroll">
              <Card className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-20 rounded-xl"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-white">Full Classroom Program</CardTitle>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                      Recommended
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">For 11th and 12th Standard Students</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-300">
                    Comprehensive online program covering the entire syllabus with personalized attention and regular
                    assessments.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "One-on-one personalized coaching",
                      "Customized study plans",
                      "Regular doubt solving sessions",
                      "Mock tests and performance analysis",
                      "PDF notes and study materials",
                      "24/7 doubt clearing support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="w-full bg-nonstop-green hover:bg-nonstop-green-dark btn-glow">
                      <a
                        href="https://wa.me/918945828056?text=I'm%20interested%20in%20the%20Full%20Classroom%20Program"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp className="mr-2 h-4 w-4" />
                        Enroll via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black to-nonstop-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-on-scroll">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-1 mb-6">Resources</Badge>
            <h2 className="section-title">Helpful Articles</h2>
            <p className="section-subtitle">
              Guides and insights to help you excel in your competitive exam preparation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Effective Study Routine",
                description:
                  "Discover how to create an effective study routine that maximizes productivity and retention.",
                image: "/images/articles/study-routine.jpg",
                slug: "study-routine",
                tag: "Study Tips",
                tagColor: "green",
              },
              {
                title: "21-Day Study Habit",
                description: "Learn how to build lasting study habits in just 21 days with our proven approach.",
                image: "/images/articles/habits.jpg",
                slug: "21-day-habit",
                tag: "Productivity",
                tagColor: "pink",
              },
              {
                title: "Consistency in Preparation",
                description: "Why consistency is more important than intensity in competitive exam preparation.",
                image: "/images/articles/consistency.jpg",
                slug: "consistency-importance",
                tag: "Motivation",
                tagColor: "blue",
              },
              {
                title: "Life After IIT/NIT Selection",
                description: "What to expect after cracking JEE and getting into IITs and NITs.",
                image: "/images/articles/after-selection.jpg",
                slug: "life-after-selection",
                tag: "Career",
                tagColor: "orange",
              },
            ].map((article, index) => (
              <div key={index} className="group animate-on-scroll">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative">
                    <div className="overflow-hidden rounded-t-xl">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`article-tag ${
                            article.tagColor === "green"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : article.tagColor === "pink"
                                ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                                : article.tagColor === "orange"
                                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                  : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {article.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 text-xl font-bold text-white">{article.title}</h3>
                      <p className="mb-4 text-sm text-gray-400">{article.description}</p>
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full mt-auto text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                      >
                        <Link href={`/articles/${article.slug}`}>
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="ml-2 h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center animate-on-scroll">
            <Button
              asChild
              variant="outline"
              className="border-blue-500/20 text-blue-400 hover:bg-blue-900/20 hover:text-blue-300"
            >
              <Link href="/articles">
                View All Articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section
        id="enroll"
        className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black/95 to-nonstop-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-on-scroll">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-1 mb-6">
              FIRST 3 SESSIONS FREE!
            </Badge>
            <h2 className="section-title">Start Your Journey Today</h2>
            <p className="section-subtitle">Begin your path to success with Non-stop coaching</p>
          </div>
          <div className="mx-auto max-w-3xl mt-8 animate-on-scroll">
            <Card className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-20 rounded-xl"></div>
              <CardContent className="relative z-10 p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Contact Us</h3>
                    <p className="text-gray-300">
                      Get in touch with us today to start your journey towards success. Our team is ready to answer all
                      your questions.
                    </p>
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-3">
                        <WhatsApp className="h-5 w-5 text-green-500" />
                        <a
                          href="https://wa.me/918945828056"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-green-400 transition-colors"
                        >
                          +91 8945828056
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21.75 6.75-9 5.25L3.75 6.75m0 0 9 5.25 9-5.25M3.75 18h16.5v-2.25m-16.5 0h16.5"
                          />
                        </svg>
                        <a
                          href="mailto:nonstopwlne49@gmail.com"
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          nonstopwlne49@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-blue-500"
                        >
                          <path d="M21.5 4.5 2.5 12.5 11.5 14.5 14.5 21.5 21.5 4.5" />
                        </svg>
                        <a
                          href="https://t.me/nonstop_wlne"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          @nonstop_wlne
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-pink-500"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <a
                          href="https://www.instagram.com/nonstop_wlne"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-pink-400 transition-colors"
                        >
                          @nonstop_wlne
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Enroll Now</h3>
                    <p className="text-gray-300">
                      Choose your preferred way to enroll and start your journey with Non-stop coaching.
                    </p>
                    <div className="space-y-4 pt-4">
                      <Button asChild className="w-full bg-nonstop-green hover:bg-nonstop-green-dark btn-glow">
                        <a
                          href="https://wa.me/918945828056?text=I'm%20interested%20in%20enrolling%20for%20Non-stop%20coaching"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsApp className="mr-2 h-4 w-4" />
                          Enroll via WhatsApp
                        </a>
                      </Button>
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 btn-glow">
                        <a href="https://t.me/nonstop_wlne" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="M21.5 4.5 2.5 12.5 11.5 14.5 14.5 21.5 21.5 4.5" />
                          </svg>
                          Enroll via Telegram
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Floating Buttons */}
      <SocialButtons />
    </div>
  )
}
