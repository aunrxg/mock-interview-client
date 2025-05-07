import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero section  */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Ace Your Next Interview with GeekCodesAI
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Mock technical interviews with AI-powered feedback to help you master your skills.
            </p>
            <Link to="/signup" className="btn-primary inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform simplifies your interview preparation with a three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Browse Jobs</h3>
              <p className="text-slate-600">
                Select from a variety of job roles and technical positions that match your career goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Practice Interview</h3>
              <p className="text-slate-600">
                Engage in realistic mock interviews with our AI interviewer tailored to your selected role.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Feedback</h3>
              <p className="text-slate-600">
                Receive detailed feedback and actionable insights to improve your interview performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GeekCodesAI?</h2>
              <ul className="space-y-4">
                {[
                  "Realistic interview simulations with industry-specific questions",
                  "Detailed performance analysis and improvement suggestions",
                  "Practice anytime, anywhere at your own pace",
                  "Tailored feedback for technical and behavioral questions",
                  "Track your progress over time",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-slate-900 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg?height=300&width=500" alt="Interview platform demo" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Start practicing now and gain the confidence you need to succeed in your technical interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Start Practicing Now
            </Link>
            <Link
              to="/features"
              className="bg-transparent text-white hover:bg-slate-800 border border-slate-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}