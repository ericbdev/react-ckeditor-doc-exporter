import PizZip from 'pizzip';

type Args = {
  filename: string;
  content: string;
};

const makeArchive = async ({
  files,
  mimeType,
}: {
  files: Args[];
  mimeType;
}) => {
  const zip = new PizZip();

  files.forEach(({ filename, content }) => {
    zip.file(filename, content);
  });

  return await zip.generate({ type: 'blob', mimeType });
};

export default makeArchive;
