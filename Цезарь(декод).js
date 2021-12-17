let fs = require('fs');
let arg = process.argv;
s = fs.readFileSync('coding.txt');
s = s.toString();
alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
alphbig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
fact = {'a' : 0, 'b' : 0, 'c' : 0, 'd' : 0, 'e' : 0, 'f' : 0, 'g' : 0, 'h' : 0, 'i' : 0, 'j' : 0, 'k' : 0, 'l' : 0, 'm' : 0, 'n' : 0, 'o' : 0, 'p' : 0, 'q' : 0, 'r' : 0, 's' : 0, 't' : 0, 'u' : 0, 'v' : 0, 'w' : 0, 'x' : 0, 'y' : 0, 'z' : 0};
canon = {'a' : 0.0817, 'b' : 0.0149, 'c' : 0.0278, 'd' : 0.0425, 'e' : 0.127, 'f' : 0.0223, 'g':0.0202, 'h' : 0.0609, 'i' : 0.0675, 'j' : 0.0015, 'k' : 0.0077, 'l' : 0.0403, 'm' : 0.0241, 'n' : 0.0675, 'o' : 0.0751, 'p' : 0.0193, 'q' : 0.001, 'r' : 0.0599, 's' : 0.0633, 't' : 0.0906, 'u' : 0.0276, 'v' : 0.0098, 'w' : 0.0236, 'x' : 0.0015, 'y' : 0.0197, 'z' : 0.0005};
let count = 0;
for (i = 0; i < s.length; i++){
	if (alph.includes(s[i]) == true){
		fact[s[i]]++;
		count++;
	}
	if (alphbig.includes(s[i]) == true){
		fact[alph[alphbig.indexOf(s[i])]]++;
		count++;
	}
}
for (i = 0; i < alph.length; i++){
	fact[alph[i]] = fact[alph[i]] / count;
}
mini = 100000000000000000000000000;
answer = 0
for (k = 0; k < 26; k++){
	result = 0;
	for (j = 0; j < 26; j++){
		result = result + Math.abs(canon[alph[j]] - fact[alph[(j + k) % 26]]);
	}
	if (result < mini){
		mini = result;
		answer = k;
	}
}
console.log(answer);
final_string = "";
for (i = 0; i < s.length; i++){
	if (alph.includes(s[i]) == true){
		if (alph.indexOf(s[i]) - answer >= 0){
			final_string += alph[alph.indexOf(s[i]) - answer];
		}else{
			final_string += alph[(26 + alph.indexOf(s[i]) - answer) % 26];
		}
	}
	if (alphbig.includes(s[i]) == true){
		if (alphbig.indexOf(s[i]) - answer >= 0){
			final_string += alphbig[alphbig.indexOf(s[i]) - answer];
		}else{
			final_string += alphbig[(26 + alphbig.indexOf(s[i]) - answer) % 26];
		}
	}
	if ((alphbig.includes(s[i]) == false) && (alph.includes(s[i]) == false)){
		final_string += s[i];
	}
}
fs.writeFileSync('decoding.txt', final_string);