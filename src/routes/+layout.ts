// Everything is static: the whole site is prerendered at build time.
export const prerender = true
// Emit /foo/index.html so links like /libraries/bits-ui/ work on any static host.
export const trailingSlash = 'always'
