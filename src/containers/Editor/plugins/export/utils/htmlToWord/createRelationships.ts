import createTag from './createTag';

const createRelationships = () => {
  const relationshipTag = createTag({
    tag: 'Relationships',
    xmlPrefix: true,
    props: [
      {
        attr: 'xmlns',
        value: 'http://schemas.openxmlformats.org/package/2006/relationships',
      },
    ],
    children: [
      createTag({
        tag: 'Relationship',
        props: [
          {
            attr: 'Id',
            value: 'rId1',
          },
          {
            attr: 'Type',
            value:
              'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
          },
          {
            attr: 'Target',
            value: 'word/document.xml',
          },
        ],
      }),
    ],
  });

  return relationshipTag;
};

export default createRelationships;
