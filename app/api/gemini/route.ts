import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

type GeminiRequestBody = {
  prompt?: string;
  model?: string;
};

export async function GET() {
  return NextResponse.json({ ok: true, message: "gemini route ready" });
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "GEMINI_API_KEY is not set" },
      { status: 500 }
    );
  }

  let body: GeminiRequestBody;
  try {
    body = (await req.json()) as GeminiRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const prompt = body.prompt?.trim();
  if (!prompt) {
    return NextResponse.json(
      { ok: false, error: "prompt is required" },
      { status: 400 }
    );
  }

  const modelName = body.model?.trim() || "gemini-1.5-flash";

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ ok: true, model: modelName, text });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

