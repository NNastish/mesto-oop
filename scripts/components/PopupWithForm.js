import Popup from './Popup.js';

//класс PopupWithForm, который наследует от Popup

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector(".popup__window");
        this._inputForm = this._form.querySelectorAll(".form__input");
        this._formSubmit = formSubmit;
        this._formReset = this._form.querySelector(".form")
        this.setEventListeners();
    }

    //приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {

        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputForm.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }


    //Перезаписывает родительский метод setEventListeners.
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика
    // иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
        });

        super.setEventListeners();
    }


    //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        this._formReset.reset();
        super.close();
    }
}