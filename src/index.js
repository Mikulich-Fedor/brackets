module.exports = function check(str, bracketsConfig) {

  // for srt
  let flegCounterStr = 0;
  let checkStr = true;
  let resultStr;
  let arrStr = [];
  
  // for arr
  let arr = bracketsConfig.slice();
  arr = arr.flat(1);
  let flegCounterConfig = 0;
  let checkConfig = true;
  let resultConfig;
  
  // for str
  for (let i of str){
  if(i == "(" || i == "{" || i == "[" || i == "|"){
  
  flegCounterStr+=1;
  switch (i) {
  case "(":
  arrStr.push(")")
  break;
  case "{":
  arrStr.push("}")
  break;
  case "[":
  arrStr.push("]")
  break;
  case "|":
  arrStr.push("|")
  break;
  }
  }if(i == ")" || i == "}" || i == "]" || i == "|"){
  
  flegCounterStr-=1;
  if(i == arrStr[arrStr.length - 1]){
  arrStr.pop()
  }else{
  checkStr = false;
  }
  }
  if(flegCounterStr < 0){
  checkStr = false;
  }
  }
  arrStr = [];
  if(flegCounterStr === 0 && checkStr === true){
  resultStr = true;
  }else{
  resultStr = false;
  }
  
  // for Config
  for(let i of arr){
  if(i == "(" || i == "{" || i == "[" || i == "|"){
  flegCounterConfig+=1;
  }if(i == ")" || i == "}" || i == "]" || i == "|"){
  flegCounterConfig-=1;
  }
  if(flegCounterConfig < 0){
  checkConfig = false;
  }
  }
  
  if(flegCounterConfig === 0 && checkConfig === true){
  resultConfig = true;
  }else{
  resultConfig = false;
  }
  if(resultStr === resultConfig){
  return true;
  }else{
  return false;
  }
  }
