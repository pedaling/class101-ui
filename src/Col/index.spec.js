import Col from './';

describe('Col', () => {
  it('값이 존재한다.', () => {
    expect(Col).toBeTruthy();
  });

  it('스냅샷과 일치한다..', () => {
    expect(Col).toMatchSnapshot();
  });
});
