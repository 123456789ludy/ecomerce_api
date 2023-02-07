/*const usersService = require("./users.service");

exports.getUser = async (req, res) => {
  try {
    const user = await usersService.getUser(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await usersService.createUser(req.body);
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await usersService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await usersService.deleteUser(req.params.id);
    res.status(200).json({ success: true, data: deletedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
*/ 