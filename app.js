
    const totalMarks = 200;
    const students = [
      {
        name: "Ali",
        scienceMarks: 90,
        englishMarks: 70,
      },
      {
        name: "Huzaifa",
        scienceMarks: 10,
        englishMarks: 40,
      },
      {
        name: "Asim",
        scienceMarks: 40,
        englishMarks: 60,
      },
    ];

    function calculateMarks(student) {
      const total = student.scienceMarks + student.englishMarks;
      const percentage = (total / totalMarks) * 100;
      return { percentage, total };
    }

    const marksheetContainer = document.querySelector('.grid');

    students.forEach((student) => {
      const result = calculateMarks(student);
      const passOrFail = result.percentage >= 40 ? 'text-green-600' : 'text-red-600';

      const marksheetHTML = `
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-2">${student.name}</h2>
          <div class="flex mb-2">
            <div class="w-1/2">
              <p class="text-sm text-gray-600">Science:</p>
              <p class="font-semibold">${student.scienceMarks}</p>
            </div>
            <div class="w-1/2">
              <p class="text-sm text-gray-600">English:</p>
              <p class="font-semibold">${student.englishMarks}</p>
            </div>
          </div>
          <hr class="my-2">
          <div class="flex mb-2">
            <div class="w-1/2">
              <p class="text-sm text-gray-600">Total Marks:</p>
              <p class="font-semibold">${result.total}</p>
            </div>
            <div class="w-1/2">
              <p class="text-sm text-gray-600">Percentage:</p>
              <p class="font-semibold">${result.percentage.toFixed(2)}%</p>
            </div>
          </div>
          <p class="text-lg font-semibold ${passOrFail}">${result.percentage >= 40 ? 'PASSED' : 'FAILED'}</p>
        </div>
      `;
      
      marksheetContainer.innerHTML += marksheetHTML;
    });
  