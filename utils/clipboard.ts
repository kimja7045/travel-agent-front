import * as Clipboard from "expo-clipboard";

export const copyToClipboard = async () => {
  await Clipboard.setStringAsync("hello world");
};

export const getCopiedText = async () => {
  return await Clipboard.getStringAsync();
};
