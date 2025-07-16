import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#27ace1] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">عن رويال كلينك</h3>
          <p className="text-sm leading-relaxed">
            نحن نقدم أفضل خدمات طب الأسنان باستخدام أحدث التقنيات وفريق طبي
            متخصص. هدفنا هو توفير رعاية صحية فموية مميزة لجميع عملائنا.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/"} className="hover:underline">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="hover:underline">
                الخدمات
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:underline">
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link to={"/book-appointment"} className="hover:underline">
                احجز الآن
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-3">تواصل معنا</h3>
          <ul className="text-sm space-y-2">
            <li>📍 ١٢ شارع العيادات، سمالوط المنيا</li>
            <li>📞 01012345678</li>
            <li>✉️ info@royalclinic.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} رويال كلينك - جميع الحقوق محفوظة
      </div>
    </footer>
  );
};

export default Footer;
