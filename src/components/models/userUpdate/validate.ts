import * as yup from "yup"

const validations = yup.object().shape({
    fullName:yup.string()
    .required("Kullanıcı adı zorunlu alan"),

    phoneNumber:yup.string()
    .required("telefon numarası zorunlu alan"),

    identityId:yup.string()
    .required("kimlik numarası zorunlu alan"),

    mail:yup.string()
    .email("mail doğru formatta olmalı")
    .required("mail adresi zorunlu alan")
})

export default validations