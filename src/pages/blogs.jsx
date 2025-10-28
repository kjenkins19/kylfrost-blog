import React from 'react';
import Layout from '../components/Layout.jsx';
import BlogList from '../components/BlogList.jsx';

const BlogsPage = ({ blogs = [] }) => {
  // Sort blogs by date (newest first)
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout 
      title="Blog Posts - Kyle Jenkins"
      description="Read all blog posts by Kyle Jenkins covering web development, technology, and programming insights."
    >
      <div className="space-y-8">
        {/* Page Header */}
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            All Blog Posts
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore my thoughts on web development, technology trends, best practices, 
            and lessons learned from building modern applications.
          </p>
        </header>

        {/* Blog Stats */}
        {sortedBlogs.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-primary">{sortedBlogs.length}</span> 
                {sortedBlogs.length === 1 ? ' post' : ' posts'} published
              </p>
            </div>
          </div>
        )}

        {/* Blog List */}
        <section>
          {sortedBlogs.length > 0 ? (
            <BlogList blogs={sortedBlogs} showDescription={true} />
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600 mb-6">
                I'm working on some great content for you. Check back soon!
              </p>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
              >
                Back to Home
              </a>
            </div>
          )}
        </section>

        {/* Navigation */}
        {sortedBlogs.length > 0 && (
          <div className="text-center pt-8">
            <a
              href="/"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
            >
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogsPage;