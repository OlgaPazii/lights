/**
 * Светофоры находятся в полном беспорядке.
 * Ваша здача починить их и заставить работать как надо с помощью
 * setInterval и setTimeout
 *
 * Для включения и выключения лампочек достаточно добавить или убрать
 * класс red, yellow или green у нужного светофора.
 * С помощью текста внутри елементов с классом "bulb" можно отображать
 * оставшееся количество секунд.
 *
 * Сейчас классы и значения установлены только для демонстрации возможностей.
 * Все значения можно очистить перед реализацией.
 *
 * Реализуйте переключение светофора настолько детализировано, насколько у вас получится.
 *
 * 0. Если необходимо, добавьте id или классы светофорам
 * 1. Начните с установки только красного и зеленого
 * 2. Добавьте желтый между зеленым и красным
 * 3. Добавьте жетлый вместе с красным перед зеленым
 * 4. Обратный отсчет - конечно, задание со звездочкой
 */

/** YOUR CODE HERE */

const firstLight = document.querySelector(".first");
const secondLight  = document.querySelector(".second");
const thirdtLight  = document.querySelector(".third");
const fouthLight = document.querySelector(".fourth");

setTimeout(() => {
    secondLight.classList.add("green");
    thirdtLight.classList.add("red");
    fouthLight.classList.add("green");

    setInterval(() => {
        firstLight.classList.remove("red");
        secondLight.classList.add("red");

        firstLight.classList.add("yellow");
        secondLight.classList.remove("green");

        firstLight.classList.remove("red");
        fouthLight.classList.remove("green");
        fouthLight.classList.add("yellow");
        
        setInterval(() => {
            firstLight.classList.remove("yellow");
            fouthLight.classList.remove("yellow");
            firstLight.classList.add("green");
            fouthLight.classList.add("red");
            thirdtLight.classList.remove("red");
            thirdtLight.classList.add("green");
        }, 1000); 
     
    }, 5000);

}, 0);

