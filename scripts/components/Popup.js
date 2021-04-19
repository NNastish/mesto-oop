
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    //публичный метод - открывает попап
    open() {
        this._popup.classList.add(".popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    //публичный метод - закрывает попап
    close() {
        this._popup.classList.remove(".popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    //приватный метод - закрывает попап по ESC
    _handleEscClose(evt) {
        if (evt === 'Escape') {
            this._popup.classList.remove(".popup_opened");
        }

    }

    //публичный метод - добавляет слушатель клика иконке закрытия попапа
    setEventListeners() {
        this._popup.querySelector(".popup__close").addEventListener("click", () => this.close())
    }
}

//import Popup from "./components/Popup.js"

const PopupForm = new Popup(popups)
const PopupForm = new Popup(popups)

PopupForm.setEventListeners()