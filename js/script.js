console.log('JS OK!');


const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            }
        ],
        index: 0,
        newMessage: '',
        searchBar: '',
        isTyping: false
    },
    methods: {
        //cerco avatar users dinamicamente
        findAvatar(contact) {
            return `img/avatar${contact.avatar}.jpg`;
        },
        findUserAvatar() {
            return `img/avatar${this.contacts[this.index].avatar}.jpg`;
        },
        //funzione per far ritornare il val dell'ultimo messaggio
        getLastMessage(contact) {
            const messages = contact.messages;
            const lastMessage = (messages.length > 0) ? messages[messages.length - 1].message : '';
            return lastMessage;
        },
        //ottengo l'ora dell'ultimo messaggio inviato splittando i dati in arrays
        getLastMessageDate(message) {

            let date = message.date;
            let hours = date.split(' ')[1];
            let time = hours.split(':');
            return time[0] + ':' + time[1];

        },
        //check degli status dei messaggi, assegnando una classe in base al valore
        textStatus(message) {
            if (message.status === 'sent') {
                return 'sent';
            } else {
                return 'received';
            }
        },
        //assegnazione di una classe al contatto cliccato in lista
        activeUser(i) {
            if (i === this.index) {
                return 'active';
            }
        },
        selector(i) {
            this.index = i;
        },
        //funzione per inviare un nuovo messaggio in chat con keyUp.enter
        //tramite il valore raccolto da input,
        //creo un nuovo formato data, e un nuovo oggetto da pushare nell'array
        //con assegnazioni di valori, per poterlo identificare come sent
        //e tramite un setTimeout generare un secondo oggetto, come risposta
        //che si indentifica come valore received
        //input non invia se non ha almeno una lettera, cotrollo spazi vuoti
        //reset ad ogni invio  
        sendNewMessage() {
            let time = new Date();
            let today = time.getUTCMonth() + 1 + '/' + time.getUTCDate() + '/' + time.getUTCFullYear();
            let now = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
            let currentTime = today + ' ' + now;
            let newMess = {
                date: currentTime,
                message: this.newMessage,
                status: 'sent'
            }
            let checkMessage = this.newMessage.trim();
            if (checkMessage.length > 0) {
                this.contacts[this.index].messages.push(newMess);

                this.isTyping = true;
                setTimeout(() => {
                    let answer = {
                        date: currentTime,
                        message: 'OK!',
                        status: 'received',
                    }
                    this.contacts[this.index].messages.push(answer);
                    this.isTyping = false;
                }, 2000);
            }
            this.newMessage = '';
        },
        //funzione per filtrare i risultati di ricerca user tramite valore input
        filteredChat() {
            let search = this.searchBar.toLowerCase();
            for (let i = 0; i < this.contacts.length; i++) {
                let userName = this.contacts[i].name.toLowerCase();
                if (userName.includes(search)) {
                    this.contacts[i].visible = true;
                    console.log(this.contacts[i].name + ' ' + this.contacts[i].visible);
                } else {
                    this.contacts[i].visible = false;
                    console.log(this.contacts[i].name + ' ' + this.contacts[i].visible);
                }
            }
        },
        //funzioni per accedere al dropdown menu
        //ho aggiunto una nuova key agli oggetti contenuti in messagges
        dropDown(pointer) {
            this.contacts[this.index].messages[pointer].dropdownMenu = true;
        },
        resetDrop(pointer) {
            this.contacts[this.index].messages[pointer].dropdownMenu = false;
        },
        //funzione per rimuovere il messaggio selezionato
        //tramite il dropdown menu
        deleteMessage(pointer) {
            this.contacts[this.index].messages.splice(pointer, 1);
        }
    }
});

