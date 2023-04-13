function greet(lang, speech){
    if(lang === 'Bangla'){
        return `Hello, ${speech}`;
    }else if(lang === 'English'){
        return `Hello, ${speech}`;
    }
    return 'Language unknown';
    
}
console.log(greet('Bangla','Kemon Achen?'));
console.log(greet('English','How are you?'));
console.log(greet('Arabic', 'Kyfa halek?'));