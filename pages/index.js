export async function getStaticProps() {
   
  const data= await fetch('https://doar-computador-api.herokuapp.com/');
  const alive= await data.json()

  return{
    props:{alive}
  }
}


export default function DoacaoPc({alive}){

  if(alive.alive==true){
    return(
      <div>
        <h1>Doação de computadores usados</h1>
        <p>API online</p>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>Doação de computadores usados</h1>
        <p>API offline</p>
      </div>
    )
  }
}
