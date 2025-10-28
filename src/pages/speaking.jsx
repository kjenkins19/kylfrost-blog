import React from 'react';
import Layout from '../components/Layout.jsx';

const SpeakingPage = () => {
  return (
    <Layout 
      title="Speaking - Kyle Jenkins"
      description="Kyle Jenkins speaks at conferences and meetups about web development, technology, and programming."
    >
      <div className="space-y-12">
        {/* Page Header */}
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Speaking
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I enjoy sharing knowledge and experiences with the developer community 
            through conference talks, meetups, and workshops.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sessionize Profile */}
          <div className="bg-primary-lightest rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-3">
                Speaker Profile
              </h2>
              <p className="text-gray-700 mb-6">
                Find my complete speaker profile, session abstracts, and availability 
                on Sessionize - the platform for conference organizers and speakers.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://sessionize.com/kyle-jenkins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Sessionize Profile
              </a>
            </div>
          </div>

          {/* Presentations Repository */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-3">
                Presentations
              </h2>
              <p className="text-gray-700 mb-6">
                Access slides, code samples, and resources from my talks. 
                All presentations are open source and available on GitHub.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://github.com/kjenkins19/presentations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Speaking Topics */}
        <section className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Speaking Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Web Development
              </h3>
              <p className="text-gray-700 text-sm">
                Modern JavaScript, React, performance optimization, and best practices
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Architecture
              </h3>
              <p className="text-gray-700 text-sm">
                Scalable applications, microservices, and system design patterns
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Career Growth
              </h3>
              <p className="text-gray-700 text-sm">
                Professional development, leadership, and building great teams
              </p>
            </div>
          </div>
        </section>

        {/* Contact for Speaking */}
        <div className="text-center bg-primary-lightest rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Interested in Having Me Speak?
          </h2>
          <p className="text-gray-700 mb-6">
            I'm always excited to share knowledge with developer communities. 
            Feel free to reach out through my Sessionize profile for speaking inquiries.
          </p>
          <a
            href="https://sessionize.com/kyle-jenkins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default SpeakingPage;