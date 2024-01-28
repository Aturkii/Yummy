


export class FormValidator {
  constructor() {
    this.nameInputTouched = false;
    this.emailInputTouched = false;
    this.phoneInputTouched = false;
    this.ageInputTouched = false;
    this.passwordInputTouched = false;
    this.repasswordInputTouched = false;

    this.nameInput = document.getElementById("nameInput");
    this.emailInput = document.getElementById("emailInput");
    this.phoneInput = document.getElementById("phoneInput");
    this.ageInput = document.getElementById("ageInput");
    this.passwordInput = document.getElementById("passwordInput");
    this.repasswordInput = document.getElementById("repasswordInput");

    this.nameAlert = document.getElementById("nameAlert");
    this.emailAlert = document.getElementById("emailAlert");
    this.phoneAlert = document.getElementById("phoneAlert");
    this.ageAlert = document.getElementById("ageAlert");
    this.passwordAlert = document.getElementById("passwordAlert");
    this.repasswordAlert = document.getElementById("repasswordAlert");

    this.submitBtn = document.getElementById("submitBtn");

    this.attachEvents();
  }

  attachEvents() {
    const inputIds = [
      "nameInput", "emailInput", "phoneInput",
      "ageInput", "passwordInput", "repasswordInput"
    ];

    inputIds.forEach(inputId => {
      const inputElement = document.getElementById(inputId);

      inputElement.addEventListener("focus", () => {
        this[inputId + "Touched"] = true;
      });

      inputElement.addEventListener("keyup", () => this.inputsValidation());
    });
  }

  inputsValidation() {
    this.validateInput("nameInput", "nameAlert", this.nameValidation);
    this.validateInput("emailInput", "emailAlert", this.emailValidation);
    this.validateInput("phoneInput", "phoneAlert", this.phoneValidation);
    this.validateInput("ageInput", "ageAlert", this.ageValidation);
    this.validateInput("passwordInput", "passwordAlert", this.passwordValidation);
    this.validateInput("repasswordInput", "repasswordAlert", this.repasswordValidation);

    this.updateSubmitButton();
  }

  validateInput(inputId, alertId, validationFunction) {
    if (this[inputId + "Touched"]) {
      const isValid = validationFunction.call(this);
      this.toggleAlert(alertId, !isValid);
    }
  }

  toggleAlert(alertId, show) {
    const alertElement = document.getElementById(alertId);
    alertElement.classList.toggle("d-none", !show);
  }

  updateSubmitButton() {
    const isValidForm = (
      this.nameValidation() && this.emailValidation() &&
      this.phoneValidation() && this.ageValidation() &&
      this.passwordValidation() && this.repasswordValidation()
    );

    if (isValidForm) {
      this.submitBtn.removeAttribute("disabled");
    } else {
      this.submitBtn.setAttribute("disabled", true);
    }
  }

  nameValidation() {
    return (/^[a-zA-Z ]+$/.test(this.nameInput.value));
  }

  emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.emailInput.value));
  }

  phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(this.phoneInput.value));
  }

  ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(this.ageInput.value));
  }

  passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(this.passwordInput.value));
  }

  repasswordValidation() {
    return this.repasswordInput.value == this.passwordInput.value;
  }
}


