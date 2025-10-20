import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const SuccessStoriesShare: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage, isRTL, isTransitioning, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const targetLang = language === 'en' ? 'Arabic' : 'English';

  return (
    <section className="py-16 bg-blue-500">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">{t('successStoriesShare.title')}</h2>
        <p className="text-xl text-blue-100 mb-8">
          {t('successStoriesShare.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              navigate('/about');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-pet-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-200"
          >
            {t('successStoriesShare.shareStory')}
          </button>
          <button
            onClick={() => {
              navigate('/registerpet');
              window.scrollTo(0, 0);
            }}
            className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-600 transition-all duration-200"
          >
            {t('successStoriesShare.protectPet')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShare;