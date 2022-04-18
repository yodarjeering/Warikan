const nameField = document.getElementById('nameField');
const nameSubmit = document.getElementById('nameSubmit');
const nameResult = document.getElementById('nameResult');
const usrList = [];


// console.log(nameField);
function showName(){
    const usrName = nameField.value;
    nameField.value = '';
    // nameResult.textContent = usrName;
    let p = document.createElement('p');
    p.textContent =  usrName;
    usrList.push(usrName);
    // ユーザのリストに追加しておく
    nameResult.prepend(p);
    console.log(usrList);
}

nameSubmit.addEventListener('click',showName);
