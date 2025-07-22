# frontend-slot-footer

🛑🛑🛑 
This Component is deprecated and is no longer how you should be mananing customizations 
to your footer.  The default `frontend-component-footer` now provides slots that can be
overridden for making modifications.

See more details about that here: https://github.com/openedx/frontend-component-footer/tree/master/src/plugin-slots

See the relevant DEPR ticket for more info here: https://github.com/openedx/frontend-component-footer/issues/459
🛑🛑🛑 

This package provides a wrapped version of the lms and studio footer using [Frontend Plugin Framework](https://github.com/openedx/frontend-plugin-framework).

- ### LMS Footer Slot ID: `footer_slot`
- ### Studio Footer Slot ID: `studio_footer_slot`

## Description

The slots are used to replace/modify/hide the footer.

## Example

The following `env.config.jsx` will replace the default footer.

LMS:

![Screenshot of Default LMS Footer](./docs/images/default_footer.png)

Studio:

![Screenshot of Default Studio Footer](./docs/images/default_studio_footer.png)
with a simple custom footer

![Screenshot of Custom Footer](./docs/images/custom_footer.png)

```js
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    // For authoring MFE, replace footer_slot with studio_footer_slot
    footer_slot: {
      plugins: [
        {
          // Hide the default footer
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        {
          // Insert a custom footer
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_footer',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🦶</h1>
            ),
          },
        },
      ]
    }
  },
}

export default config;
```
