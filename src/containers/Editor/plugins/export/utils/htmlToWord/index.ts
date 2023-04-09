import { mimeType } from './constants';
import createContentTypes from './createContentTypes';
import createDocument from './createDocument';
import createRelationships from './createRelationships';

import makeArchive from './makeArchive';

const html2Word = async (data) => {
  const relationships = createRelationships();
  const contentTypes = createContentTypes();

  console.log(data);

  return await makeArchive({
    files: [
      {
        filename: '[Content_Types].xml',
        content: contentTypes,
      },
      {
        filename: '_rels/.rels',
        content: relationships,
      },
      {
        filename: 'word/document.xml',
        content: createDocument(`<w:p>
        <w:r>
          <w:t>Hello world!</w:t>
        </w:r>
      </w:p>`),
      },
    ],
    mimeType,
  });
};

export default html2Word;
