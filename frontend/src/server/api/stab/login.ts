import { LoginResponse } from '~~/src/type/http/response/loginResponse';

export default defineEventHandler((): LoginResponse => {
  return {
    results: {
      token: 'abcdefg',
    },
  };
});
