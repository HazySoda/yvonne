import { readFileSync } from 'fs'
import { platform } from 'os'
import path from 'path'
import type { Plugin } from 'vite'

export interface SemiThemingOptions {
  cssLayer?: boolean
}

const isWindows = platform() === 'win32'
const SEMI_CSS_REGEX =
  /@douyinfe\/semi-(ui|icons|icons-lab|foundation)\/lib\/.+\.css$/

const normalizePath = (p: string) => {
  return path.posix.normalize(isWindows ? p.replace(/\\/g, '/') : p)
}

export default function semiTheming({
  ...options
}: SemiThemingOptions): Plugin {
  const cssLayer = options.cssLayer ?? (false as boolean)

  return {
    name: 'semi-plugin',
    enforce: 'post',
    load(id) {
      const filePath = normalizePath(id)
      if (SEMI_CSS_REGEX.test(filePath)) {
        let finalCSS = readFileSync(filePath, 'utf-8')
        if (cssLayer) {
          finalCSS = `@layer semi{${finalCSS}}`
        }
        return finalCSS
      }
    },
  }
}
