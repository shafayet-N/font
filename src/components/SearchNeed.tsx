import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const SearchNeed: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
            {t('searchNeed.title')}
          </h2>
          <p className="text-lg text-gray-500">
            {t('searchNeed.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visit a Veterinary Clinic */}
          <div className="bg-white rounded-2xl p-8 shadow-md ring-1 ring-gray-100 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                <span className="mr-4 inline-flex w-10 h-10 rounded-md items-center justify-center bg-pink-50 text-pink-600 text-xl">
                  📋
                </span>
                <span className="leading-tight">{t('searchNeed.visitClinic')}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('searchNeed.visitClinicDesc')}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate('/findclinic')}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors shadow-md"
                aria-label={t('searchNeed.findNearbyClinics')}
              >
                {t('searchNeed.findNearbyClinics')}
              </button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-2xl p-8 shadow-md ring-1 ring-gray-100 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                <span className="mr-4 inline-flex w-10 h-10 rounded-md items-center justify-center bg-amber-50 text-amber-600 text-xl">
                  🏠
                </span>
                <span className="leading-tight">{t('searchNeed.contactSupport')}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('searchNeed.contactSupportDesc')}
              </p>
            </div>

            <div className="mt-6">
              <a
                href="tel:+1-800-CHIP-PET"
                aria-label={t('searchNeed.callSupport')}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors shadow-md"
              >
                {t('searchNeed.callSupport')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchNeed;