// Question 1
function maxOfTwoNumbers(a, b) {
if (a > b) {
	alert (a + " is the larger number")
	return a;
}else {
	alert(b + " is the larger number");
	return b;
	} 
}

// Question 2
function maxOfThree(a, b, c) {
	if(a > b && a>c) {
		alert (a + " is the largest number");
		return a;
	} else if (b>a && b >c){
		alert (b + " is the largest number");
		return b;
	}else{
		alert(c + " is the largest number");
		return c;
	}
}

// Question 3
function isCharacterAVowel(c) {
		var vowels = ["a","e","i","o","u"]; 
		if (vowels.indexOf(c) !== -1) {
			return true;
		}
			return false;
	}



// Question 4
function sumArray() {
 var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


// Question 4
function multiplyArray() {
	var product = arr[0];
  for (var i = 1; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}



// Question 5
var numberOfArguments = function(){
  return args.length
}



// Question 6
var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
}


// Question 7
function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}


// Question 8
function filterLongWords (arr, num) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

