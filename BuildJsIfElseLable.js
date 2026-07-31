function buildJsIfElseRunLabel(suiteName, environment, buildNumber)
{
  // Remove extra spaces from the suite name
  let suite = suiteName.trim();

  // Remove extra spaces and convert the environment to lowercase
  let env = environment.trim().toLowerCase();

  // Create the build label
  let build = "build-" + buildNumber;

  // Combine all parts with " | " and return the final label
  return suite + " | " + env + " | " + build;
}
