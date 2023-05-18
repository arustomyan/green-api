export type chat = {
  archive: boolean;
  id: string;
  notSpam: boolean;
  ephemeralExpiration: number;
  ephemeralSettingTimestamp: number;
};

export type chatList = chat[];
