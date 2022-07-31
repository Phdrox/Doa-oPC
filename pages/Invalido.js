import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Invalido(){

    var router=useRouter();
return(<div>
      <p1>Erro 400</p1>
    <h1>Dados Inválidos ou Faltando</h1>
    <Link href={'/'}>
     <button>Voltar</button>
    </Link>
    </div>
    )

}