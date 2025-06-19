import { createOpenAI } from '@purinton/openai';
const openai = await createOpenAI();
console.log('OpenAI client created:', openai);