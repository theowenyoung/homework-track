exports.parseMessage = (message) => {
  if (!message || typeof message !== "string") {
    throw new Error("message must be a string");
  }
  const messageArr = message.split(" ");

  const name = messageArr[0];
  let timeStr = messageArr[1];
  if (!timeStr) {
    timeStr = "10分钟";
  }
  const regex = /(\d+)(.*)/;
  let timeMachedResult = timeStr.match(regex);
  if (timeStr === "半小时") {
    timeMachedResult = ["半小时", "30", "分钟"];
  }
  if (timeMachedResult) {
    let time = timeMachedResult[1];
    let unitStr = timeMachedResult[2];

    if (!unitStr) {
      unitStr = "m";
    }
    if (unitStr.startsWith("分")) {
      unitStr = "m";
    }

    if (unitStr.startsWith("小时")) {
      unitStr = "h";
    }
    if (unitStr === "h") {
      time *= 60;
    }
    const commitCount = Math.floor(time / 10);
    const info = {
      name: `work: ${name}`,
      time: Number(time),
      unit: "m",
      commitCount: commitCount,
    };

    return info;
  } else {
    throw new Error("invalid format, you should use name time");
  }
};
