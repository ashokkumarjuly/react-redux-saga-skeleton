/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'app.components.Footer.license.message',
    defaultMessage: 'copyright@2017',
  },
  authorMessage: {
    id: 'app.components.Footer.author.message',
    defaultMessage: `
      Powered By {author}.
    `,
  },
});
