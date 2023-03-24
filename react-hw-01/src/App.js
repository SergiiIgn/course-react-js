// 
import React from 'react';
import './App.css';

const Home = () => <div>Home page</div>; 

const News = () => <div>News page</div>;
  
const CallBack = () => <div>CallBack page</div>;

const Contacts = () => <div>Contacts page</div>;

const menu = [
  {
    id: "01",
    title: "Home",
    href: "#",
    page: "home"
  },
  {
    id: "02",
    title: "News",
    href: "#",
    page: "news"
  },
  {
    id: "03",
    title: "CallBack",
    href: "#",
    page: "callBack"
  },
  {
    id: "04",
    title: "Contacts",
    href: "#",
    page: "contacts"
  }
];

const PAGES = {
  home: <Home />,
  news: <News />,
  callBack: <CallBack />,
  contacts: <Contacts />
};

class App extends React.Component {
  state = { currentPage: "home" }

  onClick = (id) => {
    this.setState({ currentPage :  menu.find(menu => menu.id === id).page });
  }

  render() {
    return <div className='App'>
      <nav>
        {menu.map(({ href, title, id }) => (
          <a 
            className='App-link'
            href={href}
            onClick={() => this.onClick(id)}
            key={id}
          >
            {title}
          </a>
        ))}
      </nav>   
      <div>
          {PAGES[this.state.currentPage]}
      </div>  
    </div>
  }
  
}

export default App;