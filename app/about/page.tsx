"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SocialButtons from "@/components/social-buttons"

export default function AboutPage() {
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-nonstop-blue/20 text-nonstop-blue border-nonstop-blue/30 px-4 py-1 mb-6 animate-on-scroll">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter gradient-text animate-on-scroll">
              About Non-stop
            </h1>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-xl/relaxed animate-on-scroll">
              Where Learning Never Ends
            </p>
          </div>
          <div className="mx-auto max-w-3xl mt-12 text-center animate-on-scroll">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
                <Image
                  src="/images/whitelogoforblackbg.png"
                  alt="Non-stop Logo"
                  width={300}
                  height={100}
                  className="mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                />
              </div>
            </div>
            <p className="text-gray-300 md:text-lg mb-6">
              We are team of passionate engineering students from NIT Durgapur, offering personalized 1-to-1 sessions to
              JEE Mains/Advanced, NEET, CUCET aspirants through our initiative — NON-STOP.
            </p>
            <p className="text-gray-300 md:text-lg mb-6">
              NONSTOP – Where Learning Never Ends – is built to guide, mentor, and inspire students with focused
              attention, conceptual clarity, and structured support.
            </p>
            <div className="flex justify-center mt-8">
              <Button asChild className="bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow">
                <Link href="/#enroll">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black to-nonstop-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-on-scroll">
            <Badge className="bg-nonstop-blue/20 text-nonstop-blue border-nonstop-blue/30 px-4 py-1 mb-6">
              Our Team
            </Badge>
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-subtitle">
              Our team of JEE Advanced qualified NIT Durgapur engineering students brings their experience and expertise
              to guide you
            </p>
          </div>

          <div className="mb-16 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text-green text-center mb-8">Physics Department</h3>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="overflow-hidden rounded-xl w-full md:w-1/3 max-w-[300px]">
                    <Image
                      src="/images/team/aman.jpg"
                      alt="Aman Singh Rathore"
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Aman Kumar Singh</h4>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30 mb-4">
                      Physics Specialist
                    </div>
                    <p className="text-gray-300 mb-4">
                      B.Tech in Electrical Engineering from NIT Durgapur with a strong foundation in Physics. Aman has
                      qualified JEE Advanced and has a deep understanding of Physics concepts. His teaching methodology
                      focuses on building strong fundamentals and problem-solving skills.
                    </p>
                    {/* <p className="text-gray-400">
                      "Physics is not just about formulas, it's about understanding the world around us. I aim to make
                      Physics intuitive and enjoyable for my students."
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text-pink text-center mb-8">Chemistry Department</h3>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="overflow-hidden rounded-xl w-full md:w-1/3 max-w-[300px]">
                    <Image
                      src="/images/team/joyeb.png"
                      alt="Sheikh MD Joyeb"
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Sheikh MD Joyeb</h4>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-pink-500/20 text-pink-400 border border-pink-500/30 mb-4">
                      Chemistry Specialist
                    </div>
                    <p className="text-gray-300 mb-4">
                      B.Tech in Chemical Engineering from NIT Durgapur with expertise in all branches of Chemistry.
                      Joyeb has a knack for simplifying complex chemical concepts and making them accessible to
                      students. His teaching approach combines theoretical knowledge with practical applications.
                    </p>
                    {/* <p className="text-gray-400">
                      "Chemistry is the central science that connects physics with biology. I help students see these
                      connections and develop a holistic understanding of the subject."
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text-blue text-center mb-8">
              Mathematics Department
            </h3>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="overflow-hidden rounded-xl w-full md:w-1/3 max-w-[300px]">
                    <Image
                      src="/images/team/aditya.png"
                      alt="Aditya Kumar Singh"
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Aditya Kumar Singh</h4>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
                      Mathematics Specialist
                    </div>
                    <p className="text-gray-300 mb-4">
                      B.Tech in Mechanical Engineering from NIT Durgapur with a strong mathematical background. Aditya
                      excels in breaking down complex mathematical problems into simple, understandable steps. His
                      teaching style emphasizes conceptual clarity and systematic problem-solving techniques.
                    </p>
                    {/* <p className="text-gray-400">
                      "Mathematics is not about numbers, equations, or algorithms; it's about understanding patterns and
                      logical thinking. I strive to develop these skills in my students."
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange text-center mb-8">Operations</h3>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="overflow-hidden rounded-xl w-full md:w-1/3 max-w-[300px]">
                    <Image
                      src="/images/team/bibek.png"
                      alt="Bibek Yadav"
                      width={500}
                      height={500}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Bibek Yadav</h4>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4">
                      Operations Head
                    </div>
                    <p className="text-gray-300 mb-4">
                    B.Tech in Computer Science Engineering from NIT Durgapur. Bibek leverages his strong 
                    technical background to enhance the operational efficiency of Non-stop. Bibek's management fosters a culture of teamwork and 
                    continuous improvement, empowering teams to collaborate effectively and deliver 
                    exceptional experiences for both students and educators.
                    </p>
                    {/* <p className="text-gray-400">
                      "Our goal is to create a seamless learning experience for students, where they can focus entirely
                      on their studies while we take care of everything else."
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text-red text-center mb-8">Marketing

            </h3>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="overflow-hidden rounded-xl w-full md:w-1/3 max-w-[300px]">
                    <Image
                      src="/images/team/azad.jpeg"
                      alt="Azad Singh"
                      width={500}
                      height={500}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Azad Singh</h4>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30 mb-4">
                      Marketing Head
                    </div>
                    <p className="text-gray-300 mb-4">
                      B.Tech in Computer Science Engineering from NIT Durgapur. With a deep understanding of audience behavior and digital trends, 
                      Azad crafts compelling campaigns that resonate with students and educators alike. He ensures that the brand message is clear,
                      consistent, and engaging across all platforms, contributing to Non-stop's growing presence and community trust.
                    </p>
                    {/* <p className="text-gray-400">
            "Our goal is to create a seamless learning experience for students, where they can focus entirely
            on their studies while we take care of everything else."
          </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-nonstop-black/95 to-nonstop-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-on-scroll">
              <Badge className="bg-nonstop-blue/20 text-nonstop-blue border-nonstop-blue/30 px-4 py-1">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Empowering Students</h2>
              <p className="text-gray-300 md:text-lg">
                At Non-stop, our mission is to provide high-quality, personalized education to students preparing for
                competitive exams like JEE Mains/Advanced, NEET, and CUCET.
              </p>
              <p className="text-gray-300 md:text-lg">
                We believe in focused attention, conceptual clarity, and structured support to help students achieve
                their goals.
              </p>
              <p className="text-gray-300 md:text-lg">
                Our team of JEE Advanced qualified NIT Durgapur engineering students brings their experience and
                expertise to guide and mentor aspiring students.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow">
                  <Link href="/#programs">Explore Our Programs</Link>
                </Button>
              </div>
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Floating Buttons */}
      <SocialButtons />
    </div>
  )
}
