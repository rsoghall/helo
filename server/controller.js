const bcrypt = require('bcryptjs')


module.exports = {

  register: async (req, res) => {
    try {
      const {
        user_email,
        password
      } = req.body;
      console.log(req.body);
      const db = req.app.get("db");
      const [foundUser] = await db.check_email([user_email]);
      console.log("found user", foundUser);
      if (foundUser) {
        console.log("after userfound");
        return res.status(403).send({ message: "Email already exists" });
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const [newUser] = await db.register_user([
        user_email,
        hash
      ]);
      req.session.user = {
        user_id: newUser.user_id,
        user_email: newUser.user_email
      };
      res.status(200).send({
        message: "logged in",
        userData: req.session.user,
        loggedIn: true
      });
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },
  
  
    login: async (req, res) => {
        try {
          const { email: user_email, password } = req.body;
          console.log(user_email, password);
          let db = req.app.get("db");
          const [foundUser] = await db.login_user([user_email]);
          console.log(foundUser);
          if (!foundUser) {
            return res.status(404).send("User not found");
          }
          const isAuth = bcrypt.compareSync(password, foundUser.user_hash);
          if (isAuth) {
            req.session.user_id = foundUser.user_id;
            res
              .status(200)
              .send({ loggedIn: true });
          } else {
            res.status(401).send("incorrect password");
          }
        } catch (error) {
          res.status(500).send(error);
        }
      },    
    
}