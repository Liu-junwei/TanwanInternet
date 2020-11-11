window.onload = () => {
    let set = document.getElementsByClassName("set")[0];
    let ul = document.getElementsByClassName("qf-list")[0];
    let ul_list = ul.getElementsByTagName("li");
    let search = document.getElementById("search");
    ul.style.display = "none"
    let i = 0;
    set.onclick = () => {
        if (i == 0) {
            ul.style.display = "block";
            i = 1;
        } else {
            ul.style.display = "none";
            i = 0;
        }
        console.log(i);
    }
    for (let k = 0; k < ul_list.length; k++) {
        ul_list[k].onclick = () => {
            ul.style.display = "none";
            set.innerText = ul_list[k].innerText;
            i = 0;
        }
    }

    let arr1 = [
        { qu: '豪杰服', id: 1, result: '豪杰10区' },
        { qu: '豪杰服', id: 2, result: '豪杰11区' },
        { qu: '豪杰服', id: 3, result: '豪杰12区' },
        { qu: '豪杰服', id: 4, result: '豪杰13区' },
        { qu: '豪杰服', id: 5, result: '豪杰14区' },
        { qu: '豪杰服', id: 6, result: '豪杰15区' },
        { qu: '豪杰服', id: 7, result: '豪杰16区' },
        { qu: '豪杰服', id: 8, result: '豪杰17区' },
        { qu: '豪杰服', id: 9, result: '豪杰18区' },
        { qu: '豪杰服', id: 10, result: '豪杰19区' },
        { qu: '至尊服', id: 20, result: '至尊19区' },
        { qu: '至尊服', id: 21, result: '至尊19区' },
        { qu: '至尊服', id: 22, result: '至尊19区' },
        { qu: '至尊服', id: 23, result: '至尊19区' },
        { qu: '至尊服', id: 24, result: '至尊19区' },
        { qu: '至尊服', id: 25, result: '至尊19区' },
        { qu: '至尊服', id: 26, result: '至尊19区' },
        { qu: '至尊服', id: 27, result: '至尊19区' },
        { qu: '荣耀服', id: 33, result: '荣耀41区' },
        { qu: '荣耀服', id: 34, result: '荣耀42区' },
        { qu: '荣耀服', id: 35, result: '荣耀43区' },
        { qu: '荣耀服', id: 36, result: '荣耀44区' },
        { qu: '荣耀服', id: 37, result: '荣耀45区' },
        { qu: '荣耀服', id: 39, result: '荣耀46区' },
        { qu: '荣耀服', id: 40, result: '荣耀47区' },
        { qu: '荣耀服', id: 41, result: '荣耀48区' },
        { qu: '荣耀服', id: 42, result: '荣耀49区' },
    ]
    let p;
    let id;
    let index;
    let status;
    // let num;
    search.onclick = () => {
        p = document.getElementsByClassName("set")[0].innerText;
        id = document.getElementById("id").value;
        //    num =document.getElementsByClassName("hq-num").innerText;
    
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].qu == p &&arr1[i].id==id) {
                index = i;
                status=1;
                break;
            } else {
                status =0;
            }
        }
        if(status==1){
            document.getElementsByClassName("hq-num")[0].innerText=arr1[index].result;
        }
        else{
            alert("该区服没有合区记录");
            document.getElementsByClassName("hq-num")[0].innerText=' ';
        }
        
    }

}