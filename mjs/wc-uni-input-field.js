import { _wcl } from './common-lib.js';
import { _wccss } from './common-css.js';
import {
  colorPalette as _uniColorPalette
} from './uni-css.js';

const defaults = {
  subject: '',
  message: '',
  stat: '', // valid, invalid
  appearance: 'filled', // filled, outlined
  size: 'medium' // large, medium, small
};

const booleanAttrs = [];
const objectAttrs = [];
const custumEvents = {};

const template = document.createElement('template');
template.innerHTML = `
<style>
${_wccss}
${_uniColorPalette}

:host{position:relative;display:block;}

/* force hide counter */
:host([data-hide-counter]) {
  .main .main__info__counter {
    --counter-display: none;
  }
}

:host([hidden]) {
  display: none;
}

/* state */
:host([stat=valid]) {
  .main {
    --border-color: var(--border-color-valid);
    --message-color: var(--message-color-valid);
  }
}

:host([stat=invalid]) {
  .main {
    --text-color: var(--text-color-invalid);
    --border-color: var(--border-color-invalid);
    --message-color: var(--message-color-invalid);
  }
}

/* appearance */
:host([appearance=outlined]) {
  .main {
    --border-color: var(--border-color-outline);
    --background-color: transparent;
  }
}

/* size */
:host([size=large]) {
  .main {
    --border-radius: var(--large-border-radius);
    --padding-inline: var(--large-padding-inline);
    --block-size: var(--large-block-size);
  }
}

:host([size=medium]) {
  .main {
    --border-radius: var(--medium-border-radius);
    --padding-inline: var(--medium-padding-inline);
    --block-size: var(--medium-block-size);
  }
}

:host([size=small]) {
  .main {
    --border-radius: var(--small-border-radius);
    --padding-inline: var(--small-padding-inline);
    --block-size: var(--small-block-size);
  }
}

:host {
  &:has([slot="input"][required]) {
    .main__subject__span::after {
      content: '*';
      color: var(--ct_icon_moderate_strong);
      margin-inline-start: 4px;
    }
  }

  &:has([slot="input"][maxlength]) {
    .main {
      --counter-display: block;
    }
  }

  &:has([slot="input"][readonly]) {
    .main {
      --background-color: transparent;
      --border-color: var(--border-color-readonly);
    }
  }

  &:has([slot="input"][disabled],[slot="input"][inert]) {
    .main {
      --text-color: var(--text-color-disabled);
    }

    slot[name="input"] {
      interactivity: inert;
    }
  }

  @container style(--interactivity: inert) {
    .main {
      --text-color: var(--text-color-disabled);
    }

    slot[name="input"] {
      interactivity: inert;
    }
  }
}

.main {
  --border-color-normal: var(--uni-input-field-border-color-normal, transparent);
  --border-color-readonly: var(--uni-input-field-border-color-readonly, var(--ct_input-general_main_stroke_default));
  --border-color-disabled: var(--uni-input-field-border-color-disabled, var(--ct_input-general_dim_container_default));
  --border-color-valid: var(--uni-input-field-border-color-valid, var(--ct_text_success_general));
  --border-color-invalid: var(--uni-input-field-border-color-invalid, var(--ct_text_danger_general));
  --border-color-outline: var(--uni-input-field-border-color-outline, var(--ct_input-general_main_stroke_default));
  --border-color: var(--border-color-normal);

  --background-color-normal: var(--uni-input-field-background-color-normal, var(--ct_input-general_dim_container_default));
  --background-color-readonly: var(--uni-input-field-background-color-readonly, var(--ct_input-general_dim_container_default));
  --background-color-disabled: var(--uni-input-field-background-color-disabled, var(--ct_input-general_dim_container_default));
  --background-color: var(--background-color-normal);

  --placeholder-color-normal: var(--uni-input-field-placeholder-color-normal, var(--ct_text_main_subtlest));
  --placeholder-color-readonly: var(--uni-input-field-placeholder-color-readonly, var(--ct_text_main_subtlest));
  --placeholder-color-disabled: var(--uni-input-field-placeholder-color-disabled, var(--ct_text_main_subtlest));
  --placeholder-color: var(--placeholder-color-normal);

  --text-color-normal: var(--uni-input-field-text-color-normal, var(--ct_text_main_general));
  --text-color-readonly: var(--uni-input-field-text-color-readonly, var(--ct_text_main_general));
  --text-color-disabled: var(--uni-input-field-text-color-disabled, var(--ct_text_main_pale));
  --text-color-invalid: var(--uni-input-field-text-color-invalid, var(--ct_text_danger_general));
  --text-color: var(--text-color-normal);

  --message-color-normal: var(--uni-input-field-message-color-normal, var(--ct_text_main_subtle));
  --message-color-valid: var(--uni-input-field-message-color-valid, var(--ct_text_success_general));
  --message-color-invalid: var(--uni-input-field-message-color-invalid, var(--ct_text_danger_general));
  --message-color: var(--message-color-normal);

  --subject-color: var(--uni-input-field-subject-color, var(--ct_text_main_subtle));
  --counter-color: var(--uni-input-field-counter-color, var(--ct_text_main_subtle));
  --caret-color: var(--uni-input-field-caret-color, var(--ct_input-caret_main_general));

  /* size */
  --large-border-radius: 24px;
  --large-padding-inline: 16px 12px;
  --large-block-size: 56px;
  --medium-border-radius: 44px;
  --medium-padding-inline: 12px;
  --medium-block-size: 44px;
  --small-border-radius: 32px;
  --small-padding-inline: 12px 4px;
  --small-block-size: 32px;

  --border-radius: var(--medium-border-radius);
  --padding-inline: var(--medium-padding-inline);
  --block-size: var(--medium-block-size);

  --counter-display: none;

  inline-size: 100%;

  .main__subject {
    padding-block-end: 4px;
    display: flex;
    align-items: center;
    gap: 4px;

    &:has(.main__subject__span:empty) {
      display: none;
    }

    .main__subject__span {
      font-size: 12px;
      color: var(--subject-color);
      line-height: 1.667;
    }

    em {
      inline-size: 15px;
      block-size: 15px;
      clip-path: path('M7.1,0C3.2,0,0,3.2,0,7.1s3.2,7.1,7.1,7.1,7.1-3.2,7.1-7.1S11.1,0,7.1,0ZM7.1,12.7c-3.1,0-5.6-2.5-5.6-5.5S4.1,1.6,7.1,1.6s5.5,2.5,5.5,5.6-2.5,5.5-5.5,5.5h0ZM7.9,6.3h-1.6v4.7h1.6v-4.7ZM7.9,3.6h-1.6v1.5h1.6v-1.5Z');
      background-color: var(--subject-color);
      display: block;
    }
  }

  .main__info {
    --justify-content: space-between;

    padding: 4px 8px;
    box-sizing: border-box;
    display: flex;
    gap: 16px;
    justify-content: var(--justify-content);
    align-items: center;

    &:has(.main__info__message:empty) {
      --justify-content: flex-end;
    }

    .main__info__message {
      font-size: 11px;
      color: var(--message-color);
      line-height: 1.3;

      &:empty {
        display: none;
      }
    }

    .main__info__counter {
      flex-shrink: 0;
      font-size: 12px;
      color: var(--counter-color);
      display: var(--counter-display);
      
      &::after {
        content: ' / ' attr(data-maxlength);
      }
    }
  }

  slot[name=input] {
    inline-size: 100%;
    display: block
  }

  /* input */
  ::slotted(input) {
    --display: inline-flex;

    outline: 0 none;
    resize: none;
    appearance: none;
    box-shadow: none;

    display: var(--display);
    align-items: center;

    font-size: 16px;
    line-height: 1.4;
    color: var(--text-color);
    inline-size: 100% !important;
    block-size: var(--block-size);
    box-sizing: border-box;
    padding-inline: var(--padding-inline) !important;
    text-overflow: ellipsis;
    border: 1px solid var(--border-color);
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    caret-color: var(--caret-color);

    &::placeholder {
      color: var(--placeholder-color);
    }
  }

  ::slotted(input:is([type=date],[type=month],[type=time],[type=week],[type=datetime-local])) {
    --display: block;
  }
}
</style>

<div class="main" ontouchstart="" tabindex="0">
  <p class="main__subject">
    <em part="icon-subject"></em>
    <span class="main__subject__span"></span>
  </p>
  <slot name="input"></slot>
  <div class="main__info">
    <p class="main__info__message"></p>
    <p class="main__info__counter" data-maxlength="?">0</p>
  </div>
</div>
`;

