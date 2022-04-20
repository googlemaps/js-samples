import "playground-elements/playground-preview";
import "playground-elements/playground-project";
import "playground-elements/playground-tab-bar";
import "playground-elements/playground-file-editor";
import "./google-maps-sample-toolbar";
import clsx from "clsx";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import {
  npmVersion,
  serviceWorkerHash,
} from "playground-elements/shared/version.js";
import { ResizeData } from "./shared";

declare global {
  interface HTMLElementTagNameMap {
    "google-maps-sample": GoogleMapsSample;
  }
}

@customElement("google-maps-sample")
export class GoogleMapsSample extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      --border: 1px solid #dadce0;
      --border-radius: 8px;
      --playground-bar-height: 46px;
      --playground-code-background: #f1f3f4;
      --playground-code-builtin-color: #37474f;
      --playground-code-callee-color: #9436e6;
      --playground-code-comment-color: #b80672;
      --playground-code-def-color: #473333;
      --playground-code-default-color: #37474f;
      --playground-code-font-family: Roboto Mono, monospace;
      --playground-code-keyword-color: #1967d2;
      --playground-code-number-color: #c5221f;
      --playground-code-padding: 24px;
      --playground-code-property-color: #37474f;
      --playground-code-selection-background: #add2fa;
      --playground-code-string-2-color: #188038;
      --playground-code-string-color: #188038;
      --playground-code-tag-color: #1967d2;
      --playground-code-type-color: #9436e6;
      --playground-code-variable-2-color: #37474f;
      --playground-code-variable-3-color: #37474f;
      --playground-code-variable-color: #37474f;
      --playground-highlight-color: #1a73e8;
      --playground-tab-bar-background: rgba(0, 0, 0, 0);
      --playground-tab-bar-foreground-color: rgb(95, 99, 104);
    }

    playground-preview::part(preview-toolbar) {
      display: none;
    }

    #code {
      border: var(--border);
      border-radius: var(--border-radius);
      max-height: calc(100% - var(--playground-bar-height));
      padding-bottom: calc(2 * var(--playground-code-padding));
    }

    playground-tab-bar {
      border-bottom: var(--border);
    }

    #playground {
      max-height: 100vh;
      background-color: #fff;
      font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans KR",
        "Noto Naskh Arabic", "Noto Sans Thai", "Noto Sans Hebrew",
        "Noto Sans Bengali", sans-serif;
    }
    a,
    button {
      color: rgb(95, 99, 104);
    }

    button {
      background: none !important;
      border: none;
      padding: 0 !important;
      cursor: pointer;
    }
  `;

  // Declare reactive properties
  @property()
  projectSrc?: string = "";

  @property()
  hideCode?: boolean = false;

  @property()
  showToolbar?: boolean = false;

  @property()
  previewHeight?: string = "400px";

  @property()
  name: string = "";

  @property()
  isFullscreen: boolean = false;

  // Render the UI as a function of component state
  render() {
    const project = "project";
    const editorId = "editor";
    const codeStyles = {
      display: this.hideCode ? "none" : "block",
    };

    return html`
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <link href="./playground.css" rel="stylesheet" />
    <div id="playground" class="${clsx(
      "flex flex-col w-full gap-2 lg:p-2",
      { "lg:flex-row-reverse": !this.hideCode },
      { "h-screen fullscreen": this.isFullscreen }
    )}">
      <playground-project
        id=${project}
        .sandboxBaseUrl=https://unpkg.com/playground-elements@${npmVersion}/
        .sandboxScope=__playground_swfs_${serviceWorkerHash}/
        .projectSrc=${this.projectSrc}
      >
      </playground-project>
      <playground-preview
        style=${styleMap({
          height: this.previewHeight,
          "min-height": this.previewHeight,
        })}
        class="${clsx("grow", { "!h-full": this.isFullscreen })}"
        part="preview"        
        html-file="index.html"
        .project=${project}
      >
      </playground-preview>
      <div id="ide" class="${clsx("flex flex-col", {
        "lg:w-2/5": !this.hideCode,
      })}">
        <div id="toolbar" class="${this.showToolbar ? "block" : "hidden"}">
          <google-maps-sample-toolbar name="${this.name}" />
        </div>
        <div id="code" class="h-full" style="${styleMap(codeStyles)}">
          <playground-tab-bar
            part="tab-bar"
            .project=${project}
            .editor=${editorId}
            .editableFileSystem="false"
          >
          </playground-tab-bar>
          <playground-file-editor
            style="height: calc(100% - var(--playground-bar-height));"
            id=${editorId}
            part="editor"
            .project=${project}
            .pragmas="on"
          >
          </playground-file-editor>
        </div>
      </div>
    </div>
    `;
  }

  protected firstUpdated(): void {
    // if this is embedded in an iframe, let the parent know the height as it changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const data: ResizeData = {
          type: "resizeMessage",
          rect: entry.contentRect,
        };
        parent.postMessage(data, "*");
      }
    });
    resizeObserver.observe(this.shadowRoot?.getElementById("playground")!);
  }
}
