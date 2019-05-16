// 30 and 40 check
var i;
var j;
function checkn(arr) {
for(i=0;i<arr.length;i++)
{ if(arr[i]==30)
    var thirty=true;
}
for(j=0;j<arr.length;j++)
{ if(arr[j]==40)
 var forty=true;
}
if(thirty==true && forty==true)
console.log("30 and 40 both exist");
else
console.log("does not exist ");
}
// swap first and last elements of array
function swap(arr)
{
var i;
 if(arr.length>=1)
    {  
        start=arr[0];
        last=arr[arr.length-1];
        console.log("elements before swapping:"+start+","+last);
        var temp=start;
        start=last;
        last=temp;
        console.log("enter after swapping:"+start+","+last);
    }
    else
    console.log("please enter an element");
} 
    // highest and lowest value in an array
    function hs(arr) 
    { var highest= Math.max(...arr);
     var smallest= Math.min(...arr);
      console.log("higest is:"+highest);
      console.log("lowest is:"+smallest);
    } 
    // sum of all elements in an array
    function sum(arr)
    { var sum=0;
        var i;
        for(i=0;i<arr.length;i++)
        sum=sum+arr[i];
        console.log("sum is:"+sum);
    }
    // object-task
    var person1={name:"madhav",age:23,mobile:[2343,6558]};
    var person2={name:"michael",age:65,mobile:[245,7897]};
    var person3={name:"bevan",age:27,mobile:[234,7484]};
    var arr=[person1,person2,person3];
    function getValue(object,prop)
    {
        return object[prop] ;
     }
    function setValue(object,prop,propvalue)
    { object[prop]=propvalue;
       console.log(object[prop]);
    }
    function getStatus(object)
    {
        var status = "invalid age";
        
        if(object.age>60 && object.age<=100){
            status = "old";
        }
        else if(object.age>20){
            status = "adult";
        }
        else if(object.age>10){
            status = "teenager";
        }
        else if(object.age>=0){
           status = "kid"; 
        }
        
        return status;
    }
    function addMobile(object,mobileNumber){
        object.mobile.push(mobileNumber);
    }
    function removeMobile(object,mobileNumber){
        var index = object.mobile.indexOf(mobileNumber)
        object.mobile.splice(index,1);
    }
    function totalMobiles(object)
    {
        return object.mobile.length;
    }
    

    




    



