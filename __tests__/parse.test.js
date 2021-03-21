const { parseMessage } = require("../scripts/parse-message");
describe("parse", () => {
  test("parse message", () => {
    const info = parseMessage("洗衣服 20分钟");
    expect(info.time).toBe(20);
    expect(info.commitCount).toBe(2);
    expect(info.unit).toBe("m");
  });
  test("parse message1", () => {
    const info = parseMessage("洗衣服 20m");
    expect(info.time).toBe(20);
    expect(info.commitCount).toBe(2);
    expect(info.unit).toBe("m");
  });
  test("parse message2", () => {
    const info = parseMessage("洗衣服 20");
    expect(info.time).toBe(20);
    expect(info.commitCount).toBe(2);
    expect(info.unit).toBe("m");
  });
  test("parse message3", () => {
    const info = parseMessage("洗衣服 1小时");
    expect(info.time).toBe(60);
    expect(info.commitCount).toBe(6);
    expect(info.unit).toBe("m");
  });
  test("parse message4", () => {
    const info = parseMessage("洗衣服 半小时");
    expect(info.time).toBe(30);
    expect(info.commitCount).toBe(3);
    expect(info.unit).toBe("m");
  });
});
