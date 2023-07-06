const students = [
  { name: 'Alice', chemistry: 85, biology: 90, dob: '14-06-2000' },
  { name: 'Bob', chemistry: 90, biology: 80, dob: '12-08-2001' },
  { name: 'Charlie', chemistry: 80, biology: 90, dob: '25-03-2000' },
];

function sortStudents(a, b) {
  if (a.chemistry + a.biology > b.chemistry + b.biology) {
    return -1;
  } else if (a.chemistry + a.biology < b.chemistry + b.biology) {
    return 1;
  }

  if (a.biology > b.biology) {
    return -1;
  } else if (a.biology < b.biology) {
    return 1;
  }

  const [dayA, monthA, yearA] = a.dob.split('-').map(Number);
  const [dayB, monthB, yearB] = b.dob.split('-').map(Number);

  if (yearA > yearB) {
    return 1;
  } else if (yearA < yearB) {
    return -1;
  } else {
    if (monthA > monthB) {
      return 1;
    } else if (monthA < monthB) {
      return -1;
    } else {
      if (dayA > dayB) {
        return 1;
      } else if (dayA < dayB) {
        return -1;
      } else {
        return 0;
      }
    }
  }
}

students.sort(sortStudents);

students.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name}`);
});
