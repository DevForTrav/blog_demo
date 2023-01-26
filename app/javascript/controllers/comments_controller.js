import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(e) {
    e.preventDefault()
    e.stopPropagation()

    const formID = e.params["form"]
    const bodyID = e.params["body"]
    const editBtnID = e.params["edit"]
    
    const form = document.getElementById(formID)
    const body = document.getElementById(bodyID)
    const editBtn = document.getElementById(editBtnID)

    form.classList.toggle("d-none")
    form.classList.toggle("mt-5")
    body.classList.toggle("d-none")
    
    this.toggleEditButton(editBtn)
  }

  toggleEditButton(editBtn) {
    if (editBtn.innerText == "Edit") {
      editBtn.innerText = "Cancel"
      this.toggleEditButtonClass(editBtn)
    } else {
      editBtn.innerText = "Edit"
      this.toggleEditButtonClass(editBtn)
    }
  } 

  toggleEditButtonClass(editBtn) {
    editBtn.classList.toggle("btn-secondary")
    editBtn.classList.toggle("btn-warning")
  }
}
