export type AppEnvironment = 'develop' | 'staging' | 'production';

export type AppConfig = {
  apiURL: string;
  apiKey: string;
  environment: AppEnvironment;
};
