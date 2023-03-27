const htmlToWord = async (html: string, fileName?: string) => {
  const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>${
    fileName || 'Export'
  }</title></head><body>`;
  const postHtml = '</body></html>';
  const doc = preHtml + html + postHtml;

  const blob = new Blob(['\ufeff', doc], {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });

  return blob;
};

export default htmlToWord;
