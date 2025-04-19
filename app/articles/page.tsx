"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SocialButtons from "@/components/social-buttons"

export default function ArticlesPage() {
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

  const articles = [
    {
      id: "study-routine",
      title: "Effective Study Routine",
      description: "Discover how to create an effective study routine that maximizes productivity and retention.",
      image: "/images/articles/study-routine.jpg",
      excerpt:
        "A well-structured study routine is essential for competitive exam preparation. This article provides practical tips for creating a balanced and effective study schedule.",
      tag: "Study Tips",
      tagColor: "green",
    },
    {
      id: "21-day-habit",
      title: "21-Day Study Habit for Newbies",
      description: "Learn how to build lasting study habits in just 21 days with our proven approach.",
      image: "/images/articles/habits.jpg",
      excerpt:
        "Research shows it takes about 21 days to form a new habit. This guide walks you through a step-by-step process to establish consistent study habits that stick.",
      tag: "Productivity",
      tagColor: "pink",
    },
    {
      id: "consistency-importance",
      title: "Consistency Importance in Entrance Preparation",
      description: "Why consistency is the key to success in competitive exam preparation.",
      image: "/images/articles/consistency.jpg",
      excerpt:
        "Consistency is more important than intensity when preparing for competitive exams. Learn strategies to maintain steady progress throughout your preparation journey.",
      tag: "Motivation",
      tagColor: "blue",
    },
    {
      id: "life-after-selection",
      title: "Life After Selection in IITs and NITs",
      description: "What to expect after getting selected in prestigious institutions like IITs and NITs.",
      image: "/images/articles/after-selection.jpg",
      excerpt:
        "Getting into IITs and NITs is just the beginning of an exciting journey. This article provides insights into academic life, opportunities, and challenges in these premier institutions.",
      tag: "Career",
      tagColor: "orange",
    },
  ]

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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-nonstop-blue/20 text-nonstop-blue border-nonstop-blue/30 px-4 py-1 mb-6 animate-on-scroll">
              Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter gradient-text animate-on-scroll">
              Articles & Resources
            </h1>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-xl/relaxed animate-on-scroll">
              Helpful guides and insights for competitive exam preparation
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black to-nonstop-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <div key={article.id} className="group animate-on-scroll">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative">
                    <div className="overflow-hidden rounded-t-xl">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={300}
                        className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <div className="p-6">
                      <h3 className="mb-2 text-2xl font-bold text-white">{article.title}</h3>
                      <p className="mb-6 text-gray-400">{article.excerpt}</p>
                      <Button asChild className="bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow w-full">
                        <Link href={`/articles/${article.id}`}>Read Full Article</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Floating Buttons */}
      <SocialButtons />
    </div>
  )
}
