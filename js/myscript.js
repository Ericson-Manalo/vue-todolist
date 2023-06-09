/*> Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

    text, una stringa che indica il testo del todo
    done, un booleano (true/false) che indica se il todo è stato fatto oppure no
> MILESTONE 1
> Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
> Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
> Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.*/

const { createApp } = Vue;
createApp({
    data(){
        return{
            toDoList: [
                {
                todo: 'Dare da mangiare al cane',
                done:true,
                },
                {
                todo: 'Andare in palestra',
                done:false,
                },
                {
                todo: 'Fare la spesa',
                done:false,
                },
            ],

            newToDo : '',
        }
    },
    methods: {

        toDoRemover(toDoElement){
            this.toDoList.splice(toDoElement, 1);
        },

        toAddToDoList(){
            const newToDo={
                todo : this.newToDo,
                done : false
            }
            if (this.newToDo != 0){
            this.toDoList.push(newToDo);

            }
            this.newToDo ='';
        },

        statusCheck(indexElement){
            this.toDoList[indexElement].done = !this.toDoList[indexElement].done;
        }
        


        
    }
}).mount('#app');