import { ProgressBar } from './';

describe('Grid', () => {
  it('값이 존재한다.', () => {
    expect(ProgressBar).toBeTruthy();
  });

  it('스냅샷과 일치한다..', () => {
    expect(ProgressBar).toMatchSnapshot();
  });
});
