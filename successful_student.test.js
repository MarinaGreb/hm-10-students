const calculationOfTheBestStudent = require("./successful_student");

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
  [
    { name: "Anna", score: 15, date: "2022-10-11" },
    { name: "Mila", score: 0, date: "2022-10-10" },
    { name: "Kasya", score: 15, date: "2022-10-11" },
    { name: "Kiril", score: 0, date: "2022-10-12" },
    { name: "Gulya", score: 10, date: "2022-10-01" },
    { name: "Fedya", score: 0, date: "2022-10-11" },
  ],
];
// describe("Праверка групп", () => {
//     it("Первая группа", () => {
//       expect(calculationOfTheBestStudent(groupsOfStudents[0])).toEqual(["Stepan", "Zanna"]);
//     });
//     // it("Вторая группа", () => {
//     //   expect(calculateBonus(25, 60)).toBe(50);
//     // });
// });

describe("Праверка групп", () => {
  it.each([
    [groupsOfStudents[0], ["Ivan"]],
    [groupsOfStudents[1], ["Marina"]],
    [groupsOfStudents[2], []],
    [groupsOfStudents[3], ["Anna", "Kasya"]],
  ])("В группе студентов: %o лучший результат: %s", (a, result) => {
    expect(calculationOfTheBestStudent(a)).toEqual(result);
  });
});