import "playground-elements/playground-preview";
import "playground-elements/playground-project";
import "playground-elements/playground-tab-bar";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import screenfull from "screenfull";

import { GoogleMapsSample } from "./google-maps-sample";

declare global {
  interface HTMLElementTagNameMap {
    "google-maps-sample-tooblar": GoogleMapsSampleToolbar;
  }
}

@customElement("google-maps-sample-toolbar")
export class GoogleMapsSampleToolbar extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  @property()
  name: string = "";

  @property()
  isFullscreen = false;

  render() {
    return html`
      <div class="flex gap-2 justify-end px-2">
        <a
          target="_blank"
          href="https://github.com/googlemaps/js-samples/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=sample_bug.yml&title=${encodeURIComponent(
            `Bug: ${this.name}`
          )}"
          title="Report issue"
          ><span class="material-icons">bug_report</span></a
        >
        <button
            @click=${this.toggleHideCode}
            title="Toggle Code Visibility"
            aria-label="Toggle Code Visibility"
        >
          <span class="material-icons">code</span></a
        >       
        </button>

        <button
          id="toggle-fullscreen"
          @click=${this.toggleFullscreen}
          title="Toggle Fullscreen"
          aria-label="Toggle Fullscreen"
        >
          <span class="material-icons"
            >${
              this.isFullscreen === true ? "fullscreen_exit" : "fullscreen"
            }</span
          >
        </button>
      </div>
    `;
  }

  private get playground(): GoogleMapsSample {
    return document.getElementsByTagName(
      "google-maps-sample"
    )[0] as GoogleMapsSample;
  }

  private toggleFullscreen() {
    if (screenfull.isEnabled) {
      const playground = this.playground;
      screenfull.toggle(playground);
    }
  }

  private toggleHideCode() {
    const playground = this.playground;
    playground.hideCode = !playground.hideCode;
    playground.requestUpdate();
  }

  protected firstUpdated(): void {
    if (screenfull.isEnabled) {
      screenfull.onchange(() => {
        this.isFullscreen = screenfull.isFullscreen;
        this.playground.isFullscreen = screenfull.isFullscreen;
        this.requestUpdate();
        this.playground.requestUpdate();
      });
    }
  }
}
