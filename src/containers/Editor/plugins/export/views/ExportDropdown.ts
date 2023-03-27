import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {
  createDropdown,
  ButtonView,
  ListView,
  ViewCollection,
} from '@ckeditor/ckeditor5-ui';

import { definitions, l18n } from '../constants';
import exportDocx from '../utils/exportDocx';
import GoogleDocView from './GoogleDocView';

export default class ExportDropdown extends Plugin {
  init() {
    const editor = this.editor;

    // @types issue
    // eslint-disable-next-line
    // @ts-ignore
    editor.ui.componentFactory.add(definitions.toolbar, (locale) => {
      const dropdown = createDropdown(locale);
      dropdown.render();

      const listView = new ListView(locale);
      listView.render();

      const children = this.createListItems(locale);
      children.setParent(listView.element);

      dropdown.panelView.element.appendChild(listView.element);

      dropdown.buttonView.set({
        label: l18n.toolbar.title,
        isOn: false,
        withText: true,
      });

      return dropdown;
    });
  }

  createListItems(locale) {
    const collection = new ViewCollection(locale);
    const gDriveView = new GoogleDocView(locale, this.editor);
    gDriveView.render();
    const exportWord = this.createWordView(locale);

    collection.add(exportWord);
    collection.add(gDriveView);
    return collection;
  }

  createWordView(locale) {
    const button = new ButtonView(locale);
    button.set({ label: l18n.dropdown.word.title, withText: true });
    button.on('execute', () => {
      // @types issue
      // eslint-disable-next-line
      // @ts-ignore
      const data = this.editor.getData();
      exportDocx(data);
    });

    return button;
  }
}
