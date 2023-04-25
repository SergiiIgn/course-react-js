const TaskDescr1 = () => {
    return(
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
export default TaskDescr1;