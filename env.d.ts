declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SMTP: string;
      SMTP_PASSWORD: string;
      SMTP_USER: string;
      RECAPTCHA_SITE_KEY: string;
      RECAPTCHA_SECRET_KEY: string;
    }
  }
}

export {}
