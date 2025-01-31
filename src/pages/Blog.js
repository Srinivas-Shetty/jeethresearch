import React from "react";

const Blog = () => {
    return (
        <section className=" bg-gray-100">
              <div className="relative bg-[url('https://img.freepik.com/free-photo/glasses-lie-laptop-reflecting-light-from-screen-dark_169016-53051.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid')] bg-cover bg-center py-12 px-6 md:px-16 lg:px-24 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="relative max-w-4xl mx-auto text-center z-10">
                    <h1 className="text-4xl text-white font-bold mb-4">Blogs</h1>
                    <p className="text-lg  text-white max-w-2xl mx-auto">Empowering traders with ethical, transparent, and research-driven market insights.</p>
                    </div>
                </div>


            <div className="max-w-7xl py-10 mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h2>
                <p className="text-lg text-gray-600 mb-10">Stay updated with the latest market insights and trading tips.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-8">
                    {[1, 2, 3].map((blog) => (
                        <div key={blog} className="bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <div className="mb-4">
                                <img src="https://img.freepik.com/free-photo/man-sits-front-laptop-with-chart-notepad-night_169016-55174.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid" alt="Blog Post" className="w-full h-52 object-cover rounded-lg" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Blog Title {blog}</h3>
                            <p className="text-gray-600">An overview of the latest stock market trends and analysis.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
