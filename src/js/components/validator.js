import {
  validateForms
} from '../functions/validate-forms';

const rules1 = [{
    ruleSelector: '.input-name',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }]
  },
  {
    ruleSelector: '.input-link',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните поле!'
    }]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
  {
    ruleSelector: '.input-email',
    rules: [{
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      },
    ]
  },
];

const rules2 = [{
    ruleSelector: '.input-name-program',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }]
  },
  {
    ruleSelector: '.input-tel-program',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.answers-form', rules1, afterForm);
validateForms('.program-form', rules2, afterForm);
