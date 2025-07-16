import React from "react";
const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          تواصل معنا
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* نموذج التواصل */}
          <form className="space-y-4 bg-blue-50 p-6 rounded-xl shadow">
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
                الرسالة
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              إرسال
            </button>
          </form>

          {/* معلومات التواصل */}
          <div className="bg-blue-100 p-6 rounded-xl shadow text-right">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              معلومات التواصل
            </h3>
            <p className="mb-2">📍 العنوان: ١٢ شارع العيادات،سمالوط المنيا </p>
            <p className="mb-2">📞 الهاتف: 01012345678</p>
            <p className="mb-2">✉️ البريد الإلكتروني: info@royalclinic.com</p>
            <p className="mt-6 text-sm text-gray-700">
              نحن متواجدون لخدمتكم من الأحد إلى الخميس، من 10 صباحًا حتى 8 مساءً
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
