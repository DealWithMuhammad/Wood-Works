import { visionTool } from '@sanity/vision';
import { StudioNavbar } from '../src/components/StudioNavbar'
import { Config } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { msTheme } from '../src/theme';
import {defineConfig} from 'sanity'

export default defineConfig ({
  name: 'default',
  title: 'Furniture',

  projectId: '1nffi0j5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: msTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
