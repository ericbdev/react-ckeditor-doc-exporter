export type DriveToolbarConfig = {
  accessToken: string;
  isEnabled: boolean;
  onGoogleAuthorize: () => void;
  onGoogleRevoke: () => void;
  onGoogleExport: () => void;
};
