let groupsOfStudents = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

// function dateCalculation(){

// }
let bestScore = 0;

function calculationOfTheBestStudent(oneOfTheStudentGroups) {
  bestScore = 0;
  let bestStudentsNames = [];
  let bestDate = new Date(0);

  oneOfTheStudentGroups.forEach((e) => {
    if (e.score > bestScore) {
      bestScore = e.score;
      bestDate = new Date(e.date);
      bestStudentsNames = [];
      bestStudentsNames.push(e.name);
    } else if (e.score == bestScore) {
      currentStudentDate = new Date(e.date);
      if (currentStudentDate < bestDate) {
        bestDate = currentStudentDate;
        bestStudentsNames = [];
        bestStudentsNames.push(e.name);
      } else if (currentStudentDate.getTime() == bestDate.getTime()) {
        bestStudentsNames.push(e.name);
      }
    }
  });

  return bestStudentsNames;
}

// for (let i = 0; i < groupsOfStudents.length; i++) {
//   let bestStudentOfOneGroup = calculationOfTheBestStudent(groupsOfStudents[i]);
//   if (bestStudentOfOneGroup != 0) {
//     console.log(
//       `Поздравляем Вас ${bestStudentOfOneGroup.join(
//         ", "
//       )}. Вы набрали максимальное количество баллов в группе ${[
//         i + 1,
//       ]}: ${bestScore}`
//     );
//   } else {
//     console.log(`Никто не победил! Все были ужасны!`);
//   }
// }

module.exports = calculationOfTheBestStudent;