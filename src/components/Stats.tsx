import { AlertTriangle, CheckCircle2, XCircle, Cpu, Star, Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            {t('stats.title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('stats.subtitle')}
          </p>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Collar & ID Tags */}
          <div className="rounded-xl border border-rose-200/60 bg-rose-50 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-red-500 text-white flex items-center justify-center mb-4 shadow-sm">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">{t('stats.collarTags')}</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span>{t('stats.collarTags.canFallOff')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span>{t('stats.collarTags.textFade')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span>{t('stats.collarTags.removedByStrangers')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span>{t('stats.collarTags.limitedSpace')}</span>
              </li>
            </ul>
          </div>

          {/* Pet Tattoos */}
          <div className="rounded-xl border border-amber-200/60 bg-amber-50 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 shadow-sm">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">{t('stats.petTattoos')}</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span>{t('stats.petTattoos.canFade')}</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span>{t('stats.petTattoos.painful')}</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span>{t('stats.petTattoos.hardToRead')}</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span>{t('stats.petTattoos.outdatedRegistry')}</span>
              </li>
            </ul>
          </div>

          {/* Microchips */}
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-sm">
                {/* Decorative icon */}
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">{t('stats.microchips')}</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t('stats.microchips.permanent')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t('stats.microchips.cannotBeLost')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t('stats.microchips.quickImplant')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t('stats.microchips.alwaysReadable')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
