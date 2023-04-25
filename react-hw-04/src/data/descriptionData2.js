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
export default TaskDescr2