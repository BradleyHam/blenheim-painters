// lib/markdown.ts
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';           // NEW ✨

export async function mdToHtml(md: string) {
  return (
    await remark()
      .use(gfm)                         // enable tables, strikethrough, task‑lists
      .use(html)
      .process(md)
  ).toString();
}