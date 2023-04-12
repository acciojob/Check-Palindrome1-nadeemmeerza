// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let str2 = str.split('').reverse().join('');
	if(str2 === str)
		return true;
	return false;

}
module.exports = palindrome
