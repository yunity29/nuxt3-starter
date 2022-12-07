import { GetCostumerResponse } from '../type/http/response/customerResponse';
import BaseHttp from './baseHttp';

/**
 * 顧客情報のサービスクラス
 */
export default class CustomerService {
  /**
   * 顧客情報を取得します。
   * @param {string} customerId - 顧客ID
   * @return {Promise<GetCostumerResponse>}
   */
  static async getCustomer(customerId: number): Promise<GetCostumerResponse> {
    await new Promise((s) => setTimeout(s, 3000));

    const response: GetCostumerResponse =
      await BaseHttp.httpRequest('/api/stab/customer', 'get', null, null);

    return response;
  }
}
