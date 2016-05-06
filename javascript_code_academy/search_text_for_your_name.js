var text = "snbfcfN, ANFCOWFNA\
acfhgvnlosighaqopwngv ncapcfFagnbiejlgvhfn.";

var myName = "cf";


var hits = [];

for (i=0;i<text.length;i++) {
    if(text[i] === "c") {
     
            if (text.substring(i,i+myName.length) === myName) {
                hits.push(text.substring(i,i+myName.length));
                //console.log(text.substring(i,i+myName.length));
            }

    }
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}