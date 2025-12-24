"use client";

import { useState } from "react";
import Image from "next/image";

function RequestDemo({ data }) {
  const {
    frontmatter: { title, intro, products, available_days, time_slots, contact_info },
  } = data;

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar helpers
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const getDayName = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const isAvailableDay = (date) => {
    const dayName = getDayName(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return available_days.includes(dayName) && date >= today;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (isAvailableDay(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log({
      ...formData,
      date: selectedDate,
      time: selectedTime,
    });
    setIsSubmitted(true);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (isSubmitted) {
    return (
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-2xl p-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Demo Request Submitted!</h2>
              <p className="text-lg mb-2">Thank you, {formData.name}!</p>
              <p className="text-gray-600 mb-6">
                Your demo has been scheduled for:<br />
                <strong className="text-dark">{formatDate(selectedDate)}</strong> at <strong className="text-dark">{selectedTime}</strong>
              </p>
              <p className="text-gray-600 mb-8">
                We've sent a confirmation email to <strong>{formData.email}</strong>.<br />
                Our team will contact you shortly with meeting details.
              </p>
              <a href="/" className="btn btn-primary">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="font-normal">{title}</h1>
          <h2 className="h4 mt-2 font-normal text-primary">{intro.title}</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">{intro.description}</p>
        </div>

        <div className="row">
          {/* Calendar Section */}
          <div className="col-12 lg:col-7 mb-8 lg:mb-0">
            <div className="bg-theme-light rounded-2xl p-6">
              <h3 className="h4 mb-6">1. Select a Date</h3>
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-white rounded-lg transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h4 className="font-bold">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h4>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-white rounded-lg transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before the first of the month */}
                {[...Array(startingDay)].map((_, i) => (
                  <div key={`empty-${i}`} className="p-2"></div>
                ))}

                {/* Calendar days */}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                  const isAvailable = isAvailableDay(date);
                  const isSelected = selectedDate && 
                    selectedDate.getDate() === day && 
                    selectedDate.getMonth() === currentMonth.getMonth() &&
                    selectedDate.getFullYear() === currentMonth.getFullYear();

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      disabled={!isAvailable}
                      className={`p-2 rounded-lg text-center transition ${
                        isSelected
                          ? "bg-primary text-white font-bold"
                          : isAvailable
                          ? "bg-white hover:bg-primary/10 text-dark cursor-pointer"
                          : "text-gray-300 cursor-not-allowed"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <p className="text-sm text-gray-500 mt-4">
                📅 Available days: {available_days.join(", ")}
              </p>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mt-8">
                  <h3 className="h4 mb-4">2. Select a Time</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Available times for {formatDate(selectedDate)}:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {time_slots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-lg text-center transition font-medium ${
                          selectedTime === time
                            ? "bg-primary text-white"
                            : "bg-white hover:bg-primary/10 text-dark"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Form Section */}
          <div className="col-12 lg:col-5">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="h4 mb-6">3. Your Details</h3>

              {selectedDate && selectedTime && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-green-800">
                    📅 {formatDate(selectedDate)}<br />
                    🕐 {selectedTime}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg"
                    placeholder="+256 XXX XXX XXX"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Product of Interest *</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg"
                    required
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Additional Notes</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea w-full rounded-lg"
                    rows="3"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className={`btn w-full ${
                    selectedDate && selectedTime
                      ? "btn-primary"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {selectedDate && selectedTime
                    ? "Confirm Demo Request"
                    : "Select Date & Time First"}
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold mb-2">{contact_info.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{contact_info.description}</p>
                <div className="space-y-2 text-sm">
                  <p>📧 <a href={`mailto:${contact_info.email}`} className="text-primary hover:underline">{contact_info.email}</a></p>
                  <p>📱 WhatsApp: <a href={`https://wa.me/${contact_info.whatsapp.replace(/\s/g, "")}`} className="text-primary hover:underline">{contact_info.whatsapp}</a></p>
                  <p>📞 Phone: {contact_info.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestDemo;

