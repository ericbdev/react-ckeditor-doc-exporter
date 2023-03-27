import HTMLtoDOCX from 'html-to-docx';

const example = `<div>
<h1>Test</h1>
<p>paragraph content</p>
</div>

`;

const htmlToWord = async (data) => {
  const res = await HTMLtoDOCX(data);

  return new Blob([res], {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });
};

export default htmlToWord;
