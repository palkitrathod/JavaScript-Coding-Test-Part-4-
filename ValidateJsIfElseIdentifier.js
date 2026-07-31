function isValidJsIfElseIdentifier(name)
{
  const value = name.trim();
  const reserved = ["if", "else", "return", "true", "false", "null"];

  return value !== "" &&
    /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) &&
    !reserved.includes(value);
}
