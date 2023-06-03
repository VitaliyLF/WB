import {
  Accordion
} from '../functions/accordion';

const programAccordions = document.querySelector('.program__accordions');
const answersAccordions = document.querySelector('.answers__accordions');

if (programAccordions) {
  const accordion1 = new Accordion('.accordion--1', {
    speed: 500,
    parent: programAccordions,
  });

  const accordion2 = new Accordion('.accordion--2', {
    speed: 500,
    parent: programAccordions
  });

  const accordion3 = new Accordion('.accordion--3', {
    speed: 500,
    parent: programAccordions
  });

  const accordion4 = new Accordion('.accordion--4', {
    speed: 500,
    parent: programAccordions
  });
}


if (answersAccordions) {
  const accordionAnswers1 = new Accordion('.accordion-answers-1', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers2 = new Accordion('.accordion-answers-2', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers3 = new Accordion('.accordion-answers-3', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers4 = new Accordion('.accordion-answers-4', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });
}
