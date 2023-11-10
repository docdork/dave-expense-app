import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'dave-expense-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
