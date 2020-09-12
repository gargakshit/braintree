import { createContext } from "react";
import { action, observable } from "mobx";
import unified from "unified";
import remark from "remark-parse";
import remarkLinks from "remark-external-links";
import remarkMath from "remark-math";
import remark2rehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypePrism from "@mapbox/rehype-prism";
import stringify from "rehype-stringify";

class EditorState {
  @observable
  currentFile: string | null = null;

  @observable
  currentMarkdown: string = "";

  @observable
  currentHtml: string = "";

  @action
  updateMarkdown(markdown: string): void {
    this.currentMarkdown = markdown;

    unified()
      .use(remark)
      .use(remarkLinks)
      .use(remarkMath)
      .use(remark2rehype)
      .use(rehypeKatex)
      .use(rehypePrism)
      .use(stringify)
      .process(markdown, (err, html) => {
        if (!err) {
          this.currentHtml = String(html);
        }
      });
  }
}

const EditorStateContext = createContext(new EditorState());

export { EditorStateContext };
