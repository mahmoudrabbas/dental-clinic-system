import React from "react";

const services = [
  {
    title: "تنظيف الأسنان",
    description: "إزالة الرواسب الجيرية والبقع لتحسين صحة الفم والأسنان.",
    image: "/works/tzbeet.jpg",
  },

  {
    title: "تنظيف الأسنان",
    description: "إزالة الرواسب الجيرية والبقع لتحسين صحة الفم والأسنان.",
    image: "/works/cleaning.jpg",
  },
  {
    title: "تبييض الأسنان",
    description: "تبييض احترافي لاستعادة لمعان ابتسامتك.",
    image: "/works/polishing.jpg",
  },
  {
    title: "تقويم الأسنان",
    description: "حلول لتقويم الأسنان وتحسين المظهر العام للفك.",
    image: "/works/takweem.jpg",
  },
  {
    title: "حشوات تجميلية",
    description: "إصلاح التجاويف بمواد مطابقة للون الأسنان.",
    image: "/works/7ashw.jpg",
  },
];

const Services = () => {
  return (
    <div className="pt-24 pb-16 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          خدماتنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-right">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
