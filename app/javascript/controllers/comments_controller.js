import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(e) {
    e.preventDefault()
    e.stopPropagation()

    const formID = e.params["form"]
    const bodyID = e.params["body"]

    const form = document.getElementById(formID)
    const body = document.getElementById(bodyID)
    debugger

    form.classList.toggle("d-none")
    form.classList.toggle("mt-5")
    body.classList.toggle("d-none")

  }

  
}
