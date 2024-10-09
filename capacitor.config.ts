import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'LitHub',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '530161306539-v0c8am9174lrajh7fgca4mcog13v7abj.apps.googleusercontent.com', // Substitua com o Client ID gerado no Google Console
      forceCodeForRefreshToken: true,
    },
    SplashScreen: {
      splashScreenImage: 'resources/splash.png', // Caminho da imagem da splash screen
      launchShowDuration: 3000, // Duração que a splash screen será exibida
      showSpinner: false, // Exibe um spinner
      splashFullScreen: true, // Se deve ocupar a tela inteira
      splashImmersive: false, // Se deve ocultar a barra de status
    },
  },
};

export default config;