export class UniInputField extends HTMLElement {
  #data;
  #nodes;
  #config;

  constructor(config) {
    super();

    // template
    this.attachShadow({ mode: 'open', delegatesFocus: true });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // data
    this.#data = {
      controller: ''
    };

    // nodes
    this.#nodes = {
      styleSheet: this.shadowRoot.querySelector('style'),
      input: this.querySelector('[slot=input]'),
      subject: this.shadowRoot.querySelector('.main__subject__span'),
      message: this.shadowRoot.querySelector('.main__info__message'),
      counter: this.shadowRoot.querySelector('.main__info__counter'),
    };

    // config
    this.#config = {
      ...defaults,
      ...config // new UniInputField(config)
    };

    // evts
    this._onInput = this._onInput.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
  }

  async connectedCallback() {
    const { config, error } = await _wcl.getWCConfig(this);
    const { input } = this.#nodes;

    if (error) {
      console.warn(`${_wcl.classToTagName(this.constructor.name)}: ${error}`);
      this.remove();
      return;
    } else {
      this.#config = {
        ...this.#config,
        ...config
      };
    }

    // upgradeProperty
    Object.keys(defaults).forEach((key) => this.#upgradeProperty(key));

    // evts
    this.#data.controller = new AbortController();
    const signal = this.#data.controller.signal;
    input.addEventListener('input', this._onInput, { signal });
    input.addEventListener('keydown', this._onKeydown, { signal });

    // init
    this._onInput();
  }

  disconnectedCallback() {
    if (this.#data?.controller) {
      this.#data.controller.abort();
    }
  }

  #format(attrName, oldValue, newValue) {
    const hasValue = newValue !== null;

    if (!hasValue) {
      if (booleanAttrs.includes(attrName)) {
        this.#config[attrName] = false;
      } else {
        this.#config[attrName] = defaults[attrName];
      }
    } else {
      switch (attrName) {
        case 'subject':
        case 'message': {
          this.#config[attrName] = newValue;
          break;
        }

        case 'stat': {
          this.#config[attrName] = ['', 'valid', 'invalid'].includes(newValue) ? newValue : defaults.state;
          break;
        }

        case 'appearance': {
          this.#config[attrName] = ['filled', 'outlined'].includes(newValue) ? newValue : defaults.appearance;
          break;
        }

        case 'size': {
          this.#config[attrName] = ['large', 'medium', 'small'].includes(newValue) ? newValue : defaults.size;
          break;
        }
      }
    }
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (!UniInputField.observedAttributes.includes(attrName)) {
      return;
    }

    this.#format(attrName, oldValue, newValue);

    switch (attrName) {
      case 'subject': {
        this.#nodes.subject.textContent = this.subject;
        break;
      }

      case 'message': {
        this.#nodes.message.textContent = this.message;
        break;
      }
    }
  }

  static get observedAttributes() {
    return Object.keys(defaults); // UniInputField.observedAttributes
  }

  static get supportedEvents() {
    return Object.keys(custumEvents).map(
      (key) => {
        return custumEvents[key];
      }
    );
  }

  #upgradeProperty(prop) {
    let value;

    if (UniInputField.observedAttributes.includes(prop)) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        value = this[prop];
        delete this[prop];
      } else {
        if (booleanAttrs.includes(prop)) {
          value = (this.hasAttribute(prop) || this.#config[prop]) ? true : false;
        } else if (objectAttrs.includes(prop)) {
          value = this.hasAttribute(prop) ? this.getAttribute(prop) : JSON.stringify(this.#config[prop]);
        } else {
          value = this.hasAttribute(prop) ? this.getAttribute(prop) : this.#config[prop];
        }
      }

      this[prop] = value;
    }
  }

  set subject(value) {
    if (value) {
      this.setAttribute('subject', value);
    } else {
      this.removeAttribute('subject');
    }
  }

  get subject() {
    return this.#config.subject;
  }

  set message(value) {
    if (value) {
      this.setAttribute('message', value);
    } else {
      this.removeAttribute('message');
    }
  }

  get message() {
    return this.#config.message;
  }

  set stat(value) {
    if (value) {
      this.setAttribute('stat', value);
    } else {
      this.removeAttribute('stat');
    }
  }

  get stat() {
    return this.#config.stat;
  }

  set appearance(value) {
    if (value) {
      this.setAttribute('appearance', value);
    } else {
      this.removeAttribute('appearance');
    }
  }

  get appearance() {
    return this.#config.appearance;
  }

  set size(value) {
    if (value) {
      this.setAttribute('size', value);
    } else {
      this.removeAttribute('size');
    }
  }

  get size() {
    return this.#config.size;
  }

  _onInput(evt) {
    const { input, counter } = this.#nodes;

    counter.dataset.maxlength = input.maxLength;
    counter.textContent = input.value.length;

    if (evt && this.stat === 'invalid') {
      this.stat = '';
    }
  }

  _onKeydown(evt) {
    const { key, isComposing } = evt;

    if (key === 'Enter' && isComposing) {
      event.preventDefault();
    }
  }

  refresh() {
    this.hidden = true;
    this.offsetHeight;
    this.hidden = false;
  }
}

// define web component
const S = _wcl.supports();
const T = _wcl.classToTagName('UniInputField');
if (S.customElements && S.shadowDOM && S.template && !window.customElements.get(T)) {
  window.customElements.define(_wcl.classToTagName('UniInputField'), UniInputField);
}