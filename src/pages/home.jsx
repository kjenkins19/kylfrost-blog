import React from 'react';
import Layout from '../components/Layout.jsx';
import BlogList from '../components/BlogList.jsx';

const HomePage = ({ blogs = [] }) => {
  // Sort blogs by date (newest first) and take the 3 most recent
  const recentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <Layout 
      title="Kyle Jenkins - Web Developer & Speaker"
      description="Welcome to Kyle Jenkins' blog. Sharing insights on web development, technology, and more."
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Kyle Jenkins - a passionate web developer and speaker. 
            I share my thoughts on web development, technology trends, and lessons learned 
            from building modern applications.
          </p>
        </section>

        {/* Recent Blog Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Recent Posts
            </h2>
            <a
              href="/blogs/"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
            >
              View all posts
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {recentBlogs.length > 0 ? (
            <BlogList blogs={recentBlogs} limit={3} showDescription={true} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600">
                Stay tuned for upcoming posts about web development and technology!
              </p>
            </div>
          )}
        </section>

        {/* About Preview */}
        <section className="bg-primary-lightest rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            About Me
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm a web developer with a passion for creating efficient, scalable applications 
            and sharing knowledge with the developer community. When I'm not coding, 
            you can find me speaking at conferences and meetups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/about/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Learn more about me
            </a>
            <a
              href="/speaking/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
            >
              See my speaking engagements
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;