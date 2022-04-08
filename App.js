// ============================= 여기가 원본 시작 ==================//
// import './App.css';

// //Section component
// function Section(props){
//   return (
//     <section>
//       <h2>{props.title}</h2>
//       <p>
//         {props.content}
//       </p>
//     </section>
//   );
// }

// //Header component
// function Header(props){//poiu=>props=>Objec
//   return (
//     <header>
//       <h1 className="mainTit"><a href="/" onClick={(event)=>{
//         event.preventDefault();
//         props.onMsClick();
//       }}>{props.title}</a></h1>
//     </header>
//   );
// }

// //Nav component
// function Nav(props){
//   let navList = [];
//   // for(let idx=0;idx<props.topics.length;idx++){
//   //   navList[idx]=<li><a href="#">{props.topics[idx].title}</a></li>
//   // }
//   props.topics.map((item)=>{
//     //navList[idx]=<li><a href="#">{item.title}</a></li>;
//     navList.push(
//                   <li key={item.itemNum}>
//                     <a id={item.itemNum} href={'/detail/' + item.itemNum} onClick={
//                       (event)=>{
//                         event.preventDefault();
//                         props.onMsClick(event.target.id);
//                       }
//                     }>{item.title}</a>
//                   </li>
//                 );    
//   });
//   return (
//     <nav>
//       <ol>        
//         {navList}    
//       </ol>
//     </nav>
//   );
// }
// function App() {
//   let topic = [
//     {title:'HTML',itemNum:'0005',content:'html 상품 설명'},
//     {title:'CSS',itemNum:'0001',content:'css 상품 설명'},
//     {title:'javaScript',itemNum:'0004',content:'javaScript 상품 설명'},
//     {title:'qwusdjdfl',itemNum:'0002',content:'qwusdjdfl 상품 설명'},
//     {title:'eryufsdjhklwa',itemNum:'0006',content:'eryufsdjhklwa 상품 설명'},
//     {title:'xcyiehhgslk',itemNum:'0010',content:'xcyiehhgslk 상품 설명'},
//   ]
//   return (
//     <div className="App">      
//       <Header title="WEB" onMsClick={()=>{console.log('welcome')}}/>
//       <Nav topics={topic} onMsClick={(id)=>{
//         alert(id);
//       }}/>      
//       <Section title="WEB이란 무엇인가?" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sapiente quaerat doloremque consequatur. Quam quasi similique dolorum recusandae ea nesciunt eum, voluptatibus, perferendis hic asperiores minus enim dolore dolores. Nemo! Suscipit cum accusantium totam animi, saepe facere maxime ipsa, officiis libero tempora aspernatur at sed inventore esse quos iusto. Placeat perspiciatis eos ipsam quisquam iusto sed! Perspiciatis eos laboriosam culpa! Libero perferendis dolorum illo odio debitis vel dicta, animi nemo facilis temporibus nam expedita, neque officiis! Vero magnam incidunt facere, eaque molestias quo ab rerum quaerat cupiditate dicta delectus dolorum! Necessitatibus labore eaque repellat accusantium? Repudiandae atque, recusandae provident libero neque explicabo, autem nisi, delectus unde iusto dolores esse impedit. Quidem corrupti quo incidunt commodi placeat quod repudiandae. Fuga, numquam. Neque eum voluptatibus fuga architecto omnis esse quisquam dolores vero necessitatibus hic! Illum nihil nobis assumenda minus, eos quidem nulla pariatur nemo reiciendis, earum ex, quia maiores iure quibusdam consectetur. Ut ad nulla autem eos amet reprehenderit, laborum ea aspernatur excepturi rem maxime, eum quae. Laboriosam reiciendis, ipsa ut, eos tenetur illo vero consequuntur odio temporibus aliquid adipisci porro modi? Recusandae et, perferendis inventore officiis dolor vero corporis cumque illo, id reprehenderit distinctio laboriosam. Libero ab, eos ad necessitatibus quam ex veritatis quis doloribus non ullam magnam? Esse, tempora fuga. Doloribus in magnam impedit velit nihil vel quam eveniet sunt fuga soluta excepturi consequatur reiciendis quisquam numquam recusandae dolorem vitae blanditiis error, ratione tempora ad rem voluptates, dolores eius? Natus! Quo ipsa laudantium fugit, blanditiis laboriosam, cum fuga, veritatis consequuntur libero culpa dolore porro asperiores a iure eum et modi. Animi esse sit voluptatem vitae error amet et consequuntur nam! Consequuntur ad vel sed et culpa inventore, iste quae laudantium dolorem, corporis, nemo repudiandae provident labore porro saepe corrupti eos eius quidem repellat blanditiis? Deleniti, amet unde. Quibusdam, aliquam consequatur."/>      
//     </div>    
//   );
// }

// export default App;


//=================================여기가 원본 끝 ======================================//




// ============================ state start =========================//
// import './App.css';
// import {useState} from 'react';

// function App() {  
//   let oldMode = ['html','css','javascript'];
//   let [mode,modeChange] = useState(oldMode);  
//   return (    
//     <div className="App">  
//       <button onClick={
//         (event)=>{
//           event.preventDefault();          
//           modeChange(oldMode);
//           console.log(mode);
//         }
//       }>클릭</button>    
//       <ol>
//         <li>
//           <a href="/" onClick={(e)=>{
//             e.preventDefault();
//             let newMode = [...mode];
//             newMode[0] = '에이치티엠엘';
//             modeChange(newMode);            
//           }}>{mode[0]}</a>
//         </li>
//         <li>
//           <a href="/" onClick={(e)=>{
//             e.preventDefault()
//             let newMode = [...mode];
//             newMode[1] = '씨에스에스';
//             modeChange(newMode);    
//           }}>{mode[1]}</a>
//         </li>
//         <li>
//           <a href="/" onClick={(e)=>{
//             e.preventDefault();
//             let newMode = [...mode];
//             newMode[2]='자바스크립트';
//             modeChange(newMode);
//           }}>{mode[2]}</a>
//         </li>
//       </ol>      
//     </div>    
//   );
// }

// export default App;


//====================== state end ===================================//


//========================= State Props Component start ==========================//

import {useState} from 'react';
function Modal(props){
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  );
}
function App(){
  let [btnNum,btnNumChange]=useState(0);
  let [제목,제목변경] = useState(['html','css','jsvascript']);
  let [내용,내용변경] = useState(['qwertyuiopsdfghjtyuivbnmghjuio','조ㅓ롸ㅓㅗㅎㅇㄴ로마ㅗ 노어라ㅗ재ㅑㅗㄴ망ㄹ','ㄱ뎌노ㅗㅎ라ㅗ핮돵ㄴ로ㅛㅅ고ㅓㅏㄴㅁㅇㄹ']);
  console.log(btnNum);
  return (
    <div className="App">
      <button onClick={()=>{        
        btnNumChange(0);
      }}>버튼1</button>
      <button onClick={()=>{
        btnNumChange(1);
      }}>버튼2</button>
      <button onClick={()=>{
        btnNumChange(2);
      }}>버튼3</button>
      <Modal title={제목[btnNum]} content={내용[btnNum]}></Modal>
    </div>
  );
}

export default App;

