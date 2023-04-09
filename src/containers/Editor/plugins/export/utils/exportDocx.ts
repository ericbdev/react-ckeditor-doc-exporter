import download from 'downloadjs';
import htmlToWord from './htmlToWord';

const exportDocx = async (data) => {
  const fileName = `download-${Date.now()}.docx`;
  const docx = await htmlToWord(data);

  download(
    docx,
    fileName,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  );
};

export default exportDocx;
