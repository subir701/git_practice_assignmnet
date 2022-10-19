let n=1221;
let bag="";
let bag1="";
while(n>0){
  bag+=(n%10);
  n=Math.floor(n/10);
}
for(let i=bag.length-1;i>=0;i--){
  bag1+=bag[i];
}
if(bag1 == bag){
  console.log("It is a palindrome");
}else{
  console.log("It is not a palindrome");
}