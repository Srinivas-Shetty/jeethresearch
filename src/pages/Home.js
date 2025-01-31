import React from "react";
import Testimonials from "../components/Testimonials";


const Home = () => {
    return (
        <>
            <div className="">
                <div className="relative bg-[url('https://img.freepik.com/premium-photo/financial-chart-hologram-graph-office-laptop_99433-4952.jpg?w=1060')] bg-cover bg-center py-12 px-6 md:px-16 lg:px-24 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="relative max-w-4xl mx-auto text-center z-10">
                        <h2 className="text-xl font-semibold text-white mb-4">Empowering Traders with Ethical & Transparent Market Guidance.</h2>
                        <button className="mt-2 px-4 py-2 text-black font-medium bg-white rounded-sm transition duration-300">
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl ">
                    <div className="text-center m-6">
                        <div >
                            <p className="text-gray-600 text-xl dark:text-gray-400 ">We saw that most firms prioritized sales over genuinely helping their clients. High pricing and aggressive sales tactics left traders struggling to see real profits. We started Jeeth Research to change that. Our focus is on ethical, transparent, and client-centric market guidance. Whether you're a beginner or an experienced trader, our insights help you make smart, strategic decisions in the stock market.</p>
                        </div>

                        <section className="py-10 mt-6 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                            <div className="max-w-7xl mx-auto text-center">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                                <p className="text-lg text-gray-700 mb-10">
                                    We’re committed to your success with ethical, transparent, and research-driven guidance.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Card 1 */}
                                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src="https://img.freepik.com/free-photo/portrait-young-businessman-with-graph-office_23-2147839896.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid"
                                                alt="Client First"
                                                className="w-full h-52 object-cover hover:brightness-90 transition-all duration-300"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Client-First Approach</h3>
                                        <p className="text-gray-600">
                                            Your goals are our top priority. We provide personalized strategies that prioritize your success over sales.
                                        </p>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src="https://img.freepik.com/free-photo/transparent-chess-pieces-board_23-2148198809.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid"
                                                alt="Transparency"
                                                className="w-full h-52 object-cover hover:brightness-90 transition-all duration-300"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-indigo-800 mb-2">Transparent Strategies</h3>
                                        <p className="text-gray-600">
                                            No hidden fees or false promises. Our insights are honest, clear, and tailored to your trading needs.
                                        </p>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src="https://img.freepik.com/free-photo/top-view-frame-economy-charts_23-2148541987.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid"
                                                alt="Research Driven"
                                                className="w-full h-52 object-cover hover:brightness-90 transition-all duration-300"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-purple-800 mb-2">Research-Driven Insights</h3>
                                        <p className="text-gray-600">
                                            Leverage expert research and data-driven insights to make smart, confident trading decisions.
                                        </p>
                                    </div>
                                </div>
                                <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg  hover:shadow-lg transition-shadow duration-300">
                                    Learn More
                                </button>
                            </div>
                        </section>

                    </div>

                    <Testimonials />
                </div>

            </div>
        </>
    )
}
export default Home;