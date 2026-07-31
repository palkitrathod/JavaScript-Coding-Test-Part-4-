function filterSupportedJsIfElseTopics(topics)
{
  let result = [];

  let aliasMap =
  {
    "success": "success",
    "2xx": "success",
    "redirect": "redirect",
    "3xx": "redirect",
    "client": "client",
    "4xx": "client"
  };

  for (let i = 0; i < topics.length; i++)
  {
    let topic = topics[i].trim().toLowerCase();

    if (aliasMap[topic])
    {
      let correctTopic = aliasMap[topic];

      if (!result.includes(correctTopic))
      {
        result.push(correctTopic);
      }
    }
  }

  return result;

}
