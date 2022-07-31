import axios from "axios";
import{ useForm} from "react-hook-form";
import Error from "./Error";
import Success from "./Success";
import { useRouter } from "next/router";
import { useState } from "react";
import Invalido from "./Invalido";


export default function DoacaoPc(){

//Identificadores,valores,rotas
const router=useRouter();
const{register,handleSubmit,setValue}=useForm()
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phone,setPhone]=useState('');
const[zip,setZip]=useState('');
const[city,setCity]=useState('');
const[state,setState]=useState('');
const[streetAddress,setStreet]=useState('');
const[number,setNumber]=useState('');
const[complement,setComplement]=useState('');
const[neighborhood,setDistrict]=useState('');
const[type,setType]=useState('');
const[condition,setCondition]=useState('');
const[deviceCount,setDevice]=useState(0);
const[Loading,setLoading]=useState(false);


//Busca Cep

function Cep(e){

const cep =e.target.value.replace(/\D/g,'');

setLoading(true)
axios.get(`https://ws.apicep.com/cep/${cep}.json`)
.then( 
(data)=>{ 
  console.log(data);
  setValue('streetAddress',data.data.address);
  setValue('neighborhood',data.data.district);
  setValue('city',data.data.city);
  setValue('state',data.data.state);
  setLoading(false)
  
  if(data.data.status===400){
  alert('CEP inválido ou muitas ou muitas requisições feitas')}
 document.getElementById('number').focus();
  }
).catch(
(erro)=>{
  console.log(erro)
})}


//Função Submit 
function onSubmit(send){
const data={
    name:name,
    email:email,
    phone:phone,
    zip:zip,
    city:city,
    state:state,
    streetAddress:streetAddress,
    number:number,
    complement:complement,
    neighborhood:neighborhood,
    deviceCount:deviceCount,
    devices: [
        {type:type, condition:condition}]
  }

axios.post('https://doar-computador-api.herokuapp.com/donation',data)
.then(()=>router.push('/Success'))
.catch((erro)=> {

if(erro==400){
  router.push('/Invalido')
}else{
router.push('/Error')
}
}
)}

//Estrutura do Form Devices
const estrutura=(<fieldset key={type}>
    <legend>Devices</legend>
        <select name='type' onChange={(e)=>setType(e.target.value)} required>
            <option {...register("type")} value='notebook'>Notebook</option>
            <option {...register("type")} value='desktop'>Desktop</option>
            <option {...register("type")} value='netbook'>Netbook</option>
            <option {...register("type")} value='screen'>Monitor</option>
            <option {...register("type")} value='printer'>Impressora</option>
            <option {...register("type")} value='scanner'>Scanner</option>
        </select>
        
        <br/>
        <br/>

        <input name='condition' onChange={(e)=>setCondition(e.target.value)} {...register("condition")} type='radio' value='working' required/><label>Tem todas as partes, liga e funciona normalmente</label><br/>
        <input name='condition' onChange={(e)=>setCondition(e.target.value)} {...register("condition")} type='radio' value='notWorking' required /><label>Tem todas as partes, mas não liga mais</label><br/>
        <input name='condition' onChange={(e)=>setCondition(e.target.value)} {...register("condition")} type='radio' value='broken'  required/><label>Faltam peças, funciona só as vezes ou está quebrado</label><br/>
  </fieldset>
  );

//Função de Add a estrutura através do Botão 
const[devices,setDevices]=useState([{device:[estrutura]}]);
function add(e){
e.preventDefault()
setDevices([...devices,{device:estrutura}])
}



return(
//Form-1
<div>
<form onSubmit={handleSubmit(onSubmit)}>
  <fieldset>
    <legend>Dados do doador</legend>
    <label htmlFor="name">Nome Completo</label><br/>
    <input type="text" name='name' {...register(" name")} placeholder='Ex: João Pedro' required onChange={(e)=>setName(e.target.value)}/><br/><br/>
    
    <label htmlFor="email">Email</label>
    <p1 style={{fontSize:'0.7em'}}> (Opcional)</p1><br/>
    <input type="email" name='email' {...register("email")} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
   
    <label htmlFor="phone">Telefone</label><br/>
    <input type="tel" name='phone' {...register("phone" )}  maxLength='12' minLength='11' placeholder="DDD+900000000" required pattern="[0-9]{2}[0-9]{4,6}[0-9]{3,4}$" title="Não é permitido usar caracteres especiais com @,#,$,%,-,* e espaço não é permitido!" onChange={(e)=>setPhone(e.target.value)}/> <br/><br/>

    <label htmlFor="zip">CEP</label><br/>
    <input type="text" name='zip' {...register("zip",{})} onBlur={Cep}   placeholder='00000000' required  minLength='8' maxLength='8' pattern="[0-9]{8}$" title='não colocar caracteres especiais e letras,somente números' onChange={(e)=>setZip(e.target.value)}/><br/>
    <a href="https://cepdarua.net" style={{cursor:'pointer',fontSize:'0.8em'}} target='blank'>Não sei meu CEP</a><br/>
    {
      Loading && <>Loading</>
}
    
    <br/><label htmlFor="city">Cidade</label><br/>
    <input type="text" name='city' {...register("city")} required onChange={(e)=>setCity(e.target.value)}/><br/><br/>
    
    <label htmlFor="state">Estado</label><br/>
    <input type="text" name='state' {...register("state")} required onChange={(e)=>setState(e.target.value)}/><br/><br/>
   
    <label htmlFor="streetAddress">Rua</label><br/>
    <input type="text" name='streetAddress' {...register("streetAddress")} required onChange={(e)=>setStreet(e.target.value)}/><br/><br/>
    
    <label htmlFor="number">N°</label><br/>
    <input type="text" name='number' id ='number' {...register("number")} placeholder='1,2,3...'required pattern="[0-9]+$" onChange={(e)=>setNumber(e.target.value)}/><br/><br/>
    
    <label htmlFor="complement">Complemento</label>
    <p1 style={{fontSize:'0.7em'}}> (Opcional)</p1><br/>
    <input type="text" name='complement' {...register("complement")} placeholder='Apto' onChange={(e)=>setComplement(e.target.value)}/><br/><br/>
    
    <label htmlFor="neighborhood">Bairro</label><br/>
    <input type="text" name ='neighborhood' {...register("neighborhood")} required onChange={(e)=>setDistrict(e.target.value)}/><br/><br/>

    <label htmlFor="deviceCount" >Quantidade de dispositivo</label><br/>
<input  type="number" name='deviceCount'{...register("deviceCount")}   min='1' max='999' required  onChange={(e)=>setDevice(e.target.value)}/><br/><br/>
{devices.map((dev,i)=>(
<div key={i}>{dev.device}</div>
))}
<br/>
<p1>Adicione a quantidade de form Devices que foi inserida em <br/>(Quantidade de Dispositivo)</p1><br/><br/>
<button onClick={add}>Adicionar</button>
<br/><br/>
    <input type='submit' style={{color:'black',borderRadius:'0.3em',backgroundColor:'aliceblue',width:'7em',height:'2em'}} />
    </fieldset>
   </form>
  
  </div> 
)

}
  

