import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          تسجيل الدخول إلى حسابك
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="patient@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              كلمة المرور
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            تسجيل الدخول
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          ليس لديك حساب؟
          <Link to="/signup" className="text-blue-600 hover:underline ml-1">
            أنشئ حساب الآن
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
