//  first letter capital
function capitalise(str)
{ var arr=[];
    arr=str.split(" ");
var i=0;
var pos=[];
for(i=0;i<arr.length;i++)
{ pos[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1,arr[i].length);
    
}
var str1=pos.join(" ");
return str1;
}
 
// dna matching
function matching(str1,str2)
{ var count=0;
    var i;
    if(str1.length==str2.length)
    {
   for(i=0;i<str1.length;i++)
    { if(str1[i]!=str2[i])
        count++;
     }
    }
     return count;
}

// isogram
function isogram(str)
{ var i;
    for(i=0;i<str.length;i++)
    { if(str[i+1]!=str[i])
        return true;
    }

}
// acronym
function acronym(str)
{ var i;
    var arr=[];
    arr=str.split(" ");
    var arr1=[];
    for(i=0;i<arr.length;i++)
    {  
        arr1[i]=arr[i].charAt(0);
} str1=arr1.join("");
return str1;
    }
