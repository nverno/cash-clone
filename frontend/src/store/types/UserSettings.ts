export const PrivacySetting = {
  all: 'all',
  none: 'none',
  contacts: 'contacts',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type PrivacySetting = typeof PrivacySetting[keyof typeof PrivacySetting];

export interface UserSettings {
  id?: number;
  userId: string;
  allowPay: boolean;
  privacy: PrivacySetting;
}
