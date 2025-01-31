import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Here you can handle form submission, e.g., sending data to a backend API
    };

    return (
        <>
         <div className="relative bg-[url('https://img.freepik.com/free-photo/asian-businessman-sitting-car_53876-129654.jpg?ga=GA1.1.1090635578.1728977120&semt=ais_hybrid')] bg-cover bg-center py-12 px-6 md:px-16 lg:px-24 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="relative max-w-4xl mx-auto text-center z-10">
                    <h1 className="text-4xl text-white font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-white max-w-2xl mx-auto">Empowering traders with ethical, transparent, and research-driven market insights.</p>
                    </div>
                </div>
            <section className="py-10 px-5 bg-gray-100 flex justify-center items-center">
                <div className="max-w-2xl w-full bg-white p-8 shadow-lg rounded-2xl">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
                    <p className="text-gray-600 text-center mb-6">Have questions? Reach out to us!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;