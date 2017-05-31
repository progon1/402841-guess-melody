export default function getElementFromTemplate(str) {
  const startTag = str.indexOf(`<`);
  const endTag = str.indexOf(`>`);
  const fullTag = str.slice(startTag + 1, endTag);
  const tagName = fullTag.slice(0, fullTag.indexOf(` `));
  const tagClass = fullTag.slice(fullTag.indexOf(`"`) + 1, fullTag.lastIndexOf(`"`));
  const tag = document.createElement(tagName);
  tag.className = tagClass;
  const startContent = endTag + 1;
  const endContent = str.lastIndexOf `<`;
  const content = str.slice(startContent, endContent);
  tag.innerHTML = content;

  return tag;
}
