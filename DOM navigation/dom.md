**firstElementChild**

--------------------

**Sample programme**

<ul class="fruits">
        <li>Apple</li>
        <li>Banana</li>
        <li>Coconut</li>
    </ul>

    <ul class="vegetables">
        <li>Carrot</li>
        <li>Cucumber</li>
        <li>Celary</li>
    </ul>

    <ul class="deserts">
        <li>cake</li>
        <li>pie</li>
        <li>ice cream</li>
    </ul>

    const ulElements=document.querySelectorAll("ul");


ulElements.forEach((ulElement)=>{

    ulElement.firstElementChild.style.backgroundColor="yellow";
})