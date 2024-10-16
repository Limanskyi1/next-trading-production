export const useCompanyConfig = () => {
  const data = ref(null);

  const loadConfig = async () => {
    try {
      const response = await fetch('/companyConfig.json');
      if (!response.ok) {
        throw new Error('Failed to load company config');
      }
      data.value = await response.json();
    } catch (error) {
      console.error('Error loading company config:', error);
    }
  };

  onMounted(() => {
    loadConfig();
  });

  const company = computed(() => (data.value ? data.value : {}));

  return {
    company,
  };
};
