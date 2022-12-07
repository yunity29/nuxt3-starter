/* eslint-disable max-len */
import { FetchOptions, SearchParams } from 'ohmyfetch';

// サポート対象HTTPメソッド
type Method = 'get' | 'put' | 'post' | 'delete';

/**
 * エリア情報のサービスクラス
 */
export default class BaseHttp {
  /**
   * 顧客情報を取得します。
   * @param { url } url - 顧客ID
   * @param { Method } method - 顧客ID
   * @param { SearchParams } params - 顧客ID
   * @param { Record<string, any> } body - 顧客ID
   * @return { Promise } - [Hello + name]という形式で戻る。
   */
  static async httpRequest<T>(url: string, method: Method, params: SearchParams | null, body: Record<string, any> | null): Promise<T> {
    // TODO トークン等で認証が必要


    // 汎用オプション
    const options: FetchOptions = {
      baseURL: 'http://localhost:3000',
      method: method,
      params: params ? params : undefined,
      body: body,
    };
    return $fetch(url, options);
  };
}
