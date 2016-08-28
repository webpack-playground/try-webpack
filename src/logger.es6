console.log('logger.js is now loaded...');

let checkName = (firstName, lastName) => {
    if(firstName !== 'nadar' || lastName !== 'dabit') {
        console.log('You are not Nader Dabit');
    }else {
        console.log('You are Nader Dabit')
    }
};

checkName('ndar', 'jackson');
