let input1 = document.querySelector("#input1");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let myList = document.querySelector("#myList");

// inputa yazdığımız ı add a click yaparak listeye ekleyecek. clear ile de sileceğiz
// daha sonra listede yaptıklarımızı da tek tek üstüne kırmızı bir çizgi atacağız

btn1.addEventListener('click', functionBtn1);
function functionBtn1(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    myList.appendChild(paragraph);
    paragraph.innerText = input1.value
    input1.value = "";

    paragraph.addEventListener('click', cizgi);
    function cizgi(){
        paragraph.classList.add('cizgili');
    }
    // ilk tıklamaya çizgi oluşuyor ikinci tıklamaya çizgi kalksın sonra tekrar çizgi olsun. bunu nasıl yapabilirm??
    paragraph.addEventListener('dblclick', function(){
        myList.removeChild(paragraph)
    })
     
// yaptığım to do list i önüne sayı gelecek şekide sırasıyla nasıl yapacağımı şimdilik bilmiyorum.
}
btn2.addEventListener('click', clearBtn2);
function clearBtn2() {
    myList.innerText = "";
}


