import { base } from '../Base';
import { AppletsSchema } from './Applets.schema';

const initialStateData = {
  ...base.state,
  data: null,
};

export const state: AppletsSchema = {
  publishedApplets: initialStateData,
  appletsContent: initialStateData,
};
