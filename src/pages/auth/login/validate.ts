import * as yup from "yup"

const validations = yup.object().shape({
    mail:yup.string()
    .email("geçerli bir mail giriniz")
    .required("Email zorunlu alan"),

    password:yup.string()
    .required("Şifre zorunlu alan"),
})

export default validations