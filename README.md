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

## 環境変数（任意）

`.env.local` を作成して設定できます（未設定でも動きます）。

```bash
NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3000
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

## 置換推奨（プレースホルダー）

次の値を実値に置換すると、サイト表記とJSON-LD/SEOが整います。

- `[YOUR_NAME]`
- `[CONTACT_EMAIL]`
- `[SNS_X_URL]`
- `[SNS_GITHUB_URL]`
- `[SNS_LINKEDIN_URL]`

