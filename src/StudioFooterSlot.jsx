import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { StudioFooter } from '@edx/frontend-component-footer';

const StudioFooterSlot = () => (
  <PluginSlot id="studio_footer_slot">
    <StudioFooter />
  </PluginSlot>
);

export default StudioFooterSlot;
