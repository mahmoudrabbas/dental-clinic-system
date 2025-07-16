import React from "react";

const BookAppointment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          حجز موعد كشف
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              الاسم الكامل
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="محمد أحمد"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              رقم الهاتف
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="رقم تليفونك"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              رقم القومي
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="رقم البطاقة"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              تاريخ الحجز
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <div>
            <label className="block text-sm text-gray-700 mb-1">الوقت</label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            تأكيد الحجز
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
