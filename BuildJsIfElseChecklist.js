function buildJsIfElseChecklist(items)
{
  let checklist = [];

  let count = 1;

  for (let i = 0; i < items.length; i++)
  {
    let task = items[i].trim(); // Remove extra spaces from the task
    if (task !== "")     // Skip blank tasks
    {
      checklist.push(count + ". " + task + " - TODO");
      count++;
    }
  }
  return checklist;
}
