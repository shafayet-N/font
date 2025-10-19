import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const VetRegisterHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-start pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('vetRegisterHero.title')}
        </h1>
        <p className="text-xl text-green-100 mb-8">
          {t('vetRegisterHero.subtitle')}
        </p>

        {/* Registration Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center text-white bg-white/20 px-4 py-2 rounded-lg">
            <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold mr-3">
              1
            </div>
            <span className="font-semibold">{t('vetRegisterHero.registerClinic')}</span>
          </div>
          <div className="hidden md:block text-white">→</div>
          <div className="flex items-center text-white">
            <div className="w-8 h-8 bg-white/30 text-white rounded-full flex items-center justify-center font-bold mr-3">
              2
            </div>
            <span>{t('vetRegisterHero.verification')}</span>
          </div>
          <div className="hidden md:block text-white">→</div>
          <div className="flex items-center text-white">
            <div className="w-8 h-8 bg-white/30 text-white rounded-full flex items-center justify-center font-bold mr-3">
              3
            </div>
            <span>{t('vetRegisterHero.accessPortal')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VetRegisterHero;