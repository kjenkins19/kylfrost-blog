import React from 'react';
import Layout from '../components/Layout.jsx';
import BlogList from '../components/BlogList.jsx';
import { bio } from "../components/bio.jsx";

const HomePage = ({ blogs = [] }) => {
  // Sort blogs by date (newest first) and take the 3 most recent
  const recentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <Layout 
      title="Kyle Jenkins - Home"
      description="For the Sake of Serving Others"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            For the Sake of Serving Others
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            If there is one thing I've figured out about myself, it's that I want to help people, so I hope this site helps you.
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
            {/*I solve business problems through technology and teamwork, am driven to help you ease the pain of daily life, whether it’s technology bleeding resources or trouble working with a team of people. As a full stack developer, public speaker, and principal consultant with Improving, a global software development consulting and training company, he integrates into teams to provide quality software solutions and into the IT and Agile community to improve processes and teamwork. On the side, he is an avid video gamer, and loves correlating the challenges and learnings from video games to the world of work.*/}
            {bio}
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