export function copyTextToClipboard(text: string) {
  const oInput = document.createElement('input');
  oInput.value = text;
  oInput.readOnly = true;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand('Copy');
  document.body.removeChild(oInput);
  oInput.blur();
}
