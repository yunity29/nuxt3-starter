import { GetCostumerResponse } from '~~/src/type/http/response/customerResponse';

export default defineEventHandler((): GetCostumerResponse => {
  return {
    results: {
      name: '鈴木　一郎',
      age: 51,
    },
  };
});
