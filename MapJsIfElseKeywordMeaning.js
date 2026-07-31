function getJsIfElseKeywordMeaning(term)
{
  const key = term.trim().toLowerCase();

  const meanings =
  {
    success: "2xx",
    redirect: "3xx",
    client: "4xx",
    server: "5xx"
  };

  if (meanings[key])
  {
    return meanings[key];
  }
  else
  {
    return "unknown";
  }
}
