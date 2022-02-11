import "playground-elements";

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import {
  npmVersion,
  serviceWorkerHash,
} from "playground-elements/shared/version.js";

declare global {
  interface HTMLElementTagNameMap {
    "google-maps-sample": GoogleMapsSample;
  }
}

@customElement("google-maps-sample")
export class GoogleMapsSample extends LitElement {
  connectedCallback(): void {
    super.connectedCallback();
  }

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      --border: 1px solid #dadce0;
      --border-radius: 8px;
    }

    playground-preview {
      min-height: 400px;
    }

    playground-preview::part(preview-toolbar) {
      display: none;
    }

    #code {
      margin: 8px 0;
      border: var(--border);
      border-radius: var(--border-radius);
      height: fit-content;
    }

    #editor {
      overflow: auto
      height: auto !important;
    }
    playground-file-editor {
      height: fit-content !important;
    }

    playground-tab-bar {
      border-bottom: var(--border)
    }

    #playground {
      font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans KR",
        "Noto Naskh Arabic", "Noto Sans Thai", "Noto Sans Hebrew",
        "Noto Sans Bengali", sans-serif;
      
      <!-- playground-elements vars -->
      --playground-code-font-family: Roboto Mono, monospace;
      --playground-code-background: #f1f3f4;
      --playground-code-default-color: #37474f;
      --playground-code-keyword-color: #1967d2;
      --playground-code-number-color: #c5221f;
      --playground-code-def-color: #473333;
      --playground-code-variable-2-color: #000000;
      --playground-code-variable-3-color: #000000;
      --playground-code-type-color: #1967d2;
      --playground-code-comment-color: #b80672;
      --playground-code-string-color: #188038;
      --playground-code-string-2-color: #188038;
      --playground-code-tag-color: #1967d2;
      --playground-highlight-color: #1a73e8;
      --playground-bar-height: 47px;
      --playground-tab-bar-background: rgba(0, 0, 0, 0);
      --playground-tab-bar-foreground-color: rgb(95, 99, 104);

      <!-- custom vars -->
      --border: 1px solid #dadce0;
      --border-radius: 8px;
    }

    mwc-button {
      --mdc-theme-primary: #1a73e8;
      --mdc-theme-on-primary: white;
    }
  `;

  // Declare reactive properties
  @property()
  sample?: string = "add-map";

  // Declare reactive properties
  @property()
  hideCode?: boolean = false;

  // Render the UI as a function of component state
  render() {
    const projectId = "project";
    const editorId = "editor";
    const codeStyles = {
      display: this.hideCode ? "none" : "block",
    };

    return html`
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
    <div id="playground">
      <playground-project
        id=${projectId}
        .sandboxBaseUrl=https://unpkg.com/playground-elements@${npmVersion}/
        .sandboxScope=__playground_swfs_${serviceWorkerHash}/
        .projectSrc=./${this.sample}/playground/playground.ts.json
      >
        <slot></slot>
      </playground-project>
      <playground-preview
        part="preview"        
        html-file="index.html"
        .project=${projectId}
      >
      </playground-preview>
      <div id="code" style=${styleMap(codeStyles)}>          
        <playground-tab-bar
          part="tab-bar"
          .project=${projectId}
          .editor=${editorId}
          .editableFileSystem="false"
        >
        </playground-tab-bar>
        <playground-file-editor
          id=${editorId}
          part="editor"
          .project=${projectId}
          .pragmas="on"
        >
        </playground-file-editor>
      </div> 
      
    </div>
    `;
  }

  protected firstUpdated(): void {
    // if this is embedded in an iframe, let the parent know the height
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        parent.postMessage(entry.contentRect, "*");
      }
    });
    resizeObserver.observe(this.shadowRoot?.getElementById("playground")!);
  }
}
