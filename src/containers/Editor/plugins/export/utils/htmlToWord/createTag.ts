type Args = {
  tag: string;
  props: { attr: string; value: string }[];
  children?: string[];
  xmlPrefix?: boolean;
};
const xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

const createTag = ({ tag, props, children, xmlPrefix }: Args) => {
  const args = props.map(({ attr, value }) => `${attr}="${value}"`).join(' ');

  const open = [xmlPrefix ? xml : false, `<${tag}`, args]
    .filter(Boolean)
    .join('\n');

  if (children) {
    return `${open}>${children.join('\n')}</${tag}>`;
  } else {
    return `${open} />`;
  }
};

export default createTag;
