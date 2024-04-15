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


let travelling_answers = [
	{
		//first exercise
		correct: ['word1', 'word2', 'word3']
	},
	{
		//second exercise
	}
	]
