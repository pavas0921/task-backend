import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const { title, description, userId } = req.body;
  try {
    const item = await Task.create({
      title,
      description,
      userId,
    });
    if (item) {
      res.status(201).json({
        message: "Tarea registrada con éxito",
        httpStatus: 201,
        status: "success",
        content: item,
      });
    } else {
      res.status(500).json({
        message:
          "Ocurrió un error al registrar la tarea, por favor intente de nuevo",
        status: "success",
        content: item,
      });
    }
  } catch (error) {
    console.log("ER: ", error);
    res.json({
      httpStatus: 500,
      status: "error",
      error: error,
    });
  }
};

// Obtener todas las tareas
export const getAllTask = async (req, res) => {
  try {
    const item = await Task.find().exec();
    if (item.length > 0) {
      return res.status(200).json({
        httpStatus: 200,
        content: item,
        status: "success",
      });
    } else {
      return res.status(204).json({
        httpStatus: 204,
        content: item,
        status: "success",
      });
    }
  } catch (error) {
    res.status(500).json({
      httpStatus: 500,
      status: "error",
      error: error,
    });
  }
};

export const getTaskById = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const item = await Task.find({ _id: taskId });
    if (item.length > 0) {
      return res.status(200).json({
        httpStatus: 200,
        content: item,
        status: "success",
      });
    } else {
      return res.status(204).json({
        httpStatus: 204,
        content: item,
        status: "success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error" });
  }
};

export const getTaskByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const item = await Task.find({ userId: userId });
    if (item.length > 0) {
      return res.status(200).json({
        httpStatus: 200,
        content: item,
        status: "success",
      });
    } else {
      return res.status(204).json({
        httpStatus: 204,
        content: item,
        status: "success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error" });
  }
};

// Actualizar tarea por su ID
export const updateTaskById = async (req, res) => {
  const _id = req.params.taskId;

  // Extraer los campos que se pueden actualizar
  const { title, description, completed, updatedAt } = req.body;

  try {
    // Buscar el producto por su ID y actualizar los campos proporcionados
    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      {
        title,
        description,
        completed,
        updatedAt,
      },
      { new: true } // Devuelve el documento actualizado
    );

    // Verificar si el producto existe y fue actualizado
    if (updatedTask) {
      return res.json({
        httpStatus: 200,
        message: "Tarea actualizada con éxito",
        status: "success",
        updated: updatedTask,
      });
    } else {
      // Si la tarea no existe
      return res.status(202).json({
        httpStatus: 202,
        message: "Tarea no encontrada",
        status: "error",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTaskById = async (req, res) => {
  const _id = req.params.taskId;

  try {
    // Buscar el producto por su ID y actualizar los campos proporcionados
    const deletedTask = await Task.findByIdAndDelete(_id);

    if (deletedTask) {
      return res.json({
        httpStatus: 200,
        message: "Tarea eliminada con éxito",
        status: "success",
        deleted: deletedTask,
      });
    } else {
      // Si la tarea no existe
      return res.status(202).json({
        httpStatus: 202,
        message: "Tarea no encontrada",
        status: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      httpStatus: 500,
      message: "Error interno del servidor",
      status: "error",
      error: error.message,
    });
  }
};
