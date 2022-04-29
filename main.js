/**
 * Bài 1: Số nguyên dương min: 
 *      1 + 2 + ... + n > 10000 
 */
let sum = 0;
let index = 1;
let n ;
var result1 = "";
do {
    n = index; 
    sum += index;
    index++;
} while (sum <= 10000);
    result1 = "Số nguyên dương nhỏ nhất thỏa mãn biểu thức là: " + n ; 
    document.getElementById("footerCard1").innerHTML =  result1;
    
// /*
//  * Bài 2: Nhập x, n. Tính tổng:
//  *      S = x + x^2 + ... + x^n
//  * /
document.getElementById("tinhTong").onclick = function(){
    
    let x = document.getElementById("txtX");
    let n = document.getElementById("txtNumber1");

    let sum = 0;
    var result2 = "";

    for (let index = 1; index <= n.value ; index++) {
        sum += Math.pow(x.value, index);
    }

    result2 = "Tổng là: " + sum ; 
    document.getElementById("footerCard2").innerHTML =  result2;
}
/**
 * Bài 3: Tính n!
 */
 document.getElementById("tinhGiaiThua").onclick = function(){

    let n = document.getElementById("txtNumber2");
    let mul = 1;
    var result3 = "";

    for(var i=1; i <= n.value; i++)
	{
		mul*=i;
	}

    result3 = "Giá trị giai thừa là: " + mul ; 
    document.getElementById("footerCard3").innerHTML =  result3;
}

/**
 * Bài 4: click vào button in 10 thẻ div: chẵn - đỏ / lẻ - xanh
 */
const myDiv = [
    document.getElementById("bai4_div_1"),
    document.getElementById("bai4_div_2"),
    document.getElementById("bai4_div_3"),
    document.getElementById("bai4_div_4"),
    document.getElementById("bai4_div_5"),
    document.getElementById("bai4_div_6"),
    document.getElementById("bai4_div_7"),
    document.getElementById("bai4_div_8"),
    document.getElementById("bai4_div_9"),
    document.getElementById("bai4_div_10"),
];

document.getElementById("click").onclick = function() {
    myDiv.forEach((item,index)=>{
        if(index % 2 === 0){
            item.style.backgroundColor = "red";
            item.innerText = `Div chẵn ${index+1}`
        }else{
            item.style.backgroundColor = "green";
            item.innerText = `Div lẻ ${index+1}`
        }
    })
};