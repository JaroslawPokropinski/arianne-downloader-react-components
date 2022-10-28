function getBrowser() {
  const browsers = window as unknown as Record<string, Partial<typeof browser>>;
  if (browsers.chrome) {
    return browsers.chrome;
  }

  return browsers.browser;
}

export function getMessage(msgKey: string) {
  return getBrowser()?.i18n?.getMessage(msgKey) ?? `__${msgKey}__`;
}
