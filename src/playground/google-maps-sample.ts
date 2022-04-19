import "playground-elements/playground-preview";
import "playground-elements/playground-project";
import "playground-elements/playground-file-editor";
import "playground-elements/playground-tab-bar";

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
  connectedCallback(): void {
    super.connectedCallback();
  }

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      --border: 1px solid #dadce0;
      --border-radius: 8px;
    }

    playground-preview::part(preview-toolbar) {
      display: none;
    }

    #code {
      border: var(--border);
      border-radius: var(--border-radius);
      height: fit-content;
    }

    #editor {
      -webkit-font-smoothing: antialiased;
      overflow: auto
      height: auto !important;
    }

    #toolbar {
      justify-content: end;
      gap: 8px;
      padding-right: 8px;
    }

    #toolbar a, #toolbar button {
      color: rgb(95, 99, 104);
    }

    #toolbar button {
        background: none!important;
        border: none;
        padding: 0!important;
        cursor: pointer;
    }

    playground-file-editor {
      height: fit-content !important;
    }

    playground-tab-bar {
      border-bottom: var(--border)
    }

    #playground {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans KR",
        "Noto Naskh Arabic", "Noto Sans Thai", "Noto Sans Hebrew",
        "Noto Sans Bengali", sans-serif;
      
      --border-radius: 8px;
      --border: 1px solid #dadce0;
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

    mwc-button {
      --mdc-theme-primary: #1a73e8;
      --mdc-theme-on-primary: white;
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

  // Render the UI as a function of component state
  render() {
    const projectId = "project";
    const editorId = "editor";
    const codeStyles = {
      display: this.hideCode ? "none" : "block",
    };

    const toolbarStyles = {
      display: this.showToolbar ? "flex" : "none",
    };

    return html`
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <div id="playground">
      <playground-project
        id=${projectId}
        .sandboxBaseUrl=https://unpkg.com/playground-elements@${npmVersion}/
        .sandboxScope=__playground_swfs_${serviceWorkerHash}/
        .projectSrc=${this.projectSrc}
      >
        <slot></slot>
      </playground-project>
      <playground-preview
        style=${styleMap({ height: this.previewHeight })}
        part="preview"        
        html-file="index.html"
        .project=${projectId}
      >
      </playground-preview>
      <div id="toolbar" style=${styleMap(toolbarStyles)}>
        <a target="_blank" href="https://github.com/googlemaps/js-samples/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=sample_bug.yml&title=${encodeURIComponent(
          `Bug: ${this.name}`
        )}" title="Report issue"><span class="material-icons">bug_report</span></a>
        <a target="_blank" href="https://github.com/googlemaps/js-samples/tree/main/samples/${
          this.name
        }" title="View source on GitHub"><span class="material-icons">code</span></a>
      </div>
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
