/**
 * Access gate for this invitation.
 * While `locked` is true, guests see a payment-pending screen instead of the
 * invitation. Flip it to `false` and redeploy once the client has paid.
 */
export const access = {
  locked: false,
};
