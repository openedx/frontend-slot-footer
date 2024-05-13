import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import Footer from '@edx/frontend-component-footer';

const FooterSlot = () => (
  <PluginSlot id="footer_slot">
    <Footer />
  </PluginSlot>
);

export default FooterSlot;
