function summarizeJsIfElseMatrix(matrix)
{
    let summary = {
      total: 0,
      passed: 0,
      failed: 0,
      failedCases: []
    };

    // Loop through each row of the matrix
    for (let i = 0; i < matrix.length; i++)
    {
      for (let j = 0; j < matrix[i].length; j++)
      {
        // Get the current test result
        let result = matrix[i][j].toLowerCase();
        summary.total++;

        // Check if the result is a pass
          if (result.includes("pass"))
          {
          summary.passed++;
        }

        // Check if the result is a fail
          else if (result.includes("fail"))
          {
          summary.failed++;

          // Store the failed test case
          summary.failedCases.push(matrix[i][j]);
        }
      }
    }
    return summary;
  }
