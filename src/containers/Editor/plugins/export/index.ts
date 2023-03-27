import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ExportDropdown from './views/ExportDropdown';
import { definitions, l18n } from './constants';
import { DriveToolbarConfig } from './types';
import GoogleClient from './utils/google';

class Drive extends Plugin {
  static get requires() {
    return [ExportDropdown];
  }
  static get pluginName() {
    return l18n.toolbar.title;
  }

  constructor(editor) {
    super(editor);

    new GoogleClient();

    const config: DriveToolbarConfig = {
      accessToken: '',
      isEnabled: false,
      onGoogleAuthorize: () => void 0,
      onGoogleRevoke: () => void 0,
      onGoogleExport: () => void 0,
    };

    editor.config.define(definitions.toolbar, config);

    this._config = editor.config.get(definitions.toolbar) || {};
  }
}

export default Drive;
