import React from 'react';
import Layout from '../components/Layout.jsx';
import { bio } from "../components/bio.jsx";

const AboutPage = () => {
  return (
    <Layout
      title="About Me - Kyle Jenkins"
      description="Learn more about Kyle Jenkins - web developer, speaker, and technology enthusiast."
    >
      <div className="space-y-12">
        {/* Page Header */}
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto italic">
            Solving business problems through technology and teamwork
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
              <div className="md:col-span-1 max-w-64 mx-auto md:mx-0">
                <img src="/me.png" alt="Kyle Jenkins Headshot" className="rounded-lg"/>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Hello, I'm Kyle
                </h2>
                <p className="text-gray-700 mb-4">
                  {bio}
                </p>
                <p className="text-gray-700">
                  This blog is where I share my thoughts on web development, technology trends,
                  best practices, and lessons learned throughout my career, all for the purpose of helping people.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <section className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="bg-primary-lightest rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Primary Technical Skills
              </h3>
              <div className="space-y-3 scroll-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">JavaScript & TypeScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">React & Modern Frontends</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Node.js & Backend Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Cloud Architecture & DevOps</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Agile Software Development and Coaching</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Interests & Hobbies
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Public Speaking & Teaching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Business Solutions with AI</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Community Building through Conferences and Meetups</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Socialization through Video Games</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Crochet and Stitch Clubs</span>
                </div>
              </div>
            </div>
          </section>

          {/* Current Focus */}
          <section className="bg-white border-2 border-primary-light rounded-lg p-8 mt-4">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              Current Focus
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Innovation
                </h4>
                <p className="text-gray-700 text-sm">
                  Exploring emerging technologies and their practical applications
                </p>
              </div>
              <div className="text-center">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Learning
                </h4>
                <p className="text-gray-700 text-sm">
                  Continuously expanding knowledge and staying current with industry trends
                </p>
              </div>
              <div className="text-center">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Community
                </h4>
                <p className="text-gray-700 text-sm">
                  Building connections and contributing to the developer ecosystem
                </p>
              </div>
            </div>
          </section>

          {/* Working Genius */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 mt-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
              <div className="md:col-span-2">
                <p>
                  I am stoked to also be a Certified Coach for The 6 Types of Working Genius. I give many high level
                  introductions on this at tech conferences
                  and can also come in and work with your team learn more about their productivity styles and how to
                  better collaborate as a team.
                </p>
                <p className="mt-4">
                  I can also provide this as a FREE lunch and learn for your team!
                </p>
                <p className="mt-4">
                  I build energy through Wonder and Discernment. <a href="https://www.workinggenius.com/about"
                                                                    className="text-gray-700 hover:text-primary rounded-md transition-colors duration-200">What
                  about you?</a>
                </p>
              </div>
              <div className="md:col-span-1 max-w-64 mx-auto md:mx-0">
                <img src="/working-genius-cert.png" alt="Working Genius Certification Badge" className="rounded-lg"/>
              </div>
            </div>
          </section>

          {/* Values and Attributes */}
          <section className="grid md:grid-cols-3 gap-4 mt-4">
            {/* Core Values */}
            <div className="bg-primary-lightest rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Core Values
              </h3>
              <div className="space-y-3 scroll-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Integrity</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Morality & Respect</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Joyfulness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Service</span>
                </div>
                {/*<div className="flex items-center">*/}
                {/*  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>*/}
                {/*  <span className="text-gray-700">Independence</span>*/}
                {/*</div>*/}
              </div>
            </div>

            {/* Aspirational Values*/}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Aspirational Values
              </h3>
              <div className="space-y-3 scroll-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Trust</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Excellence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Continuous Growth</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Learning through Failure</span>
                </div>
              </div>
            </div>

            {/* Strengthfinders */}
            <div className="bg-primary-lightest rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                CliftonStrengths
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <a
                    href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx"
                    className="text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
                  >
                    Restorative
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <a
                    href="https://www.gallup.com/cliftonstrengths/en/252152/analytical-theme.aspx"
                    className="text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
                  >
                    Analytical
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <a
                    href="https://www.gallup.com/cliftonstrengths/en/252272/individualization-theme.aspx"
                    className="text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
                  >
                    Individualization
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <a
                    href="https://www.gallup.com/cliftonstrengths/en/252236/empathy-theme.aspx"
                    className="text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
                  >
                    Empathy
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <a
                    href="https://www.gallup.com/cliftonstrengths/en/252260/ideation-theme.aspx"
                    className="text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
                  >
                    Ideation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/*DISC Profile*/}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 mt-4">
            <h3 className="text-xl font-bold text-black mb-4">
              DISC Profile: Specialist Pattern
            </h3>
            <p>
              Specialists "wear well" with others. With their moderate, controlled stance and modest demeanor, they
              are
              able to work well with a number of behavioral styles. Specialists are considerate, patient, and always
              willing to help those they consider friends. They build close relationships with a relatively small
              group
              of associates in the work environment.
            </p>
          </section>

          {/* Connect */}
          <section className="text-center bg-primary-lightest rounded-lg p-8 mt-4">
            <h3 className="text-2xl font-bold text-black mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-700 mb-6">
              I'm always interested in connecting with fellow developers, discussing new ideas,
              or exploring collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/speaking/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
              >
                Speaking Engagements
              </a>
              <a
                href="/blogs/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Read My Blog
              </a>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;