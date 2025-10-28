import React from 'react';

const BlogList = ({ blogs, limit = null, showDescription = true }) => {
  const displayBlogs = limit ? blogs.slice(0, limit) : blogs;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!displayBlogs || displayBlogs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {displayBlogs.map((blog) => (
        <article
          key={blog.slug}
          className="border-b border-gray-200 pb-8 last:border-b-0"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl md:text-2xl font-semibold">
                <a
                  href={`/blogs/${blog.slug}/`}
                  className="text-black hover:text-primary transition-colors duration-200"
                >
                  {blog.title}
                </a>
              </h2>
              <time
                dateTime={blog.date}
                className="text-sm text-gray-600 font-medium"
              >
                {formatDate(blog.date)}
              </time>
            </div>
            
            {showDescription && blog.description && (
              <p className="text-gray-700 leading-relaxed">
                {blog.description}
              </p>
            )}
            
            <div className="flex items-center">
              <a
                href={`/blogs/${blog.slug}/`}
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
              >
                Read more
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
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;