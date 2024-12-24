// 通用图片格式
export const PhotoBucket = (path: string) => {
  console.log('import.meta.url----------', import.meta.url)
  // 如果使用 Vite，可以这样处理路径
  return new URL(path, import.meta.url).href;
}
