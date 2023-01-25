const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils')

test('Prints the correct year', () => {
    expect(getFullYear().toString()).toBe(new Date().getFullYear());
  });
  
  test('getFooterCopy return the correct string value with true val', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });
  
  test('getFooterCopy return the correct string value with false val', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
  
  test('getLatestNotification return correct value', () => {
    expect(getLatestNotification()).toBe(<span><strong>Urgent requirement</strong> - complete by EOD</span>);
  });