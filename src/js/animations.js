import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import { Sine } from 'gsap';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    //Главная - Интро
    if (document.querySelector('.js-intro')) {
      const introTween = new TimelineMax();
      introTween
        .from('.js-intro-flower', 0.5, { scale: 0 })
        .from('.js-intro-left-branch', 0.5, { opacity: 0, x: -20 })
        .from('.js-intro-right-branch', 0.5, { opacity: 0, x: 20 }, '-=0.5')
        .to('.js-intro-tape', 6, { strokeDashoffset: 0 });

      const introScene = new ScrollMagic.Scene({
        triggerElement: '.js-intro',
        reverse: false
      })
        .addTo(controller)
        .setTween(introTween);
    }

    //Главная - Праздник
    if (document.querySelector('.js-holiday')) {
      const holidayTween = new TimelineMax();
      holidayTween
        .from('.js-holiday-date', 1, { rotationX: 90, transformOrigin: '50% 0', transformStyle: "preserve-3d" })
        .from('.js-holiday-title', 0.5, { opacity: 0 })
        .from('.js-holiday-btn', 1, {
          scale: 0, ease:
            Elastic.easeOut.config(1, 0.4)
        });

      const holidayScene = new ScrollMagic.Scene({
        triggerElement: '.js-holiday',
        reverse: false
      })
        .addTo(controller)
        .setTween(holidayTween);
    }

    //Главная - Случайный букет
    if (document.querySelector('.js-random')) {
      const randomTween = new TimelineMax();
      randomTween
        .from('.js-random-pic-1', 0.4, { x: -30, y: -100, opacity: 0 }, '-=0.4')
        .from('.js-random-pic-2', 0.4, { x: -20, y: -100, opacity: 0 }, '-=0.3')
        .from('.js-random-pic-3', 0.4, { x: -10, y: -100, opacity: 0 }, '-=0.4')
        .from('.js-random-pic-4', 0.4, { x: 0, y: -100, opacity: 0 }, '-=0.2')
        .from('.js-random-pic-5', 0.4, { x: 10, y: -100, opacity: 0 }, '-=0.4')
        .from('.js-random-pic-6', 0.4, { x: 20, y: -100, opacity: 0 }, '-=0.3')
        .from('.js-random-pic-7', 0.4, { x: 30, y: -100, opacity: 0 }, '-=0.4');


      const randomScene = new ScrollMagic.Scene({
        triggerElement: '.js-random',
        reverse: true
      })
        .addTo(controller)
        .setTween(randomTween);
    }

    //Главная - О нас
    if (document.querySelector('.js-about')) {
      const aboutTween = new TimelineMax();
      aboutTween
        .from('.js-about-photo-1', 1, { x: -200, opacity: 0, ease: Expo.easeOut })
        .from('.js-about-photo-2', 1, { x: 200, opacity: 0, ease: Expo.easeOut });

      const aboutScene = new ScrollMagic.Scene({
        triggerElement: '.js-about',
        reverse: false
      })
        .addTo(controller)
        .setTween(aboutTween);
    }

    
    //О нас
    function dateCount() {
      var dateElement = document.querySelector('.js-about-date');
      var counter = { var: 2019 };
      TweenMax.to(counter, 3, {
        var: 1998,
        onUpdate: function () {
          dateElement.textContent = Math.ceil(counter.var);
        },
        ease: Circ.easeIn
      });
    }

    if (document.querySelector('.js-aboutpage')) {
      dateCount();
      const aboutPageTween = new TimelineMax();
      aboutPageTween
        .from('.js-date-divider', 1, { scaleX: 0, transformOrigin: 'left', ease: Circ. easeOut })
        .from('.js-date-desc', 0.25, { opacity: 0 })
        .from('.js-about-number-1', 0.5, { opacity: 0, y: 100,  ease: Circ. easeOut})
        .staggerFrom('.js-about-captiongroup-1', 0.35, { opacity: 0}, 0.35)
        .from('.js-about-number-2', 0.5, { opacity: 0, y: 100, ease: Circ. easeOut})
        .staggerFrom('.js-about-captiongroup-2', 0.35, { opacity: 0}, 0.35)
        .from('.js-about-number-3', 0.5, { opacity: 0, y: 100, ease: Circ. easeOut})
        .staggerFrom('.js-about-captiongroup-3', 0.35, { opacity: 0}, 0.35)
        .from('.js-about-numbers-desc', 0.25, { opacity: 0});
    }

    //Контакты
    if (document.querySelector('.js-contactspage')) {
      const contactsPageTween = new TimelineMax();
      contactsPageTween
        .from('.js-contacts-flower', 0.5, { opacity: 0, ease: Power3. easeOut })
        .from('.js-contacts-item', 0.5, { opacity: 0, ease: Power3. easeOut })
        .from('.js-contacts-item-inner', 0.5, { opacity: 0, y: 50, ease: Power3. easeOut });
    }

  });
})();
