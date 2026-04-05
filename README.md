# AI Portfolio（Next.js + Tailwind）

要件定義書に沿って作成した、1ページ構成のポートフォリオサイトです。

## いつでも見る（おすすめ：本番モード）

```bash
cd "/Users/motoharu/Cursor専用"
npm install
npm run preview
```

ブラウザで `http://127.0.0.1:3000` を開いてください。

## 開発モード（編集しながら見る）

```bash
npm run dev
```

ブラウザで `http://127.0.0.1:3000` を開いてください。

※ もし `EMFILE: too many open files` が出る場合は、開発モードではなく上の「本番モード」での閲覧が安定です。

## 環境変数

### サイトURL（任意）

```bash
NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3000
```

### お問い合わせフォーム → メール受信（Resend）

フォーム送信をあなたのメールに届けるには、[Resend](https://resend.com/) で API キーを発行し、`.env.local` に次を設定します。

```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=あなたの受信メール@example.com
# 任意。未設定時は Resend のテスト用送信元を使用（本番は独自ドメイン推奨）
# RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

- `CONTACT_TO_EMAIL`: お問い合わせ内容が届くあなたのメールアドレスです。
- 本番では Resend でドメインを認証し、`RESEND_FROM_EMAIL` を `名前 <no-reply@yourdomain.com>` のように設定してください。

未設定の場合、フォーム送信時にエラーになります（デモ送信は行いません）。

## 置換推奨（プレースホルダー）

`constants/site.ts` の次を実値に置換すると、サイト表記とJSON-LDが整います。

- `[YOUR_NAME]`
- `[CONTACT_EMAIL]`（連絡先表示用）
- `[CONTACT_TEL]` / `[LINE_URL]`

