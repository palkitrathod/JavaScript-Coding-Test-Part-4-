function mergeJsIfElseConfig(defaultConfig, overrideConfig)
{
  let config =
  {
    ...defaultConfig, //copy all the properties from default config
    ...overrideConfig //copy al the properties from override config
  };

  if (config.retries === undefined)
  {
    config.retries = 0;
  }

  return config;
}
