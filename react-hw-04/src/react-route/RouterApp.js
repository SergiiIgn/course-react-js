import "../styles/task_6.css";
import prev  from "../icons/previous.png"

import { Routes, Route, Navigate, useNavigate, Link, Outlet, NavLink, useParams } from "react-router-dom";
import Task_1 from "../components/task1/Task_1";
import Task_2 from "../components/task2/Task_2";
import Task_3 from "../components/task3/Task_3";
import Task_4 from "../components/task4/task_4";
import Task_5 from "../components/task5/Task_5";

import {menuData} from "../data/menuData";

import { taskDescription1 } from "../data/taskDescription1";

const Header = () => {
    const navigate = useNavigate();
    console.log({menuData});
    return (
        <header className="container header flex">
            <button  className="button_prev" onClick={() => navigate(-1)}>
                {<img style={{width: 100 + "%"}} src={prev} alt="prev" />}
            </button>

            {/* menuData.map(item => (
                <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/" className="link">Main </NavLink>
            )) */}
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/" className="link">Main </NavLink>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/Task1" className="link">Task 1 </NavLink>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/Task2" className="link">Task 2 </NavLink>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/Task3" className="link">Task 3 </NavLink>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/Task4" className="link">Task 4 </NavLink>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/Task5" className="link">Task 5 </NavLink>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/TasksDescription" className="link">Tasks Description</NavLink>
        </header>
    )
}

const Main = () => {
    return <h1 className="container flex">

        This is the solution to the 4th homework by Sergii Ignatenko
        </h1>;
};

const Task1 = () => {
    return <Task_1 />
};

const Task2 = () => {
    return <Task_2 />
};

const Task3 = () => {
    return <Task_3 />
};

const Task4 = () => {
    return <Task_4 />
};

const Task5 = () => {
    return <Task_5 />
};

const TaskDescr1 = () => {
    return (
        <div>
            <p><b>Задача №1. Робота з Toggler HOC </b> - відповідає за функціоналом тоглера (переключення стану  true/false)</p>
            <p>1. Створити компонент <b>User</b> тa <b>Album</b>, <b>withToggler</b></p>
            <p>- <b>User</b> рендерить дані юзера</p>
            <p>- <b>Album</b>  - рендерить дані альбома</p>
            <p>- <b>withToggler –</b> HOC, який за безпечує функціонал тоглера</p><p></p>
            <p>2. <b>User:</b></p>
            <p>- дані для поста можна скопіювати тут - https://jsonplaceholder.typicode.com/users/1</p>
            <p>- рендерить данні <i>username, email</i>, a також <i>детальну інформацію</i> про юзера: address (city, street, suit), phone, company (name)</p>
            <p>та <i>кнопку “See details” / “hide details”</i></p>
            <p>- при початковому рендері детальна інформація прихована, назва кнопки “See details”.</p>
            <p>- при кліці на кнопку в стані “See details” – показуємо детальну інформацію і змінюємо назву кнопки на “Hide details”</p>
            <p>- при кліці на кнопку в стані “ Hide details ” – приховуємо детальну інформацію і змінюємо назву кнопки на “ See details”</p><p></p>
            <p>3. <b>Album  :</b></p>
            <p>- дані для альбому можна отримати тут - https://jsonplaceholder.typicode.com/albums/1/photos (перший елемент масиву)</p>
            <p>- показує – назву альбома і його картинку</p>
            <p>- Кнопка міняє свій статус (подобається / НЕ подобається) при кліці.</p>
            <p>Іконки для кнопки можна отримати тут -  https://www.flaticon.com/free-icons/heart</p><p></p>
            <p>4. Логіку для toggled винести в HOC – <b>withToggler</b>.</p>
            <p>Постачає WrappedComponent пропсами:</p>
            <p><b>toggled</b>  (стан тоглера true/false) і <b>changeToggled</b> (функція для зміни стану тоглера)</p>
        </div>
    )
}

const TaskDescr2 = () => {
    return (
        <div>
            <p><b>Задача №2</b> Робота з <b>Fetching Data HOC,</b> який відповідає за функціонал для асинхронного запиту.</p><p></p>
            <p>2.1. Створити наступні компоненти: <b>UsersList, User, AlbumsList, Album, withFetchingData</b></p>
            <p>- <b>UsersList</b> – список усіх юзерів (тобто список із <b>User</b>).</p>
            <p>- <b>User</b> – описує 1 юзера (<i>username, email*, *address, phone, company</i>)</p>
            <p>- <b>AlbumsList</b> – список усіх коментарів (Comment)</p>
            <p>- <b>Album</b> – описує 1 альбом (<i>title</i>)</p>
            <p>- <b>withFetchingData</b> – HOC з функціоналом роботи з асинхронним кодом (запит на сервер, отримання даних, стан загрузки, наявність помилки)</p>
            <p></p>
            <p>2.2. Списки <b>(UsersList та AlbumsList</b>)</p>
            <p>- логіку по роботі із асинхронним кодом отримують із HOC – <i>withFetchingData (див.п2.3)</i>, який снабжає їх відповідними пропсами:</p>
            <p><b>data</b> (результат загрузки – масив певних даних),  <b>isLoading</b> (стан загрузки), <b>error</b> (текст помилки)</p>
            <p>- показують компонент Loader, якщо йде загрузка відповідних списків</p>
            <p>- показують компонент Error, якщо наявна помилка при запиті</p>
            <p>- рендерять відповідні списки – результат запиту</p>
            <p></p>
            <p><i>Примітки:</i></p>
            <p>- в якості компонентів Loader і Error можна відобразити &lt;div&gt; з відповідним текстом</p>
            <p>- компоненти <b>User</b> та <b>Album можна взяти iз попереднього завдання</b></p>
            <p></p>
            <p>2.3.  <b>HOC -  withFetchingData</b></p>
            <p>- робить асинхронний запит</p>
            <p>- забезпечує WrappedComponent наступними даними:</p>
            <p><b>data</b> (результат загрузки даних),  <b>isLoading</b> (стан загрузки), <b>error</b> (текст помилки)</p>
            <p>- сcилка для запиту отримується із пропса <b>url</b> компонента, створеного за допомогою нашого HOC</p>
            <p></p>
            <p>2.4. <b>Ендпоінти</b> для запитів:</p>
            <p>- юзерів - https://jsonplaceholder.typicode.com/users?_limit=10</p>
            <p>- альбоми - https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10</p>
        </div>
    )
}

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
}

