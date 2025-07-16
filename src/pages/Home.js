import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="pt-24 bg-blue-50 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            مرحبًا بك في عيادة رويال للأسنان
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            نقدم أفضل خدمات طب الأسنان باستخدام أحدث التقنيات لضمان راحتك
            وابتسامتك.
          </p>
          <Link
            to={"/book-appointment"}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            احجز موعدك الآن
          </Link>
        </div>
      </section>

      <section className=" bg-blue-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 gap-10">
          {/* النص */}
          <div className="text-right md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
              ابتسامتك تبدأ من هنا
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              احجز موعدك الآن مع أفضل أطباء الأسنان في عيادة رويال، باستخدام
              أحدث التقنيات وأفضل رعاية ممكنة.
            </p>
            <Link
              to={"/book-appointment"}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
            >
              احجز موعدك
            </Link>
          </div>

          {/* الصورة */}
          <div className="md:w-1/2">
            <img
              src="/dentists/abdo.png"
              alt="Dentist"
              className="w-full max-w-md mx-auto drop-shadow-xl rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
