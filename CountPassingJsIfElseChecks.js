function countPassingJsIfElseChecks(results)
{
  let count = 0;

  for (let i = 0; i < results.length; i++)
  {
    let result = results[i].toLowerCase();

    if (result.includes("pass"))
    {
      count++;
    }
  }

  return count;
}
