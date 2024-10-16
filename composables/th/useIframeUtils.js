import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';

const iframeHeight = ref(null);

function handlePostMessage(event) {
  if (event.data && event.data.height && event.origin === 'https://test2.t247.win') {
    const { height } = event.data;
    iframeHeight.value = height;
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
}

function useIframeUtils() {
  onMounted(() => {
    window.addEventListener('message', handlePostMessage);
  });

  onUpdated(() => {
    scrollToTop();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('message', handlePostMessage);
  });

  return { iframeHeight };
}

export { useIframeUtils, scrollToTop, iframeHeight };
