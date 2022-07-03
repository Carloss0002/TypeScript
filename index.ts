/*
interface IAnimal{
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    executarRugido(altura:number): void
}

type IAnimal = {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    domesticos: boolean
  
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

interface ICanino extends IAnimal{
       porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = ICanino | IFelino

const animal: IDomestico = {
     domesticos: true,
     nome: 'Cachorro',
     porte: 'medio',
     tipo: 'terrestre',
     visaoNoturna: false,
}

const texto = document.getElementById('texto') as HTMLInputElement;

texto.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
});


// function adicionarItemFimLista<NaoSei>(array: any[], valor: NaoSei){
//     return array.map(item => item + valor)
// }

// console.log(adicionarItemFimLista(['a', 'b', 'c'], 'd'))

interface User{
    id: string;
    email: string;
    cargo?: 'gerente' | 'surpervisor'
}



function redrection(user: User){
   if(user.cargo){
       
   }
}

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteRead = {
    readonly[K in keyof Cachorro] : Cachorro[K]
}

class meuCachorro implements Cachorro{
    nome;
    idade;

    constructor(idade, nome){
         this.idade = idade
         this.nome = nome
    }
}

const cao = new meuCachorro('Apolo', 14)

cao.idade = 8

console.log(cao)

*/
import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou')
    }
})

$('body').novaFuncao()
