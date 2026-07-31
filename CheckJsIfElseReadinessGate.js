function checkJsIfElseReadinessGate(hasSetup, hasPractice, hasNotes)
{
  // Check if all three values are boolean true
  if (hasSetup === true && hasPractice === true && hasNotes === true) {
    return "READY";
  }
  else
  {
    // if one or more condition not satisfied then it will return blocked
    return "BLOCKED";
  }
}
