export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/cores/ProgressBar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cores-progress-bar" */ 'src/cores/ProgressBar.mdx'),
  'src/cores/Spinner.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cores-spinner" */ 'src/cores/Spinner.mdx'),
}
