const students = [
  {
    id: 1,
    name: "peter",
    score: 80,
    favoriteSubject: "math",
  },
  {
    id: 2,
    name: "bob",
    score: 45,
    favoriteSubject: "it",
  },
  {
    id: 3,
    name: "adam",
    score: 90,
    favoriteSubject: "history",
  },
  {
    id: 4,
    name: "john",
    score: 65,
    favoriteSubject: "art",
  },
  {
    id: 5,
    name: "susy",
    score: 75,
    favoriteSubject: "art",
  },
];

console.log(students);

const updatedStudents = students.map(function (student) {
  student.role = "student";
  return student;
});

console.log(updatedStudents);

const highScores = students.filter(function (student) {
  return student.score >= 80;
  //if (student.score >= 80) return student;
  // if (student.score >= 80) {
  //   return student;
  // }
});

console.log(highScores);

const specificId = students.find(function (student) {
  return student.id === 3;
});

console.log(specificId);

const totalScore =
  students.reduce(function (acc, currItem) {
    acc += currItem.score;
    return acc;
  }, 0) / students.length;

console.log(totalScore);

const subject = "math";
const total = {};
total.math = "some value";
total[subject] = "some value";
console.log(total);

const favoriteSubjects = students.reduce(function (acc, currItem) {
  const favoriteSubject = currItem.favoriteSubject;

  console.log(favoriteSubject);
  if (acc[favoriteSubject]) {
    acc[favoriteSubject] = acc[favoriteSubject] + 1;
  } else {
    acc[favoriteSubject] = 1;
  }

  return acc;
}, []);

console.log(favoriteSubjects);
