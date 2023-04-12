// complete the given function

function palindrome(str){
	let str2 = str.split('').reverse().join('');
	if(str2 === str)
		return true;
	return false;

}
module.exports = palindrome
