import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/FunctionalComponent/Greet";
import { GreetN } from "./components/FunctionalComponent/GreetN";
import Welcome from "./components/classcomponents/Welcome";
import WelcomeN from "./components/classcomponents/WelcomeN";
import Hello from "./components/WithoutJSX/Hello";
import HelloN from "./components/WithoutJSX/HelloN";
import HelloW from "./components/withjsx/ClassNamejsx";
import HelloNW from "./components/withjsx/ClassNameN";
import GreetProp from "./components/functProps/props";
import PropsN from "./components/functProps/PropsN";
import Classprops from "./components/classProps/ClassProps";
import ClasspropsN from "./components/classProps/ClassPropsN";
import Message from './components/state/Message'
import MessageN from './components/state/MessageN'
import Counter from "./components/useState/UseState";
import UseStateN from "./components/useState/UseStateN";
import GreetFunction1, { GreetFunction2 } from "./components/destructingFunctComp/DestructureW1"
import DestructureClass from "./components/destructureClassComp/DestructureClass";
import DestructFunct from "./components/destructingFunctComp/DestructFunct";
import DestructClass from "./components/destructureClassComp/DestructClass";
import FunctionClick from "./components/eventHandling/FunctionClick";
import FunctionClickN from "./components/eventHandling/FunctionClickN";
import ClassClick from "./components/eventHandling/ClassClick";
import ClassClickN from "./components/eventHandling/ClassClickN";
import EventBind from "./components/eventBind/EventBind";
import EventBindConstructor from "./components/eventBind/EventBindConstructor";
import EventBindClassArrow from "./components/eventBind/EventBindClassArrow";
import ParentComponents from "./components/method_as_props/ParentComponents";
import ParentComponentN from "./components/method_as_props/ParentComponentN";
import UserGreet from "./components/conditionalRendering/UserGreet";
import IfElseRender from "./components/conditionalRendering/IfElseRender";
import ElementVariable from "./components/conditionalRendering/ElementVariable";
import TernaryOperator from "./components/conditionalRendering/TernaryOperator";
import ShortCircuitOperator from "./components/conditionalRendering/ShortCircuitOperator";
import ListRender from "./components/listRendering/ListRender";
import ListRenderN from "./components/listRendering/ListRenderN";
import KeysInList from "./components/listAndKeys/KeysInList";
import KeysInListN from "./components/listAndKeys/KeysInListN";
import IndexAsKey from "./components/indexasKey/IndexAsKey";
import IndexKey from "./components/indexasKey/IndexKey";
import CounterClass from "./components/reactHooks/useState/CounterClass";
import HookCounter from "./components/reactHooks/useState/HookCounter";
import HookN from "./components/reactHooks/useState/HookN";
import HookCounterTwo from "./components/reactHooks/prevStateWithuseState/HookCounterTwo";
import HooksCounterThree from "./components/reactHooks/objectWithuseState/HooksCounterThree";
import HooksCounterFour from "./components/reactHooks/arrayWithuseState/HooksCounterFour";
import HookCounterOne from "./components/reactHooks/useEffect/HookCounterOne";
import FunctionalComponentCount from "./components/reactHooks/conditionalRunEffect/FunctionalComponentCount";
import ClassCounter from "./components/reactHooks/conditionalRunEffect/ClassCounter";
import ClassMouse from "./components/reactHooks/runEffectOnlyOnce/ClassMouse";
import HookMouse from "./components/reactHooks/runEffectOnlyOnce/HookMouse";
import MouseContainer from "./components/reactHooks/useEffectWithCleanup/MouseContainer";
import ReactLifeCycleA from "./components/reactLifeCycle/componentMount/ReactLifeCycleA";
import ReactLifeCycleUA from "./components/reactLifeCycle/componentUpdate/ReactLifeCycleUA";
import PostList from "./components/httpRequests/PostList";
import PostForm from "./components/httpRequests/PostForm";

function App() {
  return (
    <div className="App">
      {/* <Greet/>
     <GreetN/>
     <Welcome/>
     <WelcomeN/>
     <Hello/> 
     <HelloN/>
     <HelloW/>
     <HelloNW/> */}
      {/* <GreetProp name="Bruce" heroName="Batman">
       <p>This is children prop</p>
     </GreetProp>
     <GreetProp name="Clark" heroName="Superman">
     <button>Action</button>
</GreetProp>
     <GreetProp name="Diana" heroName="Wonderwoman"/>
     <PropsN name="Tomato" val='5'/>
     <PropsN name= "cabbage" val ='10'/> */}
      {/* <Classprops name="Bruce" heroName="Batman" />
      <Classprops name="Diana" heroName="Wonderwoman" />
      <ClasspropsN name="Naveen" heroName="Shershaha">
        <p>Hey, I am from Pune Maharashtra</p>
      </ClasspropsN> */}
  {/* <Message/> */}
  {/* <MessageN/> */}
  {/* <Counter/> */}
{/* <UseStateN/>
<GreetFunction1 name='clark' heroName='Superman'/>
<GreetFunction2 name='Bruce' heroName='Batman'/> */}
{/* <DestructureClass name='Vikram' heroName='Shershaha'/> */}
{/* <DestructFunct name="Naveen" designation="engineer"/> */}
    {/* <DestructClass name='Naveen' designation='engineer'/> */}
    {/* <FunctionClick/>
    <FunctionClickN/>
    <ClassClick/>
    <ClassClickN/> */}
    {/* <EventBind/> */}
    {/* <EventBindConstructor/> */}
    {/* <EventBindClassArrow/> */}
    {/* <ParentComponents/>
    <ParentComponentN/> */}
   {/* <UserGreet/> */}
{/* <IfElseRender/> */}
{/* <ElementVariable/> */}
{/* <TernaryOperator/> */}
{/* <ShortCircuitOperator/> */}
{/* <ListRender/> */}
{/* <ListRenderN/> */}
{/* <KeysInList/> */}
{/* <KeysInListN/> */}
{/* <IndexAsKey/> */}
{/* <IndexKey/> */}
{/* <CounterClass/> */}
{/* <HookCounter/> */}
{/* <HookN/> */}
{/* <HookCounterTwo/> */}
{/* <HooksCounterThree/> */}
{/* <HooksCounterFour/> */}
{/* <HookCounterOne/> */}
{/* <FunctionalComponentCount/> */}
{/* <ClassCounter/> */}
    {/* <ClassMouse/> */}
    {/* <HookMouse/> */}
    {/* <MouseContainer/> */}
{/* <ReactLifeCycleA/> */}
{/* <ReactLifeCycleUA/> */}
{/* <PostList/> */}
<PostForm/>
    </div>
  );
}

export default App;
