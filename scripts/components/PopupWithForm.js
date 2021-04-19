//import Popup from './Popup.js';

//класс PopupWithForm, который наследует от Popup

export default class PopupWithForm extends Popup {
    constructor() {
    }

    //Перезаписывает родительский метод setEventListeners.
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика
    // иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {}

    //приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {}


    //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {}
}

//Для каждого попапа создавайте свой экземпляр класса PopupWit