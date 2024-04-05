

//! -----------------------------------------------------------------------------------
//?-----------------> INICIALIZACION EN LAZY DEL ESTADO ------------------------------
//! -----------------------------------------------------------------------------------

//creamos los estados para depues poder modificarlos.

// Una vez creados, se asiganará el valor de currentUser por que si no seri un "sring"

// hacemos esto porque si no cada vez que recargariamos la pagina volveria al valor inicial
// problemas: la recarga del usuario y el borrado de ese posible estado porque lso estados son volatiles

//objeto
const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

/*------------------> este estado se encarga de incluir los datos de user con sus favoritos y es
practicamente igual que lo que se settea en el local storage para guardar sus favoritos
 */


//objeto
let userData = localStorage.getItem(currentUser.name)
  ? JSON.parse(localStorage.getItem(currentUser.name))
  : {
      name: "",
      token: false,
      fav: [],
    };

// ------------------> DATA GLOBAL DE LA APLICACION--------
/**En este caso es donde se van a guardar los datos que vengan de las API y que vamos a utilizarlos en
 * los diferentes apartados de la app: por ejemplo si tuvieramos dos paginas una de pokemon y otra de ricky
 * morty en este caso en cada clave guardariamos el valor de los datos de cada página.
 */

//objeto
const dataGlobal = {
  pokemon: [],
  ricky: [],
};

//! --------------------------------------------------------------------------------------------
//? ----------------------------- FUNCIONES GET Y FUNCIONES SET---------------------------------
//! --------------------------------------------------------------------------------------------

/** Los estados como dijimos antes se utilizan mediante las funciones set y get:
 * - Las funciones GET: nos darian el valor actual que tiene el estado
 * . Las funciones SET: setean el valor que recibe como parametro en el estado que modifica
 */

//! -------------------- SET Y GET  currentUser ----------------

//funcion
export const setUser = (username) => {
  currentUser.name = username;
};

//funcion
export const getUser = () => {
  return currentUser;
};

//! -------------------- SET y GET dataGlobal----------------

//funcion
export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

export const getData = (page) => {
  switch (page) {
    case "Pokemon":
      return dataGlobal.pokemon;
    default:
      break;
  }
  return dataGlobal;
};

//! -------------------SET y GET  dde userData  --------------------------


//mas especial=> setUderData esta gestionando el seteo dentro del localStorage para
// que en caso de qu eel usuario recarge la pagina, tener la inicializacion el lazy
export const setUserData = (data) => {
  console.log(".....metiendo datos en el contexto");
  userData.fav = data?.fav;
  userData.name = data?.name;
  userData.token = data?.token;
  /**En este caso no solo setea sino que tambien lo modifica en el localStorage
   * Como se ve lo mete con una forma especial para que en caso de corresponder
   * el nombre que introduce en el login con el que hay en el localStorage se pueda
   * recuperar los datos de los favoritos.
   */
  const stringUser = JSON.stringify(userData);
  localStorage.removeItem(`${currentUser.name}`);
  console.log(userData.name);
  localStorage.setItem(`${currentUser.name}`, stringUser);
};

export const getUserData = () => {
  return userData;
};
