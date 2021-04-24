const pushAnalytics = (eventName) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "VirtualPageView",
      virtualPageURL: eventName,
    });
  }
};

export default pushAnalytics;
