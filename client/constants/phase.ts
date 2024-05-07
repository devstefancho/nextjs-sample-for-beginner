export const isLocal = process.env.NEXT_PUBLIC_PHASE === 'local';
export const isBeta = process.env.NEXT_PUBLIC_PHASE === 'beta';
export const isProd = process.env.NEXT_PUBLIC_PHASE === 'production';
