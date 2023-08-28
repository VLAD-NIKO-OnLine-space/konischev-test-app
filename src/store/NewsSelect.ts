import { makeAutoObservable } from "mobx";


class NewsSelect {

    selectNew : string = '1'
    userNotes : string[] = ['Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.'
    ]
    

    constructor(){
        makeAutoObservable(this)
    }

    addSelectNews(char: string) : void {
        this.selectNew = char
    }

    addNotes(char:string){
        this.userNotes.push(char)
    }
}


export default new NewsSelect()