import * as yup from "yup"

const validations = yup.object().shape({
    phamarcyName:yup.string()
    .required("eczane adı zorunlu alan"),

    adress:yup.string()
    .required("adres zorunlu alan"),

    phoneNumber:yup.string()
    .required("Telefon numarası zorunlu alan")
})

export default validations