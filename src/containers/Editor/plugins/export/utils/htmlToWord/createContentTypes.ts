import createTag from './createTag';

const createContentTypes = () => {
  const contentTag = createTag({
    xmlPrefix: true,
    tag: 'Types',
    props: [
      {
        attr: 'xmlns',
        value: 'http://schemas.openxmlformats.org/package/2006/content-types',
      },
    ],
    children: [
      createTag({
        tag: 'Default',
        props: [
          {
            attr: 'Extension',
            value: 'rels',
          },
          {
            attr: 'ContentType',
            value: 'application/vnd.openxmlformats-package.relationships+xml',
          },
        ],
      }),

      createTag({
        tag: 'Default',
        props: [
          {
            attr: 'Extension',
            value: 'xml',
          },
          {
            attr: 'ContentType',
            value: 'application/xml',
          },
        ],
      }),
      createTag({
        tag: 'Override',
        props: [
          {
            attr: 'PartName',
            value: '/word/document.xml',
          },
          {
            attr: 'ContentType',
            value:
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml',
          },
        ],
      }),
    ],
  });

  return contentTag;
};

export default createContentTypes;
