class Accordion {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300
    };

    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);
    this.control = this.accordion.querySelector('.accordion__control');
    this.content = this.accordion.querySelector('.accordion__content');
    this.event();
    this.start();
  }

  start() {
    if (this.accordion) {
      if (this.accordion.classList.contains('is-open')) {
        this.open();
        this.control.classList.add('active');
        this.control.textContent = 'Свернуть';
      }
    }
  }

  event() {
    if (this.accordion) {
      this.accordion.addEventListener('click', (e) => {
        this.accordion.classList.toggle('open');

        if (this.accordion.classList.contains('open')) {
          this.open();
          this.control.classList.add('active');
          this.control.textContent = 'Свернуть';
        } else {
          this.close();
          this.control.classList.remove('active');
          this.control.textContent = 'Подробнее';
        }
      });
    }
  }

  open() {
    this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
    this.accordion.classList.add('is-open');
    this.control.setAttribute('aria-expanded', true);
    this.content.setAttribute('aria-hidden', false);
    this.content.style.maxHeight = this.content.scrollHeight + 'px';
    this.options.isOpen(this);
  }

  close() {
    this.accordion.classList.remove('is-open');
    this.control.setAttribute('aria-expanded', false);
    this.content.setAttribute('aria-hidden', true);
    this.content.style.maxHeight = null;
    this.options.isClose(this);
  }
}

if (document.querySelector('.program')) {
  const accordion1 = new Accordion('.accordion--1', {
    speed: 500,
  });

  const accordion2 = new Accordion('.accordion--2', {
    speed: 500
  });

  const accordion3 = new Accordion('.accordion--3', {
    speed: 500
  });

  const accordion4 = new Accordion('.accordion--4', {
    speed: 500
  });
}
