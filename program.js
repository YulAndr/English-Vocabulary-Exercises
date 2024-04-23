let exercise_tops = document.querySelectorAll('.exercise-top');

exercise_tops.forEach(function(exercise_top) {
  let exercise_bottom = exercise_top.nextElementSibling;

  exercise_top.addEventListener('click', function(event) {
    if (exercise_bottom.classList.contains('show')) {
      exercise_bottom.classList.remove('show');
    } else {
      exercise_bottom.classList.add('show');
    }
  });
});


let ex_3_answers = ['word1', 'word2', 'word3', 'word1', 'word2', 'word3', 'word1', 'word2', 'word3','word1', 'word2', 'word1', 'word2'];

let ex_4_answers = ['1', '2', '3', '4', '5', '6', '7', '8'];
let ex_5_answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let ex_6_answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
let ex_7_answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
let ex_8_answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
let ex_9_answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
let ex_13_answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

function checkTest(correctAnswers, formID) {
  // Получаем форму  по id 
  let form = document.getElementById(formID);
  // Получаем все теги <input> внутри этой формы
  let inputs = form.querySelectorAll('[name="answer"]');
  
  //предупраждение, если пользователь ввел не все ответы
  let empty = 0;
  for (i = 0; i < inputs.length; i ++) {
    if (inputs[i].value == '') {
      empty++;
    }
  }
  if (empty > 0) {
    let confirmation = confirm(`You have given ${inputs.length - empty} answers out of ${inputs.length}. Are you sure you want to finish?`);
    if (!confirmation) return;
  }

  let score = 0;
  
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == correctAnswers[i]) {
      score++;
      if (!inputs[i].classList.contains('correct')) inputs[i].classList.add('correct');
    } else {
      if (!inputs[i].classList.contains('error')) inputs[i].classList.add('error');
    }
  }
  
  //вывод результата
  // Находим <p> с классом "result" внутри этой формы
  const resultParagraph = form.querySelector('p.result');

  // Вписываем текст внутрь <p>
  resultParagraph.textContent = `Your score is ${score} which equals ${Math.round(score/inputs.length * 100)}%.`;
}

function clearTest(formID) {
  // Получаем форму  по id 
  let form = document.getElementById(formID);
  // Получаем все теги <input> внутри этой формы
  let inputs = form.querySelectorAll('[name="answer"]');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].classList.contains('error')) inputs[i].classList.remove('error');
    if (inputs[i].classList.contains('correct')) inputs[i].classList.remove('correct');
    inputs[i].value = '';
  }
  // Находим <p> с классом "result" внутри этой формы
  const resultParagraph = form.querySelector('p.result');

  // Вписываем текст внутрь <p>
  resultParagraph.textContent = ``;
}


let inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
  
  input.onfocus = function() {
    if (this.classList.contains('error')) {
      // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      this.classList.remove('error');
    }
    if (this.classList.contains('correct')) {
      this.classList.remove('correct');
    }
  };
});


