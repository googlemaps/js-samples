declare namespace PlaywrightTest {
  interface Matchers<R> {
    toMatchImageDiff: (options: { name: string }) => R;
  }
}
