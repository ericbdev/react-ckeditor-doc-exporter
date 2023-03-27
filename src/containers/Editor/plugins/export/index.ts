import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ExportDropdown from './views/ExportDropdown';
import { definitions, l18n } from './constants';
import { ExportToolbarConfig } from './types';

class Export extends Plugin {
  private _config: ExportToolbarConfig;
  static get requires() {
    return [ExportDropdown];
  }
  static get pluginName() {
    return l18n.toolbar.title;
  }

  constructor(editor) {
    super(editor);

    const config: ExportToolbarConfig = {
      isEnabled: false,
    };

    editor.config.define(definitions.toolbar, config);

    this._config = editor.config.get(definitions.toolbar) || {};
  }
}

export default Export;
