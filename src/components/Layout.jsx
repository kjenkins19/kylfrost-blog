import React from 'react';
import Header from './Header.jsx';

const Layout = ({ children, title = 'Kyle Jenkins Blog', description = 'A blog about web development, technology, and more' }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Kyle Jenkins" />
        <link rel="stylesheet" href={`/styles.css?${new Date().getTime()}`} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1 pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          
          <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Kyle Jenkins. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                  <a 
                    href="https://sessionize.com/kyle-jenkins" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline"
                  >
                    Sessionize
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kyle-jenkins/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/kjenkins19/presentations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline"
                  >
                    GitHub
                  </a>
                </div>
                <div className="mt-2 space-x-4 flex justify-center">
                  <a
                    href="/columbus-speakers/"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline"
                  >
                    Columbus Speakers
                  </a>
                  <p>|</p>
                  <a
                    href="/columbus-meetups/"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline"
                  >
                    Columbus Meetups List
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <script src={`/client.js?${new Date().getTime()}`}></script>
      </body>
    </html>
  );
};

export default Layout;