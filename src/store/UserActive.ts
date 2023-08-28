import { makeAutoObservable } from "mobx";



class UserActive {

    userName : string = 'Кравцова Александра'
    userInfo ?: string = '27 лет, жен'
    userAvatar ?: string = './avatars/1.png'

    constructor(){
        makeAutoObservable(this)
    }

    selectUser(userName: string, info: string, avatar?: string){
        this.userName = userName
        this.userInfo = info
        this.userAvatar = avatar
    }
}


export default new UserActive()