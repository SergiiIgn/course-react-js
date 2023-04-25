const TaskDescr3 = () => {
    return (
        <div>
            <p><b>Задание #3 - работа с render-props</b></p>
            <p>1. Создать компоненты Task3 , DataMaker , Posts , Post</p>
            <p>2. Компонент Task3</p>
            <p>    a. Хранит в себе переменную с url - https://jsonplaceholder.typicode.com/todos?_limit=10</p>
            <p>    b. Внутри себя рендерит div , в котором вложен компонент DataMaker</p>
            <p>    c. В DataMaker передается два пропс - url (со значением переменной url) ,и проп renderDataUrl -который в себе использует паттерн render props , а именно принимает data и прокидывай их в компонент Posts в виде пропа</p>
            <p>3. Компонент DataMaker - это функциональный компонент ,который принимает в себя параметры url , и renderDataUrl</p>
            <p>    a. Внутри себя компонент имеет состояние posts (в нем буду хранится посты)</p>
            <p>    b. Внутри себя выполняется запрос на сервер - используя prop url (который пришел ранее)</p>
            <p>    c. Данные полученые с сервера кладутся в state постов</p>
            <p>    d. Функциональный компонент возвращает div в котором происходит вызов функции renderDataUrl с передачей постов из state</p>
            <p>4. Компоненты Posts && Post только отображают данные полученые в пропах</p>
            <p>    a. Posts получает проп с постами и рисует список, внутри списка рендерятся компоненты Post</p>
            <p>    b. В компонент Post передавать все значение одним пропом</p>
            <p>    c. Компонент Post -принимает пропы и рисует разметку вида</p>
            <img style={{width: 80 + "%"}} src="https://sore-terrier-fd2.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffe7b2d4d-c346-4f3d-ac4e-4d34034d5d00%2FUntitled.png?id=f5e76e6f-70b8-4111-996e-3789a106db16&table=block&spaceId=df60d295-8c45-4cae-8dff-019fa369fa18&width=1410&userId=&cache=v2" alt="img" />
        </div>
    )
};
export default TaskDescr3;