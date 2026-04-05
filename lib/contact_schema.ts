import { z } from "zod";

export const contactPayloadSchema = z.object({
  name: z.string().min(1, "お名前は必須です。"),
  company: z.string().optional(),
  email: z.string().email("メールアドレスの形式が正しくありません。"),
  phone: z.string().optional(),
  type: z.enum(["無料相談", "スライド自動生成", "図解デザイン生成", "チャットbot付HP作成", "その他"]),
  message: z.string().min(10, "内容は10文字以上で入力してください。")
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;
