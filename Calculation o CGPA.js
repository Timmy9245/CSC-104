document.getElementById('cgpaForm').onsubmit = function() {
    var numCourses = document.getElementById('numCourses').value;
    var totalCredits = 0;
    var totalGradePoints = 0;

    for (var i = 1; i <= numCourses; i++) {
        var grade = parseFloat(document.getElementById('grade'+i).value);
        var credits = parseFloat(document.getElementById('credits'+i).value);
        totalGradePoints += grade * credits;
        totalCredits += credits;
    }

    var cgpa = totalGradePoints / totalCredits;
    alert("Your CGPA is: " + cgpa.toFixed(2));
    return false;
};

document.getElementById('numCourses').addEventListener('change', function() {
    var numCourses = parseInt(this.value);
    var coursesDiv = document.getElementById('courses');
    coursesDiv.innerHTML = '';

    for (var i = 1; i <= numCourses; i++) {
        var courseDiv = document.createElement('div');
        courseDiv.innerHTML = `
            <label for="grade${i}">Grade for Course ${i}:</label>
            <input type="text" id="grade${i}" name="grade${i}" required>
            <label for="credits${i}">Credits for Course ${i}:</label>
            <input type="number" id="credits${i}" name="credits${i}" min="1" required>
        `;
        coursesDiv.appendChild(courseDiv);
    }
});
