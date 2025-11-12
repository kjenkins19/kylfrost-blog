import React from 'react';

const ResumeLayout = ({ children, title = 'Kyle Jenkins Blog', description = 'A blog about web development, technology, and more' }) => {
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
          <main className="flex-1">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
              {children}
            </div>
          </main>
        </div>
        <script src={`/client.js?${new Date().getTime()}`}></script>
      </body>
    </html>
  );
};

export default ResumeLayout;