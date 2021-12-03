import Block from '../modules/block';

export function displayPage(page: Block) {
  const root = document.querySelector('#root');
  const pageContent = page.getContent();
  if (root && pageContent) {
    root.appendChild(pageContent);
  }
}
