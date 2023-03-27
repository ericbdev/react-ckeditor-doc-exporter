import htmlToWord from './htmlToWord';

const exportDriveDoc = async ({
  title,
  data,
  accessToken,
}: {
  title?: string;
  data: string;
  accessToken?: string;
}) => {
  const file = await htmlToWord(data);

  const metadata = {
    name: title || 'New CKE file',
    mimeType: 'application/vnd.google-apps.document',
    parents: ['root'],
  };

  const form = new FormData();
  form.append(
    'metadata',
    new Blob([JSON.stringify(metadata)], { type: 'application/json' }),
  );
  form.append('file', file);

  const res = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id',
    {
      method: 'POST',
      headers: new Headers({ Authorization: 'Bearer ' + accessToken }),
      body: form,
    },
  ).then((res) => {
    return res.json();
  });

  return res;
};

export default exportDriveDoc;
