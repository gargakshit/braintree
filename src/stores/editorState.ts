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
import prettier from "prettier/standalone";
import prettierMarkdown from "prettier/parser-markdown";

import { readFile, writeFile } from "../utils/path";

class EditorState {
  @observable
  currentFile: string | null = null;

  @observable
  currentMarkdown: string = "";

  @observable
  currentHtml: string = "";

  @action
  updateMarkdown(markdown: string) {
    this.currentMarkdown = markdown;
    this.debounceAndSave();

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

  @action
  prettifyMarkdown() {
    this.currentMarkdown = prettier.format(this.currentMarkdown, {
      parser: "markdown",
      plugins: [prettierMarkdown],
    });

    this.debounceAndSave();
  }

  @action
  debounceAndSave() {
    setTimeout(() => {
      this.save();
    }, 500);
  }

  @action
  async save() {
    if (this.currentFile !== null) {
      await writeFile(this.currentFile, this.currentMarkdown);
    } else {
      throw new Error("Error: Writing to a null file");
    }
  }

  @action
  async loadFile(name: string) {
    try {
      this.currentFile = name;
      this.updateMarkdown(await readFile(name));
    } catch (e) {
      console.error(e);
      console.log("Reading from a non-existant file");
    }
  }

  @action
  async createFile(name: string) {
    const fname = `${name}.md`;
    await writeFile(fname, "");
    await this.loadFile(fname);
  }
}

const EditorStateContext = createContext(new EditorState());

export { EditorStateContext };
