export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Badge.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-badge" */ 'src/components/Badge.mdx'),
  'src/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button" */ 'src/components/Button.mdx'),
  'src/components/Layout.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-layout" */ 'src/components/Layout.mdx'),
  'src/components/ProgressBar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-progress-bar" */ 'src/components/ProgressBar.mdx'),
  'src/components/ProgressState.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-progress-state" */ 'src/components/ProgressState.mdx'),
  'src/components/Spinner.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-spinner" */ 'src/components/Spinner.mdx'),
  'src/components/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-typography" */ 'src/components/Typography.mdx'),
  'src/formControls/ControlGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-form-controls-control-group" */ 'src/formControls/ControlGroup.mdx'),
  'src/formControls/FormGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-form-controls-form-group" */ 'src/formControls/FormGroup.mdx'),
  'src/formInputs/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-form-inputs-input" */ 'src/formInputs/Input.mdx'),
  'src/formInputs/Textarea.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-form-inputs-textarea" */ 'src/formInputs/Textarea.mdx'),
  'src/overlays/BottomSheet.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-overlays-bottom-sheet" */ 'src/overlays/BottomSheet.mdx'),
  'src/styles/Colors.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-styles-colors" */ 'src/styles/Colors.mdx'),
}
