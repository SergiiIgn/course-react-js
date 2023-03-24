// 
import React from 'react';
import './App.css';

class Home extends React.Component{
  render(){
  return <div>Home page</div>; 
  }
}

class News extends React.Component{
  render(){
  return <div>News page</div>; 
  }
}

class CallBack extends React.Component{
  render(){
  return <div>CallBack page</div>; 
  }
}

class Contacts extends React.Component{
  render(){
  return <div>Contacts page</div>; 
  }
}


const menu = [
  {
    id: "01",
    title: "Home",
    href: "#",
    page: <Home/>
  },
  {
    id: "02",
    title: "News",
    href: "#",
    page: <News/>
  },
  {
    id: "03",
    title: "CallBack",
    href: "#",
    page: <CallBack/>
  },
  {
    id: "04",
    title: "Contacts",
    href: "#",
    page: <Contacts/>
  }
]

class App extends React.Component {
  state = { currentPage: <Home/> }

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
          {this.state.currentPage}
      </div>  
    </div>
  }
  
}

export default App;