import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VeterinaryLogin: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`bg-green-600 text-center from-pet-primary to-pet-secondary py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Tag/Badge */}
        <div className="mb-8">
          <div className={`inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className={`text-2xl ${isRTL ? 'ml-3' : 'mr-3'}`}>🏥</span>
            <span className="text-sm font-semibold text-white">
              {t('vHero.badge')}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t('vHero.title')}
        </h1>

        {/* Description */}
        <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
          {t('vHero.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default VeterinaryLogin;