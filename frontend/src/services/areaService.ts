import BaseHttp from './baseHttp';

/**
 * エリア情報のサービスクラス
 */
export default class AreaService {
  /**
   * 顧客情報を取得します。
   * @return {string} - [Hello + name]という形式で戻る。
   */
  static async getArea() {
    await new Promise((s) => setTimeout(s, 3000));

    return BaseHttp.httpRequest('/api/stab/area', 'get', null, null );
  }
}
