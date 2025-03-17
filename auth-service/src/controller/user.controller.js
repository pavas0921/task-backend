import User from "../models/User.js";
import bcrypt from "bcrypt";
import { validatePassword } from "../helpers/passwordUtils.js";

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    const isValidPassword = validatePassword(password);
    try {
        if (isValidPassword) {
            const hash = bcrypt.hashSync(password, 12);
            const item = await User.create({
                firstname,
                lastname,
                username,
                password: hash,
            });
            res.status(201).json({
                message: "Usuario registrado con éxito",
                httpStatus: 201,
                status: "success",
                content: item,
            });
        } else {
            res.status(400).json({
                message: "La contraseña no cumple con los requisitos de complejidad.",
                httpStatus: 400,
                status: "warning",
            });
        }
    } catch (error) {
        console.log("ER: ", error);
        res.json({
            httpStatus: 500, 
            status: "error", 
            error: error
        });
    }
};

export const login = async (req, res, next) => {
    
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({
          message: "Nombre de usuario y/o contraseña incorrectos.",
          httpStatus: 401,
          status: "info",
        });
      } else {
        const isValidUser = bcrypt.compareSync(password, user.password); // true
        
        if (isValidUser) {
            return res.status(200).json({
                message: "Login correcto",
                httpStatus: 200,
                status: "success",
                userId: user._id
              });
        } else {
          return res.status(401).json({
            message: "Nombre de usuario y/o contraseña incorrectos.",
            httpStatus: 401,
            status: "info",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        httpStatus: 401,
        status: "error",
        message: "Ha ocurrido un error, por favor intente más tarde",
    });
    }
  };