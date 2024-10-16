export const useAnalyticsThData = () => {
  const { locale } = useI18n();
  const lang = ref(locale.value == 'ru' ? 'ru' : 'en');

  return {
    news: {
      head: {
        title: {
          de: 'Nachrichten',
          en: 'News',
          fr: 'Nouvelles',
          pl: 'Wiadomości',
          ro: 'Știri',
          ru: 'Новости',
        },
        description: {
          de: '',
          en: '',
          fr: '',
          pl: '',
          ro: '',
          ru: '',
        },
      },
      subheader: {
        de: 'Nachrichten',
        en: 'News',
        fr: 'Nouvelles',
        pl: 'Wiadomości',
        ro: 'Știri',
        ru: 'Новости',
      },
      iframe: {
        src: `https://test2.t247.win/${lang.value}/publication-category/novosti/`,
        title: 'News',
        width: '100%',
        height: '1900',
      },
    },
    'technical-analysis': {
      head: {
        title: {
          de: 'Technische Analyse',
          en: 'Technical Analysis',
          fr: 'Analyse Technique',
          pl: 'Analiza techniczna',
          ro: 'Analiză Tehnică',
          ru: 'Технический анализ',
        },
        description: {
          de: '',
          en: '',
          fr: '',
          pl: '',
          ro: '',
          ru: '',
        },
      },
      subheader: {
        de: 'Technische Analyse',
        en: 'Technical Analysis',
        fr: 'Analyse Technique',
        pl: 'Analiza techniczna',
        ro: 'Analiză Tehnică',
        ru: 'Технический анализ',
      },
      iframe: {
        src: `https://test2.t247.win/${lang.value}/publication-category/tehnicheskij-analiz/`,
        title: 'Technical analysis',
        width: '100%',
        height: '1900',
      },
    },
    'fundamental-analysis': {
      head: {
        title: {
          de: 'Fundamentalanalyse',
          en: 'Fundamental Analysis',
          fr: 'Analyse Fondamentale',
          pl: 'Analiza fundamentalna',
          ro: 'Analiză Fundamentală',
          ru: 'Фундаментальный анализ',
        },
        description: {
          de: '',
          en: '',
          fr: '',
          pl: '',
          ro: '',
          ru: '',
        },
      },
      subheader: {
        de: 'Fundamentalanalyse',
        en: 'Fundamental Analysis',
        fr: 'Analyse Fondamentale',
        pl: 'Analiza fundamentalna',
        ro: 'Analiză Fundamentală',
        ru: 'Фундаментальный анализ',
      },
      iframe: {
        src: `https://test2.t247.win/${lang.value}/publication-category/fundamentalnyj-analiz/`,
        title: 'Fundamental analysis',
        width: '100%',
        height: '1900',
      },
    },
    'determining-trend-potential': {
      head: {
        title: {
          de: 'Bestimmung des Trendpotenzials',
          en: 'Determining Trend Potential',
          fr: 'Détermination du Potentiel de Tendance',
          pl: 'Określanie potencjału trendu',
          ro: 'Determinarea Potențialului Tendinței',
          ru: 'Определение потенциала тренда',
        },
        description: {
          de: '',
          en: '',
          fr: '',
          pl: '',
          ro: '',
          ru: '',
        },
      },
      subheader: {
        de: 'Bestimmung des Trendpotenzials',
        en: 'Determining Trend Potential',
        fr: 'Détermination du Potentiel de Tendance',
        pl: 'Określanie potencjału trendu',
        ro: 'Determinarea Potențialului Tendinței',
        ru: 'Определение потенциала тренда',
      },
      iframe: {
        src: `https://test2.t247.win/${lang.value}/publication-category/opredelenie-potenciala-trenda/`,
        title: 'Determinating trend potential',
        width: '100%',
        height: '1900',
      },
    },
  };
};
