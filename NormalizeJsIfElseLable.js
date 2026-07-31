function normalizeJsIfElseLabel(label)
{
  let normalized = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized ? "js-ifelse-" + normalized : "js-ifelse";
}
