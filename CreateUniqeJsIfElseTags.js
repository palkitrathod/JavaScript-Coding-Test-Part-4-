function createUniqueJsIfElseTags(tags)
{
  // Create an empty array to store unique tags
  let uniqueTags = [];

  for (let i = 0; i < tags.length; i++)
  {
    let tag = tags[i].trim().toLowerCase();
    if (tag !== "") //it will ignore blank tags
    {
      if (!uniqueTags.includes(tag))
      {
        uniqueTags.push(tag);
      }
    }
  }
 return uniqueTags;
}
