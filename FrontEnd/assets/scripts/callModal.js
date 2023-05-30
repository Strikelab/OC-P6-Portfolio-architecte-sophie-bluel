/**
 *
 * This function call a modal box
 * it takes the Title of the modal as parameter.
 *@param {string} modalTitle
 *
 */

function callModal(modalTitleContent = "you must enter a title") {
  let editionMenu = document.querySelector("#edition-menu");

  let modal = document.createElement("div");
  modal.id = "myModal";
  modal.classList.add("modal");

  //Modal content
  let modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");
  //buttons
  // (x)
  let modalCloseButton1 = document.createElement("span");
  modalCloseButton1.classList.add("modal__close-btn");
  modalCloseButton1.innerHTML = "&times;";
  let modalCloseButton2 = document.createElement("span");
  modalCloseButton2.classList.add("modal__close-btn");
  modalCloseButton2.innerHTML = "&times;";
  // (<-)
  let modalPreviousButton = document.createElement("span");
  modalPreviousButton.classList.add("modal__previous-btn");
  // modalPreviousButton.innerHTML = "←";
  //titres
  let modalTitle1 = document.createElement("h2");
  modalTitle1.classList.add("modal__content__title1");
  modalTitle1.innerText = "Galerie photo";
  let modalTitle2 = document.createElement("h2");
  modalTitle2.classList.add("modal__content__title2");
  modalTitle2.innerText = "Ajout photo";
  //pages
  let modalContentPage1 = document.createElement("div");
  modalContentPage1.classList.add("modal__content__page-1");
  let modalContentPage2 = document.createElement("div");
  modalContentPage2.classList.add("modal__content__page-2");
  modal.innerHTML = "";
  let modalContentContainer1 = document.createElement("div");
  modalContentContainer1.classList.add("modal__content__container1");
  let modalContentContainer2 = document.createElement("div");
  modalContentContainer2.classList.add("modal__content__container2");
  //create fragment and add modal to DOM
  //page1
  const fragment = document.createDocumentFragment();
  fragment.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(modalContentPage1);
  modalContentPage1.appendChild(modalCloseButton1);
  modalContentPage1.appendChild(modalTitle1);
  modalContentPage1.appendChild(modalContentContainer1);
  modalContent.appendChild(modalContentPage2);
  modalContentPage2.appendChild(modalPreviousButton);
  modalContentPage2.appendChild(modalCloseButton2);
  modalContentPage2.appendChild(modalTitle2);
  modalContentPage2.appendChild(modalContentContainer2);
  editionMenu.appendChild(fragment);
  modalContentContainer2.innerHTML += ` <div class="modal__content__container2__send-pic">
                                          <img src="./assets/icons/send-pic.png">
                                          <button id="add-pic-btn" type="submit">+ Ajouter photo</button>
                                          <p>jpg, png: 4mo max</p>
                                        </div> 
                                        <form>
                                          <label for "titre">Titre</label>
                                          <input type="text" id="titre" name="titre">
                                          <label for "catégorie" id="catégorie" name="catégorie">Catégorie</label>
                                          <div class="select-div">
                                            <select id="catégorie" name="catégorie">
                                              <option value = "1"> Nom catégorie1 </option>
                                              <option value = "2"> Nom catégorie2 </option>
                                              <option value = "3"> Nom catégorie3 </option>
                                            <select>
                                          </div>
                                          <div class="borderline">
                                            <button type="submit" >Valider</button>
                                          </div>
                                        </form>
                                        
                                  
  `;

  // When the user clicks on <span> (x), remove the modal
  // When the user clicks anywhere outside of the modal__content, remove the modal
  window.addEventListener("click", (e) => {
    if (
      e.target == modal ||
      e.target == modalCloseButton1 ||
      e.target == modalCloseButton2
    ) {
      modal.remove();
    }
    if (e.target == modalPreviousButton) {
      modalContentPage1.style.transform = "translateX(0)";
      modalContentPage2.style.transform = "translateX(101%)";
      modalContentPage1.style.position = "relative";
      modalContentPage2.style.position = "absolute";
    }
  });
}

export default callModal;