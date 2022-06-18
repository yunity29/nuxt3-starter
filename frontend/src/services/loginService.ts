/* eslint-disable indent */
import LoginRequest from '../type/http/request/loginRequest';
import { LoginResponse } from '../type/http/response/loginResponse';
import BaseHttp from './baseHttp';

/**
 * 顧客情報のサービスクラス
 */
export default class LoginService {
  /**
   * 顧客情報を取得します。
   * @param {string} id - ID
   * @param {string} password - パスワード
   * @return {Promise<GetCostumerResponse>}
   */
  static async login(id: string, password: string): Promise<LoginResponse> {
    await new Promise((s) => setTimeout(s, 3000));

    // リクエストの設定
    const request: LoginRequest = new LoginRequest(id, password);

    const response: LoginResponse =
      await BaseHttp.httpRequest(
        '/api/stab/login',
        'post',
        null,
        request.getMembers(),
      );

    return response;
  }
}
