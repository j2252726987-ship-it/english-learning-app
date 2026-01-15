import { NextRequest, NextResponse } from 'next/server';
import { TTSClient, Config } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, speaker = 'zh_female_vv_uranus_bigtts', speechRate = 0, loudnessRate = 0 } = body;

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const config = new Config();
    const client = new TTSClient(config);

    const response = await client.synthesize({
      uid: 'user-' + Date.now(),
      text,
      speaker,
      audioFormat: 'mp3',
      sampleRate: 24000,
      speechRate,
      loudnessRate
    });

    return NextResponse.json({
      success: true,
      audioUri: response.audioUri,
      audioSize: response.audioSize
    });
  } catch (error) {
    console.error('TTS Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech', details: String(error) },
      { status: 500 }
    );
  }
}
