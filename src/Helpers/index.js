/**
 * @function copyTextToClipBoard
 * @summary Copy text to clipboard
 * @param {*} textBody Text to copy to clipboard
 * @returns {boolean} results
 */
const copyTextToClipBoard = function copyTextToClipBoard(textBody) {
  try {
    navigator.clipboard.writeText(textBody);
    return true;
  } catch (error) {
    console.log(error);
    alert('Sorry I could not copy text to clipboard, check console for error details.');
    return false;
  }
};

/**
 * @function downloadFile
 * @summary Download a file with date and json extension
 * @param {*} fileData Text data to save in a file
 * @param {string} fileName
 */
const downloadFile = function downloadFile(fileData, fileName) {
  const d = new Date();
  const dateName = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}-${d.getHours()}-${d.getMinutes()}`;
  const dataStr = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(fileData, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', fileName + '-' + dateName + '.json');
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

export {
  copyTextToClipBoard,
  downloadFile
};
