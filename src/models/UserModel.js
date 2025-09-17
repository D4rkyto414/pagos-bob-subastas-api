/**
 * Clase que representa un modelo de usuario.
 * @class
 */
class UserModel {
  /**
   * Crea una instancia de UserModel.
   * @param {object} data - Los datos para inicializar el modelo.
   * @param {string} data.id - El identificador único del usuario.
   * @param {string} data.name - El nombre del usuario.
   * @param {string} data.email - La dirección de correo electrónico del usuario.
   * @param {string} data.role - El rol del usuario (e.g., 'user', 'admin').
   */
  constructor({ id, name, email, role }) {
    if (!id || !name || !email || !role) {
      throw new Error('El ID, nombre, email y rol son obligatorios para UserModel.');
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}

export default UserModel;
