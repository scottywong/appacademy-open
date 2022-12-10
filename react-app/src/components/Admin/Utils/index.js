
export function isEmptyOrSpaces(str){
    let str1 = str.replace(/(<([^>]+)>)/gi, "");
    console.log('str: ', str)
    console.log('str1: ', str1 === null || str1.match(/^ *$/) !== null || str1 ==='')

    return str1 === null || str1.match(/^ *$/) !== null || str1 ==='';
}