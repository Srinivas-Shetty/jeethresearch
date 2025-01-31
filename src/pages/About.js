import React from "react";

const About = () => {
    return (
        <>
            <div className="relative bg-[url('https://img.freepik.com/premium-photo/composite-image-high-angle-portrait-business-people-with-arms-crossed-against-white-background_1134-12934.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid')] bg-cover bg-center py-12 px-6 md:px-16 lg:px-24 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="relative max-w-4xl mx-auto text-center z-10">
                    <h1 className="text-4xl text-white font-bold mb-4">About Us</h1>
                    <p className="text-lg  text-white max-w-2xl mx-auto">Empowering traders with ethical, transparent, and research-driven market insights.</p>
                    </div>
                </div>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {['Client-First Approach', 'Transparency & Trust', 'Affordability & Accessibility', 'Ethical Trading Practices', 'Long-Term Growth Focus', 'Continuous Learning & Improvement'].map((value, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">{value}</h3>
                                <p className="text-gray-600">{`We prioritize ${value.toLowerCase()} to ensure sustainable success for our clients.`}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h3>
                            <p className="text-gray-600">To provide honest, research-driven, and affordable trading strategies that empower traders to achieve consistent success.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
                            <p className="text-gray-600">To build a community of well-informed, confident, and profitable traders by offering transparent, ethical, and results-oriented stock market research.</p>
                        </div>
                    </div>
                </div>
            </section>

         
        </>
    );
};

export default About;
