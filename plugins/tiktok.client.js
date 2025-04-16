export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
      window.TiktokAnalyticsObject = 'ttq';
      window.ttq = window.ttq || [];
      window.ttq.methods = [
          "page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias",
          "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"
      ];
      window.ttq.setAndDefer = function (t, e) {
          t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
      };
      for (let i = 0; i < window.ttq.methods.length; i++) {
          window.ttq.setAndDefer(window.ttq, window.ttq.methods[i]);
      }
      window.ttq.instance = function (t) {
          let e = window.ttq._i[t] || [];
          for (let n = 0; n < window.ttq.methods.length; n++) {
              window.ttq.setAndDefer(e, window.ttq.methods[n]);
          }
          return e;
      };
      window.ttq.load = function (e, n) {
          let r = "https://analytics.tiktok.com/i18n/pixel/events.js";
          let o = n && n.partner;
          window.ttq._i = window.ttq._i || {};
          window.ttq._i[e] = [];
          window.ttq._i[e]._u = r;
          window.ttq._t = window.ttq._t || {};
          window.ttq._t[e] = +new Date();
          window.ttq._o = window.ttq._o || {};
          window.ttq._o[e] = n || {};

          let script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = r + "?sdkid=" + e + "&lib=ttq";
          let firstScript = document.getElementsByTagName("script")[0];
          firstScript.parentNode.insertBefore(script, firstScript);
      };

      // Load TikTok Pixel
      window.ttq.load('CV7RG3RC77UB1SREEPNG'); // Replace with your actual Pixel ID
      window.ttq.page();

      // Track page views when route changes
      nuxtApp.hook('page:finish', () => {
          window.ttq.page();
      });

      nuxtApp.provide('tiktok', window.ttq);
  }
});