import "../styles/task_6.css";
import prev  from "../icons/previous.png"

import { Routes, Route, Navigate, useNavigate, Link, Outlet, NavLink, useParams } from "react-router-dom";

import { menuData } from "../data/menuData";
import { menuDescription } from "../data/menuDescriptionData";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="container header flex">
            <button  className="button_prev" onClick={() => navigate(-1)}>
                {<img style={{width: 100 + "%"}} src={prev} alt="prev" />}
            </button>
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/" className="link">Main </NavLink>
            
            {menuData.map(elem => (
                <NavLink key={elem.id} style={({ isActive }) => {
                    return {
                        color: isActive ? "blue" : "",
                    };
                }} to={elem.pathElem} className="link">{elem.textElem} </NavLink>
            ))}
            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "blue" : "",
                };
            }} to="/TasksDescription" className="link">Tasks Description </NavLink>
        </header>
    )
}

const Main = () => {
    return <h1 className="container flex">

        This is the solution to the 4th homework by Sergii Ignatenko
        </h1>;
};

const TaskId = () => {
    const { taskId } = useParams();
  
    const CurrentDescriptionComponent = menuDescription.find(item => item.id === Number(taskId)).description;
    
    if (!CurrentDescriptionComponent) {
      return <Navigate to="/" />;
    };
    
    return <CurrentDescriptionComponent />;
  };

const TasksDescription =() => {
    return ( 
        <div>
            <h3>Tasks Description</h3>
            {menuDescription.map(elem => (
                <div key={elem.id}>
                <Link to={elem.linkDescr}>{elem.titleDescription}</Link>
                </div>
                 ))}

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
                {menuData.map((itemMenu) => (
                     <Route key={itemMenu.id} path={itemMenu.pathElem} element={<itemMenu.taskElem />} />
                ))}
                <Route path="/TasksDescription" element={<TasksDescription />}>
                    <Route path=":taskId" element={<TaskId />} />
                </Route>
                <Route path="/*" element={<Navigate to="/" />} />                
            </Routes>
        </div>
    )
}

export default RouterApp
