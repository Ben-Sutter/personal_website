import React from "react";
import "../styles/generated.css";

const Blog = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 p-10">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <form name="contact" method="POST" data-netlify="true" netlify>
          {/* Hidden field for Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field to prevent spam submissions */}
          <div style={{ display: "none" }}>
            <label>
              Don't fill this out if you're human:
              <input type="text" name="bot-field" />
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-fuchsia-600 text-fuchsia-200 font-bold hover:bg-fuchsia-700 hover:text-fuchsia-300"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;
