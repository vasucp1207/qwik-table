export const isImage = (url: string | number | null | undefined) => {
  if (typeof (url) === 'string')
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  return false;
}