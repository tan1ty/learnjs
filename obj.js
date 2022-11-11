//
//
//
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary() {
  let max = 0;
  let maxName = null;

  for (const [nameof, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = nameof;
    }
  }
  return maxName;
}

topSalary(salaries);
experiment with amend
