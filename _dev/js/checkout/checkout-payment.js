// eslint-disable-next-line camelcase
const ps_checkout_paypal = $('[data-module-name^="ps_checkout-paypal"]');
// eslint-disable-next-line camelcase
if (ps_checkout_paypal !== null && ps_checkout_paypal.prop('checked')) {
  // eslint-disable-next-line camelcase
  ps_checkout_paypal.one('click', () => {
    // eslint-disable-next-line camelcase
    ps_checkout_paypal.prop('checked', false);
  });
}
