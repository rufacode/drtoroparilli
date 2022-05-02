
export async function detectLanguage(language) {


  let response;

  try {

    let result = "NO DETECTADO"

    if (language.toUpperCase() == 'ES-419') { result = "ES" }
    if (language.toUpperCase() == 'EN') { result = "EN" }
    if (language.toUpperCase() == 'EN-US') { result = "EN" }

    response = {

      status : 200,
      data : result,
      message : "Consulta Idioma "
    }

  } catch (error) {


    {
      response = {
        status: 500,
        data: 'error',
        message: 'No se logro detectar Idioma'
      }
    }

  }
  return (response)
}
