import { initialCards, object } from "../utils/variables.js";
import { openPopup, closePopup } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";



//-------------------------ТЕМПЛЭЙТ-----------------------------

const cardsContainer = document.querySelector(".cards"); //выбираем дивчик с карточками в тэмплэйт

//--------------------ФУНКЦИИ------------------------

function fillEditProfileInputs() {
    nameInput.value = profileTitle.textContent; //копирование заголовка
    aboutInput.value = profileText.textContent; //копирование параграфа
}

function openEditProfilePopup() {
    fillEditProfileInputs();
    openPopup(popupEditProfile);
}

function submitProfileForm(evt) {
    evt.preventDefault(); //отмена стандартного реагирования браузера на событие *поправка от ревьюера
    profileTitle.textContent = nameInput.value; // меняем заголовок
    profileText.textContent = aboutInput.value; // меняет параграф
    closePopup(); // закрываем попап
}
function createCard() {
    const card = new Card({ name: cardNameInput.value, link: cardLinkInput.value }, "#template");
    return card.generateCard();
}

function submitViaTemplate(evt) {
    evt.preventDefault();

    const cardElement = createCard();
    cardsContainer.prepend(cardElement);
    cardNameInput.value = ""; //для пустого поля
    cardLinkInput.value = "";
    closePopup(); //закрываем попап
}

function runValidation(data) {
    const formList = Array.from(document.querySelectorAll(data.formSelector)); // делаем массив

    formList.forEach((formElement) => {
        const validatorEntity = new FormValidator(data, formElement);
        validatorEntity.enableValidation();
    });
}

//-------------------ВЫЗОВ ФУНКЦИИ-------------------------------

const profileFormValidator = new FormValidator(object, popupEditProfile);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(object, popupAddCard);
cardFormValidator.enableValidation();

// вместо addInitialCards
initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, "#template");
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();

    // Добавляем в DOM
    cardsContainer.append(cardElement);
});

//-------------------СЛУШАЛКИ СОБЫТИЙ-----------------------------

profileEditButton.addEventListener("click", function () {
    openEditProfilePopup();
}); //действие "клик по кнопке редактирования профиля"

profileAddButton.addEventListener("click", function () {
    cardFormValidator.disableSubmitButton();
    openPopup(popupAddCard);
}); //действие "клик по кнопке добавить фото [+] "

popupCloseButtons.forEach((button) =>
    button.addEventListener("click", function () {
        closePopup();
    })
); //действие "клик по кнопке, которое закрывает попапы (редактирования и добавления фото)"

buttonSaveProfileInfo.addEventListener("submit", submitProfileForm); //действие "клик отправить форму на смену данных в профиле редактирования"

buttonCreateCard.addEventListener("submit", submitViaTemplate); //действие "клик по кнопке добавить фото и название  в карточку "

popups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
            closePopup(popup);
        }
    });
}); //закрыть попап по клику на затемнение *рекомендация ревьюера



