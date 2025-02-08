import * as Clipboard from "expo-clipboard";

export const setClipboardText = async (text: string) => {
  await Clipboard.setStringAsync(text);
};

export const getClipboardText = async () => {
  return await Clipboard.getStringAsync();
};
