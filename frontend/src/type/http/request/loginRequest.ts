
/**
 * ログインリクエストクラス
 */
export default class LoginRequest {
  private id: string;
  private password: string;
  /**
   * コンストラクタ
   * @param {string} id - ID
   * @param {string} password - パスワード
   */
  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }

  /**
   * オブジェクトを返却します。
   * @return {Object}
   */
  getMembers() {
    return {
      id: this.id,
      password: this.password,
    };
  }
}
