import './App.css';

function Header(props){
  return <header>
            <h1>
              <a href="#">{ props.title }</a>
            </h1>
          </header>
}
function Nav(props){
  let navList = new Array();
  for(let idx=0;idx<props.topics.length;idx++){
    navList.push(<li key={ idx }><a href="#">{ props.topics[idx].title }</a></li>);
    // navList[idx]=<li key={idx}><a href="#">{ props.topics[idx].title }</a></li>
  }
  return <nav>
          <ul>            
            { navList }
          </ul>
        </nav>
}
function Article(props){
  return <article>
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
          </article>
}


function App() {  
  let topic = [
    {title:'HTML'},
    {title:'CSS'},
    {title:'javaScript'}
  ]
  return (    
    <div className="App">
      <section className="wrap">                      
        <Header title="WEB"/>        
        <Nav topics = { topic }/>
        <Article title="WEB" content="webwebwebwebweb"/>
      </section>
    </div>
  );
}

export default App;