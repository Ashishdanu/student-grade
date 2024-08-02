function calculateFinalGrades(students) {
    // find average of scores 
    // first go on students then go on scores do sum of them and then divide them from the length of scores array 
let avgscore = students.map(function(student){
    return {
        id: student.id ,
        name: student.name,
        average : student.scores.reduce(function(accumulator,score){
            return accumulator + score;
        },0)/student.scores.length 
    }
    
});   
    // Filter students based on average score
    let passedStudents = avgscore.filter(function(studen){
        return studen.average >= 70;
    });

    return passedStudents;
}

// Input
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
];

// Output
const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);

//   console.log(passedStudents);
  // Output should be:
  // [
  //   { id: 1, name: "Alice", finalGrade: 89 },
  //   { id: 2, name: "Bob", finalGrade: 70 },
  //   { id: 4, name: "David", finalGrade: 78 }
  // ]
  
  