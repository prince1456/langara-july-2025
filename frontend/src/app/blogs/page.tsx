import Link from "next/link";
import { Metadata } from "next";
import { BlogService } from "@/services/blogService";
import { getAllBlogPosts } from "@/data/blogPosts";
export const metadata: Metadata = {
  title: "Blog - CleverSearch Insights and Updates",
  description: "Stay updated with the latest insights, trends, and innovations in search technology, AI, machine learning, and enterprise solutions from CleverSearch experts.",
  keywords: [
    "search technology blog",
    "AI insights",
    "machine learning articles",
    "search optimization",
    "technology trends",
    "enterprise search",
    "search algorithms",
    "tech blog",
    "CleverSearch updates"
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
    url: "https://cleversearch.com/blogs",
    title: "CleverSearch Blog - Tech Insights & Updates",
    description: "Discover the latest in search technology, AI innovations, and enterprise solutions from CleverSearch experts.",
    siteName: "CleverSearch",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleverSearch Blog - Tech Insights & Updates",
    description: "Discover the latest in search technology, AI innovations, and enterprise solutions.",
    creator: "@cleversearch",
  },
};

export default async function BlogsPage() {
  // const blogPosts2: BlogPost[] = BlogService.getAllBlogPosts();
  const blogs = await BlogService.getAllBlogPosts();
  console.log("Blog Posts:", blogs);
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            CleverSearch
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="text-blue-600 dark:text-blue-400 font-semibold">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            CleverSearch <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the latest trends, insights, and innovations in search technology, 
            AI, and enterprise solutions from our team of experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(({attributes: post}) => (
            <Link 
              key={post.id} 
              href={`/blogs/${post.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest insights and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 CleverSearch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
