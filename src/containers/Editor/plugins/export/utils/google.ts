import { selectors } from '../constants';
import exportDriveDoc from './exportDriveDoc';

// https://developers.google.com/identity/oauth2/web/guides/migration-to-gis#gapi-callback
class GoogleClient {
  private static instance: GoogleClient;
  private client;
  private accessToken;

  private constructor() {
    this.initGSI();
  }

  public static getInstance(): GoogleClient {
    if (!GoogleClient.instance) {
      GoogleClient.instance = new GoogleClient();
    }
    return GoogleClient.instance;
  }

  private initGSI() {
    this.client = window?.google?.accounts?.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_GDRIVE_CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/drive.file',
      callback: (tokenResponse) => {
        this.accessToken = tokenResponse.access_token;

        const { btnTrigger, btnAuthorize, btnRevoke } = this.getButtons();

        btnTrigger.classList.remove('ck-disabled');
        btnAuthorize.classList.add('ck-hidden');
        btnRevoke.classList.remove('ck-hidden');
      },
    });
  }

  private getButtons() {
    const btnTrigger = document.querySelector(`.${selectors.btnTrigger}`);
    const btnAuthorize = document.querySelector(`.${selectors.btnAuthorize}`);
    const btnRevoke = document.querySelector(`.${selectors.btnRevoke}`);

    return {
      btnTrigger,
      btnAuthorize,
      btnRevoke,
    };
  }

  public revokeToken() {
    const { btnTrigger, btnAuthorize, btnRevoke } = this.getButtons();
    google.accounts.oauth2.revoke(this.accessToken, () => {
      btnTrigger.classList.add('ck-disabled');
      btnAuthorize.classList.remove('ck-hidden');
      btnRevoke.classList.add('ck-hidden');
    });
  }

  public getClient() {
    return this.client;
  }

  public getToken() {
    return this.client.requestAccessToken();
  }

  public async uploadDoc(data) {
    const { btnTrigger } = this.getButtons();
    btnTrigger.classList.add('ck-disabled');
    const result = await exportDriveDoc({
      data,
      accessToken: this.accessToken,
    });
    btnTrigger.classList.remove('ck-disabled');
    if (result) {
      console.log(`https://docs.google.com/document/d/${result.id}`);
    } else {
      console.error('Unable to export to google drive');
    }
  }
}

export default GoogleClient;
