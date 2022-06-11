export default defineNuxtPlugin(() => {
  return {
    provide: {
      samplePlugin: () => 'This is a sample plugin!',
    },
  };
});
