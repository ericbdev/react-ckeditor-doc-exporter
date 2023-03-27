import htmlToWord from './htmlToWord';
import download from 'downloadjs';

const exportDocx = async (data) => {
  const docx = await htmlToWord(data);
  const mimeType =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  download(docx, `download.docx`, mimeType);
};

export default exportDocx;
