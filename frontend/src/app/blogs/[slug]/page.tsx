import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/data/blogPosts";
import { BlogService } from '@/services/blogService';
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await BlogService.getAllBlogPosts();
  console.log("Generating static params for blog posts:", posts);
  return posts.map((post) => ({
    slug: post.attributes.slug,
  }));
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  console.log("Fetching blog post for slug:", slug);
  const blog = await BlogService.getBlogBySlug(slug)
  console.log("Blog Post Data:", blog);
 const blogContent = blog[0]?.attributes;
 console.log("Blog Content Attributes:", blogContent);
  // const post = getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  // const relatedPosts = allPosts
  //   .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
  //   .slice(0, 3);

  return (
    <>
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
              <Link href="/blogs" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-2">
          <nav className="flex text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blogs" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-gray-200">{blogContent.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-6 py-8">
          <header className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {blogContent.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {blogContent.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {blogContent.excerpt}
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {/* {blogContent.author.split(' ').map(n => n[0]).join('')} */}
                    </span>
                  </div>
                  <span className="font-medium">{blogContent.author}</span>
                </div>
                <span>•</span>
                <time dateTime={blogContent.publishedAt}>
                  {new Date(blogContent.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <span>•</span>
                <span>{blogContent.readingTime} min read</span>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center mb-12">
              <div className="w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
                <div className="whitespace-pre-wrap leading-relaxed text-gray-800 dark:text-gray-200">
                  <div dangerouslySetInnerHTML={{ __html: blogContent.content }} />
                  {/* {post.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('# ')) {
                      return (
                        <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 first:mt-0">
                          {paragraph.substring(2)}
                        </h1>
                      );
                    }
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                          {paragraph.substring(3)}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-5 mb-2">
                          {paragraph.substring(4)}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('#### ')) {
                      return (
                        <h4 key={index} className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                          {paragraph.substring(5)}
                        </h4>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <li key={index} className="ml-4 mb-1 text-gray-700 dark:text-gray-300">
                          {paragraph.substring(2)}
                        </li>
                      );
                    }
                    if (paragraph.trim() === '') {
                      return <br key={index} />;
                    }
                    return (
                      <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="max-w-4xl mx-auto mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {/* {blogContent.author.split(' ').map(n => n[0]).join('')} */}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{blogContent.author}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">CleverSearch Expert</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>Published: {new Date(blogContent.publishedAt).toLocaleDateString()}</p>
                  {blogContent.updatedAt !== blogContent.publishedAt && (
                    <p>Updated: {new Date(blogContent.updatedAt).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
       

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2025 CleverSearch. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
