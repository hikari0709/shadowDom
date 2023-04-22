import '../scss/style.scss';

const div = document.getElementById('shadow');
const shadowRoot = div.attachShadow({ mode: 'open' });

const p = document.createElement('p');
p.textContent = 'リード文2のテキストが入ります。';

shadowRoot.appendChild(p);

customElements.define(
  'original-div',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
      <style>p { color: green;}</style>
      <div>
        <slot name="heading"><h1>h1テキストが入る</h1></slot>
        <slot name="paragraph"><p>ここにリード文が入ります</p></slot>
        <slot name="list">
          <ul>
            <li>list-item01</li>
            <li>list-item02</li>
          </ul>
        </slot>
        <p>リード文3のテキストが入ります。</p>
      </div>
  `;
    }
  }
);
