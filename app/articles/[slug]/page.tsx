"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import SocialButtons from "@/components/social-buttons"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
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

  const articles = {
    "study-routine": {
      title: "Effective Study Routine",
      image: "/images/articles/study-routine.jpg",
      tag: "Study Tips",
      tagColor: "green",
      content: `
        <h2>Creating an Effective Study Routine for Competitive Exams</h2>
        
        <p>A well-structured study routine is essential for success in competitive exams like JEE, NEET, and CUET. Here's how to create one that works for you:</p>
        
        <h3>1. Assess Your Peak Productivity Hours</h3>
        <p>Everyone has different times of day when they're most alert and focused. Some students work best early in the morning, while others are night owls. Identify your peak productivity hours and schedule your most challenging subjects during these times.</p>
        
        <h3>2. Create a Balanced Schedule</h3>
        <p>Divide your study time among all subjects, giving more time to subjects you find difficult. A good rule of thumb is to allocate time proportionally to the weightage of the subject in the exam and your proficiency level.</p>
        
        <h3>3. Use the Pomodoro Technique</h3>
        <p>Study in focused bursts of 25-30 minutes, followed by a 5-minute break. After completing four such sessions, take a longer break of 15-30 minutes. This technique helps maintain high concentration levels and prevents burnout.</p>
        
        <h3>4. Include Regular Revision</h3>
        <p>Incorporate daily, weekly, and monthly revision sessions into your routine. Spaced repetition is proven to enhance long-term retention of information.</p>
        
        <h3>5. Practice with Mock Tests</h3>
        <p>Regularly take practice tests under exam-like conditions. This helps you get familiar with the exam pattern, improves time management, and identifies areas that need more attention.</p>
        
        <h3>6. Maintain Physical and Mental Well-being</h3>
        <p>Include time for physical exercise, proper meals, and adequate sleep in your routine. A healthy body supports a healthy mind, which is crucial for effective studying.</p>
        
        <h3>7. Be Consistent but Flexible</h3>
        <p>Stick to your routine as much as possible, but be willing to adjust it based on your progress and changing needs. The best routine is one that you can maintain consistently over time.</p>
        
        <p>Remember, the goal of a study routine is not just to put in hours, but to make those hours count. Quality of study is more important than quantity.</p>
      `,
    },
    "21-day-habit": {
      title: "21-Day Study Habit for Newbies",
      image: "/images/articles/habits.jpg",
      tag: "Productivity",
      tagColor: "pink",
      content: `
        <h2>Building Study Habits in 21 Days: A Guide for Beginners</h2>
        
        <p>Research suggests that it takes about 21 days to form a new habit. Here's a step-by-step guide to establish effective study habits in just three weeks:</p>
        
        <h3>Week 1: Laying the Foundation</h3>
        
        <h4>Day 1-3: Start Small</h4>
        <p>Begin with just 15-20 minutes of focused study. Choose a specific time and place to study each day. The goal is consistency, not duration.</p>
        
        <h4>Day 4-7: Increase Duration Gradually</h4>
        <p>Add 5-10 minutes to your study session each day. By the end of the week, aim to study for 30-45 minutes without distractions.</p>
        
        <h3>Week 2: Building Momentum</h3>
        
        <h4>Day 8-10: Establish a Routine</h4>
        <p>Stick to your chosen study time and place. Your brain will start to associate this time and environment with focused work.</p>
        
        <h4>Day 11-14: Add Structure</h4>
        <p>Introduce a simple study plan. Decide what subjects or topics you'll cover each day. Use a timer to maintain focus and take short breaks.</p>
        
        <h3>Week 3: Reinforcing the Habit</h3>
        
        <h4>Day 15-18: Increase Complexity</h4>
        <p>Start tackling more challenging problems or concepts during your study sessions. Implement active learning techniques like self-quizzing or teaching concepts to someone else.</p>
        
        <h4>Day 19-21: Reflect and Adjust</h4>
        <p>Evaluate what's working and what's not. Make necessary adjustments to your routine. Celebrate your progress and commit to continuing your new habit.</p>
        
        <h3>Tips for Success:</h3>
        <ul>
          <li>Use visual cues or reminders to prompt your study sessions</li>
          <li>Track your progress in a journal or app</li>
          <li>Reward yourself after completing each day's study session</li>
          <li>If you miss a day, don't give up - just resume the next day</li>
          <li>Share your goal with someone who can hold you accountable</li>
        </ul>
        
        <p>Remember, the key to forming a lasting habit is consistency. Even after the 21 days, continue practicing your study routine until it becomes second nature.</p>
      `,
    },
    "consistency-importance": {
      title: "Consistency Importance in Entrance Preparation",
      image: "/images/articles/consistency.jpg",
      tag: "Motivation",
      tagColor: "blue",
      content: `
        <h2>The Power of Consistency in Competitive Exam Preparation</h2>
        
        <p>When it comes to preparing for competitive exams like JEE, NEET, or CUET, consistency is more important than intensity. Here's why consistent effort is the key to success:</p>
        
        <h3>Building Strong Foundations</h3>
        <p>Consistent study allows concepts to build upon each other. Each day's learning reinforces previous knowledge, creating a solid foundation of understanding. Cramming or studying in bursts doesn't allow for this progressive building of knowledge.</p>
        
        <h3>Effective Long-term Memory</h3>
        <p>Our brains retain information better when it's reviewed regularly over time. This is known as spaced repetition. Consistent study schedules naturally incorporate this principle, leading to better retention and recall during exams.</p>
        
        <h3>Reduced Stress and Anxiety</h3>
        <p>Last-minute cramming creates unnecessary stress and anxiety. Consistent preparation spreads the workload over time, making the process more manageable and less overwhelming.</p>
        
        <h3>Development of Discipline</h3>
        <p>Consistency builds discipline, which is a valuable skill not just for exam preparation but for life in general. The habit of showing up daily, regardless of motivation levels, is what separates successful students from the rest.</p>
        
        <h3>Steady Progress Tracking</h3>
        <p>Consistent study allows for regular assessment of progress. You can identify strengths and weaknesses early on and adjust your strategy accordingly, rather than discovering gaps in knowledge too late.</p>
        
        <h3>How to Maintain Consistency:</h3>
        <ul>
          <li>Set realistic daily goals rather than ambitious weekly or monthly targets</li>
          <li>Create a structured timetable that becomes part of your daily routine</li>
          <li>Track your progress to stay motivated</li>
          <li>Join a study group or find an accountability partner</li>
          <li>Remember your "why" - keep your end goal in mind</li>
          <li>Be kind to yourself on off days, but never skip two days in a row</li>
        </ul>
        
        <p>Remember, consistency doesn't mean studying for long hours every day. It means showing up regularly, even if it's just for a short, focused session. As the saying goes, "It's not what we do once in a while that shapes our lives, but what we do consistently."</p>
      `,
    },
    "life-after-selection": {
      title: "Life After Selection in IITs and NITs",
      image: "/images/articles/after-selection.jpg",
      tag: "Career",
      tagColor: "orange",
      content: `
        <h2>Life After Selection in IITs and NITs: What to Expect</h2>
        
        <p>Congratulations on making it to the prestigious IITs or NITs! Your hard work has paid off, but this is just the beginning of an exciting journey. Here's what you can expect in the coming years:</p>
        
        <h3>Academic Life</h3>
        
        <h4>Rigorous Curriculum</h4>
        <p>The academic curriculum at IITs and NITs is designed to challenge you. Expect a steep learning curve in the first semester as you adjust to the pace and depth of the courses.</p>
        
        <h4>World-Class Faculty</h4>
        <p>You'll learn from some of the best minds in the country. Many professors are leading researchers in their fields and bring real-world insights into the classroom.</p>
        
        <h4>Project-Based Learning</h4>
        <p>Unlike school education, engineering education emphasizes hands-on projects and practical applications of theoretical concepts. Be prepared to spend time in laboratories and workshops.</p>
        
        <h3>Opportunities Beyond Academics</h3>
        
        <h4>Technical Clubs and Competitions</h4>
        <p>From robotics to coding, IITs and NITs have numerous technical clubs where you can apply your knowledge and skills. Participating in national and international competitions can significantly enhance your resume.</p>
        
        <h4>Cultural and Sports Activities</h4>
        <p>Annual cultural festivals like Mood Indigo (IIT Bombay), Spring Fest (IIT Kharagpur), and Nitrutsav (NIT Rourkela) are among the largest college festivals in Asia. These events offer opportunities to showcase talents beyond academics.</p>
        
        <h4>Internships and Research Opportunities</h4>
        <p>Summer internships, both in India and abroad, are a regular feature. Many students also get opportunities to work on research projects with faculty members.</p>
        
        <h3>Placement Opportunities</h3>
        
        <h4>Campus Placements</h4>
        <p>IITs and NITs have excellent placement records, with top companies visiting the campus for recruitment. The average package varies by branch and institute but is generally higher than other engineering colleges.</p>
        
        <h4>Higher Studies</h4>
        <p>Many students opt for higher studies in prestigious universities worldwide. The IIT/NIT tag gives you an edge in applications to top graduate programs.</p>
        
        <h4>Entrepreneurship</h4>
        <p>With incubation centers and startup ecosystems within the campus, many students choose to start their own ventures. Successful startups like Flipkart, Zomato, and Ola were founded by IIT alumni.</p>
        
        <h3>Challenges and Growth</h3>
        
        <h4>Time Management</h4>
        <p>Balancing academics, extracurriculars, and personal life can be challenging. Developing good time management skills early on is crucial.</p>
        
        <h4>Peer Learning</h4>
        <p>You'll be surrounded by some of the brightest minds in the country. Learning from peers can be as valuable as classroom education.</p>
        
        <h4>Personal Growth</h4>
        <p>The four years at IIT/NIT will transform you not just academically but also personally. You'll develop resilience, problem-solving abilities, and leadership skills that will serve you throughout life.</p>
        
        <p>Remember, getting into IIT/NIT is not the end goal but the beginning of a journey that will shape your future. Make the most of these formative years!</p>
      `,
    },
  }

  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Article not found</h1>
        <Button asChild className="mt-4 bg-nonstop-blue hover:bg-nonstop-blue-dark">
          <Link href="/articles">Back to Articles</Link>
        </Button>
      </div>
    )
  }

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
          <Button
            asChild
            variant="ghost"
            className="mb-8 self-start text-gray-300 hover:text-white hover:bg-white/10 animate-on-scroll"
          >
            <Link href="/articles">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div
              className={`article-tag mb-6 animate-on-scroll ${
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
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter gradient-text animate-on-scroll">
              {article.title}
            </h1>
          </div>
          <div className="mx-auto max-w-3xl mt-12 animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-2 shadow-xl">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black to-nonstop-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl prose prose-invert lg:prose-xl prose-headings:gradient-text prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-strong:text-blue-300 animate-on-scroll">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          <div className="mx-auto max-w-3xl mt-12 flex justify-center animate-on-scroll">
            <Button asChild className="bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow">
              <Link href="/#enroll">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Floating Buttons */}
      <SocialButtons />
    </div>
  )
}
