function findFirstCriticalJsIfElseBug(bugs)
{
  for (let i = 0; i < bugs.length; i++) {

    // Check if the current bug has critical severity or not
    if (bugs[i].severity === "critical") {

      return bugs[i].title;
    }
  }

  return "No critical bug";
}
