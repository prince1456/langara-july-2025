import Link from "next/link";
import { Metadata } from "next";
import { BlogService } from "@/services/blogService";

export const metadata: Metadata = {
  title: "CleverSearch - Smart Search Solutions for Modern Businesses",
  description: "Discover powerful search technologies and innovative solutions. CleverSearch provides cutting-edge search algorithms, AI-powered insights, and comprehensive testing frameworks for businesses worldwide.",
  keywords: [
    "search technology",
    "AI search",
    "business solutions",
    "search algorithms",
    "data analytics",
    "machine learning",
    "enterprise search",
    "smart search",
    "search optimization",
    "technology innovation"
  ],
  authors: [{ name: "CleverSearch Team" }],
  creator: "CleverSearch",
  publisher: "CleverSearch",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cleversearch.com",
    title: "CleverSearch - Smart Search Solutions",
    description: "Discover powerful search technologies and innovative solutions for modern businesses.",
    siteName: "CleverSearch",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleverSearch - Smart Search Solutions",
    description: "Discover powerful search technologies and innovative solutions for modern businesses.",
    creator: "@cleversearch",
  },
};

export default async function Home() {
  const home = await BlogService.getHomePageContent();
  const homeContent = home.data.attributes;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {homeContent.logo_text || "CleverSearch"}
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {homeContent.hero_title || "Empowering Search for Modern Businesses"}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {homeContent.hero_description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/blogs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Blog
            </Link>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:border-blue-400 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Learn More
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Advanced Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powerful search algorithms that understand context and deliver precise results every time.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Machine learning algorithms that continuously improve and adapt to your business needs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Robust testing frameworks ensure reliability and performance at enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {homeContent.footer_text || "CleverSearch"}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
