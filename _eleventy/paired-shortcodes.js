const { html } = require('common-tags');

module.exports = {
  Flex: function (children, opts) {
    const {
      direction = "row",
      justify = "start",
      align = "start",
      wrap = "wrap",
    } = opts;

    return html`
      <div class="flex flex-${direction} flex-${wrap} items-${align} justify-${justify}">
        ${children}
      </div>
    `;
  }
}