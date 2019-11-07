
$("button").click(function(){
    let text = $("input").val();
    console.log(text);
    let words = text.split(" ");
    console.log("words",words);
    let beg1 = words[0].charAt(0);
    let beg2 = words[1].charAt(0);
    console.log(beg1);
    console.log(beg2);
    let end1 = words[0].slice(1, words[0].length);
    let end2 = words[1].slice(1, words[1].length); 
    console.log("end2",end2);
    console.log(beg2+end1+beg1+end2);
    $("#result").append(beg2+end1+ " ",beg1+end2);
});
