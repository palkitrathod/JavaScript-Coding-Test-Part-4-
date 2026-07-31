function summarizeJsIfElseResults(results)
{
  let summary =
  {
    total: results.length,
    passed: 0,
    failed: 0,
    skipped : 0 
  }
  for (let i = 0; i < results.length; i++)
  {
    let result = results[i].toLowerCase();

    if (result.includes("pass"))
    {
      summary.passed++;
    }
    else if (result.includes("fail"))
    {
      summary.failed++;
    } else if (result.includes("skip"))
    {
      summary.skipped++;
    }
  }

  return summary;
}
