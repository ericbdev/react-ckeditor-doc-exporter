import createTag from './createTag';
import { namespaces } from './constants';

const documentProps = [
  {
    attr: 'xmlns:mc ',
    value: namespaces.ve,
  },
  { attr: 'xmlns:o ', value: namespaces.o },
  {
    attr: 'xmlns:r ',
    value: namespaces.r,
  },
  {
    attr: 'xmlns:m ',
    value: namespaces.math,
  },
  { attr: 'xmlns:v ', value: namespaces.v },
  {
    attr: 'xmlns:wp ',
    value: namespaces.wp,
  },
  { attr: 'xmlns:w10 ', value: namespaces.w10 },
  {
    attr: 'xmlns:w ',
    value: namespaces.w,
  },
  {
    attr: 'xmlns:wne ',
    value: namespaces.wne,
  },
  {
    attr: 'xmlns:sl ',
    value: namespaces.sl,
  },
  {
    attr: 'xmlns:a ',
    value: namespaces.a,
  },
  {
    attr: 'xmlns:pic ',
    value: namespaces.pic,
  },
  {
    attr: 'xmlns:c ',
    value: namespaces.chart,
  },
  //{
  //  attr: 'xmlns:cdr ',
  //  value: namespaces.cdr,
  //},
  {
    attr: 'xmlns:lc ',
    value: namespaces.lc,
  },
  {
    attr: 'xmlns:dgm ',
    value: namespaces.dgm,
  },
  {
    attr: 'xmlns:wps ',
    value: namespaces.wps,
  },
  {
    attr: 'xmlns:wpg ',
    value: namespaces.wpg,
  },
  {
    attr: 'xmlns:w14 ',
    value: namespaces.w14,
  },
  {
    attr: 'xmlns:w15 ',
    value: namespaces.w15,
  },
];

const createDocument = (children: string) => {
  return createTag({
    xmlPrefix: true,
    tag: 'w:document',
    props: documentProps,
    children: [`<w:body>${children}</w:body>`],
  });
};

export default createDocument;
