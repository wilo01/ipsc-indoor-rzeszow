document.addEventListener('alpine:init', () => {
  Alpine.store('lang', {
    current: localStorage.getItem('lang') || 'pl',
    data: {},

    async init() {
      try {
        const resp = await fetch('./assets/js/translations.json');
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        this.data = await resp.json();
      } catch (e) {
        console.error('Failed to load translations:', e);
        this.data = {
          hero: {
            title: { pl: 'INDOOR RZESZÓW', en: 'INDOOR RZESZÓW' },
            badge: { pl: 'IPSC Level 1 Indoor', en: 'IPSC Level 1 Indoor' }
          }
        };
      }
      document.documentElement.lang = this.current;
    },

    toggle() {
      this.current = this.current === 'pl' ? 'en' : 'pl';
      localStorage.setItem('lang', this.current);
      document.documentElement.lang = this.current;
    },

    t(key) {
      const keys = key.split('.');
      let obj = this.data;
      for (const k of keys) {
        if (!obj) return key;
        obj = obj[k];
      }
      if (!obj) return key;
      if (typeof obj === 'object' && obj[this.current] !== undefined) {
        return obj[this.current];
      }
      return obj;
    },

    tArr(key) {
      const keys = key.split('.');
      let obj = this.data;
      for (const k of keys) {
        if (!obj) return [];
        obj = obj[k];
      }
      if (!obj) return [];
      if (Array.isArray(obj[this.current])) return obj[this.current];
      if (Array.isArray(obj)) return obj;
      return [];
    },

    get isPL() { return this.current === 'pl'; },
    get isEN() { return this.current === 'en'; },

    get registrationUrl() {
      return this.data?.config?.practiscore?.registration_url || '#';
    },
    get resultsUrl() {
      return this.data?.config?.practiscore?.results_url || '#';
    }
  });

  Alpine.store('nav', {
    scrolled: false,
    mobileOpen: false,

    init() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    }
  });
});
