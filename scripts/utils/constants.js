//-------------------------ПОПАПЫ----------------------------
const popups = document.querySelectorAll(".popup"); //выбираем все блоки с попап
const popupEditProfile = document.querySelector(".popup_type_edit"); //выбираем второй попап для редактирования по модификатору
const popupAddCard = document.querySelector(".popup_type_add"); //выбираем второй попап для добавления фотографий по модификатору

//-------------------------КНОПКИ-----------------------------

const popupCloseButtons = document.querySelectorAll(".popup__close"); //выбираем кнопку закрытия попап
const profileEditButton = document.querySelector("#edit"); //выбираем кнопку редактирования профиля
const profileAddButton = document.querySelector("#add"); //выбираем кнопку добавления фотографии

//-------------------------КНОПКИ ДЛЯ ОТПРАВКИ ФОРМ-------------

const buttonSaveProfileInfo = document.querySelector("#save-button"); //выбираем кнопку, которая отправляет форму редактирования инфо-профиля
const buttonCreateCard = document.querySelector("#create-button"); //выбираем кнопку, которая отправляет форму с данными для добавления карточки

//-------------------------ИНПУТЫ И ДАННЫЕ ДЛЯ ИЗМЕНЕНИЙ-------

const profileTitle = document.querySelector(".profile__title"); //выбираем заголовок, который нужно поменять
const profileText = document.querySelector(".profile__text"); //выбираем параграф, который нужно поменять
const nameInput = document.querySelector("#name"); //выбираем  строку ввода имени, которая будет менять заголовок
const aboutInput = document.querySelector("#about"); //выбираем  строку ввода описания, которая будет менять параграф

const cardNameInput = document.querySelector("#input-title"); //выбираем строку ввода названия
const cardLinkInput = document.querySelector("#input-link"); //выбираем строку ввода ссылки

export {popups, popupAddCard, popupEditProfile, popupCloseButtons, profileAddButton,
        profileEditButton, profileText, profileTitle, buttonCreateCard, buttonSaveProfileInfo, nameInput,
        aboutInput, cardLinkInput, cardNameInput}