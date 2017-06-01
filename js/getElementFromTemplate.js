export default function getElementFromTemplate(template) {
  const container = document.createElement(`template`);
  container.innerHTML = template;

  return container.content;
}
