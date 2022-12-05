declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PG_PORT: string;
      PG_PASS: string;
      PG_USER: string;
      PG_HOST: string;
      PG_DATABASE: string;
    }
  }
}

export { };
