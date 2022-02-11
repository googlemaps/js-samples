import "playground-elements";
import { Terminal } from "xterm";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";

declare global {
  interface HTMLElementTagNameMap {
    "playground-console": PlaygroundConsole;
  }
}

@customElement("playground-console")
export class PlaygroundConsole extends LitElement {
  private terminalRef = createRef<HTMLElement>();
  private terminal: Terminal = new Terminal();

  connectedCallback(): void {
    super.connectedCallback();
  }

  // Render the UI as a function of component state
  render() {
    return html`<div><div id="terminal" ${ref(this.terminalRef)}></div></div>`;
  }

  protected firstUpdated(): void {
    console.log(this.terminalRef.value);
    this.terminal.open(this.terminalRef.value!);
    this.terminal.write("Welcome to the playground console");

    this.captureConsole();

    console.warn("foo");
  }

  private captureConsole(): void {
    const terminal = this.terminal;
    function fake(cb) {
      return (...args) => {
        terminal.writeln(args.join(" "));
        cb(...args);
      };
    }
    ["log", "info", "warn", "error"].forEach((k) => {
      console.log(k);
      console[k] = fake(console[k].bind(console));
    });

    window.onerror = function (error, url, line) {
      terminal.writeln(
        JSON.stringify({
          type: "exception",
          value: { error, url, line },
        })
      );
      return false;
    };

    window.onunhandledrejection = function (e) {
      terminal.writeln(
        JSON.stringify({
          type: "promiseRejection",
          value: e.reason,
        })
      );
    };

    window.addEventListener("unhandledrejection", function (e) {
        console.log(e);
      terminal.writeln(`Unhandled promise rejection: ${e.reason}`);
    });
  }
}

export const ANSI_COLOR = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[36m",
};

function format(param = "") {
  if (typeof param === "object") {
    try {
      return JSON.stringify(param);
    } catch (error) {
      console.error(error);
    }
  }
  return param;
}

function getMessage(...args) {
  const [first, second] = args;
  const notEmpty = (value) => Boolean(String(value));

  return [first, format(second)].filter(notEmpty).join(" ‣ ");
}
