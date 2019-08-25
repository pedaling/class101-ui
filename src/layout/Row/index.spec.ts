import { Row } from '.';

describe('Grid', () => {
  it('값이 존재한다.', () => {
    expect(Row).toBeTruthy();
  });

  it('스냅샷과 일치한다..', () => {
    expect(Row).toMatchSnapshot();
  });
});
