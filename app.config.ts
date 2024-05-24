import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const expoConfig: ExpoConfig = {
    ...config,
    name: "ExpoEnvTester",
    slug: "expoenvtester",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.chromeq.expoenvtester",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      TEST_KEY_1: process.env.TEST_KEY_1,
      TEST_KEY_2: process.env.TEST_KEY_2,
      EXPO_PUBLIC_KEY_3: process.env.EXPO_PUBLIC_KEY_3,
      EXPO_PUBLIC_KEY_4: process.env.EXPO_PUBLIC_KEY_4,
      router: {
        origin: false,
      },
      eas: {
        projectId: "***ADD ME***",
      },
    },
    owner: "chromeq",
    runtimeVersion: {
      policy: "appVersion",
    },
    // updates: {
    //   url: "https://u.expo.dev/***ADD ME***",
    // },
  };

  return expoConfig;
};
