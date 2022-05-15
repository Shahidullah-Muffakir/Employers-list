const Person= (props)=>{
    return React.createElement('div',{},[
           React.createElement('h1',{},props.name),
           React.createElement('p',{},props.occupation),
       ])
   };

   const App=() => {
     return React.createElement('div',{},[
         React.createElement('h1',{class: 'title'},'React is rendered'),
         React.createElement( Person,{ name:"shahidullah",occupation:"developer"},null),
         React.createElement( Person,{ name:"Ayaan",occupation:"Doctor"},null),
         React.createElement( Person,{ name:"Mohammad",occupation:"Engineer"},null),
        
     ]) ; 
   }

   ReactDOM.createRoot(document.getElementById('root')).render(App())

   // ReactDOM.render(
   //     ReactcreateElement(App),
   //     document.getElementById('root')
   // )