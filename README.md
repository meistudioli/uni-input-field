# uni-input-field

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/uni-input-field) [![DeepScan grade](https://deepscan.io/api/teams/16372/projects/31952/branches/1037738/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16372&pid=31952&bid=1037738)

&lt;uni-input-field /> is an encapsulated Web Component built upon the foundation of the uniopen design language.

Implementation is straightforward: simply slot a standard input element inside &lt;uni-input-field />. The component instantly applies a user interface that aligns seamlessly with the uniopen design language guidelines. Furthermore, its visual styles can be dynamically adapted via native HTML attributes or JavaScript properties.

The component also exposes comprehensive character count and input length metadata, providing users with a clear and intuitive understanding of predefined character constraints.

![<uni-input-field />](https://blog.lalacube.com/mei/img/preview/uni-input-field.png)

## Basic Usage

&lt;uni-input-field /> is a web component. All we need to do is put the required script into your HTML document. Then follow &lt;uni-input-field />'s html structure and everything will be all set.

- Required Script

  ```html
  <script
    type="module"
    src="https://unpkg.com/uni-input-field/mjs/wc-uni-input-field.js">        
  </script>
  ```

- Structure

  Put &lt;uni-input-field /> into HTML document. It will have different functions and looks with attribute mutation.
  
  ```html
  <uni-input-field subject="Subject" message="Supporting text">
    <input
      slot="input"
      type="text"
      placeholder="placeholder"
      required
      maxlength="30"
    />
  </uni-input-field>
  ```

&lt;uni-input-field /> dynamically adjusts its user interface and core functionality by strictly adhering to the attributes of the encapsulated `input` element. Developers can leverage these capabilities and observe the corresponding behavioral shifts by modifying standard attributes—such as `readonly`, `disabled`, `required`, and `maxlength`—directly on the input element.

```html
<uni-input-field>
  <input
    slot="input"
    type="text"
    readonly
    required
  />
</uni-input-field>
```

## JavaScript Instantiation

&lt;uni-input-field /> could also use JavaScript to create DOM element. Here comes some examples.

```html
<script type="module">
import { UniInputField } from 'https://unpkg.com/uni-input-field/mjs/wc-uni-input-field.js';

const inputTemplate = document.querySelector('.my-input-template');

// use DOM api
const nodeA = document.createElement('uni-input-field');
document.body.appendChild(nodeA);
nodeA.appendChild(inputTemplate.content.cloneNode(true));

// new instance with Class
const nodeB = new UniInputField();
document.body.appendChild(nodeB);
nodeB.appendChild(inputTemplate.content.cloneNode(true));
</script>
```

## Style Customization

Developers could apply styles to decorate &lt;uni-input-field />'s looking.

```html
<style>
uni-input-field {
  --uni-input-field-border-color-normal: transparent;
  --uni-input-field-border-color-readonly: var(--ct_input-general_dim_container_default);
  --uni-input-field-border-color-disabled: var(--ct_input-general_dim_container_default);
  --uni-input-field-border-color-valid: var(--ct_text_success_general);
  --uni-input-field-border-color-invalid: var(--ct_text_danger_general);
  --uni-input-field-border-color-outline: var(--ct_input-general_main_stroke_default);

  --uni-input-field-background-color-normal: var(--ct_input-general_dim_container_default);
  --uni-input-field-background-color-readonly: var(--ct_input-general_dim_container_default);
  --uni-input-field-background-color-disabled: var(--ct_input-general_dim_container_default);

  --uni-input-field-placeholder-color-normal: var(--ct_text_main_subtlest);
  --uni-input-field-placeholder-color-readonly: var(--ct_text_main_subtlest);
  --uni-input-field-placeholder-color-disabled: var(--ct_text_main_subtlest);

  --uni-input-field-text-color-normal: var(--ct_text_main_general);
  --uni-input-field-text-color-readonly: var(--ct_text_main_general);
  --uni-input-field-text-color-disabled: var(--ct_text_main_pale);
  --uni-input-field-text-color-invalid: var(--ct_text_danger_general);

  --uni-input-field-message-color-normal: var(--ct_text_main_subtle);
  --uni-input-field-message-color-valid: var(--ct_text_success_general);
  --uni-input-field-message-color-invalid: var(--ct_text_danger_general);

  --uni-input-field-subject-color: var(--ct_text_main_subtle);
  --uni-input-field-counter-color: var(--ct_text_main_subtle);
  --uni-input-field-caret-color: var(--ct_input-caret_main_general);
}
</style>
```

&lt;uni-input-field /> also leverages the CSS ::part() selector, enabling developers to directly customize and style the icon.

```html
<style>
uni-input-field {
  &::part(icon-subject) {
    ...
  }
}
</style>
```

Alternatively, developers can utilize the `data-hide-counter` data attribute to suppress the character counter.

```html
<uni-input-field data-hide-counter>
  <input
    slot="input"
    type="text"
    placeholder="placeholder"
    required
    maxlength="30"
  />
</uni-input-field>
```

## Attributes

&lt;uni-input-field /> component exposes a curated set of attributes, enabling developers to dynamically adjust the user interface. This provides the flexibility to tailor the component’s appearance to seamlessly adapt to any given context.

- **size**

  The `size` attribute configures the overall dimensions of &lt;uni-input-field />. The component currently supports three standard options: `large`, `medium`, and `small`, defaulting to `medium`.

  ```html
  <uni-input-field
    size="large"
  >
    <input
      slot="input"
      type="text"
    />
  </uni-input-field>
  ```

- **subject**

  The `subject` attribute controls the dynamic rendering of the subject content on &lt;uni-input-field />. By default, it is set to an empty string, meaning no content will be displayed.

  ```html
  <uni-input-field
    subject="Your subject"
  >
    <input
      slot="input"
      type="text"
    />
  </uni-input-field>
  ```

- **message**

  The `message` attribute controls the dynamic rendering of the message content on &lt;uni-input-field />. By default, it is set to an empty string, meaning no content will be displayed.

  ```html
  <uni-input-field
    message="Your message content"
  >
    <input
      slot="input"
      type="text"
    />
  </uni-input-field>
  ```

- **stat**

  Through variations in the `stat` attribute, &lt;uni-input-field /> can dynamically transition between `valid` and `invalid` visual states, providing users with clear feedback on input correctness. By default, it is set to an empty string, which represents the standard, neutral state.

  ```html
  <uni-input-field
    stat="invalid"
  >
    <input
      slot="input"
      type="text"
      required
    />
  </uni-input-field>
  ```

- **appearance**

  Currently, &lt;uni-input-field /> supports two distinct visual variants: `filled` and `outlined`. Developers can utilize the appearance attribute to configure the desired layout, which defaults to `filled`.

  ```html
  <uni-input-field
    appearance="outlined"
  >
    <input
      slot="input"
      type="text"
      required
    />
  </uni-input-field>
  ```

## Properties

| Property Name | Type | Description |
| ----------- | ----------- | ----------- |
| size | String | Getter / Setter size. `size` configures the overall dimensions of &lt;uni-input-field />. The component currently supports three standard options: `large`, `medium`, and `small`, defaulting to `medium`. |
| subject| String | Getter / Setter subject. `subject` controls the dynamic rendering of the subject content on &lt;uni-input-field />. By default, it is set to an empty string, meaning no content will be displayed. |
| message| String | Getter / Setter message. `message` controls the dynamic rendering of the message content on &lt;uni-input-field />. By default, it is set to an empty string, meaning no content will be displayed. |
| stat| String | Getter / Setter stat. `stat` can dynamically transition between `valid` and `invalid` visual states, providing users with clear feedback on input correctness. By default, it is set to an empty string, which represents the standard, neutral state. |
| appearance| String | Getter / Setter appearance. `appearance` supports two distinct visual variants: `filled` and `outlined`. Developers can utilize the appearance attribute to configure the desired layout, which defaults to `filled`. |

## Method
| Mathod Signature | Description |
| ----------- | ----------- |
| refresh() | Force a UI refresh on &lt;uni-input-field />. |

## Reference
- [&lt;uni-input-field /> demo](https://blog.lalacube.com/mei/webComponent_uni-input-field.html)
