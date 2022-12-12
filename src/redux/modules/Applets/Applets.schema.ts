import { BaseSchema } from '../Base';

export type AppletsTypes = 'publishedApplets' | 'appletsContent';

export type PublishedApplet = {
  accountId: string;
  appletId: string;
  categoryId: string | null;
  description: string | null;
  id: string | null;
  image: string | null;
  keywords: string[];
  name: string;
  subCategoryId: string | null;
};

export type AppletContent = {
  //TODO: add type
};

export type PublishedApplets = {
  data: PublishedApplet[];
  totalCount: number;
};

export type AppletsSchema = {
  publishedApplets: BaseSchema<PublishedApplets | null>;
  appletsContent: BaseSchema<AppletContent[] | null>;
};
