export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/ProgressBar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-progress-bar" */ 'src/components/ProgressBar.mdx'),
  'src/components/Spinner.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-spinner" */ 'src/components/Spinner.mdx'),
}
