import './App.css';
import './components/css/toU.css';
import './components/css/about.css';
import BackMovie from './components/backMovie';
import Login from './components/login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ToU from './components/toU';
import About from './components/about';
import Shop from './components/shop';
import Club from './components/club';
import Join from './components/join';
import Business from './components/Business';
import Main from "./components/main";
import ShopItemDetail from './components/shopItemDetail';
import ClubDetail from './components/clubDetail';
import { useState } from 'react';


function App() {

  let navigate = useNavigate();

  let [userData, setUserData] = useState([
    {id:"dancingfrog.lee@gmail.com",
    pw:"aa1122aa.",
    name:"DYon"}
    ]);
  let [userName, setUserName] = useState("");

  let [items, setItems] = useState([
    {
        id: "pln001",
        itemName: "2022 낼나다이어리 (프로, 소프트레인보우)",
        content: "날짜형·프로·소프트레인보우",
        price: 12500,
        imgPath: "http://127.0.0.1:8898/images/planner-f1.png",
        imgPathB: "http://127.0.0.1:8898/images/planner-b1.png",
    },
    {
        id: "pln002",
        itemName: "2022 낼나다이어리 (프로, 크림그레이)",
        content: "날짜형·프로·크림그레이",
        price: 12500,
        imgPath: "http://127.0.0.1:8898/images/planner-f2.png",
        imgPathB: "http://127.0.0.1:8898/images/planner-b2.png",
    },
    {
        id: "pln003",
        itemName: "2022 낼나다이어리 (프로, 네온블랙)",
        content: "날짜형·프로·네온블랙",
        price: 12500,
        imgPath: "http://127.0.0.1:8898/images/planner-f3.png",
        imgPathB: "http://127.0.0.1:8898/images/planner-b3.png",
    },
]);

let [toUclubs, setToUclubs] = useState([
  {
      id:"01",
      clubName:"[10.3시작] 2U 독서 클럽 : 독서기록장으로 기억에 남는 독서 하기 beta",
      clubPrice:30000,
      content1: "2U 독서 클럽 참여를 위해서는 '낼나 독서기록장' 서식이 필요합니다.",
      content2: "이미 구매하신 분들은 그대로 사용해주시면 되고, 없으신 분들은 별도로 구매해주셔야 합니다. (서식을 무료로 증정해 드리지 않습니다.)",
      imgPath:"http://127.0.0.1:8898/images/nelnabook00.png",
      imgPathB:"http://127.0.0.1:8898/images/nelnabook01.png"
  },
  {
      id:"02",
      clubName:"[10.3시작] 2U 건강 클럽 : 럽.마.바로 건강한 변화 기록하기 beta",
      clubPrice:20000,
      content1: "2U 건강 클럽 참여를 위해서는 '럽마바디플래너' 서식이 필요합니다.",
      content2: "이미 구매하신 분들은 그대로 사용해주시면 되고, 없으신 분들은 별도로 구매해주셔야 합니다. (서식을 무료로 증정해 드리지 않습니다.)", 
      imgPath:"http://127.0.0.1:8898/images/luvma00.png",
      imgPathB:"http://127.0.0.1:8898/images/luvma01.png"
  },
  {
      id:"03",
      clubName:"[10.3시작] 2U 계획 클럽 : 슬대생으로 알찬 한 학기 준비하기 beta",
      clubPrice:20000,
      content1: "2U 계획 클럽 참여를 위해서는 '슬기로운 대학생활 플래너' 서식이 필요합니다.",
      content2: "이미 구매하신 분들은 그대로 사용해주시면 되고, 없으신 분들은 별도로 구매해주셔야 합니다. (서식을 무료로 증정해 드리지 않습니다.)",
      imgPath:"http://127.0.0.1:8898/images/myuniv00.png",
      imgPathB:"http://127.0.0.1:8898/images/myuniv01.png"
  },
  {
      id:"04",
      clubName:"[10.3시작] 2U 계획 클럽 : 낼나 플래너로 멋진 한 달 계획 세우기 beta",
      clubPrice:20000,
      content1: "2U 프로그램 참여가 최종 확정된 분들께 '낼나 증정용 서식'을 무료로 증정해 드립니다.",
      content2: "따라서, 유료 서식을 구매하지 않은 분들도 참여가 가능합니다.",
      imgPath:"http://127.0.0.1:8898/images/nelnada00.png",
      imgPathB:"http://127.0.0.1:8898/images/nelnada01.png"
  }
]);


  return(
    <div className="App">

      <Routes>
        <Route path="/" element={

          <div className="bgV" onClick={()=>{
            navigate("login");
            console.log('저장된 userData')
            console.log(userData);
          }}>
            <BackMovie/>
            <div className='vText'>
            <p>For better tomorrow</p>            
            </div>
          </div>
        }>
        </Route>
        <Route path='/login' element={
          <Login userName={userName} setUserName={setUserName} setUserData={setUserData} userData={userData}/>}/>
        <Route path='/join' element={<Join userName={userName} setUserName={setUserName} userData={userData} setUserData={setUserData}/>}/>
        <Route path='/toU' element={<ToU userName={userName} userData={userData}/>} >
                <Route path="" element={<Main/>} />
                <Route path="about" element={<About/>}/>
                <Route path="club" element={<Club toUclubs={toUclubs} setToUclubs={setToUclubs}/>}/>
                <Route path="club/:id" element={<ClubDetail toUclubs={toUclubs} setToUclubs={setToUclubs}/>}/>
                <Route path="shop" element={<Shop items={items} setItems={setItems}/>}/>
                <Route path="shop/product/:id" element={<ShopItemDetail items={items} setItems={setItems}/>}/>
        </Route>
        <Route path="/toU/businessInfo" element={<Business/>}/>
    </Routes>
    </div>
  )
}

export default App;
