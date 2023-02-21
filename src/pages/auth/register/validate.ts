import * as yup from "yup"

const validations = yup.object().shape({
    mail:yup.string()
    .email("geçerli bir mail giriniz")
    .required("Email zorunlu alan"),

    fullName:yup.string()
    .required("İsim zorunlu alan"),

    password:yup.string()
    .required("Şifre zorunlu alan"),

    phoneNumber:yup.string()
    .required("Telefon numarası zorunlu alan")
})

export default validations