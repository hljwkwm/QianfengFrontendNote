function bubbleSort(arr){ 
    for(var i = 0; i < arr.length - 1; i++){
        //每一轮比较的次数
        for(var j = 0; j < arr.length - (i + 1); j++){
            if(arr[j] > arr[j + 1]){
                //交换两个数位置
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

// 数组去重
function noRepeat(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                //将后面这个数删除
                arr.splice(j, 1);
                j--;
            }
        }
    }
}

function changeSortAsc(arr){ //升序
    for(var i = 0; i < arr.length - 1; i++){
        //被比较的数的下标
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}


function changeSortDesc(arr){ //升序
    for(var i = 0; i < arr.length - 1; i++){
        //被比较的数的下标
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}