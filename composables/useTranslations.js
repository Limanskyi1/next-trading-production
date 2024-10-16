export const useTranslations = () => {
  const translations = ref(null);

  const { locale } = useI18n();
  const route = useRoute();

  const fetchTranslations = async (page) => {
    try {
      const response = await fetch(`/translations/${page}.json`);
      if (!response.ok) {
        throw new Error('Не вдалося отримати переклади');
      }
      const data = await response.json();
      translations.value = data;
    } catch (err) {
      console.error(err.message);
    }
  };

  const determinePage = () => {
    const routeName = route.name;

    switch (true) {
      case routeName.startsWith('index'):
        return 'home';
      case routeName.startsWith('about-us'):
        return 'about-us';
      case routeName.startsWith('account-types'):
        return 'account-types';
      case routeName.startsWith('contacts'):
        return 'contacts';
      case routeName.startsWith('legal'):
        return 'legal';
      default:
        console.log('Unknown route');
        return null;
    }
  };

  const getCurrentTranslations = computed(() => {
    return (lang = locale.value) => {
      if (!translations.value) {
        console.warn('Переклади ще не завантажені');
        return {};
      }
      if (translations.value.hasOwnProperty(lang)) {
        return translations.value[lang];
      } else if (translations.value.hasOwnProperty('en')) {
        return translations.value['en'];
      } else {
        return {};
      }
    };
  });

  const data = computed(() => (translations.value ? getCurrentTranslations.value() : {}));

  const isDataReady = computed(() => translations.value !== null);

  onMounted(() => {
    const page = determinePage();
    page ? fetchTranslations(page) : console.error('Переклади для цієї сторінки відсутні');
  });

  return {
    data,
    isDataReady,
    fetchTranslations,
    getCurrentTranslations,
  };
};

