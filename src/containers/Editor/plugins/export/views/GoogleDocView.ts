import { Editor } from '@ckeditor/ckeditor5-core';
import { ButtonView, View } from '@ckeditor/ckeditor5-ui';
import { selectors, l18n } from '../constants';
import GoogleClient from '../utils/google';

class GoogleDocView extends View {
  private googleClient: GoogleClient;
  private editor: Editor;
  constructor(locale, editor) {
    super(locale);
    this.editor = editor;

    const bind = this.bindTemplate;
    const docButton = this.renderDocButton(locale);
    const accessManagement = this.renderAccessManagement(locale);

    this.setTemplate({
      tag: 'div',
      attributes: {
        class: ['listView', bind.to('class')],
      },
      children: [docButton, ...accessManagement],
    });
    this.set({
      isEnabled: true,
    });

    const instance = GoogleClient.getInstance();
    this.googleClient = instance;
  }

  renderDocButton(locale) {
    const button = new ButtonView(locale);
    button.set({
      label: l18n.dropdown.google.doc.title,
      withText: true,
      isEnabled: true,
      class: [selectors.btnTrigger, 'ck-disabled', 'ck-rounded-corners'].join(
        ' ',
      ),
    });
    button.on('execute', () => {
      // @types issue
      // eslint-disable-next-line
      // @ts-ignore
      const data = this.editor.getData();
      this.googleClient.uploadDoc(data);
    });

    return button;
  }

  renderAccessManagement(locale) {
    const ButtonSignin = new ButtonView(locale);
    const ButtonSignOut = new ButtonView(locale);

    ButtonSignin.set({
      label: l18n.dropdown.google.authorize.title,
      withText: true,
      isVisible: true,
      class: selectors.btnAuthorize,
    });
    ButtonSignin.on('execute', () => {
      this.googleClient.getToken();
    });

    ButtonSignOut.set({
      label: l18n.dropdown.google.revoke.title,
      withText: true,
      isVisible: false,
      class: selectors.btnRevoke,
    });
    ButtonSignOut.on('execute', () => {
      this.googleClient.revokeToken();
    });

    return [ButtonSignin, ButtonSignOut];
  }
}

export default GoogleDocView;
