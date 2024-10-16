export const useToolsThData = () => {
  const { locale } = useI18n();
  const lang = ref(locale.value == 'ru' ? 'ru' : 'en');

  return {
    informers: {
      head: {
        title: {
          de: 'Informanten',
          en: 'Informers',
          fr: 'Informateurs',
          pl: 'Informatorzy',
          ro: 'Informatori',
          ru: 'Информеры',
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
        de: 'Informanten',
        en: 'Informers',
        fr: 'Informateurs',
        pl: 'Informatorzy',
        ro: 'Informatori',
        ru: 'Информеры',
      },
      items: [
        {
          title: {
            de: 'Zeitplan für Devisenhandelssitzungen',
            en: 'Forex Market Hours',
            fr: 'Calendrier des séances de trading Forex',
            pl: 'Godziny otwarcia rynku Forex',
            ro: 'Programul sesiunilor de tranzacționare Forex',
            ru: 'Расписание торговых сессий Forex',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/raspisanie-torgovyh-sessij-forex/`,
            title: 'Forex Market Hours',
            width: '100%',
            height: '650',
          },

          instruction: 'trading-sessions',
        },
        {
          title: {
            de: 'Kurs-Tabelle',
            en: 'Forex Cross Rates',
            fr: 'Taux croisés Forex',
            pl: 'Kursy krzyżowe Forex',
            ro: 'Tabel de curs',
            ru: 'Таблица курсов',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/tablicza-kursov/`,
            title: 'Forex Cross Rates',
            width: '100%',
            height: '650',
          },

          instruction: 'course-table',
        },
        {
          title: {
            de: 'Marktübersicht',
            en: 'Market Summary',
            fr: 'Aperçu du marché',
            pl: 'Podsumowanie rynku',
            ro: 'Prezentare generală a pieței',
            ru: 'Обзор рынка',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/obzor-rynka/`,
            title: 'Market Summary',
            width: '100%',
            height: '650',
          },

          instruction: 'market-review',
        },
        {
          title: {
            de: 'Referenzwerte',
            en: 'Pivot points',
            fr: 'Valeurs de référence',
            pl: 'Punkty obrotowe',
            ro: 'Valori de referinta',
            ru: 'Опорные уровни',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/opornye-urovni/`,
            title: 'Pivot points',
            width: '100%',
            height: '320',
          },

          instruction: 'reference-levels',
        },
        {
          title: {
            de: 'Historischer Marktstimmungsindex',
            en: 'Historical sentiment index',
            fr: 'Indice de sentiment historique',
            pl: 'Historyczny indeks nastrojów',
            ro: 'Indicele istoric al sentimentului de piață',
            ru: 'Исторический индекс рыночных настроений',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/istoricheskij-indeks-rynochnyh-nastroenij/`,
            title: 'Historical sentiment index',
            width: '100%',
            height: '340',
          },

          instruction: 'historical-santiment-index',
        },
        {
          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/indeks-rynochnyh-nastroenij/`,
            title: 'Historical sentiment index',
            width: '100%',
            height: '800',
          },
        },
      ],
    },
    calculators: {
      head: {
        title: {
          de: 'Rechner',
          en: 'Calculators',
          fr: 'Calculatrices',
          pl: 'Kalkulatory',
          ro: 'Calculatoare',
          ru: 'Калькуляторы',
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
        de: 'Rechner',
        en: 'Calculators',
        fr: 'Calculatrices',
        pl: 'Kalkulatory',
        ro: 'Calculatoare',
        ru: 'Калькуляторы',
      },
      items: [
        {
          title: {
            de: 'Forex-Rechner',
            en: 'Forex calculator',
            fr: 'Calculateur de Forex',
            pl: 'Kalkulator Forex',
            ro: 'Calculator Forex',
            ru: 'Калькулятор Forex',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/foreks-kalkulyator/`,
            title: 'Forex calculator',
            width: '100%',
            height: '700',
          },

          instruction: 'forex-calculator',
        },
        {
          title: {
            de: 'Rechner für die Position',
            en: 'Position size calculator',
            fr: 'Calculateur de taille de position',
            pl: 'Kalkulator pozycji',
            ro: 'Calculator de poziție',
            ru: 'Калькулятор позиций',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/position-size-calculator/`,
            title: 'Position size calculator',
            width: '100%',
            height: '400',
          },

          instruction: 'position-calendar',
        },
        {
          title: {
            de: 'Punkte-Rechner',
            en: 'Pip calculator',
            fr: 'Calculateur de points',
            pl: 'Kalkulator punktów',
            ro: 'Calculator de puncte',
            ru: 'Калькулятор пунктов',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/kalkulyator-punktov/`,
            title: 'Pip calculator',
            width: '100%',
            height: '220',
          },

          instruction: 'point-calculator',
        },
      ],
    },
    calendars: {
      head: {
        title: {
          de: 'Kalender',
          en: 'Calendars',
          fr: 'Calendriers',
          pl: 'Kalendarze',
          ro: 'Calendare',
          ru: 'Календари',
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
        de: 'Kalender',
        en: 'Calendars',
        fr: 'Calendriers',
        pl: 'Kalendarze',
        ro: 'Calendare',
        ru: 'Календари',
      },
      items: [
        {
          title: {
            de: 'Wirtschaftskalender',
            en: 'Economic calendar',
            fr: 'Calendrier économique',
            pl: 'Kalendarz ekonomiczny',
            ro: 'Calendar economic',
            ru: 'Экономический календарь',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/ekonomicheskij-kalendar/`,
            title: 'Economic calendar',
            width: '100%',
            height: '800',
          },

          instruction: 'economic-calendar',
        },
        {
          title: {
            de: 'Zinssatzkalender',
            en: 'Interest rate calendar',
            fr: "Calendrier des taux d'intérêt",
            pl: 'Kalendarz oprocentowania',
            ro: 'Calendarul ratelor dobânzii',
            ru: 'Календарь процентных ставок',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/kalendar-proczentnyh-stavok/`,
            title: 'Interest rate calendar',
            width: '100%',
            height: '680',
          },

          instruction: 'interest-rate-calendar',
        },
        {
          title: {
            de: 'Kalender der gesetzlichen Feiertage',
            en: 'Public holidays calendar',
            fr: 'Calendrier des jours fériés',
            pl: 'Kalendarz świąt państwowych',
            ro: 'Calendarul sărbătorilor legale',
            ru: 'Календарь государственных праздников',
          },

          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/kalendar-gosudarstvennyh-prazdnikov/`,
            title: 'Public holidays calendar',
            width: '100%',
            height: '600',
          },

          instruction: 'public-holidays-calendar',
        },
      ],
    },
    signals: {
      head: {
        title: {
          de: 'Signale',
          en: 'Signals',
          fr: 'Signaux',
          pl: 'Sygnały',
          ro: 'Semnale',
          ru: 'Сигналы',
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
        de: 'Signale',
        en: 'Signals',
        fr: 'Signaux',
        pl: 'Sygnały',
        ro: 'Semnale',
        ru: 'Сигналы',
      },
      items: [
        {
          iframe: {
            src: `https://test2.t247.win/${lang.value}/widgets/tehnicheskie-indikatory/`,
            title: 'Signals',
            width: '100%',
            height: '450',
          },
        },
      ],
    },
  };
};
