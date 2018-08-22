function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  return true
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  return true
}

function sayHiToGrandma(string) {
  if string === string.toUpperCase() {
    return "YES INDEED!"
  }
}