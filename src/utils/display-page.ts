import Block from '../modules/block';

export function displayPage(rootQuery: string, page: Block) {
  const root = document.querySelector(rootQuery);
  const pageContent = page.getContent();
  if (root && pageContent) {
    root.appendChild(pageContent);
  }
}
