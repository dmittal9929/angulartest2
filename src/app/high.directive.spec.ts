import { HighDirective } from './high.directive';

describe('HighDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('h1')
    };
    const directive = new HighDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
