export const useEduThData = () => {
  const { locale } = useI18n();
  const lang = ref(locale.value == 'ru' ? 'ru' : 'en');

  return {
    'beginners-guide': {
      head: {
        title: {
          de: 'Einsteigerleitfaden',
          en: 'Beginners guide',
          fr: 'Guide du débutant',
          pl: 'Przewodnik dla początkujących',
          ro: 'Ghid pentru începători',
          ru: 'Руководство для начинающих',
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
        de: 'Einsteigerleitfaden',
        en: 'Beginners guide',
        fr: 'Guide du débutant',
        pl: 'Przewodnik dla początkujących',
        ro: 'Ghid pentru începători',
        ru: 'Руководство для начинающих',
      },
      iframe: {
        src: `https://test2.t247.win${lang.value === 'ru' ? '/' : '/en/'}`,
        title: 'КУРС «НАЧИНАЮЩИМ»',
        width: '100%',
        height: '6031',
      },
    },
    'advanced-guide': {
      head: {
        title: {
          de: 'Fortgeschrittener Leitfaden',
          en: 'Advanced guide',
          fr: 'Guide Avancé',
          pl: 'Zaawansowany przewodnik',
          ro: 'Ghid Avansat',
          ru: 'Продвинутое руководство',
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
        de: 'Fortgeschrittener Leitfaden',
        en: 'Advanced guide',
        fr: 'Guide Avancé',
        pl: 'Zaawansowany przewodnik',
        ro: 'Ghid Avansat',
        ru: 'Продвинутое руководство',
      },
      iframe: {
        src: `https://test2.t247.win${
          lang.value === 'ru' ? '/' : '/en/'
        }znakomstvo-s-fundamentalnym-analizom/`,
        title: 'КУРС «ПРОДВИНУТЫМ»',
        width: '100%',
        height: '3694',
      },
    },

    'beginners-vods': {
      head: {
        title: {
          de: 'Video-Lektionen für Anfänger',
          en: 'Beginners Video Lessons',
          fr: 'Leçons Vidéo pour Débutants',
          pl: 'Lekcje Wideo dla Początkujących',
          ro: 'Lecții Video pentru Începători',
          ru: 'Видеоуроки для начинающих',
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
        de: 'Video-Lektionen für Anfänger',
        en: 'Beginners Video Lessons',
        fr: 'Leçons Vidéo pour Débutants',
        pl: 'Lekcje Wideo dla Początkujących',
        ro: 'Lecții Video pentru Începători',
        ru: 'Видеоуроки для начинающих',
      },
      iframe: {
        src: `https://test2.t247.win${
          lang.value === 'ru' ? '/video-category/nachinayushhim/' : '/en/video-category/beginners/'
        }`,
        title: 'BEGINNERS VODS',
        width: '100%',
        height: '2632',
      },
    },
    'advanced-vods': {
      head: {
        title: {
          de: 'Fortgeschrittene Video-Lektionen',
          en: 'Advanced Video Lessons',
          fr: 'Leçons Vidéo Avancées',
          pl: 'Zaawansowane Lekcje Wideo',
          ro: 'Lecții Video Avansate',
          ru: 'Продвинутые видеоуроки',
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
        de: 'Fortgeschrittene Video-Lektionen',
        en: 'Advanced Video Lessons',
        fr: 'Leçons Vidéo Avancées',
        pl: 'Zaawansowane Lekcje Wideo',
        ro: 'Lecții Video Avansate',
        ru: 'Продвинутые видеоуроки',
      },
      iframe: {
        src: `https://test2.t247.win${
          lang.value === 'ru' ? '/video-category/prodvinutym/' : '/en/video-category/advanced/'
        }`,
        title: 'ADVANCED VODS',
        width: '100%',
        height: '2647',
      },
    },
    'cryptocurrency-vods': {
      head: {
        title: {
          de: 'Kryptowährungs-Video-Lektionen',
          en: 'Cryptocurrency Video Lessons',
          fr: 'Leçons Vidéo sur les Cryptomonnaies',
          pl: 'Lekcje Wideo o Kryptowalutach',
          ro: 'Lecții Video despre Cryptomonede',
          ru: 'Видеоуроки по криптовалютам',
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
        de: 'Kryptowährungs-Video-Lektionen',
        en: 'Cryptocurrency Video Lessons',
        fr: 'Leçons Vidéo sur les Cryptomonnaies',
        pl: 'Lekcje Wideo o Kryptowalutach',
        ro: 'Lecții Video despre Cryptomonede',
        ru: 'Видеоуроки по криптовалютам',
      },
      iframe: {
        src: `https://test2.t247.win${
          lang.value === 'ru' ? '/video/kriptovalyuty/' : '/en/video/cryptocurrencies/'
        }`,
        title: 'CRYPTOCURRENCY VODS',
        width: '100%',
        height: '1010',
      },
    },
  };
};