const TaskDescr4 = () => {
    return (
        <div>
            <p><b>Render Props Patern</b></p>
            <p><b>Задание #4:</b> Создание компонента Tooltip (всплывающая подсказка) для карт продуктов с использованием паттерна render-props</p>
            <p>1. <b>Создание обязательных компонентов:</b></p>
            <p>- ProductCardList - список всех карточек</p>
            <p>- ProductCard – карточка о продукте</p>
            <p>- Tooltip - всплывающая подсказка</p>
            <p>2. <b>ProductCard :</b></p>
            <p>- изначально показывает <i>картинку продукта, название и описание</i>.</p>
            <p>- при наведении на <i>картинку</i> продукта (далее - Компонент) – показывает Tooltip с дополнительной информацией</p>
            <p>3. <b>Всплывающая подсказка должна отображаться при наведении пользователя на Компонент</b> (событие MouseEnter) и скрыться, когда пользователь уходит с него (событие MouseLeave).  При перемещении мышки в пределах Компонента, за ней движется и подсказка (событие MouseMove)</p>
            <p>4. <b>Tooltip</b></p>
            <p>4.1. содержит всю логику по отображению подсказки:</p>
            <p>- отслеживает показывать подсказку или нет ( isTooltipShown ) , х/y позиции для отображения подсказки ( tooltipX / tooltipY )</p>
            <p>- функцию-тоглер (показать/спрятать подсказку)</p>
            <p>- функцию для изменения х/y позиций подсказки при движении мышки</p>
            <p>4.2  рендерит:</p>
            <p>- Компонент (при помощи render-props)</p>
            <p>- и саму подсказку (отпозиционированный div + контент подсказки, внутри этого div)</p>
            <p>4.3. принимает 2 пропа:</p>
            <p>а) render, который должен быть функцией. Т.е здесь будем реализовывать Render Props.</p>
            <p>b) content – содержимое подсказки (название продукта, цену и рейтинг.)</p>
            <p>4.4.  Колбек-функция  для пропа render будет:</p>
            <p>- принимать аргументом функцию-тоглер для подсказки + функцию для изменения х/y позиций подсказки,</p>
            <p>- и возвращать Компонент</p>
            <p>5. <b>Линка для получения данных с продуктами</b>  - https://my.api.mockaroo.com/coffee.json?key=778301b0</p>
            <p>6. <b>Стилизация произвольная</b></p>
        </div>
    )
}

const TaskDescr5 = () => {
    return (
        <div>
            <p><b>Завдання 5.</b></p>
            <p>Реалізуйте функціонал із завдань 1-2 за допомогою кастомних хуків замість HOC-ів</p>
        </div>
    )
}

const TaskId = () => {
    const { taskId } = useParams();

  let CurrentDescriptionComponent;

  switch (taskId) {
    case '1':
        CurrentDescriptionComponent = TaskDescr1;
      break;
    case '2':
        CurrentDescriptionComponent = TaskDescr2;
      break;
    case '3':
        CurrentDescriptionComponent = TaskDescr3;
      break;
    case '4':
        CurrentDescriptionComponent = TaskDescr4;
      break;
    case '5':
        CurrentDescriptionComponent = TaskDescr5;
      break;
    default:
        CurrentDescriptionComponent = null;
  }

  if (!CurrentDescriptionComponent) {
    return <Navigate to="/" />;
  }

  return <CurrentDescriptionComponent />;
}

const TasksDescription =() => {
    return ( 
        <div>
            <h3>Tasks Description</h3>
            <div>
                <Link to="/TasksDescription/1">Task #1 - Toggler HOC</Link>
            </div>
            <div>
                <Link to="/TasksDescription/2">Task #2 – Fetching Data HOC</Link>
            </div>
            <div>
                <Link to="/TasksDescription/3">Task #3 - render-props</Link>
            </div>
            <div>
                <Link to="/TasksDescription/4">Task #4 - Tooltip</Link>
            </div>
            <div>
                <Link to="/TasksDescription/5">Task #5 - custom hooks</Link>
            </div>

            <Outlet />
        </div>
    )
};

const RouterApp = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Task1" element={<Task1 />} />
                <Route path="/Task2" element={<Task2 />} />
                <Route path="/Task3" element={<Task3 />} />
                <Route path="/Task4" element={<Task4 />} />
                <Route path="/Task5" element={<Task5 />} />
                <Route path="/TasksDescription" element={<TasksDescription />}>
                    <Route path=":taskId" element={<TaskId />} />
                </Route>
                <Route path="/*" element={<Navigate to="/" />} />                
            </Routes>
        </div>
    )
}

export default RouterApp
