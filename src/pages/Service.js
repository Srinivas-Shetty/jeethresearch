import React from "react";

const services = [
    {
        title: "Stock Market Research",
        description: "In-depth market analysis and insights to help you stay ahead of trends.",
        image: "https://img.freepik.com/free-photo/invest-investment-financial-income-profit-costs-concept_53876-128112.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid"
    },
    {
        title: "Personalized Trading Strategies",
        description: "Tailored strategies to match your risk appetite and investment goals.",
        image: "https://img.freepik.com/premium-photo/traders-discussing-dynamic-investment-rate-panorama-photo-view-sellable_31965-295935.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid"
    },
    {
        title: "Real-Time Market Updates",
        description: "Stay informed with accurate and timely stock market updates.",
        image: "https://img.freepik.com/free-photo/stock-market-economy-investment-financial-concept_53876-123930.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid"
    }
];

const Service = () => {
    return (
        <section className=" bg-gray-100">
            <div className="relative bg-[url('https://img.freepik.com/premium-photo/financial-crisis-alert-businessperson-analyzing-falling-market-graph-with-copy-space-deep-depth-field_1153767-2106.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid')] bg-cover bg-center py-12 px-6 md:px-16 lg:px-24 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <h1 className="text-4xl text-white font-bold mb-4">Our Services</h1>
                    <p className="text-lg  text-white max-w-2xl mx-auto">Empowering traders with ethical, transparent, and research-driven market insights.</p>
                </div>
            </div>
            <div className="max-w-7xl py-12 mx-auto px-6 text-center">


                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="mb-4">
                                <img src={service.image} alt={service.title} className="w-full h-52 object-cover rounded-lg" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;