import {
  APP_TAB_ROUTE,
  CARD_VIEW_ROUTE,
  ONBOARD_ROUTE,
  POST_COMMENT_ROUTE,
  POST_VIEW_ROUTE,
} from '../routes';

export type AppNavigatorStackParamsList = {
  [ONBOARD_ROUTE]: {};
  [APP_TAB_ROUTE]: {};
  [POST_VIEW_ROUTE]: {};
  [POST_COMMENT_ROUTE]: {
    post: {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    };
  };
  [CARD_VIEW_ROUTE]: {};
};
