function handleMouseEnter(){
    console.log('handle mouse enter called', this); /* é para verificar se a função está sendo chamada */
}



function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements);
    /* Queremos que quando o usuário coloque o mouse sobre o card ele adicione uma nova classe css 
    sobre esse elemento dinamicamente. Sabemos que um array e tem varios elementos, não vamos 
    conseguir colocar somente com uma função, uma classe dentro de uma array, então devemos fazer um looping
    usando o 'For' */
    for(let index = 0; index < cardElements.length; index++){
        const card = card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
    }

}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false) 





