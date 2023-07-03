import { NextResponse, type NextRequest } from "next/server";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const result = await openai.createChatCompletion({
      model: process.env.OPENAI_MODEL,
      messages: data,
    });

    return NextResponse.json({
      data: result,
    });
  } catch (error: any) {
    return new Response("Failed to communicate with the OpenAI Chat API.", {
      status: 500,
    });
  }
}
