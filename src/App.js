//mport logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/welcome';
import UsingJSX from './component/UsingJSX';
import ClassState from './component/ClassState';
import List from './component/List';
// import ParentComponent from './component/method and props/ParentComponent';
import Styling from './component/Styling/StyleSheet';
import Form from './component/form Handler/Form';
import LifeCycleA from './component/Life Circle Methods/LifeCycleA';
import LifeCycleB from './component/Life Circle Methods/LifecycycleB';
import Table1 from './component/Table/Table1';
import ParentComponent from './component/pureComponents/ParentComponent';
import Input from './component/Refs/Input';
import FocusInput from './component/Refs/FocusInput';
import FRInput from './component/Refs/FRInput';
import PortalDemo from './component/Portals/PortalDemo.js';
import FRParentInpu from './component/Refs/FRParentInpu';
import Hero from './component/ErrorHandler/Hero';
import ErrorBoundry from './component/ErrorHandler/ErrorBoundry';
import ClickCounter from './component/HOC/ClickCounter';
import HoverCounter from './component/HOC/HoverCounter';
import ClickCounter2 from './component/Render props/ClickCounter2';
import HoverCounter2 from './component/Render props/HoverCounter2';
import User from './component/Render props/User';
import Counter from './component/Render props/Counter';
import { Userprovider } from './component/Context/userContext';
import ComponentC from './component/Context/ComponentC';
import GetRequest from './component/HttpRequest/GetRequest';
import PostRequest from './component/HttpRequest/PostRequest';

function App() {
  return (
    <div className="App">
      {/* <UsingJSX/> */}
      {/* <Greet name="ReactJS"/> */}
      {/* <Greet name="Redux"/> */}
      {/* <Welcome name= "Something"></Welcome> */}
      {/* <Welcome name= "Lesson"></Welcome> */}
      {/* <List></List> */}
      {/* <ClassState/> */}
      {/* <ParentComponent/> */}
      {/* <Styling render={true}/> */}
      {/* <LifeCycleA/> */}
      {/* <LifeCycleB/> */}
      {/* <Form/> */}
      {/* <Table1/> */}
      {/* <ParentComponent/> */}
      {/* <Input/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInpu/> */}
      {/* <PortalDemo/> */}
      {/* <Hero heroName="Thor"/> */}
      {/* <Hero heroName="Joker"/> */}
      {/* <Hero heroName="Batman"/> */}
      {/* <ErrorBoundry><Hero heroName="Thor"/></ErrorBoundry> */}
      {/* <ErrorBoundry><Hero heroName="joker"/></ErrorBoundry> */}
      {/* <ErrorBoundry><Hero heroName="Batman"/></ErrorBoundry> */}
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* <ClickCounter2/> */}
      {/* <HoverCounter2/> */}
      {/* <User render={(isloggedIn) => isloggedIn ? "TONY" : "User"}/> */}
      {/* <Counter render = {(count, incrementCount) => ( 
        <ClickCounter2 count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <Counter render = {(count, incrementCount) => ( 
        <HoverCounter2 count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <Userprovider value="Tony"> */}
        <ComponentC/>
      {/* </Userprovider> */}
      <GetRequest/>
      <PostRequest/>
    </div>
  );
}

export default App;
