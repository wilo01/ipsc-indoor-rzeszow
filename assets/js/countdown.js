document.addEventListener('alpine:init', () => {
  Alpine.data('countdown', () => ({
    targetDate: new Date('2026-03-22T08:00:00+01:00'),
    endDate: new Date('2026-03-22T15:00:00+01:00'),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
    completed: false,
    interval: null,

    init() {
      this.update();
      this.interval = setInterval(() => this.update(), 1000);
    },

    update() {
      const now = new Date();

      if (now >= this.endDate) {
        this.completed = true;
        this.expired = true;
        this.days = this.hours = this.minutes = this.seconds = 0;
        if (this.interval) clearInterval(this.interval);
        return;
      }

      const diff = this.targetDate - now;

      if (diff <= 0) {
        this.expired = true;
        this.days = this.hours = this.minutes = this.seconds = 0;
        return;
      }

      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    },

    pad(n) {
      return String(n).padStart(2, '0');
    },

    destroy() {
      if (this.interval) clearInterval(this.interval);
    }
  }));
});
